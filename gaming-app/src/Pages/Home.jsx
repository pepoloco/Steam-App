import React, { useEffect, useState } from 'react';
import GenreList from '../Components/GenreList';
import GlobalAPI from '../Services/GlobalAPI';
import Banners from '../Components/Banners';
import TrendingGames from '../Components/TrendingGames';

const Home = () => {
  const [allGames, setAllGamesList] = useState();

  useEffect(() => {
    allgamesList();
  }, []);

  const allgamesList = () => {
    GlobalAPI.getGames.then((resp) => {
      setAllGamesList(resp.data.results);
    });
  };

  return (
    <div className='grid grid-cols-4 px-5'>
      <div className='h-full hidden md:block'>
        <GenreList />
      </div>
      <div className='col-span-4 md:col-span-3'>
        {allGames?.length > 0 ?
          <div>
            <Banners gameBanner={allGames[0]} />
            <TrendingGames  gameList={allGames}/>
          </div>
          : null}
      </div>
    </div>
  )

};

export default Home;
