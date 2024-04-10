import React from 'react';
import ArticleCard from '../components/ArticleCard/ArticleCard.jsx';
import SignupWidget from '../components/SkillsWidget/SignupWidget.jsx';
import './page.css';



const articles = [
  {
    date: 'Dec 25, 2023',
    title: 'Miguel Squad in the house',
    content: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
    link: 'https://medium.com/the-research-nest/everything-you-need-to-know-about-react-ab24da4275ea',
  },
  {
    date: 'Dec 25, 2023',
    title: 'Lorem ipsum dolor sit amet',
    content: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
    link: 'https://medium.com/the-research-nest/everything-you-need-to-know-about-react-ab24da4275ea',
  },
  {
    date: 'Sep 2, 2020',
    title: 'Lorem ipsum dolor sit amet',
    content: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
    link: 'https://medium.com/javascript-scene/the-missing-introduction-to-react-62837cb2fd76',
  },
];

const Home = () => {
  return (
    <div className={'articles'}>
      {articles.map((article, index) => (
        <ArticleCard
          key={index}
          date={article.date}
          title={article.title}
          content={article.content}
          link={article.link}
        />
      ))}

  <SignupWidget
        title={'Stay up to date'}
        content={'Get notified when I publish something new, and unsubscribe at any time.'}
      />
    </div>


  );
};

export default Home;
