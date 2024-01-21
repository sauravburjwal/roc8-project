import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import { useEffect, useState } from 'react';
import { getData } from '../utils/utils';
import { WallpaperList } from '../utils/constant';

const RootLayout = () => {
  const randomValue = Math.floor(Math.random() * WallpaperList.length);
  const [wallpaper, setWallpaper] = useState(
    `${WallpaperList[randomValue]} Wallpaper`
  );

  useEffect(() => {
    (async () => {
      const data = await getData(wallpaper);
      setWallpaper(data.hits[0].largeImageURL);
    })();
  }, []);
  return (
    <div
      className="bg-start bg-no-repeat bg-cover h-screen flex flex-col items-center"
      style={{ backgroundImage: `url(${wallpaper})` }}
    >
      <Navbar />
      <Outlet />
    </div>
  );
};

export default RootLayout;
