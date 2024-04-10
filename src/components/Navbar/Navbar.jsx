import './Navbar.css';
import PropTypes from 'prop-types';
Navbar.propTypes = {
  options: PropTypes.object,
};
function Navbar({ options }) {
  return (
    <nav data-testid="nav" className={'navbar'}>
      <ul data-testid="ul" className="navbar ul">
        {options?.map((option, index) => (
          <li key={index} data-testid={'li${index}'}>
            <a href={option.path} className="link" data-testid={'${index}'}>
              {option.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

Navbar.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Navbar;
