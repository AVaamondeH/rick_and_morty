import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions"

const initialState = {
    myFavorites: [],
    allCharacter: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        // case ADD_FAV:
        //     return {
        //         ...state,
        //         myFavorites: [...state.myFavorites, action.payload],
        //         allCharacter: [...state.myFavorites, action.payload]

        //     }
        case ADD_FAV:
            console.log(state)
            return { 
                ...state, 
                myFavorites: action.payload, 
                allCharacter: action.payload };

        // case REMOVE_FAV:
        //     const remove = state.myFavorites.filter(char => char.id !== Number(action.payload));
        //     return {
        //         ...state,
        //         myFavorites: remove
        //     }

        case REMOVE_FAV:
            return { 
                ...state, 
                myFavorites: action.payload,
            };

        case FILTER:
            if(action.payload === "All") {
                return {
                    ...state,
                    myFavorites: state.allCharacter
                }
            } else {
                let filter = state.allCharacter.filter(char => char.gender === action.payload);
                    return {
                        ...state,
                        myFavorites: filter
                    }
            }
        
        
        case ORDER:
            // let result = [];
            
            // if (action.payload === "A") {
            //     result = state.allCharacter.sort((a, b) => a.id - b.id);
            // } 
            // if(action.payload === "D") {
            //     result = state.allCharacter.sort((a, b) => b.id - a.id);
            // }
            return {
                ...state,
                myFavorites: 
                action.payload === "A"
                ? state.allCharacter.sort((a, b) => a.id - b.id)
                : state.allCharacter.sort((a, b) => b.id - a.id)
                            

            }
    
        default:
            return {...state}
    }
}

export default reducer;







