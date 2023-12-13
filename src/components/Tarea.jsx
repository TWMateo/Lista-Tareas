import PropTypes from 'prop-types'

const Tarea = ({titulo,fecha,contenido}) => {
  return (
    <div className="flex flex-col m-3 p-2 text-sm border border-black rounded-xl border-b bg-slate-400">
      <div className="flex p-2 w-auto">
        <p className="h-full w-full">{titulo}</p>
        <p className="h-full w-full">{fecha}</p>
        <input type="checkbox" className="w-16" />
      </div>
      <p className="h-full w-full">
        {contenido}
      </p>
    </div>
  );
};

Tarea.propTypes = {
  titulo:PropTypes.string.isRequired,
  fecha:PropTypes.string.isRequired,
  contenido:PropTypes.string.isRequired
}

export default Tarea;
