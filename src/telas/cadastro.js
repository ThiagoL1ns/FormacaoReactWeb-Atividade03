import React from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Cadastro() {
    return (
        <Container className='center'>
            <Row className='main'>
                <Col className='bloco'>
                    <img
                        src="./logo512.png"
                    />
                </Col>
                <Col className='bloco'>
                    <Form action='/'>
                        <h2>Cadastro de Usuário</h2>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Informe seu nome" required/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Informe seu e-mail" required/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Informe sua senha" required/>
                        </Form.Group>

                        <Link to="/"><Button variant="primary" type="submit" size='lg'>
                            Cadastrar
                        </Button></Link> 

                    </Form>

                </Col>
            </Row>
        </Container>
    );
}
export default Cadastro;