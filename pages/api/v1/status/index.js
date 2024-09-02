import database from "infra/database.js";

async function status(req, res) {
  const updatedAt = new Date().toISOString(); 
  const databaseVersionResult =  await database.query("SHOW server_version;");
  const databaseVersion = databaseVersionResult.rows[0].server_version;
  const maxConnectionsResult =  await database.query("SHOW max_connections;");
  const maxConnections = maxConnectionsResult.rows[0].max_connections;
  const openedConnectionsResult =  await database.query(`SELECT count(*)::int as opened_connections FROM pg_stat_activity where datname = current_database();`);
  const openedConnections = openedConnectionsResult.rows[0].opened_connections;
  res.status(200).json(
    {
      updated_at: updatedAt,
      dependencies: {
        database: {
          status: "healthy",
          max_connections: parseInt(maxConnections),
          opened_connections: openedConnections,
          version: databaseVersion,
        }
      }
    }
  );
}

export default status;