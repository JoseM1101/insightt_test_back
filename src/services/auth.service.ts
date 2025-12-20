import {
  SignUpCommand,
  ConfirmSignUpCommand,
  InitiateAuthCommand,
  GlobalSignOutCommand,
} from "@aws-sdk/client-cognito-identity-provider"
import { cognitoClient } from "../config/cognito"
import { createUser } from "./user.service"

export const signup = async (email: string, password: string) => {
  const result = await cognitoClient.send(
    new SignUpCommand({
      ClientId: process.env.COGNITO_APP_CLIENT_ID!,
      Username: email,
      Password: password,
      UserAttributes: [{ Name: "email", Value: email }],
    })
  )
  await createUser({ email, cognitoId: result.UserSub! })

  return result
}

export const confirm = async (email: string, code: string) => {
  await cognitoClient.send(
    new ConfirmSignUpCommand({
      ClientId: process.env.COGNITO_APP_CLIENT_ID!,
      Username: email,
      ConfirmationCode: code,
    })
  )
}

export const login = async (email: string, password: string) => {
  const response = await cognitoClient.send(
    new InitiateAuthCommand({
      AuthFlow: "USER_PASSWORD_AUTH",
      ClientId: process.env.COGNITO_APP_CLIENT_ID!,
      AuthParameters: {
        USERNAME: email,
        PASSWORD: password,
      },
    })
  )

  return response.AuthenticationResult
}

export const logout = async (accessToken: string) => {
  await cognitoClient.send(
    new GlobalSignOutCommand({ AccessToken: accessToken })
  )
}
