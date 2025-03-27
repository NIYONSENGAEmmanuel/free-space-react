import { Link } from "react-router-dom";

const products = [
  { id: 1, name: 'iPhone 15 Pro', price: 999, description: 'A high-end smartphone.', image: 'public/images/download (4).jpeg' },
  { id: 2, name: 'Samsung Galaxy S23', price: 899, description: 'A powerful Android phone.', image: 'public/images/image.png' },
  { id: 3, name: 'Google Pixel 8', price: 799, description: 'A Google flagship device.', image: 'public/images/download (6).jpeg' },
  { id: 4, name: 'OnePlus 11', price: 749, description: 'A fast and smooth experience.', image: 'public/images/OnePlus 11.jpeg' },
  { id: 5, name: 'Xiaomi 13 Pro', price: 699, description: 'Great performance and camera.', image: 'public/images/Xiaomi 13 Pro.jpeg' },
];

const Products = () => {
  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold text-center mb-6">Available Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 shadow-lg rounded-lg">
            <img src={product.image} alt={product.name} className="w-full mb-4 rounded" />
            <h3 className="text-lg font-bold">{product.name}</h3>
            <p className="text-gray-600">${product.price}</p>
            <div className="mt-4 flex justify-between">
              <Link to={`/product/${product.id}`} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                View Details
              </Link>
            
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
