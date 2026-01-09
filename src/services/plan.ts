import api from "./api"


export const createPlan = async(data:any)=>{
    const res = await api.post("/plans", data);
    return res.data;
};

export const getMyPlans = async()=>{
    const res = await api.get("/plans/mine");
    return res.data;
};

export const getAllPlans = async () => {
  const res = await api.get("/admin/plans");
  return res.data;
};

export const approvePlan = async (id: string) => {
  const res = await api.put(`/admin/plans/${id}`, {
    status: "approved",
  });
  return res.data;
};

export const rejectPlan = async (id: string) => {
  const res = await api.put(`/admin/plans/${id}`, {
    status: "rejected",
  });
  return res.data;
};


