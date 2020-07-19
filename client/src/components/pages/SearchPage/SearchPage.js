import React from "react";
import API from "../../../utils/API";
import { Fragment } from 'react';
import {
    Col,
    Container,
    Row
} from "reactstrap";
import Card from "../../Card";
import Navigation from "../../Navigation";
import Header from "../../Header";
import Search from "../../Search";
import Footer from "../../Footer";

export default class SearchPage extends React.Component {
    state = {
        search: "",
        results: [],
        error: "",
        title: "",
        imageLink: "",
        description: "",
        authors: ""
    };

    componentDidMount() {
        API.getTheHobbit().then(res => this.setState({
            results: res,
            title: res.data.items[0].volumeInfo.title,
            imageLink: res.data.items[0].volumeInfo.imageLinks.thumbnail,
            description: res.data.items[0].volumeInfo.description,
            authors: res.data.items[0].volumeInfo.authors
        }))
    }

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
                            <Card title = {this.state.title}
                            imageLink = {this.state.imageLink}
                            authors = {this.state.authors} description = {this.state.description} />
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