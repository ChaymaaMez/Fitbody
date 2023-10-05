import React, { useEffect, useRef } from 'react'
import '../../styles/header.css'
import logo from '../../assets/img/dumble.png'

const nav_Links =[
    {
        path:'#home',
        display:'Home'
    },
    {
        path:'#schedule',
        display:'Schedule'
    },
    {
        path:'#classes',
        display:'Classes'
    },
    {
        path:'#pricing-plan',
        display:'Pricing'
    },
]

export default function Header() {
    const headerRef = useRef(null)
const headerFunc=()=>{
    if(document.body.scrollTop>80 || document.documentElement.scrollTop>80){
        headerRef.current.classList.add('sticky_header')
    }else{
        headerRef.current.classList.remove('sticky_header')
    }
}
useEffect(()=>{
    window.addEventListener('scroll' , headerFunc)
    return()=> window.addEventListener('scroll' , headerFunc)
},[])
const handleClick= e =>{
    e.preventDefault();
    const targetAttr=e.target.getAttribute("href");
    const location = document.querySelector(targetAttr);
    const topOffset = location.offsetTop;
    window.scrollTo({
        left :0,
        top: topOffset - 80,
    });

};

  return (
    <header className='header' ref={headerRef}>
        <div className="container">
            <div className="nav_wrapper">
                <div className="logo">
                    <div className="logo_img"> <img src={logo} alt="" /> </div>
                    <h2>FitBody </h2>
                </div>
                    <div className="navigation">
                        <ul className="menu">
                            { nav_Links.map(item=>(
                                <li className="nav_item">
                                    <a onClick={handleClick} href={item.path}>{item.display}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="nav_right">
                        <button className="register_btn">Register</button>
                        <div className="mobile-menu"><i class="ri-menu-fill"></i></div>
                    </div>
            </div>
        </div>

    </header>
  )
}
