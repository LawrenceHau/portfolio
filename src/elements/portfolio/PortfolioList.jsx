import React, { Component } from "react";
import { Link } from "react-router-dom";
const Portfolio_image = (
  <img
    src="/assets/images/portfolio/portfolio-4.jpg"
    alt="React Creative Agency"
  />
);
const Portfolio_image2 = (
  <img
    src="/assets/images/portfolio/portfolio-5.jpg"
    alt="React Creative Agency"
  />
);
const Portfolio_image3 = (
  <img
    src="/assets/images/portfolio/portfolio-6.jpg"
    alt="React Creative Agency"
  />
);

const PortfolioListContent = [
  {
    image: Portfolio_image,
    category: "Development",
    title: "Porto",
    description: "Porto was created for everyone to showcase their work.",
    url: "http://porto-app.herokuapp.com/",
  },
  {
    image: Portfolio_image2,
    category: "Development",
    title: "Trivia Game",
    description: "Designed and developed Trivia Game with cool features.",
    url: "https://lawrencehau.github.io/TriviaGame/",
  },
  {
    image: Portfolio_image3,
    category: "Development",
    title: "Random Recipe Generator",
    description: "Search for a drink or generate random drink with recipe.",
    url: "https://cocktail-db-generator.herokuapp.com/",
  },
];

class PortfolioList extends Component {
  render() {
    const { column, styevariation } = this.props;
    const list = PortfolioListContent.slice(0, this.props.item);
    return (
      <React.Fragment>
        {list.map((value, index) => (
          <div className={`${column}`} key={index}>
            <div className={`im_portfolio ${styevariation}`}>
              <div className="thumbnail_inner">
                <div className="thumbnail">
                  <Link to="/portfolio-details">{value.image}</Link>
                </div>
              </div>
              <div className="content">
                <div className="inner">
                  <div className="portfolio_heading">
                    <div className="category_list">
                      <Link to="/portfolio-details">{value.category}</Link>
                    </div>
                    <h4 className="title">
                      <Link to="/portfolio-details">{value.title}</Link>
                    </h4>
                  </div>
                  <div className="portfolio_hover">
                    <p>{value.description}</p>
                  </div>
                </div>
              </div>
              <a
                className="transparent_link"
                target="_blank"
                href={value.url}
              ></a>
            </div>
          </div>
        ))}
      </React.Fragment>
    );
  }
}
export default PortfolioList;
