import { useFetchAnimeInfo } from "@services/example.services";
import { NextPage } from "next";
import React from "react";

const Anime: NextPage = () => {
  const { data } = useFetchAnimeInfo("20");
  return (
    <>
      <div className="">
        <h4>Title</h4>
        <p>
          {data?.data.title} / {data?.data.title_japanese}
        </p>
      </div>
      <div className="">
        <h4>Synopsis</h4>
        <p>{data?.data.synopsis}</p>
      </div>
    </>
  );
};

export default Anime;
