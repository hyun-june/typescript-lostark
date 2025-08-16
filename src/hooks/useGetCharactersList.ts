import { useQueries } from "@tanstack/react-query";
import { getCharacterProfile } from "../apis/charactersApi";

export const useGetCharactersList = (nicknames: string[]) => {
  const queries = useQueries({
    queries: nicknames.map((name, index) => ({
      queryKey: ["character", name],
      queryFn: () => getCharacterProfile(name, index),
      staleTime: 10 * 60 * 1000,
      refetchOnWindowFocus: false,
    })),
  });
  const data = queries.map((query) => query.data);
  const isLoading = queries.some((query) => query.isLoading);
  const errors = queries.map((query) => query.error);
  return {
    data,
    isLoading,
    errors,
  };
};
