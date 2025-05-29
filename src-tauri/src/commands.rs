use sqlx::SqlitePool;

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct LocalTransaction {
    pub id: i64,
    pub tx_hash: String,
    pub amount: String,
    pub asset: String,
    pub from_address: String,
    pub to_address: String,
    pub timestamp: i64,
    pub status: String,
}

#[tauri::command]
pub async fn get_transactions(
    pool: tauri::State<'_, SqlitePool>,
) -> Result<Vec<LocalTransaction>, String> {
    sqlx::query_as!(LocalTransaction, "SELECT id, tx_hash, amount, asset, from_address, to_address, timestamp, status FROM transactions ORDER BY timestamp DESC")
        .fetch_all(&**pool)
        .await
        .map_err(|e| format!("Failed to fetch trasactions: {}", e))
}

#[tauri::command]
pub async fn insert_transaction(
    pool: tauri::State<'_, SqlitePool>,
    tx_hash: String,
    amount: String,
    asset: String,
    from_address: String,
    to_address: String,
    timestamp: i64,
    status: String,
) -> Result<i64, String> {
    sqlx::query!(
        "INSERT INTO transactions (tx_hash, amount, asset, from_address, to_address, timestamp, status) VALUES (?, ?, ?, ?, ?, ?, ?)",
            tx_hash,
            amount,
            asset,
            from_address,
            to_address,
            timestamp,
            status
    )
    .execute(&**pool)
    .await
    .map(|r| r.last_insert_rowid())
    .map_err(|e| format!("Failed to insert transaction: {}", e))
}
