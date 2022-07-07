import React from 'react';
import SearchBar from '../common/SearchBar';
import Card from '../common/Card';
import cat0 from '../../assets/images/cat0.jpg';
import cat1 from '../../assets/images/cat1.jpg';
import cat2 from '../../assets/images/cat2.jpg';
import cat3 from '../../assets/images/cat3.jpg';
import cat4 from '../../assets/images/cat4.jpg';
import cat5 from '../../assets/images/cat5.jpg';
import cat6 from '../../assets/images/cat6.jpg';
import cat7 from '../../assets/images/cat7.jpg';
import cat8 from '../../assets/images/cat8.jpg';
import cat9 from '../../assets/images/cat9.jpg';
import cat10 from '../../assets/images/cat10.jpg';
import cat11 from '../../assets/images/cat11.jpg';
import cat12 from '../../assets/images/cat12.jpg';
import cat13 from '../../assets/images/cat13.jpg';
import cat14 from '../../assets/images/cat14.jpg';
import cat15 from '../../assets/images/cat15.jpg';
import cat16 from '../../assets/images/cat16.jpg';
import cat17 from '../../assets/images/cat17.jpg';
import cat18 from '../../assets/images/cat18.jpg';
import cat19 from '../../assets/images/cat19.jpg';
import cat20 from '../../assets/images/cat20.jpg';

const catsSources = [
  cat0,
  cat1,
  cat2,
  cat3,
  cat4,
  cat5,
  cat6,
  cat7,
  cat8,
  cat9,
  cat10,
  cat11,
  cat12,
  cat13,
  cat14,
  cat15,
  cat16,
  cat17,
  cat18,
  cat19,
  cat20,
];

function MainPage() {
  return (
    <div className="main-page flex items-center flex-col">
      <SearchBar />
      <div className="w-4/5 gap-4 flex items-center justify-center flex-wrap">
        {catsSources.map((cat) => (
          <Card key={cat.toString()} src={cat} />
        ))}
      </div>
    </div>
  );
}

export default MainPage;
