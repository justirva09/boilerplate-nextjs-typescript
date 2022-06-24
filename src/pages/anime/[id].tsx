import { AnimeIfo } from "@services/example.interface";
import { getAnimeDetails, useFetchAnimeInfo } from "@services/example.services";
import { ApiResponseType } from "@type-general";
import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import { dehydrate, QueryClient, useQuery } from "react-query";
const getPost = () => fetch("https://jsonplaceholder.typicode.com/posts");

const Anime: NextPage = () => {
  const router = useRouter();
  const { isLoading, isError, data } = useFetchAnimeInfo(router.query.id);

  if (isLoading) {
    return <div className="">Loading...</div>;
  }

  if (isError) {
    return <div className="">Error</div>;
  }

  if (data === undefined) {
    return <div className="">No data</div>;
  }

  return (
    <>
      <h1>Anime</h1>
      <div className="">
        <img src={data?.images.jpg.image_url} alt={data?.title} />
      </div>
      <div className="">
        <h4>Title</h4>
        <p>
          {data?.title} / {data?.title_japanese}
        </p>
      </div>
      <div className="">
        <h4>Synopsis</h4>
        <p>{data?.synopsis}</p>
      </div>
    </>
  );
};

// export const getServerSideProps: GetServerSideProps = async ({ params }) => {
//   const queryClient = new QueryClient();
//   await queryClient.prefetchQuery("anime", async () => getAnimeDetails(params?.id as string));

//   console.info(queryClient);

//   return {
//     props: {
//       dehydratedState: dehydrate(queryClient),
//     },
//   };
// };

// export const getServerSideProps: GetServerSideProps = async ({ params }) => {
//   const response: ApiResponseType<AnimeIfo> = await getAnimeDetails(params?.id as string);
//   const {isLoading, data} = useQuery('anime-details', () => getAnimeDetails(params?.id as string));
//   return {
//     props: {
//       data: response.data.data,
//     },
//   };
// };

export default Anime;
