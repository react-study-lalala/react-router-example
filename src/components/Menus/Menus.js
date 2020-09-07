import React from 'react'
import {Link} from "react-router-dom";
import styled from "styled-components";

function Menus() {
    return (
        <Menu>
            <MenuItem><Link to="/">홈</Link></MenuItem>
            <MenuItem><Link to="/boards">게시판</Link></MenuItem>
            <MenuItem><Link to="/profile">프로필</Link></MenuItem>
        </Menu>
    )
}

const Menu = styled.div`
  display: inline-block;
  margin: 10px;
`;

const MenuItem = styled.span`
  width: 100px;
  display:inline-block;
  text-decoration: none;
  color: #000000;
  text-align: center;
  
  &:hover {
    background-color:#ff8250;
    cursor:pointer;
  }
  
  & > a {
    display: block;
    width: 100%;
    text-decoration: none;
  }
  
  &:hover > a {
    color: #FFFFFF;
  }
`;

export default Menus;