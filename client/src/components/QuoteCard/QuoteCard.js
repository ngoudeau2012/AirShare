import React from "react";
import "./QuoteCard.css";

function QuoteCard() {

    return (
        <div>
          <div></div>
          <div className="card">
            <div className="card-header">
            Our inspiration for today...
        </div>
        <div className="card-body">
        <blockquote className="blockquote mb-0">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
            <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
        </blockquote>
</div>
</div>
</div>
    );
}

export default QuoteCard;