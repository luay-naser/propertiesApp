import axios from "axios";

const ApiLink = "https://lola-uncompressible-kailee.ngrok-free.dev/users_api/";

export function loginAxios(data) {
  return axios.post(
    ApiLink + "login.php" ,
      data ,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  
}
export function registerAxios(data) {
  return axios.post(
    ApiLink+ "register.php" ,
      data ,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
  );
}
