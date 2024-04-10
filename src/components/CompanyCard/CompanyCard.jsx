import './CompanyCard.css';
import PropTypes from 'prop-types';

const CompanyCard = ({ name, description, link }) => {
  return (
<div className="company-card">
<h2 className={'company-name'}>{name}</h2>
<p className={'company-description'}>{description}</p>
<a href={link} className={'company-link'}>Visit Website</a>
</div>
  );
}

CompanyCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export
 default CompanyCard;
