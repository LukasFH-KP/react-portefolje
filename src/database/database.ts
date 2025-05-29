import mysql, { type ConnectionOptions } from "mysql2/promise";


const Access: ConnectionOptions = {
  host: "localhost",
  user: "root",
  password: "root",
  port: 3306,
  database: "projects"
}

export async function getProjects() {
    console.log("WOWOOWOW")

  const database = await mysql.createConnection(Access);
  const results: any = []//await database.query("SELECT *");

  database.end();

  return results;
}

console.log("ONONONON")