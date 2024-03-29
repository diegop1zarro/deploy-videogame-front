import axios from 'axios'

export const GET_ALL_GAMES="GET_ALL_GAMES";
export const GET_BY_NAME="GET_BY_NAME";
export const GET_ALL_DETAILS="GET_ALL_DETAILS";
export const GET_ALL_GENRES ="GET_ALL_GENRES";
export const CREATE_GAME = "CREATE_GAME";
export const FILTER_ALFABETICAMENTE= "FILTER_ALFABETICAMENTE";
export const FILTER_DB = "FILTER_DB";
export const FILTER_BY_GENRES = "FILTER_BY_GENRES";
export const FILTER_BY_RATING = "FILTER_BY_RATING";
export const LIMPIAR_HOME ="LIMPIAR_HOME";
export const LIMPIAR_DETAIL ="LIMPIAR_DETAIL";
export const REFRESH = "REFRESH";
export const DELETE_GAME = "DELETE_GAME"
export const ALL_PLATFORMS = "ALL_PLATFORMS"

const URL = 'https://deployd-videogames-production.up.railway.app/'

export const getAllGames = () => {
    return  function (dispatch) {
      
    return fetch(`${URL}videogames`)
    .then(info => info.json())
    .then (data => dispatch({
      type: GET_ALL_GAMES,
      payload: data
    }))
    
    };
  };

export function getAllGenres(){
  return function (dispatch){
     fetch(`${URL}genres`)
    .then(info => info.json())
    .then (data=>dispatch({type:GET_ALL_GENRES, payload: data }))
  }
}
export function getAllDetails (id){
  return  function (dispatch) {
      
    return fetch(`${URL}videogame/${id}`)
    .then(info => info.json())
    .then (data => dispatch({
      type: GET_ALL_DETAILS,
      payload: data
    }))
    
    };
}

export function getByName(name){
  return function (dispatch) {
    try{
       fetch(`${URL}videogames?name=${name}`)
      .then(info => info.json())
      .then (data => dispatch({
        type: GET_BY_NAME,
        payload:data
      },
      console.log(data)
      ))
      
     
    } catch (error){ 
      throw (error)
    } 
    
    };
}
export function createGame(game){
  return async function(){
  const post = await axios.post(`${URL}videogames`,game)
  return post
    }
};
export function deleteGame(id){
  return async function(dispatch){
   await axios.delete(`${URL}delete/${id}`)
    .then(()=>{
      dispatch({
        type:DELETE_GAME,
        payload:id

      })
    })
  }
}
export function filterByOrder(orden){
  return{
    type:FILTER_ALFABETICAMENTE,
    payload:orden
  }
}
export function filterByOrderRating(orden){
  return{
    type:FILTER_BY_RATING,
    payload:orden
  }
}
export function filterDB(info){
  return {
    type: FILTER_DB,
    payload: info
  }
}
export function filterByGenres(options){
  return{
    type: FILTER_BY_GENRES,
    payload: options
  }
}
export function limpiarEstadoHome(){
  return{
    type:LIMPIAR_HOME,
    
  }
}
export function limpiarEstadoDetail(payload){
  return{
    type:LIMPIAR_DETAIL,
    payload
  }
}
export function Refresh(){
  return{
    type:REFRESH
  }
}
export function getAllPlatforms(){
  return function (dispatch){
    fetch(`${URL}platforms`)
   .then(info => info.json())
   .then (data=>dispatch({type:ALL_PLATFORMS, payload: data }))
 }
}

// fetch('https://jsonplaceholder.typicode.com/posts/1', { method: 'DELETE' })
// .then(() => this.setState({ status: 'Delete successful' }));
// }