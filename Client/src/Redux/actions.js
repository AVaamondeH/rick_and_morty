import axios from "axios";


// export const addFav = (character) => {
//     const endpoint = 'http://localhost:3001/rickandmorty/fav';
//     return (dispatch) => {
//        axios.post(endpoint, character).then(({ data }) => {
//           return dispatch({
//              type: 'ADD_FAV',
//              payload: data,
//           });
//        });
//     };
//  };

// export const removeFav = (id) => {
//     const endpoint = `http://localhost:3001/rickandmorty/fav/${id}`;
//     return (dispatch) => {
//        axios.delete(endpoint).then(({ data }) => {
//           return dispatch({
//              type: 'REMOVE_FAV',
//              payload: data,
//        });
//        });
//     };
//  };

export const addFav = (character) => {
   const endpoint = 'https://rick-and-morty-server-p0ok.onrender.com/rickandmorty/fav';
   return async (dispatch) => {
      const { data } = await axios.post(endpoint, character)
         return dispatch({
            type: 'ADD_FAV',
            payload: data,
         });
   };
};

export const removeFav = (id) => {
   const endpoint = `https://rick-and-morty-server-p0ok.onrender.com/rickandmorty/fav/${id}`;
   return async (dispatch) => {
      const { data } = await axios.delete(endpoint)
      console.log(data);
         return dispatch({
            type: 'REMOVE_FAV',
            payload: data,
         });
   };
};


export const filterCards = (gender) => {
   return {
      type: "FILTER",
      payload: gender
   }
}

export const orderCards = (order) => {
   return {
      type: "ORDER",
      payload: order
   }
}

export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
export const FILTER = "FILTER"
export const ORDER = "ORDER";















