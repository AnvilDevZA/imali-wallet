use sqlx::{
    sqlite::{SqliteConnectOptions, SqlitePoolOptions},
    Pool, Sqlite,
};
use std::path::PathBuf;
use std::str::FromStr;
use tauri::{AppHandle, Manager, Wry};

pub type DbPool = Pool<Sqlite>;

pub fn get_db_path(app_handle: &AppHandle<Wry>) -> Result<PathBuf, String> {
    let app_data_dir = app_handle
        .path()
        .app_data_dir()
        .map_err(|e| format!("Failed to get app data dir: {}", e))?;
    let db_dir = app_data_dir.join("database");
    std::fs::create_dir_all(&db_dir)
        .map_err(|e| format!("Failed to create database director: {}", e))?;
    Ok(db_dir.join("wallet.db"))
}

pub async fn init_db(app_handle: &AppHandle<Wry>) -> Result<DbPool, String> {
    let db_path = get_db_path(app_handle)?;
    let db_url = format!("sqlite://{}", db_path.to_string_lossy());

    let connection_options = SqliteConnectOptions::from_str(&db_url)
        .map_err(|e| format!("Invalid DB URL: {}", e))?
        .create_if_missing(true);

    let pool = SqlitePoolOption::new()
        .max_connections(5)
        .connect_with(connection_options)
        .await
        .map_err(|e| format!("Failed to connect to SQLite: {}", e))?;

    sqlx::migrate!("../migrations/local")
        .run(&pool)
        .await
        .map_err(|e| format!("Failed to run local migrations: {}", e))?;
}
