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

  constructor(props) {
    super(props)
  }

  render() {
      return (
          <Form>
              <FormGroup>
                  <Label for="exampleSearch">Search For A Book</Label>
                  <Input
                      type="search"
                      name="search"
                      id="exampleSearch"
                      placeholder="The Hobbit"
                      onChange={this.props.setSearchInput}
                  />
              </FormGroup>
          </Form>


      )
  }
}
