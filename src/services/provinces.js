import api from "@/api";

export const getProvinces = async () => {
  try {
    const { data } = await api.get("provinces").json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
};
