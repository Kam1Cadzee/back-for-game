import { verify } from 'jsonwebtoken';
import { Request } from 'express';
import config from '../config';
import { Role } from '../type-graphql/enums';

interface Token {
  userId: number;
  role: Role;
}
const failObj: Token = {
  role: null,
  userId: null,
};

export function getContentFromToken(req: Request) {
  const Authorization = req.get('Authorization');

  if (Authorization) {
    const token = Authorization.replace('Bearer ', '');
    try {
      const verifiedToken = verify(token, config.app_secret) as Token;
      if (verifiedToken) {
        return {
          userId: +verifiedToken.userId,
          role: verifiedToken.role,
        };
      }
      return failObj;
    } catch (e) {
      return failObj;
    }
  }
  return failObj;
}
