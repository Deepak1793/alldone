import React from 'react'
import { useState, useEffect } from 'react'
import DisplayCard from '../displayCard/DisplayCard'
import { useNavigate } from "react-router-dom";


export default function ReadNow() {
    const navigate = useNavigate();
    const [news,setNews] = useState([])
    useEffect(() => {
        fetch('http://localhost:3001/newsdata',{
            'method' : 'GET',
            'headers' : {'Content-Type' : 'application/json'}
        })
        .then((response)=>{
            return response.json() 
        })
        .then((data)=>{
            console.log(data);
            setNews(data)
        })
        .catch((error)=>{
            console.log(error);
        })
    }, [])

    useEffect(() => {
        fetch("http://localhost:9000/auth/isAuthenticated",{
           method:"POST",
           headers:{
               "Authorization":`Bearer ${localStorage.getItem("jwt_token")}`
           }
        })
        .then(res=>res.json())
        .then(data=>{
           console.log(data);
   
           if(!data.isAuthenticated){
               navigate("/login")
           }
        })
       // eslint-disable-next-line react-hooks/exhaustive-deps
       }, [])
  return (
    <div>
        {
        news.map((item) => <DisplayCard key={item.id} urlToImage={item.urlToImage} title={item.title} author={item.author} description={item.description} url={item.url}/>)
        }
    </div>
    )
}
