import express, { Express, Request, Response } from "express";

import Post from './routes/post.route';

const app: Express = express();
const port = process.env.PORT || 4000;

app.use("/api/v1/", Post);

app.get('/', (_: Request, res: Response) => {
  res.json({"message": "Hello there"});
});

app.listen(port, () => {
  console.log(`🚀 server running on: 🌐http://localhost:${port}`)
})
