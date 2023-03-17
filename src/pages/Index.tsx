import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function Index() {
    return(
        <>
        <Container>
            <Row>
                <Col className="text-center">
                    <h5>Olá! Seja bem vindo(a) ao Hero Database! Acesse as páginas de Heróis e Categorias no menu ao lado!</h5>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default Index;