import { Link } from "react-router-dom";

export default () => {
  return (
    <section 
      className="text-center p-60 bg-cover bg-center"
      style={{
        backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/3/3b/Cockatiel_%28Nymphicus_hollandicus%29_perched_in_a_tree.jpg')"
      }}
    >
      <div className="max-w-screen-lg mx-auto bg-black bg-opacity-50 p-8 rounded-lg">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-white">
          Welcome to the Best Pet Store!
        </h1>
        <p className="text-xl sm:text-2xl mb-6 text-white">
          Everything your pet needs in one place
        </p>
        <Link 
          to="/pets" 
          className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-full text-lg hover:bg-yellow-500 transition duration-300"
        >
          Shop Now
        </Link>
      </div>
    </section>
  );
};
