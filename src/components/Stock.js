import React from "react";

function Stock({portfolioData, stock, onAddPortfolio, onRemovePortfolio}) {
  function handleClick() {
    console.log(portfolioData)
    if (portfolioData === undefined) {
      return onAddPortfolio(stock) 
    }
    else if (portfolioData.includes(stock)) {
      return onRemovePortfolio(stock)
    } 
}

  return (
    <div>
      <div onClick={handleClick} className="card">
        <div className="card-body">
          <h5 className="card-title">{stock.name}</h5>
          <p className="card-text">{stock.price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
