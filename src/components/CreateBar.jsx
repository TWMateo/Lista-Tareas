import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faFolder,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { añadirTarea } from "../redux/features/ListaTareasSlice";
import { formatearContenido, formatearFecha } from "../helpers/helper";

const SearchBar = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [contentSelect, setContentSelect] = useState(false);
  const fechaFormateada = formatearFecha(startDate);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState(" ");
  const [openNote, setOpenNote] = useState(false);
  const inputRefNote = useRef(null);
  const dispatch = useDispatch();

  const handleClick = () => {
    const fileInput = document.getElementById("file");
    if (fileInput) {
      fileInput.click();
    }
  };

  const handleClickAddTarea = () => {
    const contenidoFormateado = formatearContenido(content,10);
    const tarea = {
      titulo: title,
      fecha: fechaFormateada,
      contenido: contenidoFormateado,
    };
    dispatch(añadirTarea(tarea));
    const  inputContenido = document.getElementById('inputContent')
    const inputTitle = document.getElementById('inputTitle')
    inputTitle.value = ""
    inputContenido.value = ""
  };

  const handleClickCalendar = () => {
    const dateInput = document.getElementById("calendar");
    if (dateInput) {
      dateInput.click();
    }
  };

  const handleClickNewNote = () => {
    setOpenNote(true);
  };

  //Creación de un evento para el elemento referenciado
  const handleClickOutside = (event) => {
    if (inputRefNote.current && !inputRefNote.current.contains(event.target)) {
      setOpenNote(false);
    }
  };

  //El evento se añade directamente al documento
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    //Es una buena practica para mantener un rendimiento optimo de la app
    //Se hace para eliminar los eventListener y que no se queden guardados en memoria despues de que
    //el componente desaparezca
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-[70%] lg:w-[40%] h-14 bg-pastel-green-400 rounded-xl flex flex-col justify-center items-center p-3 gap-3">
      <div className="flex items-center w-full">
        <input
          type="text"
          id="inputTitle"
          ref={inputRefNote}
          placeholder={openNote ? "Titulo" : "Crear una nota"}
          className="border w-[70%] border-black rounded-lg p-1 text-xl bg-pastel-green-100"
          onClick={handleClickNewNote}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        <input type="file" className="hidden m-0 p-0" id="file" />
        <input type="file" className="hidden m-0 p-0" id="photo" />
        {/* <input type="date" className="m-0 p-0" id="calendar" /> */}
        <a
          className="w-10 h-10 cursor-pointer rounded-full hover:bg-pastel-green-600
      transition-all duration-300 flex items-center"
          onClick={handleClickAddTarea}
        >
          <FontAwesomeIcon icon={faPlus} className="w-[100%] h-6" />
        </a>
        <a
          className="w-10 h-10 cursor-pointer rounded-full hover:bg-pastel-green-600
         transition-all duration-300 flex items-center"
          onClick={handleClick}
        >
          <FontAwesomeIcon icon={faFolder} className="w-[100%] h-6" />
        </a>
        <a
          className="w-10 h-10 cursor-pointer rounded-full hover:bg-pastel-green-600
        transition-all duration-300 flex flex-col items-center"
          onClick={handleClickCalendar}
        >
          <FontAwesomeIcon icon={faCalendar} className="w-[100%] h-6 mt-2" />
          <ReactDatePicker
            id="calendar"
            className="hidden m-0 p-0"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          ></ReactDatePicker>
        </a>
      </div>
      <div
        className={`bg-pastel-green-100 flex ${
          openNote ? `absolute flex-col` : `hidden`
        } mt-36 w-[70%] md:w-[65%] lg:w-[38%] rounded-lg p-2 gap-2`}
      >
        <div
          className={`text-xs ${
            contentSelect ? "relative" : "absolute"
          } opacity-30`}
        >
          {startDate && contentSelect && fechaFormateada}
        </div>
        <input
          id="inputContent"
          placeholder="Contenido"
          ref={inputRefNote}
          className="w-[99%] h-full p-2  bg-pastel-green-100 text-xs rounded-md"
          onChange={(event) => {
            setContent(event.target.value);
          }}
          onFocus={() => {
            setContentSelect(true);
          }}
          onBlur={() => setContentSelect(false)}
        />
      </div>
    </div>
  );
};

export default SearchBar;
