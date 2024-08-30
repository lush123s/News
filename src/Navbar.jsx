import React, { useRef, useState } from 'react'

const Navbar = (props) => {
  const [flag, setflag] = useState(true)
  return (
    <>
  <nav className=' p-4 flex items-center  gap-10'>
    <h1 className='font-semibold text-3xl'>iNews</h1>
    <div className="second flex gap-6">
    <li onClick={function(){props.setcategary('business')}} className='list list-none cursor-pointer  text-lg  hover:text-slate-600'>Business</li>
    <li onClick={function(){props.setcategary('entertainment')}} className='list list-none cursor-pointer  text-lg hover:text-slate-600'>entertainment</li>
    <li onClick={function(){props.setcategary('technology')}} className='list list-none  cursor-pointer text-lg  hover:text-slate-600'>technology</li>
    <li onClick={function(){props.setcategary('sports')}} className='list list-none cursor-pointer  text-lg  hover:text-slate-600'>sports</li>
    <li onClick={function(){props.setcategary('health')}} className='list list-none cursor-pointer  text-lg hover:text-slate-600 '>health</li>
    </div>
    <p onClick={function(){
     if(flag === true){
      setflag(false)
     }
     else{
      setflag(true)
     }
    }}  className='hidden open'>☰</p>
  </nav>
  <div  className={`${flag===false?'screen':''} bg-slate-200 p-6 hidden w-[200px] h-[400px] absolute top-0 right-0`}>
  <li onClick={function(){props.setcategary('business')}} className='mb-5 list-none cursor-pointer  text-lg  hover:text-slate-600'>Business</li>
    <li onClick={function(){props.setcategary('entertainment')}} className='mb-5  list-none cursor-pointer  text-lg hover:text-slate-600'>entertainment</li>
    <li onClick={function(){props.setcategary('technology')}} className='mb-5  list-none  cursor-pointer text-lg  hover:text-slate-600'>technology</li>
    <li onClick={function(){props.setcategary('sports')}} className='mb-5  list-none cursor-pointer  text-lg  hover:text-slate-600'>sports</li>
    <li onClick={function(){props.setcategary('health')}} className='mb-5  list-none cursor-pointer  text-lg hover:text-slate-600 '>health</li>
  </div>
   <hr />
   </>
  )
}

export default Navbar
