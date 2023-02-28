import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Loader from "./Loader";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    category: "general",
  };
  static propTypes = {
    category: PropTypes.string,
  };

  constructor() {
    super(); //  Must call super constructor in derived class before accessing 'this' or returning from derived constructor
    this.state = {
      articles: null, // this.articles yani is class ke upper jo array hai vo abb iske state ke pass ja chuka hai (pehle tha)
      loading: false,
      page: 1,
      totalNews: null,
    };
  }
  /* forfeching = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=46eca8ae2a5247228a16ca209143fb35&pagesize=19&page=${this.state.page}`;
    let data = await fetch(url);
    let parsedata = await data.json();
    console.log(parsedata);
    this.setState({
      articles: parsedata.articles,
      totalNews: parsedata.totalResults,
      loading: false,
    });
  }; */

  async componentDidMount() {
    this.setState({ loading: true });
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=46eca8ae2a5247228a16ca209143fb35&pagesize=19&page=${this.state.page}`;
    let data = await fetch(url);
    let parsedata = await data.json();
    this.setState({
      articles: parsedata.articles,
      totalNews: parsedata.totalResults,
      loading: false,
    });
  }

  /* handlepreviousclick = async () => {
    this.setState({ loading: true });
    await this.setState({
      page: this.state.page - 1,
    });
    this.forfeching();
  };
  handlenextclick = async () => {
    this.setState({ loading: true });
    await this.setState({
      page: this.state.page + 1,
    });
    this.forfeching();
  };*/
  fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=46eca8ae2a5247228a16ca209143fb35&pagesize=19&page=${this.state.page + 1}`;
    this.setState({
      page: this.state.page + 1,
      loading: true,
    });
    let data = await fetch(url);
    let parsedata = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedata.articles),
      totalNews: parsedata.totalResults,
      loading: false,
    });
    console.log(this.state.page)
  };

  render() {
    return (
      <>
        {this.state.loading && <Loader />}
        <h2 className="container heading">NewsMonkey-Top Headlines</h2>
        <div className="container my-3">
          {this.state.articles && (
            <InfiniteScroll
              dataLength={this.state.totalNews}
              next={this.fetchMoreData}
              style={{ width: "90vw",display:'flex', 'flex-flow': 'row wrap','justifyContent': 'space-between' }} //To put endMessage and loader to the top.
              hasMore={this.state.page * 19 <= this.state.totalNews}
              loader={<h4>Loading...</h4>}
              scrollableTarget="scrollableDiv"
            >
              {this.state.articles.map((e) => {
                // console.log(e);
                // mtlb jo is class ke state mai articles(group of objects) pda hua hai use har object ke liye is jsx ko put kro
                //  console.log(this)   x120 {props: (), context: (), refs: (), updater: (), articles: Array(28) [{...},.......................]
                //   console.log(this.state)    x120 {articles: Array(20) [ {...}, ..................................], Loading: false }{articles: Array(28) [{...},.....
                return (
                  <Newsitem
                    key={e.title}
                    title={e.title}
                    description={e.description}
                    imageUrl={
                      e.urlToImage ? e.urlToImage : "Image_not_available.png"
                    }
                    url={e.url}
                  />
                );
              })}
            </InfiniteScroll>
          )}
        </div>
        {/* <div className="bttns container">
          <button
            type="button"
            disabled={this.state.page <= 1}
            onClick={this.handlepreviousclick}
            className="btn btn-dark"
          >
            &larr; Previous
          </button>
          <button
            disabled={this.state.page * 19 > this.state.totalNews}
            type="button"
            onClick={this.handlenextclick}
            className="btn btn-dark"
          >
            Next &rarr;
          </button>
        </div> */}
      </>
    );
  }
}

export default News;
