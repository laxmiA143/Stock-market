import Header from './components/Header/Header'
import StockList from './components/Stock/List/StockList'
import Footer from './components/Footer/Footer'
import stockDataUrl from './dummy-data/mockData.json';
import './App.css'

function App() {
  // Using this mock data
  const curYear = new Date().getFullYear();

  return (
    <>
      <Header />
      <StockList url={stockDataUrl} />
      <Footer year={curYear} />
    </>
  )
}

export default App
