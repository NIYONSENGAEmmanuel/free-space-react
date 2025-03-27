import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-between items-center">
      <h1 className="text-2xl font-bold">Phone Store</h1>
      <div>
        <Link to="/" className="mr-4 hover:text-gray-300">Home</Link>
        <Link to="/products" className="hover:text-gray-300 mr-4">Products</Link> 
        <Link to="/signup" className=" hover:text-gray-300">Signup</Link>
      </div>
    </nav>
  );
};

export default Navbar;
