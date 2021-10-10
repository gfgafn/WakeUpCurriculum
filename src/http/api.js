import $http from "./index";

export const register = (data) => $http.post("/register", data);
export const login = (data) => $http.post("/login", data);
export const getCoursetable = (data) => $http.post("/getCoursetable", data)
export const deleteCourse = (data) => $http.post("/deleteCourse", data);
