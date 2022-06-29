import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ portfolio, handleSellStock }) {

  return (
    <div>
      <h2>My Portfolio</h2>
      {
        portfolio.map((item) => (
          <Stock key={ item.id } stock={ item } onStockClick={ handleSellStock }/>
        ))
      }
    </div>
  );
}

export default PortfolioContainer;
