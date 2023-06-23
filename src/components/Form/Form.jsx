import { useState } from "react";
import style from "./Form.module.css";
import { validate } from "./validation";

const Form = ({login}) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });

    validation();
  };

  const validation = () => {
    const error = validate(userData); //se guarda el return del objeto errors del archivo de validacion para usarse en el estado
    setErrors(error);

    if (Object.keys(error).length === 0) { //se verifica si el error tiene o no propiedades para proceder a setear nuevamente el error en un objeto vacio
      
      setErrors({});
    }
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
     login(userData)

  };

  return (
    <div className={style.container}>
      <form className={style.form} onSubmit={handleOnSubmit}>
            <div className={style.info} >
            <h1 className={style.title}>Bienvenidos</h1>
            
            <input
            name="email"
            type="email"
            placeholder="Ingrese su email"
            value={userData.email}
            onChange={handleChange}
            />
            {errors.email && <p>{errors.email}</p>}
            
            <input
            name="password"
            type="text"
            placeholder="Ingrese una contraseña"
            value={userData.password}
            onChange={handleChange}
            />
            {errors.password && <p>{errors.password}</p>}
            <button
            className={style.button}
            disabled={
                !userData.email ||
                !userData.password ||
                errors.email ||
                errors.password
            }
            >
            Enviar
            </button>
            </div>
      </form>
    </div>
  );
};

export default Form;
