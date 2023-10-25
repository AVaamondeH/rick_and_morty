import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import About from "./components/About/About";
import {useState, useEffect} from "react";
import axios from "axios";
import {Routes, Route} from "react-router-dom"
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Fav from './components/favorites/Fav';
import { useNavigate } from 'react-router-dom';
import ParticlesBackground from './components/particles/particlesBackground';


function App() {
  
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  // function login(userData) { //Login recive la data de el form para validar con la base de datos ficticia
  //   if (userData.password === PASSWORD && userData.email === EMAIL) {
  //       setAccess(true);
  //       navigate('/home'); // si todo coincide el navigate te dirige al /home
  //   }
  // }

const login = async (userData) => {
  try {
    // const { email, password } = userData;
    // const URL = 'http://localhost:3001/rickandmorty/login/';
    // const { data } = await axios(`${URL}?email=${email}&password=${password}`)
    // const { access } = data;
      setAccess(true);
      navigate('/home');
    
  } catch (error) {
    alert("usuario no encontrado")
  }  
}

  useEffect(() => { //Este use  effect mantiene montado el componente form o login hastaq eu sean validos el email y contraseña
    !access && navigate('/');
  }, [access, navigate]);
  
  //Con esto controlamos el generador de tarjetas de forma manual
  const [character, setCharacters] = useState([]);
  const onSearch = async (id) => {
    try {
      const exists = character.some((character) => character.id === Number(id)); //some se detiene al encontrar la coincidencia
        
      if (exists) {
          alert('¡El personaje ya está en la lista!');
        } else {
          const { data } = await axios(`http://127.0.0.1:3001/rickandmorty/character/${id}`)
          const { name } = data
              //console.log(data);
        if (name) {
            setCharacters(oldChars => [...oldChars, data]);
        } else {
            alert('¡No hay personajes con este ID!');
            }
      }

    } catch (error) {
      
      alert('Error al obtener el personaje. Inténtalo de nuevo más tarde.');
    }
  }

    //Con esto controlamos el generador de tarjetas aleatorias
    const onRandom = (randomId) => {
      let random = Math.round(Math.random() * 826)
      const existingCharacter = character.find(character => character.id === Number(randomId));
      
      if (existingCharacter) {
        onRandom(random)
      } else {
        onSearch(random)
      }
    }


  const onClose = (id) => {
    console.log(character)
    setCharacters((characters) =>
    characters.filter((character) => character.id !== +id)
    );
    console.log(character)
    };
    
      
  return (
      <div className='App'>
        <ParticlesBackground />
        <Nav onSearch = {onSearch}  onRandom={onRandom} setAccess={setAccess}/>
        <Routes>
          <Route path='' element={<Form login={login} />} />
          <Route path='/home' element={<Cards 
                                          characters={character} 
                                          onClose={onClose}/>}  />
          <Route path='/about' element={<About/>} />
          <Route path='/detail/:id' element={<Detail/>} />
          <Route path='/favorites' element={<Fav/>} />

        </Routes>

        </div>
  );
}

export default App;


// function login(userData) {
//   const { email, password } = userData;
//   const URL = 'http://localhost:3001/rickandmorty/login/';
//   axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
//      const { access } = data;
//      setAccess(data);
//      access && navigate('/home');
//   });
// }
// const onSearch = (id) => {
// const exists = character.some((character) => character.id === Number(id)); //some se detiene al encontrar la coincidencia

//   if (exists) {
//     alert('¡El personaje ya está en la lista!');
//   } else {
//     axios(`http://127.0.0.1:3001/rickandmorty/character/${id}`)
//       .then(({ data }) => {
//         console.log(data);
//         if (data.name) {
//             setCharacters(oldChars => [...oldChars, data]);
//         } else {
//             alert('¡No hay personajes con este ID!');
//         }
//       })
//       .catch(() => {
//           alert('Error al obtener el personaje. Inténtalo de nuevo más tarde.');
//       });
//     }
//   }