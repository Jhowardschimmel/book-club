import React from "react";
import { Fragment } from 'react';
import {
    Col,
    Container,
    Row
} from "reactstrap";
import Navigation from "../Navigation";
import Footer from "../Footer";

export default class Main extends React.Component {

    render() {
        return (
            <Container>
                <Row>
                    <Col sm="12">
                        <Navigation />
                    </Col>
                </Row>
                <Row>
                    <Col sm="12 d-flex justify-content-center">
                        Welcome!
                    </Col>
                </Row>
                <Row>
                    <Col sm="12">
                        <Footer />
                    </Col>
                </Row>
            </Container>
        )
    }
}
