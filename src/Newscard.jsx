import React from 'react'

const Newscard = (props) => {
  console.log(props.url)
  return (
    <div className="new w-[300px] bg-slate-100 border rounded-md p-5 ">
    <img className='w-60' src={props.url?props.url:'https://www.shutterstock.com/image-vector/breaking-news-background-world-global-260nw-719766118.jpg'} alt="" />
    <h1 className=' mt-3 font-semibold text-xl '>{props.title}</h1>
    <p className='mt-1 mb-4'>{props.desc}</p>
    <a className='bg-blue-600 text-white p-2 rounded-md' href={props.src}>Read more</a>
  </div>
  )
}

export default Newscard
