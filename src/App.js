import { useState } from "react";

const App = () => {
  const [value, setValue] = useState({ normal: "placeholder", texto: "" });

  const handleChange = (e) => {
    //se hace una copia de value y se actualiza la propiedad
    //seleccionada con e.target.name
    setValue({ ...value, [e.target.name]: e.target.value });
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
    </div>
  );
};

export default App;
