import React, { useEffect, useState } from 'react';
import GenreList from '../Components/GenreList';
import GlobalAPI from '../Services/GlobalAPI';
import Banners from '../Components/Banners';
import TrendingGames from '../Components/TrendingGames';
import PopularGames from '../Components/PopularGames';
const Home = () => {
  const [allGames, setAllGamesList] = useState([]);
  const [gameListByGenres, setGameListByGenre] = useState([]);

  useEffect(() => {
    allGamesList();
    getGameListByGenresId(4);
  }, []);

  const allGamesList = () => {
    GlobalAPI.getGames().then((resp) => {
      setAllGamesList(resp.data.results);
      setGameListByGenre(resp.data.results);
    });
  };

  const getGameListByGenresId = (id) => {
    GlobalAPI.getGameListByGenreId(id).then((resp) => {
      console.log('Games by Genre ID:', resp.data.results)
      setGameListByGenre(resp.data.results);
    });
  };

  return (
    <div className='grid grid-cols-4 px-5'>
      <div className='h-full hidden md:block'>
        <GenreList genreID={(genreID) => getGameListByGenresId(genreID)} />
      </div>
      <div className='col-span-4 md:col-span-3'>
        {allGames?.length > 0 && gameListByGenres.length > 0 ?
          < div >
            <Banners gameBanner={allGames[0]} />
            <TrendingGames gameList={allGames} />
            <PopularGames gameList={gameListByGenres} />
          </div>
          : null}
      </div>
    </div >
  )

};

export default Home;