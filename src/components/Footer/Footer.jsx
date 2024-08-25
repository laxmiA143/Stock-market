import PropTypes from 'prop-types'
import './Footer.css'

function Footer({ year }) {

  return (
    <footer>
      Copyright &copy; &nbsp;<b>Stock market {year}</b>. All rights reserved.
    </footer>
  )
}

Footer.propTypes = {
  year: PropTypes.number.isRequired,
};
  
export default Footer