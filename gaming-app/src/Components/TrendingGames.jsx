import React, { useEffect } from 'react'

function TrendingGames({ gameList }) {
    useEffect(() => {
        console.log(gameList);
    }, [])
    return (
        <div className='mt-5 hidden md:block'>
            <h2 className='font-bold text-[30px] dark:text-white'>Trending Games</h2>
            <div className='md:grid md:grid-cols-3 lg:grid-cols-4 mt-5 gap-3'>
                {gameList.map((game, index) => index < 4 && (
                    < div className='bg-[#76a8f75e] rounded-lg group
                    hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer'>
                        <img src={game.background_image} className='h-[270px] rounded-top object-cover' />
                        <h2 className='dark:text-white text-[20px] font-bold'>{game.name}</h2>
                    </div>
                ))}
            </div >
        </div>
    )
}

export default TrendingGames