import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join((process.cwd(), ".env")) });

export default {
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
  default_pass: process.env.DEFAULT_PASS,
  payment_secret: process.env.PAYMENT_SECRET_KEY,
};
