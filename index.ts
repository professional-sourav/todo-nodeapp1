import express, { Express } from 'express'
import dotenv from "dotenv";
import cors from "cors";
import { router } from './routes/route';

dotenv.config();

const app: Express = express();

app.use(cors())
app.use(express.json())

app.use('/todos', router)

app.listen(process.env.PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${process.env.PORT}`);
})
