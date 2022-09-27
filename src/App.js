import { useState } from "react";

const App = () => {
  const [value, setValue] = useState({
    normal: "placeholder",
    texto: "",
    select: "",
    check: false,
  });

  const handleChange = ({ target }) => {
    //se hace una copia de value y se actualiza la propiedad
    //seleccionada con e.target.name
    //en caso se ser el input de tipo checkbox se utiliza
    //la propiedad checked y NO value
    setValue({
      ...value,
      [target.name]: target.type === "checkbox" ? target.checked : target.value,
    });
  };

  console.log(value);
  return (
    <div>
      {value.length < 5 ? <span>longitud minima de 5</span> : null}
      <input
        type="text"
        name="normal"
        value={value.normal}
        onChange={handleChange}
      />
      <textarea name="texto" onChange={handleChange} value={value.texto} />

      <select value={value.select} name="select" onChange={handleChange}>
        <option value="">--Seleccione--</option>
        <option value="opcion1">opcion 1</option>
        <option value="opcion2">opcion 2</option>
        <option value="opcion3">opcion 3</option>
      </select>

      <input
        type="checkbox"
        name="check"
        onChange={handleChange}
        checked={value.check}
      />
    </div>
  );
};

export default App;
