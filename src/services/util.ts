import { api } from "./api";

export async function LoginRequest(email: string, password: string) {
  try {
    const request = await api.get("https://my-json-server.typicode.com/cidadealta/exercise/usuarios")
    const userData = request.data;

    console.log(userData);


    // return request.data;
  } catch (err) {
    return false;
  }
}
