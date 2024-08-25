import stockLogo from '../../assets/stock.svg'
import './Header.css'

function Header() {

    return (
      <header>
        <nav>
            <section className="logo">
                <img src={stockLogo} alt="Stock Market Logo" width="32" height="32" />
                <h1>Stock Market</h1>
            </section>
            <section className="menu">
              <ul>
                <li>
                  <a href='#' className='active' title='Home'>Home</a>
                </li>
                <li>
                  <a href='#' title='About'>About</a>
                </li>
                <li>
                  <a href='#' title='Service'>Service</a>
                </li>
                <li>
                  <a href='#' title='Contact Us'>Contact Us</a>
                </li>
              </ul>
            </section>
            <svg className='burger' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
              </svg>
        </nav>
      </header>
    )
  }
  
  export default Header