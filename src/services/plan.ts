import api from "./api"


export const createPlan = async(data:any)=>{
    const res = await api.post("/plans", data);
    return res.data;
};

export const getMyPlans = async()=>{
    const res = await api.get("/plans/me");
    return res.data;
};

export const getAllPlans = async()=>{
    const res = await api.get("/plans");
    return res.data;
};

export const approvePlan = async(id:string)=>{
    const res = await api.patch(`/plans/${id}/approve`);
    return res.data;
};

export const rejectPlan = async(id:string)=>{
    const res = await api.patch(`/plans/${id}/reject`);
    return res.data;
};

