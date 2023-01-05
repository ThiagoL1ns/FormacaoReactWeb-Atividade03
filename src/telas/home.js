import React from "react";
import { Container } from 'react-bootstrap';
import './style.css';

function Home() {
    return (
        <Container>
            <div className="center">
                <h1>Tela inicial</h1>
                <img
                    src="./logo512.png"
                />
            </div>
        </Container>
    );
}
export default Home;