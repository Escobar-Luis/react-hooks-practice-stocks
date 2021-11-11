import React, {useEffect, useState} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const[stockData, setStockData]=useState([])
  const[portfolioData, setPortfolioData]=useState([])
  const[sortBy, setSortBy] = useState('Alphabetically')
  const[filterBy, setFilterBy]= useState('Tech')

  useEffect(() => {
    fetch('http://localhost:3001/stocks')
    .then(r=>r.json())
    .then((data) => setStockData(data))
  }, [])

  function handleAddPortfolio (stock) {
    setPortfolioData([...portfolioData, stock])
  }

  function handleRemovePortfolio (removedStock) {
    const newPortfolio = portfolioData.filter((stock) => stock.id !== removedStock.id)
    setPortfolioData(newPortfolio)
  }

  const visibleStocks= stockData.filter((stock) => stock.type === filterBy).sort((a,b) => {
    if (sortBy === 'Alphabetically') {
      return a.name.localeCompare(b.name)
    } 
    else if (sortBy === 'Price') {
      return a.price-b.price
    }
  })

  console.log(visibleStocks)
//we const our states for our sortby and filterby in the maincontainer because our visible stocks is going to need that data to filter & sort by it. We then pass those states down to our search bar as props since they are constantly going to change over time depending on our user input.
  return (
    <div>
      <SearchBar sortBy={sortBy} onChangeSort={setSortBy} filterBy={filterBy} onChangeFilter={setFilterBy}/>
      <div className="row">
        <div className="col-8">
          <StockContainer onAddPortfolio={handleAddPortfolio}stocks={visibleStocks}/>
        </div>
        <div className="col-4">
          <PortfolioContainer portfolioData={portfolioData} onRemovePortfolio={handleRemovePortfolio} portfolioStocks={portfolioData}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
