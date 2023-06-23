export const validate = (userData) => {
    const errors = {}
    
    if (!/\S+@\S+\.\S+/.test(userData.email)) {

        errors.email = "Por favor, ingresa un email valido."  
    }

    if(userData.length > 35){
        errors.email = "No puede tener más de 35 caracteres."
    }

    if (userData.length < 6 || userData.length >10) {
        errors.password = "La contraseña debe tener una longitud entre 6 y 10 caracteres."
    }

    if (!/\d/.test(userData.password)) {
        errors.password = "La contraseña debe contener al menos un número.";
      }

    return errors
  };