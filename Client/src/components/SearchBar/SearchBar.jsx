import {useState} from "react"
import style from "./SearchBar.module.css"

export default function SearchBar({onSearch, onRandom}) {
   const [id, setid] = useState("")

   const handleChange = (event) => {
      setid(event.target.value)
   }
   
   
   
   let random = Math.round(Math.random() * 826)
   
   return (
      <div className={style.bar}>
         <div className={style.barDiv2} onClick={() => {onRandom(random)}}>
            Random
         </div>
         <div className={style.barDiv1}>
            <input type='search' value={id} onChange={handleChange } placeholder="Insertar id"/>
         </div>
         <div className={style.barDiv2} onClick={() => {onSearch(id); setid("")}}>
            Agregar
         </div>
      </div>
   );
}
