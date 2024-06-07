import Header from "../Header/Header";
import { Outlet } from "react-router-dom";

function Main() {
  return (
    <>
      <Header />
      <main className="flex flex-1 container py-10">
        <Outlet />
      </main>
      <footer>footer</footer>
    </>
  );
}

export default Main;
