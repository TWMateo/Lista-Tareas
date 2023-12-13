import { useState } from "react";
import Tarea from "./Tarea";
import SearchBar from "./SearchBar";

const Welcome = () => {
  const listaTareas = [
    {
      titulo: "Tarea 1",
      fecha: "12/12/2023",
      contenido: `{" "}
Smith, J. (2021). Maximizing Business Efficiency Through System
Integration. New York, NY: TechPress. Johnson, A. (2020). The Future of
Cloud Computing in Enterprise Resource Planning. San Francisco, CA:
CloudTech Publishers. Williams, M. (2018). Strategic Collaboration:
Transforming Project Management with Integrated Tools. London, UK:
BusinessSynergy Books. Anderson, R. (2019). Innovative Financial
Management: Xero and PayPal Integration Success Stories. Chicago, IL:
FinTech Insights. Garcia, L. (2020). Collaborative Task Management in
the Digital Age. Seattle, WA: TaskForce Publications.`,
    },
    {
      titulo: "Tarea 2",
      fecha: "13/12/2023",
      contenido: `Probando la tarea 2`,
    },
  ];
  return (
    <div className="h-full w-full flex flex-col justify-center items-center gap-2 mt-2 mb-5 md:ml-10">
      <SearchBar />
      <div className={`border border-black w-[70%] lg:w-[80%] ${listaTareas ? `h-auto` : `h-[70%]`} rounded-2xl bg-pastel-green-400 grid sm:grid-rows-[auto,auto,auto,auto] xl:grid-cols-[auto,auto,auto]`}>
        {listaTareas && listaTareas.map((tarea, index)=>(
          <Tarea titulo={tarea.titulo} fecha={tarea.fecha} contenido={tarea.contenido} key={index}/>
        ))}
      </div>
    </div>
  );
};

export default Welcome;
