import { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken"
import jwksClient from "jwks-rsa"

const client = jwksClient({
  jwksUri: `https://cognito-idp.${process.env.AWS_REGION}.amazonaws.com/${process.env.COGNITO_USER_POOL_ID}/.well-known/jwks.json`,
})

function getKey(header: any, callback: any) {
  client.getSigningKey(header.kid, (err, key) => {
    callback(null, key?.getPublicKey())
  })
}

export const authenticate = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization
  if (!authHeader) return res.sendStatus(401)

  const token = authHeader.replace("Bearer ", "")

  jwt.verify(token, getKey, {}, (err) => {
    if (err) return res.sendStatus(401)
    next()
  })
}
