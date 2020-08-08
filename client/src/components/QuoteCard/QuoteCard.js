import React from "react";
import "./QuoteCard.css";

export default class FetchRandomUser extends React.Component {
    state = {
      loading: true,
      quote: "",
      thoughtAuthor: ""
    };
  
    async componentDidMount() {
      const url = "https://cors-anywhere.herokuapp.com/https://www.forbes.com/forbesapi/thought/uri.json?enrich=true&query=1&relatedlimit=1";
      const response = await fetch(url);
      const data = await response.json();
      this.setState({ quote: data.thought.quote, thoughtAuthor: data.thought.thoughtAuthor.name, loading: false });
    
      console.log(this.state)

    }
  
    render() {
      if (this.state.loading) {
        return <div>loading...</div>;
      }
  
      if (!this.state.quote) {
        return <div>Can't find the inspiration today.</div>;
      }

      return (
        <div>
          <div></div>
          <div className="card" style={{marginBottom: "20px"}}>
            <div className="card-header">
            Our inspiration for today...
        </div>
        <div className="card-body">
        <blockquote className="blockquote mb-0">
            <p>{this.state.quote}</p>
            <footer className="blockquote-footer">{this.state.thoughtAuthor}</footer>
        </blockquote>
</div>
</div>
</div>
    );
  
    }
  }
