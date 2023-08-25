import React, { useState } from 'react';
import styled from "styled-components"



function Header() {
    const [burgerStatus, setburgerStatus] = useState(false);

    return (
        <Container>
            <a>
                <img src="/images/logo.svg"></img>
            </a>
            <Menu>

                <a href='#'>Model S</a>
                <a href='#'>Model 3</a>
                <a href='#'>Model X</a>
                <a href='#'>Model Y</a>
            </Menu>
            <RightMenu>
                <a href='#'>Shop</a>
                <a href='#'>Tesla Account</a>
            </RightMenu>
            <Custommenu onClick={() => { setburgerStatus(true) }}>
                <i class="fa-solid fa-bars"></i>
            </Custommenu>
            <Burgernav show={burgerStatus}>
                <Customclose onClick={() => { setburgerStatus(false) }}>
                    <i class="fa-solid fa-x"></i>
                </Customclose>

                <li><a href='#'>Existing Inventory</a></li>
                <li><a href='#'>Used Inventory</a></li>
                <li><a href='#'>Trade In</a></li>
                <li><a href='#'>Cyber Truck</a></li>
                <li><a href='#'>RoadSter</a></li>
                <li><a href='#'>Existing Inventory</a></li>
                <li><a href='#'>Existing Inventory</a></li>
            </Burgernav>
        </Container>
    )
}
const Container = styled.div`
    min-height:60px;
    position:fixed;
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:0px 20px;
    top:0;
    right:0;
    left:0;
    z-index:1;

`
const Menu = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    flex:1;
    a{
        font-weight:600;
        text-transform:uppercase;
        padding:0 10px;
        flex-wrap:nowrap;
        
    }    
    @media(max-width:768px)
    {
        display:none;

    }
`
const RightMenu = styled.div`
a{
    font-weight:600;
    text-transform:uppercase;
    margin-right:10px;
    flex-wrap:nowrap;
    
} `
const Custommenu = styled.div`
    cursor:pointer
`
const Burgernav = styled.div`
    position:fixed;
    top:0;
    bottom:0;
    right:0;
    background-color:white;
    width:300px;
    z-index:100;
    list-style:none;
    color:red;
    padding:20px;
    display:flex;
    flex-direction:column;
    transform:${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition:transform 0.2s ease-in;
    li{
        text-align:left;
        padding:15px 0px;
        border-bottom:1px solid rgba(0,0,0,0.2);
        a{
            font-weight:600;
        }
    }
    
`
const Customclose = d.div`
    i{
        float:right;
        cursor:pointer
    }
`

export default Header