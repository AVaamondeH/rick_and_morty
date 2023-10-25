import { useDispatch, useSelector } from 'react-redux';
import Card from '../Card/Card';
import Style from "./Fav.module.css"
import { CSSTransition } from "react-transition-group"
import { useState } from "react"
import { filterCards, orderCards } from '../../Redux/actions';


function Fav() {
   const [flip, setFlip] = useState({});
   const dispatch = useDispatch()
   const { myFavorites} = useSelector(state => state)

   const handleClick = (id) => {
      setFlip((prevFlip) => ({
        ...prevFlip,
        [id]: !prevFlip[id]
      }))
   }

   const handleOrder = (event) => {
      dispatch(orderCards(event.target.value))
   }

   const handleFilter = (event) => {
      dispatch(filterCards(event.target.value))
   }


   return (
      <div>
         <div>
            <select className={Style.option} onChange={handleOrder}>
               <option value="A">Ascendente</option>
               <option value="D">Descendente</option>
            </select>
            <select className={Style.option} onChange={handleFilter}>
               <option value="All">All</option>
               <option value="Male">Male</option>
               <option value="Female">Female</option>
               <option value="Genderless">Genderless</option>
               <option value="unknown">unknown</option>
            </select>
         </div>
            <div className={Style.cards} >
               {
               myFavorites?.map(({ id, name, status, species, gender, origin, image, onClose }) => {
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
                     origin={origin?.name}
                     image={image}
                     close={false}
                     onClick={() => handleClick(id)}
                     />
                  </CSSTransition>

                  
                  );
               })
               }
            </div> 
      </div>
   )   
}


 export default Fav