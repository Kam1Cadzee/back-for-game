import { verify } from 'jsonwebtoken'
import { Context } from '../context'
import config from '../config'

interface Token {
  userId: string
}

export function getUserId(context: Context) {
  const Authorization = context.req.get('Authorization')
  if (Authorization) {
    const token = Authorization.replace('Bearer ', '')
    const verifiedToken = verify(token, config.app_secret) as Token
    return verifiedToken && verifiedToken.userId
  }
}
