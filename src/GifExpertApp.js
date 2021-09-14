import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  //const categories = ["One Punch", "Samurai X", "Dragon Ball"];

  const [categories, setCategories] = useState(["One Punch"]);

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      <ul>
        {categories.map((category) => (
          <GifGrid key={category + Math.random()} category={category} />
        ))}
      </ul>
    </>
  );
};

export default GifExpertApp;
