import { useState } from "react";
import Tarea from "./Tarea";
const [tareas,setTareas] = useState();

const Welcome = () => {
  return (
    <div className="border border-black h-full w-screen flex flex-col justify-center items-center">
      <div className="border border-black w-[80%] md:w-[60%] lg:w-[40%] h-[80%] rounded-2xl bg-blue-500 grid grid-rows-[auto,1fr,auto]">
        <h2 className="bg-slate-500 h-10 text-center">TITULO</h2>
        <div className="bg-green-500 grid grid-rows-[auto,auto,auto]">
          <p>T1</p>
          <p>T1</p>
          <p>T1</p>
          <p>T1</p>
        </div>
        <div className="bg-orange-600 h-10">...Más Tareas</div>
      </div>
    </div>
  );
};

export default Welcome;
