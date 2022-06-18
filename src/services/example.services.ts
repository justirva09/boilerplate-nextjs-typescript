import { apiRequest } from "@configs/axios";
import { ApiResponseType } from "@type-general";
import { useQuery } from "react-query";
import { AnimeIfo } from "./example.interface";

// request example

// useQuery example
export const useFetchAnimeInfo = (id: string) =>
  useQuery(
    ["anime"],
    async () => {
      const response: ApiResponseType<AnimeIfo> = await apiRequest({
        path: `/anime/${id}/full`,
        method: "GET",
      });
      return response.data;
    },
    { refetchOnWindowFocus: true }
  );
