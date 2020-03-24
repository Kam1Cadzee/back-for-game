import express from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  const user = await prisma.user.create({
    data: {
      email: "sdfds@sdf.com",
      name: "1231",
      password: "12312"
    }
  });

  console.log(user);
};

main();

const app = express();

app.use("/", (req, res) => {
  res.send("ok");
});

app.listen(3000, () => {
  console.log("Start server");
});
