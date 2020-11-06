export function reducer(state, action){
    switch(action.type){
        case "ADD_TO_FAVORITE":
            // 1)const newList=[...state.favoriteList];
            // 1)newList.push(action.payload.selectedRestaurant);
            // 1)state.favoriteList = newList;
            // 1)return {...state}

            // 2)const newList = [...state.favoriteList, action.payload.selectedRestaurant]
            // 2)return {...state, favoriteList: newList}

            // 3)
            return { 
            ...state, 
            favoriteList: [...state.favoriteList, action.payload.selectedRestaurant] 
            }

        default:
            return state;

    }
}