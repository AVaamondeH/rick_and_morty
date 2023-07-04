import style from "./Card.module.css"
import { NavLink } from "react-router-dom"
import "./transition.css"
import {useEffect, useState } from "react"
import { addFav, removeFav } from "../../Redux/actions"
import { AiFillCloseSquare } from "react-icons/ai"
import { connect } from "react-redux"

function Card({id, name, status, species, gender, origin, image, onClose, onClick, addFav, removeFav, myFav}) {
   const [isFav, setIsFav] = useState(false);
   
   useEffect(() => {
      
      myFav.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFav, id]);

   const handleFav = () => {
      if  (isFav) {
         setIsFav(false);
         removeFav(id);
      } else {
         setIsFav(true);
         addFav({id, name, status, species, gender, origin, image, onClose})
      }
   }
   
   
   useEffect(() => { //Se utiliza el useEffect para que cuando se monte el compoente se ejecute una vez onclick para las transiciones
      onClick();
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   return (
      <div 
         className={style.card}>
            {
                     isFav ? (
                        <div className={style.fav} onClick={handleFav}>❤️</div>
                     ) : (
                        <div className={style.fav} onClick={handleFav}>🤍</div>
                     )
                  } 
               <div 
                  className={style.front}
                  onClick={onClick} >
                     <div >
                  
                     <AiFillCloseSquare onClick={() => onClose(id)} className={style.close}/> 
                  </div>
                  <img 
                     src={image} alt='' 
                     className={style.img} 
                      />
                  <h3 className="card-name">{name}</h3>     
               </div>
               <div className={style.back} onClick={onClick}>
                     <NavLink 
                     to={`/detail/${id}`} 
                     className={style.links}
                     >
                        <h3 className="card-name">{name}</h3>
                     </NavLink>

                  <h3>Status: {status}</h3>
                  <h3>Species: {species}</h3>
                  <h3>Gender: {gender}</h3>
                  <h3 className={style.from} >From: {origin}</h3>
                     <NavLink 
                        to={`/detail/${id}`} 
                        className={style.links}>
                           <h3 className={style.more} >more...</h3>
                     </NavLink>
                  
               </div>
               
      </div>
   );
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (props) => {dispatch(addFav(props))},
      removeFav: (id) => {dispatch(removeFav(id))}
   }
}

const mapStateToProps = (state) => {
   return {
      myFav : state.myFavorites
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)