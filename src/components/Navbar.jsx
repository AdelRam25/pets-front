import { NavLink } from "react-router-dom";

export default () => {
  return (
    <nav className="bg-[#354018] text-white p-4">
      <div className="max-w-screen-lg mx-auto flex justify-between items-center">
        <div className="text-3xl font-bold">Pet Store</div>
        <ul className="flex gap-6 text-xl">
          <li>
            <NavLink
              className="text-yellow-400 hover:scale-105 border-yellow-400 transition-all duration-300"
              to="/"
              
            >
              Home
            </NavLink>
          </li>
          <li>
            <Link
              className="hover:text-yellow-400 hover:scale-105 transition-all duration-300"
              to="/form"
            >
              Add a pet
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-yellow-400 hover:scale-105 transition-all duration-300"
              to="/pets"
            >
              Shop
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-yellow-400 hover:scale-105 transition-all duration-300"
              to="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

