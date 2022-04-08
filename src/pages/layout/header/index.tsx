import React, { useState } from "react";
import LogoImg from "../../../assets/background/logo.png";
import {
  HeaderContainer,
} from "./index.styled";


const Header = () => {
  const [ismenu, SetIsMenu] = useState<boolean>(false);
  return (
    <HeaderContainer>
      <div className="container">
        <div className="logo">
          <a href="/">
            <img src={LogoImg} alt="Logo"/>
          </a>
        </div>

        <div className="hamburger" onClick={()=> {
          if (ismenu) {
            SetIsMenu(false);
            document.querySelector("#mobilemenu")?.classList.remove("visible");
          } else {
            SetIsMenu(true);
            document.querySelector("#mobilemenu")?.classList.add("visible");
          }
          
        }}>
          <svg viewBox="0 0 18 15">
            <path fill="#3C4E5A" d="M18,1.484c0,0.82-0.665,1.484-1.484,1.484H1.484C0.665,2.969,0,2.304,0,1.484l0,0C0,0.665,0.665,0,1.484,0 h15.031C17.335,0,18,0.665,18,1.484L18,1.484z"></path>
            <path fill="#3C4E5A" d="M18,7.516C18,8.335,17.335,9,16.516,9H1.484C0.665,9,0,8.335,0,7.516l0,0c0-0.82,0.665-1.484,1.484-1.484 h15.031C17.335,6.031,18,6.696,18,7.516L18,7.516z"></path>
            <path fill="#3C4E5A" d="M18,13.516C18,14.335,17.335,15,16.516,15H1.484C0.665,15,0,14.335,0,13.516l0,0 c0-0.82,0.665-1.484,1.484-1.484h15.031C17.335,12.031,18,12.696,18,13.516L18,13.516z"></path>
          </svg>
        </div>
      </div>

      <div className="mobile-menu" id="mobilemenu">
        <div className="menu">
          <ul>
            <li><a href="/app/">Earn (BSC)</a></li>
            <li><a href="/polygon/">Earn (Polygon)</a></li>
            <li><a href="/fantom/">Earn (Fantom)</a></li>
            <li><a href="/avalanche/">Earn (Avalanche)</a></li>
            <li><a href="/okexchain/">Earn (OKEx)</a></li>
            <li><a href="/marketplace/">Marketplace</a></li>
            <li><a href="/statistics/">Statistics</a></li>
            <li><a href="/create-lp/">Create LP</a></li>
            <li><a href="/tutorials/">Tutorials</a></li>
            <li><a href="https://docs.swamp.finance/">Docs</a></li>
            <li><a href="/buy-bnb/">Buy BNB</a></li>
            <li><a href="/download-wallet/">Download Wallet</a></li>
          </ul>
        </div>
      </div>
    </HeaderContainer>
  );
};

export default Header;
