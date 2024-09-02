import { Client } from 'pg';

async function query(queryObject) {
  const client = new Client({
    user: process.env.POSTGRES_USER,
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
  });
  
  try {
    await client.connect();
    const result = await client.query(queryObject);
    return result;    
  }
  catch (e) {
    console.error(e);
    throw e;
  }
  finally {
    if (client) {
      await client.end();
    }
  }  
}

export default {
  query: query,
};