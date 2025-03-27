
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Find Your Perfect Smartphone</h1>
        <p className="text-lg">Shop the latest smartphones at unbeatable prices!</p>
        <Link to="/products" className="mt-4 inline-block bg-yellow-500 text-black px-6 py-2 rounded-md hover:bg-yellow-400">
          Shop Now
        </Link>
      </section>

      {/* Image Carousel */}
      <div className="max-w-4xl mx-auto mt-8 ">
        <Carousel autoPlay infiniteLoop showThumbs={false}>
          <div>
            <img className="w-[50px] h-auto " src="public/images/download (2).jpeg" alt="Phone 1" />
          </div>
          <div>
            <img className="w-[50px] h-auto " src="public/images/455037878_1700648584039228_6605821241560075638_n.jpg" alt="Phone 2" />
          </div>
          <div>
            <img className="w-[50px] h-auto " src="public/images/download (3).jpeg" alt="Phone 3" />
          </div>
          <div>
            <img className="w-[50px] h-auto " src="public/images/471216900_1795178311252921_6108417929883674762_n.jpg" alt="Phone 4" />
          </div>
          <div>
            <img className="w-[50px] h-auto " src="public/images/download (4).jpeg" alt="Phone 5" />
          </div>
          <div>
            <img className="w-[50px] h-auto " src="public/images/475164068_1820908695346549_4608846917571600879_n.jpg" alt="Phone 6" />
          </div>
          <div>
            <img src="public/images/download (6).jpeg" alt="Phone 7" />
          </div>
          <div>
            <img className="w-[50px] h-auto " src="public/images/480383808_1835244417246310_5469075424641235666_n.jpg" alt="Phone 8" />
          </div>
          <div>
            <img className="w-[50px] h-auto " src="public/images/download.jpeg" alt="Phone 9" />
          </div>
          <div>
            <img className="w-[50px] h-auto " src="public/images/image.png" alt="Phone 10" />
          </div>
          <div>
            <img src="public/images/images.jpeg" alt="Phone 11" />
          </div>
        </Carousel>
      </div>

      {/* Featured Products */}
      <section className="py-10">
        <h2 className="text-3xl font-bold text-center mb-6">Featured Phones</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
          {/* Sample Phone 1 */}
          <div className="bg-white p-4 shadow-lg rounded-lg">
            <img src="public/images/download (4).jpeg" alt="Phone 1" className="w-full mb-4"/>
            <h3 className="text-lg font-bold">iPhone 15 Pro Max</h3>
            <p className="text-gray-600">$1,199</p>
          
          </div>
          {/* Sample Phone 2 */}
          <div className="bg-white p-4 shadow-lg rounded-lg">
            <img src="public/images/image.png" alt="Phone 2" className="w-full mb-4"/>
            <h3 className="text-lg font-bold">Samsung Galaxy S23 Ultra</h3>
            <p className="text-gray-600">$1,099</p>
        
          </div>
          {/* Sample Phone 3 */}
          <div className="bg-white p-4 shadow-lg rounded-lg">
            <img src="public/images/download (6).jpeg" alt="Phone 3" className="w-full mb-4"/>
            <h3 className="text-lg font-bold">Google Pixel 8 Pro</h3>
            <p className="text-gray-600">$999</p>
          
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-6">
        <p>&copy; {new Date().getFullYear()} YourPhoneShop. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
