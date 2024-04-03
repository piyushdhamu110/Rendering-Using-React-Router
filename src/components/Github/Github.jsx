import React, { useEffect, useState } from "react";

function Github() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/piyushdhamu9")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  });

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

export default Github;
