"use client";

import * as React from "react";

const fetchFromClient = async () => {
  const res = await fetch("https://localhost:1443");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.text();
  return data;
};

export const ClientComponent: React.FC = () => {
  const [data, setData] = React.useState<string | null>(null);

  const onClick = async () => {
    const data = await fetchFromClient();
    setData(data);
  };

  return (
    <>
      <p>From Client: {data}</p>
      <button onClick={onClick} className="bg-blue-500 text-white py-2 px-4 rounded">fetch</button>
    </>
  );
};
