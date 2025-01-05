import ky from "ky";

const { VITE_BASE_URL: BASE_URL } = import.meta.env;

const api = ky.create({
  prefixUrl: BASE_URL,
});

export default api;
