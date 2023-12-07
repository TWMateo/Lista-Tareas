import { useState } from "react";
import Tarea from "./Tarea";
import SearchBar from "./SearchBar";

const Welcome = () => {
  return (
    <div className="border border-black h-full w-screen flex flex-col justify-center items-center gap-5">
      <SearchBar/>
      <div className="border border-black w-[70%] md:w-[70%] lg:w-[80%] h-[70%] rounded-2xl bg-pastel-green-400 grid sm:grid-rows-[auto,auto,auto,auto] xl:grid-cols-[auto,auto,auto,auto]">
        <Tarea></Tarea>
        <Tarea></Tarea>
        <Tarea></Tarea>
        <Tarea></Tarea>
      </div>
    </div>
  );
};

export default Welcome;
