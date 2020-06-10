import { createStore } from "redux";

const initialState = {
    user: {
        name: '',
        email: '',
        paswword: '',
        isAuthenticated: false,
    },
    jobs:[]
}

const store = createStore(reducer)
export default store

// xu ly action
function reducer (state = initialState, action) {
    if(action.type === 'LOGIN'){
        state.user = action.payload
        state.user.isAuthenticated = true
    }
    return state
}

