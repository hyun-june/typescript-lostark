import { useQuery } from "@tanstack/react-query";
import { getRoster } from "../apis/rosterApi";

// 나중에 nickname을 받아와야함
export const useGetRoster = (nickname: string) => {
  return useQuery({
    queryKey: ["roster", nickname],
    queryFn: () => {
      return getRoster(nickname);
    },
    enabled: !!nickname,
  });
};
