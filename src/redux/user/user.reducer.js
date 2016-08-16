const INTIAL_STATE = {
    currentUser: null
}

// IF State is ever undefined it takes the default value that got assigned 
const userReducer = (state = INTIAL_STATE, action ) => {
    switch(action.type){
        case 'SET_CURRENT_USER':
            return{
                ...state,
                currentUser:action.payload
            }

        default:
            return state
    }
}

export default userReducer


// Action 
// {
//     type:
//     payload: anything a flexible property which may or may not use
// }