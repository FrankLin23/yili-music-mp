import { post } from "./request"

type LoginRequest = {
    username:string,
    password:string
}

export const login = (loginrequest:LoginRequest) => {
    return post('/login', loginrequest);
}