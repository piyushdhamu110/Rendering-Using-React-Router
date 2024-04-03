import React from "react";
import { useLoaderData } from "react-router-dom"; // hook

function Github() {
  const data = useLoaderData();

  return (
    <div className=" flex flex-col justify-center  items-center text-center m-4 text-black p-4 text-3xl">
      <img
        className=" rounded-full border-2 border-black"
        src={data.avatar_url}
        alt="Git picture"
        width={300}
      />
      Github Followers: {data.following + 100 + "k+"}
    </div>
  );
}

export default Github

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/piyushdhamu9");
  return response.json();
};
