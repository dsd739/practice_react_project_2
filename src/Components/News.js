import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Loader from "./Loader";

export class News extends Component {
  constructor() {
    super(); //  Must call super constructor in derived class before accessing 'this' or returning from derived constructor
    console.log("in the constructerr");
    this.state = {
      articles: null, // this.articles yani is class ke upper jo array hai vo abb iske state ke pass ja chuka hai
      loading: false,
      page: 1,
      totalNews: null,
    };
  }
  async componentDidMount() {
    this.setState({ loading: true });
    console.log("in the cdm first");
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=46eca8ae2a5247228a16ca209143fb35&pagesize=15&page=${this.state.page}`;
    console.log(url);
    let data = await fetch(url);
    let parsedata = await data.json();
    console.log(parsedata);
    this.setState({
      articles: parsedata.articles,
      totalNews: parsedata.totalResults,
      loading: false,
    });
    console.log("in the cdm last");
  }

  handlepreviousclick = async () => {
    this.setState({ loading: true });
    console.log("in the privious first");
    console.log("privious clicked");
    await this.setState({
      page: this.state.page - 1,
    });
    console.log(this.state.page);
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=46eca8ae2a5247228a16ca209143fb35&pagesize=15&page=${this.state.page}`;
    console.log(url);
    let data = await fetch(url);
    let parsedata = await data.json();
    console.log(parsedata);
    this.setState({
      articles: parsedata.articles,
      loading: false,
    });
    console.log("in the privious last");
  };
  handlenextclick = async () => {
    this.setState({ loading: true });
    console.log("next click");
    console.log("in the next first");
    await this.setState({
      page: this.state.page + 1,
    });
    console.log(this.state.page);
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=46eca8ae2a5247228a16ca209143fb35&pagesize=15&page=${this.state.page}`;
    console.log(url);
    let data = await fetch(url);
    let parsedata = await data.json();
    console.log(parsedata);
    this.setState({
      articles: parsedata.articles,
      loading: false,
    });
    console.log("in the next last");
  };

  render() {
    return (
      <>
        {this.state.loading && <Loader />}
        <h2 className="container">NewsMonkey-Top Headlines</h2>
        <div className="container my-3">
          {this.state.articles
            ? this.state.articles.map((e) => {
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
              })
            : console.log("loading")}
        </div>
        <div className="bttns container">
          <button
            type="button"
            disabled={this.state.page <= 1}
            onClick={this.handlepreviousclick}
            className="btn btn-dark"
          >
            &larr; Previous
          </button>
          <button
            disabled={this.state.page * 15 > this.state.totalNews}
            type="button"
            onClick={this.handlenextclick}
            className="btn btn-dark"
          >
            Next &rarr;
          </button>
        </div>
      </>
    );
  }
}

export default News;
