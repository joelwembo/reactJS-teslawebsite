import React from 'react';
import styled from "styled-components";
import Section from './Section';

function Home() {
    return (
        <Container>
            <Section 
                title = "Model s"
                description ="Order Online for Touchless Delivery"
                backgroundImg ="model-s.jpg"
                leftBtnText ="Custom Order"
                rightBtnText = "Existing Inventory"
            
            />
            <Section
                title = "Model y"
                description ="Order Online for Touchless Delivery"
                backgroundImg ="model-y.jpg" 
                leftBtnText ="Custom Order"
                rightBtnText = "Existing Inventory"
            />
            <Section
                title = "Model x"
                description ="Order Online for Touchless Delivery"
                backgroundImg ="model-x.jpg" 
                leftBtnText ="Custom Order"
                rightBtnText = "Existing Inventory"
            
            
            />

              <Section
                title = "Solar for new Roof"
                description ="Order Online for Touchless Delivery"
                backgroundImg ="solar-roof.jpg" 
                leftBtnText ="Order Now"
                rightBtnText = "Learn"
            
            
              />

                <Section
                title = "Accessories"
                description ="Order Online for Touchless Delivery"
                backgroundImg ="accessories.jpg" 
                leftBtnText ="Order Now"
                        
                />

                <Section
                title = "Solar Panel"
                description ="Lowest Cost Solar Panels in America"
                backgroundImg ="solar-panel.jpg" 
                leftBtnText ="Custom Order ?"
                rightBtnText = "Learn"

                        
                />

        </Container>
    )
}

export default Home
 
const Container = styled.div`
    height: 100vh;
    z-index: 10;
    
    `
