import { useQueries } from "@tanstack/react-query";
import { getCharacterProfile } from "../apis/charactersApi";

export const useGetCharactersList = (nicknames: string[]) => {
  const queries = useQueries({
    queries: nicknames.map((name) => ({
      queryKey: ["character", name],
      queryFn: () => getCharacterProfile(name),
      staleTime: 5 * 60 * 1000,
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
