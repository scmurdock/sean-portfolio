import './UsesSection.css';
import PropTypes from 'prop-types';
import UsesCard from '../UsesCard/UsesCard';

const UsesSection = ({ items }) => {
return (
<section className={"uses-section"}>
  <div className={"uses-section-content"}>
    {items.map((group, index) => (
    <div className="uses-section-group" key={index}>
      <h2 className="uses-section-group-heading">{group.groupName}</h2>
      <div className="uses-section-group-content">
        {group.items.map((item, i) => (
        <UsesCard
        key={i}
        title={item.title}
        content={item.description}
        />
        ))}
        </div>
      </div>
    ))}
  </div>
  </section>
);
};

UsesSection.propTypes = {
items: PropTypes.arrayOf(
  PropTypes.shape({
  groupName: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    })
  ),
  })
),
};

export default UsesSection;
