import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([]);
  const [portfolio, setPortfolio] = useState([]);
  const [filter, setFilter] = useState("");
  const [sortBy, setSortBy] = useState("");

  useEffect(() => {
    fetch('http://localhost:3001/stocks')
      .then((response) => response.json())
      .then((stocksData) => setStocks(stocksData));
  }, []);

  function handleStockClick(stock) {
    if(!portfolio.find((currentStock) => currentStock === stock)){
      setPortfolio([...portfolio, stock]);
    }
  }

  function handleSellStock(stockSold) {
    const updatedPortfolio = portfolio.filter((stock) => stock.id !== stockSold.id);

    setPortfolio(updatedPortfolio);
  }

  function handleFilterChange(filter) {
    setFilter(filter);
  }

  function handleSortChange(sortBy) {
    setSortBy(sortBy);
  }

  return (
    <div>
      <SearchBar onFilterChange={ handleFilterChange } onSortChange={ handleSortChange }/>
      <div className="row">
        <div className="col-8">
          <StockContainer 
            stocks={ stocks } 
            handleStockClick={ handleStockClick } 
            filter={ filter }
            sortBy={ sortBy }
          />
        </div>
        <div className="col-4">
          <PortfolioContainer portfolio={ portfolio } handleSellStock={ handleSellStock }/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
