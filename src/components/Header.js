/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import styled from "styled-components"
import MenuIcon from '@material-ui/icons/Menu';
function Header() {
    return (
        <Container>
            <a>
                <img src="/images/logo.svg" alt =""/>
            </a>
            <Menu>
                <p>
                    <a href="#">Model S</a>
                </p>
                <p>
                    <a href="#">Model X</a>
                </p>
                <p>
                    <a href="#">Model y</a>
                </p>
                <p>
                    <a href="#">Model 3</a>
                </p>
            </Menu>

            <RightMenu>
               <a href="">Shop</a>
               <a href="">Tesla Account</a>
               <CustomMenu/> 
            </RightMenu>
           
            
        </Container>
    )
}

export default Header

const Container = styled.div`
    min-height:60px;
    position:fixed;
    display: flex;
    align-items: center;
    justify-content = space-between;
    padding: 0 20px;
    top:0;
    left:0;
    right:0;


`

const Menu = styled.div`
    display: flex;
    align-items:center;
    flex: 1;
    justify-content:center;

    a {
        font-weight: 600;
        text-decoration:uppercase;
        padding: 0 10px;
        flex-wrap: nowrap;

    }

    @media(max-width:768px) {
        display: none;
    }


`

const RightMenu = styled.div`
 
    display:flex;
    align-items:center;
    a {
        font-weight: 600;
        text-decoration:uppercase;
        margin-right:10px

    }

`
const CustomMenu = styled(MenuIcon)`
        cursor: pointer; 
`