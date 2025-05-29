// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

mod database;
mod commands;

use database::{init_db,DbPool};
use commands::{get_transactions, insert_traction};

#[tokio::main]

async fn main() {

    imali_wallet_lib::run()
}
