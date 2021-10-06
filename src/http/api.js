import $http from "./index";

export const register = (data) => $http.post("/register", data);
export const login = (data) => $http.post("/login", data);
