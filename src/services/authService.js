// export type AuthData = {
//   token: string,
//   email: string,
//   name: string,

import { ClientHttp } from "../constants/ClientHttp";

// }
const signIn = (email, _password) => {
  // this is a mock of an API call, in a real app
  // will be need connect with some real API,
  // send email and password, and if credential is corret
  //the API will resolve with some token and another datas as the below
  return new Promise((resolve) => {
    ClientHttp.post("/api/login", { email: email, password: _password })
      .then((res) => {
        resolve(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
    // setTimeout(() => {
    //   resolve({
    //     token: JWTTokenMock,
    //     email: email,
    //     name: "Lucas Garcez",
    //   })
    // }, 1000)
  });
};

export const authService = {
  signIn,
};

const JWTTokenMock =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ikx1Y2FzIEdhcmNleiIsImlhdCI6MTUxNjIzOTAyMn0.oK5FZPULfF-nfZmiumDGiufxf10Fe2KiGe9G5Njoa64";
