import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const MenuIcon = styled.button`
    position:fixed;
    right:0.6rem;
    top:0.6rem;
    display:flex;
    justify-content:space-around;
    flex-direction:column;
    width:1.5rem;
    height:1.5rem;
    background:#e05a90;
    border:none;
    cursor:pointer;
    z-index:9;    
    padding:10px;
    border-radius:100px;
    display:flex;    
    div{
        width:100%;
        height:0.2rem;
        background:#ffd902;
        box-shadow: 0 0 5px #852049;
        border-radius:5px;
        transform-origin:1px;
        transition: opacity 300ms, transform 300ms;
        :first-child{
            transform: ${({nav}) => nav ? "rotate(45deg)": "rotate(0)"}
        }
        :nth-child(2){
            opacity: ${({nav}) => nav ? "0": "1"}
        }
        :nth-child(3){
            transform: ${({nav}) => nav ? "rotate(-45deg)": "rotate(0)"}
        }
    }
`

const MobileMenu = styled.nav`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    text-align:center;
    height:100vh;
    width:100%;
    list-style:none;
    position: fixed;
    top:0;
    left: 0;
    z-index: 8;
    background: #e05a90;
    transition: transform 300ms;
    transform:${({nav}) => nav ? "translatex(0)": "translatex(100%)"};
    ul{
        margin:0;        
        padding:0;
        li{
            padding-bottom:0;
            a{
                margin:0;
                width:100% !important;
                font-size:1rem;
                padding-bottom:10px;
                :hover{
                    background:transparent;
                }
            }
        }
    }
`

const MobileNav = styled.div`
    background: #e05a90;    
    position: fixed;
    top: 0.5REM;
    left: 0.5REM;
    text-align: left;
    padding: 0.3rem 0.7rem;
    border-radius: 100px;
    right: 0.5rem;
    display:none;
    a {
        text-shadow: 0 0 10px #852049;
    }
    @media (max-width: 1000px) {
        display:flex;
    }
`

export default function Menu() {
    const [nav, showNav] = useState(false);
    return (
    <div>
        <div className="bg"></div>
        <MobileNav>
            <Link to="/">The Singing Mermaid</Link>
            <MenuIcon nav={nav} onClick={() => showNav(!nav)}>
                <div />
                <div />
                <div />
            </MenuIcon>
            <MobileMenu nav={nav}>
                <ul>
                    <li><Link to="/" className="main_links mobile">Home</Link> </li>
                    <li><Link to="/tour/" className="main_links mobile">Where to see us</Link> </li>
                    <li><Link to="/what-the-audience-said/" className="main_links">What the audience said!</Link> </li>
                    <li><Link to="/songs/" className="main_links">Listen to the songs</Link> </li>
                    <li><Link to="/industry/" className="main_links industry">Industry</Link></li>
                </ul>
            </MobileMenu>
        </MobileNav>        
        <menu>
            <li><Link to="/" className="main_links mobile">Home</Link> </li>
            <li><Link to="/tour/" className="main_links mobile">Where to see us</Link> </li>
            <li><Link to="/what-the-audience-said/" className="main_links">What the audience said!</Link> </li>
            <li><Link to="/songs/" className="main_links">Listen to the songs</Link> </li>
            <li><Link to="/industry/" className="main_links industry">Industry</Link></li>
        </menu>
        <a href="https://www.peterbroadhead.co.uk/" target={"_blank"} rel={"noreferrer"} className={"siteTag"}>Site by Pete</a>
    </div>
    )
  }