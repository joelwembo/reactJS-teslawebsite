/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react'
import styled from "styled-components"
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
function Header() {
    const [burgerStatus, setBurgerStatus] = useState(false);
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
               <CustomMenu onClick={()=>setBurgerStatus(true)}/> 
            </RightMenu>
            <BurgerNav show={burgerStatus}>
                <CloseWrapper>
                 <CustomClose onClick={()=>setBurgerStatus(false)} />
                </CloseWrapper>
                
                <li><a href=""/>Existing Inventory</li>
                <li><a href=""/>Used Inventory</li>
                <li><a href=""/>Trade-in</li>
                <li><a href=""/>Contact US</li>
                <li><a href=""/>Trade-in</li>
                <li><a href=""/>Contact US</li>
                <li><a href=""/>Order Now</li>
                <li><a href=""/>Faq</li>
                


            </BurgerNav>
                    
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
    z-index: 1;


`

const Menu = styled.div`
    display: flex;
    align-items:center;
    flex: 1;
    justify-content:center;

    a {
        font-weight: 800;
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

const BurgerNav = styled.div`  
    position: fixed;
    top:0;
    bottom: 0;
    right:0;
    background:white;
    width: 300px;
    z-index: 16;
    list-style: none;
    padding:20px;
    display: flex;
    text-align:start;
    flex-direction:column;
    transform: ${props => props.show ? 'translateX(0)':
                            'translateX(100%)'};
    transition: transform 0.65s ease-in ease-out    ;                    

    li {
        padding: 15px 0;
        border-bottom: 1px solid rgba(0,0,0,.2)

        a {
            font-wright: 600;

        }
    }


`

const CustomClose = styled(CloseIcon)`
    cursor: pointer

`

const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;

`

