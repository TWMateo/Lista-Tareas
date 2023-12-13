import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faFolder,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState, useRef, useEffect } from "react";

const SearchBar = () => {
  const [title, setTitle] = useState(" ");
  const [content, setContent] = useState(" ");
  const [openNote, setOpenNote] = useState(false);
  const inputRefNote = useRef(null);

  const handleClick = () => {
    const fileInput = document.getElementById("file");
    if (fileInput) {
      fileInput.click();
    }
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

  const handleClickOutside = (event) => {
    if (inputRefNote.current && !inputRefNote.current.contains(event.target)) {
      setOpenNote(false);
    }
  };

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
          ref={inputRefNote}
          placeholder={openNote ? "Titulo" : "Crear una nota"}
          className="border w-[70%] border-black rounded-lg p-1 text-xl bg-pastel-green-100"
          onClick={handleClickNewNote}
        />
        <input type="file" className="hidden m-0 p-0" id="file" />
        <input type="file" className="hidden m-0 p-0" id="photo" />
        {/* <input type="date" className="m-0 p-0" id="calendar" /> */}
        <a
          className="w-10 h-10 cursor-pointer rounded-full hover:bg-pastel-green-600
      transition-all duration-300 flex items-center"
          onClick={handleClick}
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
          ></ReactDatePicker>
        </a>
      </div>
      <input placeholder="Contenido..." ref={inputRefNote} className={`bg-pastel-green-100 ${openNote ? `absolute`:`hidden`} mt-32 w-[70%] md:w-[65%] lg:w-[38%] rounded-lg p-5`}>
        {/* <input placeholder="Contenido..."></input> */}
      </input>
    </div>
  );
};

export default SearchBar;
