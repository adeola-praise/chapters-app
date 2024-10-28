import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import { Dish1, Dish2, Dish3 } from '../assets';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow flex flex-col items-center justify-center bg-gray-100 p-4">
        <section className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Welcome to Our Restaurant
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Enjoy the best dishes made with fresh ingredients and love.
          </p>
          <Link to="/menu">
            <Button type="primary" size="large" className="rounded-full">
              View Menu
            </Button>
          </Link>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Featured Dishes
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {/* Example menu items */}
            <div className="bg-white shadow-md rounded-lg p-4">
              <img src={Dish1} alt="Dish 1" className="rounded-md mb-2" />
              <h3 className="font-bold">Cheese Pizza</h3>
              <p className="text-gray-600">$15.99</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4">
              <img src={Dish2} alt="Dish 2" className="rounded-md mb-2" />
              <h3 className="font-bold">Gaurrent Pizza</h3>
              <p className="text-gray-600">$12.99</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4">
              <img src={Dish3} alt="Dish 3" className="rounded-md mb-2" />
              <h3 className="font-bold">Hamburger</h3>
              <p className="text-gray-600">$10.99</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
