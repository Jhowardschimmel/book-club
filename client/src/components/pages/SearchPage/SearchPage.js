import React from "react";
import { Fragment } from "react";
import { Col, Container, Row, Spinner } from "reactstrap";
import { debounce } from "lodash";

import InfiniteScroll from "react-infinite-scroll-component";

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
    currentPage: 0,
    error: "",
    title: "",
    imageLink: "",
    description: "",
    authors: "",
    hasMore: true,
    loading: false,
  };

  constructor(props) {
    super(props);
    this.setSearchDebounced = debounce(this.setSearch, 300);
    this.handleSearch = this.handleSearch.bind(this);
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
      try {
        const searchResponse = await API.searchBooks(searchQuery);
        const results = searchResponse.data.items
          ? searchResponse.data.items
          : [];
        const resultsTotalLength = searchResponse.data.totalItems
          ? searchResponse.data.totalItems
          : 0;
        this.setState({
          results,
          resultsTotalLength,
          currentPage: 0,
          hasMore: true,
          loading: false,
        });
      } catch (err) {
        console.log(err);
      }
    }
    if (
      this.state.hasMore &&
      this.state.results.length === this.state.resultsTotalLength
    ) {
      this.setState({
        hasMore: false,
      });
    }
  }

  componentWillUnmount() {
    this.setSearchDebounced.cancel();
  }

  setSearch(e) {
    const search = e.target.value;
    this.setState({
      search,
      loading: true,
      results: [],
    });
  }

  handleSearch(e) {
    e.persist();
    this.setSearchDebounced(e);
  }

  async searchNext() {
    const pageIncrement = 10;
    const currentPage = this.state.currentPage + pageIncrement;
    const nextResults = await API.searchBooks(this.state.search, currentPage);
    const nextResultsDataItems = nextResults.data.items
      ? nextResults.data.items
      : [];
    const results = [...this.state.results, ...nextResultsDataItems];
    const resultsTotalLength = nextResults.data.totalItems;
    this.setState({
      results,
      currentPage,
      resultsTotalLength,
    });
  }

  showEndMessage() {
    if (!this.state.loading) {
      return (
        <h4 style={{ textAlign: "center" }}>
          <b>No More Books To Display!</b>
        </h4>
      );
    }
  }

  makeSearchDisplay() {
    if (this.state.results.length) {
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
    if (this.state.search && !this.state.loading) {
      return (
        <Card
          title={"A Book For No Matching Search Results"}
          thumbnail="http://www.fillmurray.com/128/188"
          authors="Bill Murray"
          description="The book for you when there are no other matching books."
        />
      );
    }
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
              <Search setSearchInput={this.handleSearch} />
            </Col>
          </Row>
          <Row>
            <InfiniteScroll
              dataLength={this.state.results.length}
              next={this.searchNext}
              hasMore={this.state.hasMore}
              loader={
                <Spinner
                  style={{ width: "3rem", height: "3rem" }}
                  type="grow"
                />
              }
              endMessage={this.showEndMessage()}
            >
              <Col sm="12">{this.makeSearchDisplay()}</Col>
            </InfiniteScroll>
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
