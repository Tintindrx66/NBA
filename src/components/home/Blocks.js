import React from "react";
import GenerateBlocks from "./GenerateBlocks";

const Blocks = ({ b }) => {
  return (
    <div className="home_block">
      <GenerateBlocks blocks={b} />
    </div>
  );
};
export default Blocks;
