import Card from '../Card/Card';
import Style from "./Cards.module.css"
import { CSSTransition } from "react-transition-group"
import { useState } from "react"


export default function Cards({characters, onClose} ) {
   const [flip, setFlip] = useState({});

   const handleClick = (id) => {
      setFlip((prevFlip) => ({
        ...prevFlip,
        [id]: !prevFlip[id]
      }))
   }
   return (
   <div className={Style.cards} >
      {
      characters.map(({ id, name, status, species, gender, origin, image }) => {
         return (
          <CSSTransition
          in={flip[id]}
          timeout={300}
          classNames="flip"
          key={id} >
            <Card
              id={id}
              name={name}
              status={status}
              species={species}
              gender={gender}
              origin={origin.name}
              image={image}
              onClose={() => onClose(id)}
              onClick={() => handleClick(id)}
            />
          </CSSTransition>
         );
       })
      }
   </div> 
   )   
}

