import { useQuery } from "@tanstack/react-query";
import { getRegencies } from "@/services/regencies";

export const useRegencies = () => {
  return useQuery({
    queryKey: ["regencies"],
    queryFn: async () => await getRegencies(),
  });
};
