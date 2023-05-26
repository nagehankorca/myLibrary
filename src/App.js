import React, {useEffect} from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  Home  from "./pages/Home";
import { useDispatch, useSelector } from  'react-redux';
import axios from "axios";


function App() {
  const dispatch = useDispatch();
  const {booksState, categoriesState} = useSelector(state => state)

 useEffect (()=>{
  //BOOKS
 dispatch({ type: "FETCH_BOOKS_START"});
 axios
 .get("http://localhost:3004/books")
 .then((res) =>{
   dispatch({ type: "FETCH_BOOKS_SUCCESS" , payload : res.data})
 })
 .catch((err)=>{
   dispatch({
     type: "FETCH_BOOKS_FAIL",
     payload: "Kitapları çekerken yanlışlık oldu."
   });
 })
  //CATEGORIES
  dispatch({ type: "FETCH_CATEGORIES_START"});
  axios
  .get("http://localhost:3004/categories")
  .then((res) =>{
    dispatch({ type: "FETCH_CATEGOIES_SUCCESS" , payload : res.data});
  })
  .catch((err)=>{
    dispatch({
      type: "FETCH_CATEGORIES_FAIL",
      payload: "Kategori çekerken yanlışlık oldu."
    });
  });
 
 
},[]);
if( booksState.success === false || categoriesState.success === false){
  return <h1>Loading..</h1>
}

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>       
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
