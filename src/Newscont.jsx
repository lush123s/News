import React, { useEffect, useState } from 'react'
import Newscard from './Newscard';

const Newscont = (props) => {
  const [articles, setarticles] = useState([]);

 async function newsData(){

    let response =await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${props.categary}&apiKey=${import.meta.env.VITE_API_KEY }`);

    let data = await response.json();
    setarticles(data.articles)
    console.log(data.articles)
  }
  useEffect(() => {
    newsData()
  }, [props.categary])
  
  return (
    <div className='container  mt-5'>
      <h1 className='font-semibold text-3xl text-center'>Latest <span className='bg-red-700 py-1 px-2 rounded-lg text-white'>News</span></h1>
    <div className="news flex flex-wrap justify-center gap-9 mt-16 p-4">
     {articles.map(function(value,index){
      return   <Newscard key={index} title ={value.title} desc={value.description} url={value.urlToImage} src={value.url}/>
     })}
      
    </div>
    </div>
  )
}

export default Newscont
