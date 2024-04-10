import React from 'react';
import './Profile.css';
import PropTypes from 'prop-types';

const Profile = ({ title, content }) => {
  return (
<div data-testid={"profile"} className="profile-4">
<div className="profile-4-header">
<h1 data-testid={"profileTitle"}>{title}</h1>
</div>
<p data-testid={"profileContent"}>{content}</p>
</div>
  );
}

Profile.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export
 default Profile;
