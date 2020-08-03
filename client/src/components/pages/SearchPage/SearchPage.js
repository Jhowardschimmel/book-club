import React from "react";
import { Fragment } from "react";
import { Col, Container, Row } from "reactstrap";
import { debounce } from "lodash";

import API from "utils/API";
import Card from "components/Card";
import Navigation from "components/Navigation";
import Header from "components/Header";
import Search from "components/Search";
import Footer from "components/Footer";

export default class SearchPage extends React.Component {
  state = {
    search: "",
    results: [],
    resultsTotalLength: 0,
    error: "",
    title: "",
    imageLink: "",
    description: "",
    authors: "",
  };

  constructor(props) {
    super(props);
    this.setSearchInput = this.setSearchInput.bind(this);
  }

  async componentDidMount() {
    const searchResponse = await API.searchBooks();
    const results = searchResponse.data.items;
    this.setState({
      results,
    });
  }

  async componentDidUpdate(prevProps, prevState) {
    if (this.state.search !== prevState.search) {
      const searchQuery = this.state.search;
      const searchResponse = await API.searchBooks(searchQuery);
      const results = searchResponse.data.items;
      this.setState({
        results,
      });
    }
  }

  setSearchInput(e) {
    e.persist();

    const debouncedSearch = this.setDebouncedSearch(e);
    debouncedSearch();
  }

  setDebouncedSearch(e) {
    const setSearchDebounced = debounce(() => {
      const search = e.target.value;
      this.setState({
        search,
      });
    }, 300);
    return setSearchDebounced;
  }

  makeSearchDisplay() {
    if (this.state.results) {
      const searchDisplay = this.state.results.map((res, index) => {
        const thumbnail = res.volumeInfo.imageLinks
          ? res.volumeInfo.imageLinks.thumbnail
          : "http://www.fillmurray.com/128/188";
        return (
          <Card
            title={res.volumeInfo.title}
            thumbnail={thumbnail}
            authors={res.volumeInfo.authors}
            description={res.volumeInfo.description}
            key={index}
          />
        );
      });
      return searchDisplay;
    }
    return (
      <Card
        title={"A Book For No Matching Search Results"}
        thumbnail="http://www.fillmurray.com/128/188"
        authors="Bill Murray"
        description="The book for you when there are no other matching books."
      />
    );
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
              <Search setSearchInput={this.setSearchInput} />
            </Col>
          </Row>
          <Row>
            <Col sm="12">{this.makeSearchDisplay()}</Col>
          </Row>
          <Row>
            <Col sm="12">
              <Footer />
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}
