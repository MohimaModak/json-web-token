import React from "react";
import { useLoaderData } from "react-router-dom";

const CheackOut = () => {
  const cheackoutLoader = useLoaderData();
  console.log(cheackoutLoader);
  return (
    <div>
      <h1>CheackOut {cheackoutLoader.length}</h1>
    </div>
  );
};

export default CheackOut;
