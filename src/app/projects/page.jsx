import React from 'react';
import CompanyCard from '../../components/CompanyCard/CompanyCard';
import Profile from '../../components/Profile/Profile';

export const metadata = {
  title: 'Portfolio - Projects',
  description: 'The projects page of my portfolio.',
}

const companies = [
  {
    name: "Company 1",
    description: "Description of company 1",
    link: "https://www.company1.com",
  },
  {
    name: "Company 2",
    description: "Description of company 2",
    link: "https://www.company2.com",
  },
  {
    name: "Company 3",
    description: "Description of company 3",
    link: "https://www.company3.com",
  },
  {
    name: "Company 4",
    description: "Description of company 4",
    link: "https://www.company4.com",
  },
  {
    name: "Company 5",
    description: "Description of company 5",
    link: "https://www.company5.com",
  },
  {
    name: "Company 6",
    description: "Description of company 6",
    link: "https://www.company6.com",
  },
];

export default function Projects() {
  return (
    <div>
      <Profile
        title="Projects"
        content="This is a list of the projects I have worked on."
      />

      <div className="company-display">
        {companies.map((company, index) => (
          <CompanyCard
            key={index}
            name={company.name}
            description={company.description}
            link={company.link}
          />
        ))}
      </div>
    </div>
  );
}
