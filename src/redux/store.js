import { createStore } from "redux";

const initialState = {
    user: {
        name: '',
        email: '',
        paswword: '',
        isAuthenticated: false,
    },
    jobs: [],
    originalJobs: []
}

const store = createStore(reducer)
export default store

// xu ly action
function reducer (state = initialState, action) {
    if(action.type === 'LOGIN'){
        state.user = action.payload
        state.user.isAuthenticated = true
    } else if(action.type === 'UPLOAD-JOBS'){
        state.jobs = action.jobs
        state.originalJobs = action.jobs
    } else if(action.type === 'SEARCH'){
        let filterList = state.originalJobs.filter(job => {
            return job.title.includes(action.keyword)   
        })
        state.jobs = filterList
    }
    return state
}

