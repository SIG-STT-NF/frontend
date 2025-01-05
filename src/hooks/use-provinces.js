import { useQuery } from "@tanstack/react-query";
import { getProvinces } from "@/services/provinces";

export const useProvinces = () => {
  return useQuery({
    queryKey: ["provinces"],
    queryFn: async () => await getProvinces(),
  });
};
