import { verify } from "jsonwebtoken";
import { Request } from "express";
import config from "../config";

interface Token {
  userId: string;
}

export function getUserId(req: Request) {
  const Authorization = req.get("Authorization");
  if (Authorization) {
    const token = Authorization.replace("Bearer ", "");
    try {
      const verifiedToken = verify(token, config.app_secret) as Token;
      return verifiedToken && verifiedToken.userId;
    } catch (e) {
      return null;
    }
  }
  return null;
}
