import { useParams } from 'react-router-dom';
import { useState } from 'react';

// Sample Product Data
const products = [
  { id: 1, name: 'iPhone 15 Pro', price: 999, description: 'A high-end smartphone.', image: 'public/images/iPhone 15 Pr.jpeg' },
  { id: 2, name: 'Samsung Galaxy S23', price: 899, description: 'A powerful Android phone.', image: 'public/images/Samsung Galaxy S23.jpeg' },
  { id: 3, name: 'Google Pixel 8', price: 799, description: 'A Google flagship device.', image: 'public/images/Google Pixel 8.jpeg' },
  { id: 4, name: 'OnePlus 11', price: 749, description: 'A fast and smooth experience.', image: 'public/images/OnePlus 11.jpeg' },
  { id: 5, name: 'Xiaomi 13 Pro', price: 699, description: 'Great performance and camera.', image: 'public/images/Xiaomi 13 Pro.jpeg' },
];

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="p-4 max-w-lg mx-auto">
      {product ? (
        <div className="border p-4 rounded-lg shadow-md">
          <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded" />
          <h2 className="text-2xl font-semibold">{product.name}</h2>
          <p className="text-lg">${product.price}</p>
          <p className="mt-2">{product.description}</p>
          <button 
            onClick={() => setShowForm(true)}
            className="bg-blue-500 text-white py-2 px-4 rounded mt-2 w-full hover:bg-blue-600">
            Buy Now
          </button>
          {showForm && (
            <div className="mt-4 border p-4 rounded">
              <h3 className="text-lg font-bold">Payment Details</h3>
              <p>Name: Niyonsenga Emmanuel</p>
              <p>Phone: 0786104974</p>
              <p>Amount: ${product.price}</p>
              <form>
                <div className="mt-2">
                  <label className="block mb-1">Payment Method:</label>
                  <select className="border p-2 w-full rounded">
                    <option value="credit-card">Credit Card</option>
                    <option value="mobile-money">Mobile Money</option>
                    {/* Ongeraho izindi options zishoboka */}
                  </select>
                </div>
                <button 
                  type="submit" 
                  className="bg-green-500 text-white py-2 px-4 rounded mt-4 hover:bg-green-600">
                  Confirm Payment
                </button>
              </form>
            </div>
          )}
        </div>
      ) : (
        <p>Product not found.</p>
      )}
    </div>
  );
};

export default ProductDetail;
