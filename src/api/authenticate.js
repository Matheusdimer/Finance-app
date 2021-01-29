const api = require("../config/apiConfig.json");

export default async function authenticate(email, password) {
  const url = api.server + "/auth/authenticate";
  let ret = {};

  const res = await fetch(url, {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json",
    }),
    body: JSON.stringify({
      email,
      password,
    }),
  });

  const json = await res.json();

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
