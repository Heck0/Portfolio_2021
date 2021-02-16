import React from "react";
import Img from "gatsby-image";

const imagesContainer = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

interface Props {}
const Projets = (props: Props) => {
  return (
    <main>
      <h1>Projets</h1>
      <div style={imagesContainer}>
        <div style={image}></div>
      </div>
    </main>
  );
};

export default Projets;
