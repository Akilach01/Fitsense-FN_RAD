import api from "./api";


export const getAllUsers = async()=>{
  const res = await api.get("/users");
  return res.data;
};

export const deleteUser = async (id:string)=>{
    const res = await api.delete(`/admin/users/${id}`);
    return res.data;
};
