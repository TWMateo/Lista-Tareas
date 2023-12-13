import Tarea from "./Tarea";
import SearchBar from "./CreateBar";
import { useSelector } from "react-redux";

const Welcome = () => {
  const estadoTareas = useSelector((state)=>state.listaT)
  const listaTareas = estadoTareas.listaTareas
  return (
    <div className="h-full w-full flex flex-col items-center gap-2 mt-2 mb-5 md:ml-10">
      <SearchBar />
      <div className={`border border-black w-[70%] lg:w-[80%] ${listaTareas.size ? `h-auto` : `h-[70%]`} rounded-2xl bg-pastel-green-400 grid sm:grid-rows-[auto,auto,auto,auto] xl:grid-cols-[auto,auto,auto]`}>
        {listaTareas && listaTareas.map((tarea, index)=>(
          <Tarea titulo={tarea.titulo} fecha={tarea.fecha} contenido={tarea.contenido} key={index}/>
        ))}
      </div>
    </div>
  );
};

export default Welcome;
