import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import './StockList.css'

function StockList({ url }) {
  const [stocks, setStocks] = useState(url);
  const [selectedStock, setSelectedStock] = useState(null);
  const [detailsVisible, setDetailsVisible] = useState(false)

  const handleDetailsClick = (stock) => {
    if (selectedStock === stock) {
        setSelectedStock(null);
        setDetailsVisible(false);
    } else {
        setSelectedStock(stock);
        setDetailsVisible(true);
    }
  };

  return (
    <div className='container'>
      <h1>Stock List Companies</h1>
      <div className="stock-slider">
        {stocks.map((stock) => (
          <div key={stock.symbol} className="stock-card">
            <h3>
              {stock.name} ({stock.symbol})
            </h3>
            <p>Price: ${stock.price}</p>
            <p className={stock.change.startsWith('+') ? 'profit' : 'loss'}>
              {stock.change} ({stock.percentChange})
            </p>
            <button className="details-button" onClick={() => handleDetailsClick(stock)}>
              {selectedStock === stock && detailsVisible ? 'Hide Details' : 'Show Details'}
            </button>
            <div>
              <button className='purchase-button'>Buy</button>
              <button>Sell</button>
            </div>
          </div>
        ))}
      </div>
      {selectedStock && detailsVisible && (
        <div className="stock-details">
          <h2>Details for - {selectedStock.name} ({selectedStock.symbol})</h2>
          <table>
            <tbody>
              <tr>
                <td>Price</td>
                <td>&nbsp; ${selectedStock.price}</td>
              </tr>
              <tr>
                <td>Change</td>
                <td className={selectedStock.change.startsWith('+') ? 'profit' : 'loss'}>&nbsp; {selectedStock.change}</td>
              </tr>
              <tr>
                <td>Percent Change</td>
                <td className={selectedStock.change.startsWith('+') ? 'profit' : 'loss'}>&nbsp; {selectedStock.percentChange}</td>
              </tr>
              <tr>
                <td>Volume</td>
                <td>&nbsp; {selectedStock.volume}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

StockList.propTypes = {
  url: PropTypes.string.isRequired,
};

export default StockList
