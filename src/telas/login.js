import React from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
    return (
        <Container className='center'>
            <Row>
                <Col className='bloco'>
                    <img      
                        src="./logo512.png"
                    />
                </Col>
                <Col className='bloco'>
                    <Form>
                        <h2>Login</h2>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="E-mail" required/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Senha" required/>
                        </Form.Group>

                        <div className="d-grid gap-2">
                            <Link to='/home'>
                                <Button variant="primary" type="submit" size='lg' className='btn'>
                                    Entrar
                                </Button>
                            </Link>

                            <Link to='/cadastro'><Button variant="danger" type="button" size='lg' className='btn'>
                                Cadastre-se
                            </Button></Link>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}
export default Login;