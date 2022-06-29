import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks, handleStockClick, filter, sortBy }) {
  function handleStocksData() {
    if (filter) return stocks.filter((stock) => stock.type === filter);

    if (sortBy === "Alphabetically") return stocks.sort((stock, nextStock) => (stock.name > nextStock.name) ? 1 : -1);

    if (sortBy === "Price") return stocks.sort((stock, nextStock) => stock.price - nextStock.price)

    return stocks;
  }

  return (
    <div>
      <h2>Stocks</h2>
      { handleStocksData().map((stock) => (
          <Stock key={ stock.id } stock={ stock } onStockClick={ handleStockClick }/>
      )) }
    </div>
  );
}

export default StockContainer;
