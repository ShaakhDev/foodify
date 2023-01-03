const liveHost = "https://foodify-backend-3wumo.ondigitalocean.app/api";
const devHost = "http://192.168.199.211:8080/api";

export const isDevelopment = process.env.NODE_ENV === "development";

export const host = isDevelopment ? devHost : liveHost;
