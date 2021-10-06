import axios from "axios";
const $http = axios.create({
  baseURL: "/coursetable",
  // 设定的请求超时时间
  timeout: "",
  // 当前请求的默认请求头
  // headers:{}
});

// 请求拦截
$http.interceptors.request.use((config) => {
  // console.log("Axios-http中的config", config);
  return config;
});

// 响应拦截
$http.interceptors.response.use((response) => {
  let { data } = response;
  console.log("Axios-http中的respone", response);
  console.log("Axios-http中的response.data", data);
  if (data.success || data.code === 200) {
    return data;
  } else {
    Promise.reject(data)
    // return data;
  }
});

export default $http;
