import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

/* 요청 인터셉터 */
api.interceptors.request.use(
  (config) => {
    // 예: 토큰 자동 주입
    // const token = localStorage.getItem('token')
    // if (token) config.headers.Authorization = `Bearer ${token}`

    return config;
  },
  (error) => Promise.reject(error),
);

/* 응답 인터셉터 */
api.interceptors.response.use(
  (response) => response.data, // ⭐ data만 반환
  (error) => {
    // 공통 에러 처리
    console.error("API Error:", error);
    return Promise.reject(error);
  },
);

export default api;
