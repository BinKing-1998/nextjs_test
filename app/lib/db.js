// db.js
import { Pool, Client } from "pg";



// 使用 Pool 对象创建连接（适用于多连接场景）
const pool = new Pool({
    user: process.env.POSTGRES_USER,  // PostgreSQL 用户名
    password: process.env.POSTGRES_PASSWORD, // PostgreSQL 密码
    host: process.env.POSTGRES_HOST, // 主机地址
    database: process.env.POSTGRES_DATABASE, // 数据库名称
    port: process.env.POSTGRES_PORT, // PostgreSQL 默认端口
  })
  
  // 或者使用 Client 对象创建连接（适用于单一连接场景）
  const client = new Client({
    user: process.env.POSTGRES_USER,  // PostgreSQL 用户名
    password: process.env.POSTGRES_PASSWORD, // PostgreSQL 密码
    host: process.env.POSTGRES_HOST, // 主机地址
    database: process.env.POSTGRES_DATABASE, // 数据库名称
    port: process.env.POSTGRES_PORT, // PostgreSQL 默认端口
  })