import { registerAs } from '@nestjs/config';

export default registerAs('mysql', () => ({
  port: process.env.MYSQL_PORT,
  host: process.env.MYSQL_HOST,
  username: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
}));
