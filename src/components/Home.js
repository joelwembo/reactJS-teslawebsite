import React from 'react';
import styles from "styled-components";
import Section from './Section';


function Home() {
    return (
        <Container>
            <Section />
        </Container>
    )
}

export default Home

const Container = styles.div`
    height: 100vh;
