import PropTypes from "prop-types";



const Tarea = ({ titulo, fecha, contenido }) => {
  return (
    <div className="flex flex-col m-2 mb-0 p-2 text-sm border h-fit border-black rounded-xl border-b bg-slate-400">
      <div className="flex p-2 w-auto">
        <p className="h-full w-[50%]">{titulo}</p>
        <p className="h-full w-full">{fecha}</p>
        <input type="checkbox" className="w-16 cursor-pointer" />
      </div>
      <p className="h-full w-auto flex flex-col">
        {contenido.substring(0, 50)}
        <div className="flex justify-end ">
          <a className="pl-1 rounded-md w-[30%] hover:bg-gray-600 cursor-pointer">
            Ver mas...
          </a>
        </div>
      </p>
    </div>
  );
};

Tarea.propTypes = {
  titulo: PropTypes.string.isRequired,
  fecha: PropTypes.string.isRequired,
  contenido: PropTypes.string.isRequired,
};

export default Tarea;
