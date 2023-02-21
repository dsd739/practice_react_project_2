import React, { Component } from "react";
import Newsitem from "./Newsitem";

export class News extends Component {
  
  constructor() {
    super(); //  Must call super constructor in derived class before accessing 'this' or returning from derived constructor
    this.state = {
      articles: null, // this.articles yani is class ke upper jo array hai vo abb iske state ke pass ja chuka hai
    //  loading: false,
    };
     
  }
  async componentDidMount(){
    let url='https://newsapi.org/v2/top-headlines?country=in&apiKey=46eca8ae2a5247228a16ca209143fb35'
    let data=await fetch(url);
    let parsedata=await data.json();
console.log(parsedata)
    this.setState({articles:parsedata.articles}) 
  }
  render() {
    return (
      <>
        {" "}
        <h2 className="container">NewsMonkey-Top Headlines</h2>
        <div className="container my-3">
          {this.state.articles ?
          this.state.articles.map((e) => {
            // mtlb jo is class ke state mai articles(group of objects) pda hua hai use har object ke liye is jsx ko put kro
            //  console.log(this)   x120 {props: (), context: (), refs: (), updater: (), articles: Array(28) [{...},.......................]
            //   console.log(this.state)    x120 {articles: Array(20) [ {...}, ..................................], Loading: false }{articles: Array(28) [{...},.....
            return (
              <Newsitem
                key={e.title}
                title={e.title}
                description={e.description}
                imageUrl={
                  e.urlToImage
                    ? e.urlToImage
                    : 'Image_not_available.png'
                }
                url={e.url}
              />
            );
          }):console.log("loading")}
        </div>
      </>
    );
  }
}

export default News;
