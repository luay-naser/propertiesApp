import axios from "axios";

const ApiLink = "https://uninfectious-emilia-unmarshaled.ngrok-free.dev/Project/users_api/";

export function loginAxios(data) {
  return axios.post(
    ApiLink + "login.php",
    data,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}

export function registerAxios(data) {
  return axios.post(
    ApiLink + "register.php",
    data,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}

export function singOutAxios(data) {
  return axios.post(
    ApiLink + "logout.php",
    data,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
export function deleteAxios(data) {
  return axios.post(
    ApiLink + "delete_user.php",
    data,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
