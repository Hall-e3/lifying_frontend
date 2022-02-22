import axios from "axios";
const api = axios.create({
  baseURL: "http://localhost:5000",
});

export const registerPost = (registerFormData) =>
  api.post("/auth/register", registerFormData);

export const loginPost = (loginFormData) =>
  api.post("/auth/login", loginFormData);

export const confirmationEmailCode = (confirmCode) =>
  api.post(`/auth/confirm/${confirmCode}`);

export const fetchPosts = () => api.get("/posts");
export const createPost = (newPost) => api.post("/posts", newPost);
export const likePost = (id) => api.patch(`/posts/${id}/likePost`);
export const updatePost = (id, updatedPost) =>
  api.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => api.delete(`/posts/${id}`);
