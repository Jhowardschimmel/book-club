import React from "react";
import { Fragment } from 'react';
import {
    Col,
    Container,
    Row,
    Form,
    FormGroup,
    Label,
    Input
} from "reactstrap";

export default class Search extends React.Component {

    render() {
        return (
            <Container>
                <Row>
                    <Col sm="12">
                        <Form>
                            <FormGroup>
                                <Label for="exampleSearch">Search</Label>
                                <Input
                                    type="search"
                                    name="search"
                                    id="exampleSearch"
                                    placeholder="search placeholder"
                                />
                            </FormGroup>
                        </Form>

                    </Col>
                </Row>
            </Container>
        )
    }

}