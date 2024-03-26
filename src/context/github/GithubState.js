import { useReducer } from "react";
import axios from "axios";
import githubContext from './githubContext'
import githubReducer from "./githubReducer";
import{
SEARCH_USERS,
SET_LOADING,
GET_REPOS,
GET_USERS,
CLEAR_USERS
 } from '../Types'

 const GithubState = props => {
        const initialState = {
          users: [],
          user:{},
          repos:[],
          loading:false  
        }

        const [state, dispatch] = useReducer(githubReducer, initialState);

//Search USer
const searchUsers = async text => { 
    setLoading();
    const res = await axios.get(`https://api.github.com/search/users?q=${text}
    &client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
    &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)

    dispatch({
        type: SEARCH_USERS,
        payload: res.data.items 
    });
    
  }



//Get User
 
const getUser = async (username) =>{
    setLoading();
    const res = await axios.get(`https://api.github.com/users/${username}
    ?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
    &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
   dispatch({
    type: GET_USERS,
    payload: res.data
   })
    }
//Get Repos

const getUserRepos = async (username) =>{
    setLoading();
    const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
    &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    dispatch({
        type:GET_REPOS,
        payload: res.data
    })

    }

//clear User
const clearUsers = () => dispatch({
    type:CLEAR_USERS
})

//Set loading

const setLoading = () => dispatch({type: SET_LOADING});

    return (<githubContext.Provider value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos
    }}
    >
        {props.children}
    </githubContext.Provider>
    )

 }

 export default GithubState;