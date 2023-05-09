export interface ILogin {
  email: string,
  password: string
}

export interface IMessage {
  message: string
}

export interface IRole {
  role: string | undefined
}

export interface ILoginReturn {
  status: number,
  message: string | IMessage | IRole
}
