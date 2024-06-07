import { useState } from "react";
import { Link } from "react-router-dom";

function Navigation() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button className="p-1 m-0" onClick={() => setOpen(!open)}>
        <svg
          className="mr-4"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 6.66669H35V10H5V6.66669ZM5 18.3334H35V21.6667H5V18.3334ZM5 30H35V33.3334H5V30Z"
            fill="#041526"
          />
        </svg>
      </button>

      {open && (
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 ${open && "block"}`}
          onClick={() => setOpen(false)}
        ></div>
      )}
      <aside
        className={`z-50 fixed left-0 top-0 -translate-x-full w-[300px] h-screen bg-white transition-transform duration-300 ${
          open && "translate-x-0"
        }`}
      >
        <div className="relative py-6">
          <button
            className="p-1 m-0 absolute right-4 top-4"
            onClick={() => setOpen(!open)}
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 6L6 18M6 6L18 18"
                stroke="#041526"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <p className="text-xl border-b-2 border-black pb-2 px-4">
            Navigation
          </p>
          <div className="mt-6 text-base flex flex-col gap-4 px-4">
            <Link to="/app">Main</Link>
            <Link to="/app/templates">Templates</Link>
            <Link to="/app/analysis">Analysis</Link>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default Navigation;
