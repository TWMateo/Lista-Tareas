import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faFolder,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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

const SearchBar = () => {
  return (
    <div className="w-[70%] lg:w-[40%] bg-pastel-green-400 rounded-xl flex p-3 gap-3">
      <input
        type="text"
        placeholder="Crear una nota"
        className="border w-[70%] border-black rounded-lg p-2 text-xl"
      />
      <input type="file" className="hidden m-0 p-0" id="file" />
      <input type="file" className="hidden m-0 p-0" id="photo" />
      {/* <input type="date" className="m-0 p-0" id="calendar" /> */}
      <a
        className="w-14 h-14 cursor-pointer rounded-full hover:bg-pastel-green-600
      transition-all duration-300 flex items-center"
        onClick={handleClick}
      >
        <FontAwesomeIcon icon={faPlus} className="w-[100%] h-7" />
      </a>
      <a
        className="w-14 h-14 cursor-pointer rounded-full hover:bg-pastel-green-600
         transition-all duration-300 flex items-center"
        onClick={handleClick}
      >
        <FontAwesomeIcon icon={faFolder} className="w-[100%] h-7 mt-1" />
      </a>
      <a
        className="w-14 h-14 cursor-pointer rounded-full hover:bg-pastel-green-600
        transition-all duration-300 flex flex-col items-center"
        onClick={handleClickCalendar}
      >
        <FontAwesomeIcon icon={faCalendar} className="w-[100%] h-7 mt-4" />
        <ReactDatePicker id="calendar" className="hidden m-0 p-0"></ReactDatePicker>
      </a>
    </div>
  );
};

export default SearchBar;
