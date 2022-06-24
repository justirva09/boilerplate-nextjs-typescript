import { apiRequest } from "@configs/axios";
import { ApiResponseType } from "@type-general";
import { useQuery } from "react-query";
import { AnimeIfo } from "./example.interface";

// request example
export const getAnimeDetails = async (id: string | string[] | undefined) =>
  apiRequest({
    path: `/anime/${id}/full`,
    method: "GET",
  });

// useQuery example
export const useFetchAnimeInfo = (id: string | string[] | undefined) => {
  const { isLoading, isError, data } = useQuery(
    ["anime", id],
    async () => {
      const response: ApiResponseType<AnimeIfo> = await getAnimeDetails(id);
      return response.data.data;
    },
    {
      refetchOnWindowFocus: true,
      enabled: !!id, // enable query only if id is provided
      staleTime: 5 * 1000, // after 5 seconds and the data being stale, it will be refetched
    }
  );

  return { isLoading, isError, data };
};
