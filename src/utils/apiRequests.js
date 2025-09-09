// utils/apiRequest.js
import api from "../services/api";

export const apiRequest = async ({ url, method = 'GET', body, headers = {} }) => {
  const config = { method, url, headers, data: body };
  const response = await api(config);
  return response.data;
};
