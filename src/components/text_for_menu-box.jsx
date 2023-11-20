import React from "react";

export const Text = ({ seeMore, tagsee, main, mainText }) => {
  const See = tagsee || "h1" || "h2" || "h3" || "h4";
  const Main = main || "p";

  return (
    <>
      <Main>{mainText}</Main>

      <See>{seeMore}</See>
    </>
  );
};
