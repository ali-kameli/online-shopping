import config from "../Components/config.json";
import http from "./http";

export const signin = (user) => {
  return http.post(`${config.reqres}/api/login`, JSON.stringify(user));
};
export const signup = (user) => {
  return http.post(`${config.reqres}/api/users`, JSON.stringify(user));
};
