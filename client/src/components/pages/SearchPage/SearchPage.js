import React from "react";
import { Fragment } from 'react';
import {
    Col,
    Container,
    Row
} from "reactstrap";
import Navigation from "../../Navigation";
import Header from "../../Header";
import Search from "../../Search";
import Footer from "../../Footer";

export default class SearchPage extends React.Component {

    render() {
        return (
            <Fragment>
                <Container>
                    <Row>
                        <Col sm="12">
                            <Navigation />
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="12 d-flex justify-content-center">
                            <Header />
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="12">
                            <Search></Search>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="12">
                            <Footer />
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }

}