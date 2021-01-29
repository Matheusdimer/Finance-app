const api = require("../config/apiConfig.json");

export default async function register(email, name, password) {
  let ret;
  const url = api.server + "/auth/register";
  
  const response = await fetch(url, {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json",
    }),
    body: JSON.stringify({
      name,
      email,
      password
    })
  });

  const json = await response.json();

  if (json.token) { 
    ret = {
      loggedIn: true,
      fieldErr: 'none',
      token: json.token,
      user: json.user
    }

    localStorage.setItem("Session", JSON.stringify(ret));

  } else if (json.field) {
    ret = {
      loggedIn: false,
      fieldErr: json.field,
      token: '',
      user: {}
    }
  }

  return ret;
}
