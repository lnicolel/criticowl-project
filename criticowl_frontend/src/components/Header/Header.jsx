import { useState, useEffect } from "react";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import { Link } from "react-router-dom";
import { getUserProfile } from "../../api/api.js";

function Header() {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      getUserProfile(token).then(data => {
        console.log('User data:', data);
        setUserName(data.name);
      }).catch(err => {
        console.error('Failed to fetch user profile', err);
      });
    }
  }, []);

  return (
    <header className="bg-cblue h-[100px] flex">
      <div className="container flex items-center flex-1 justify-between">
        <Navigation />
        <Logo className="h-[60px] w-max ml-[190px]"/>

        <div className="flex gap-4">
          {userName && <span>Welcome, {userName}!</span>}
          <button className="p-1 m-0">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M33.3333 36.6667H30V33.3334C30 30.5719 27.7615 28.3334 25 28.3334H15C12.2385 28.3334 9.99996 30.5719 9.99996 33.3334V36.6667H6.66663V33.3334C6.66663 28.731 10.3976 25 15 25H25C29.6023 25 33.3333 28.731 33.3333 33.3334V36.6667ZM20 21.6667C14.4771 21.6667 9.99996 17.1895 9.99996 11.6667C9.99996 6.14384 14.4771 1.66669 20 1.66669C25.5228 1.66669 30 6.14384 30 11.6667C30 17.1895 25.5228 21.6667 20 21.6667ZM20 18.3334C23.6818 18.3334 26.6666 15.3486 26.6666 11.6667C26.6666 7.98479 23.6818 5.00002 20 5.00002C16.3181 5.00002 13.3333 7.98479 13.3333 11.6667C13.3333 15.3486 16.3181 18.3334 20 18.3334Z"
                fill="#041526"
              />
            </svg>
          </button>

          <Link to='/' className="p-1 m-0">
            <svg
              width="32"
              height="40"
              viewBox="0 0 32 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 31.7708H8.33333V35.7422H28.3333V3.97135H8.33333V7.94271H5V1.98568C5 0.889027 5.7462 0 6.66667 0H30C30.9205 0 31.6667 0.889027 31.6667 1.98568V37.7279C31.6667 38.8246 30.9205 39.7135 30 39.7135H6.66667C5.7462 39.7135 5 38.8246 5 37.7279V31.7708ZM8.33333 17.8711H20V21.8424H8.33333V27.7995L0 19.8568L8.33333 11.9141V17.8711Z"
                fill="#041526"
              />
            </svg>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
