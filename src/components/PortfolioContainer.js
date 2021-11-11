import React from "react";
import Stock from "./Stock";

function PortfolioContainer({portfolioData, onRemovePortfolio, portfolioStocks}) {
  return (
    <div>
      <h2>My Portfolio</h2>
      {
        portfolioStocks.map((stock) => {
          return <Stock portfolioData={portfolioData} onRemovePortfolio={onRemovePortfolio} key={stock.id} stock={stock}/>
        })
      }
    </div>
  );
}

export default PortfolioContainer;
