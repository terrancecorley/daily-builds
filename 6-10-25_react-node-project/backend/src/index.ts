import express, { Application, Request, Response } from "express";
import cors from "cors";

const app: Application = express();
const PORT: number = 3000;
app.use(cors());

app.get("/", (req: Request, res: Response) => {
    res.send("Hello from Express with TypeScript!");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
