import api from "@/api";

export const getRegencies = async () => {
  try {
    const { data } = await api.get("regencies").json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
};
