import React, { useEffect, useState } from "react";
import Header from "../components/Layout/Header";
import { Button, Card } from "antd";
import Footer from "../components/Layout/Footer";
import menuService from "../services/menuService";

const MenuPage = () => {
    const [menuItems, setMenuItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMenuItems =async () => {
            try {
                const data = await menuService.getMenuItems(); //Fetch menu items
                setMenuItems(data)
            } catch (error) {
                console.error('Erro fetching menu items:', error);
            } finally {
                setLoading(false)
            }
        };

        fetchMenuItems();
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p>Loading menu...</p>
            </div>
        );
    }

    return (
        <div className="flex flex-col min-h-screen">
            <Header />

            <main className="flex-grow p-4 bg-gray-100">
                <h1 className="text-3xl font-bold text-center mb-8">Menu</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {menuItems.map((item) => (
                        <Card key={item.id} className="shadow-md">
                        <img src={item.imageUrl} alt={item.name} className="w-full h-40 object-cover mb-2 rounded"/>
                        <h3 className="font-bold text-lg">{item.name}</h3>
                        <p className="text-gray-600 mb-2">{item.description}</p>
                        <p className="font-semibold text-xl">${item.price.toFixed(2)}</p>
                        <Button type="primary" className="mt-2">Add to Cart</Button>
                    </Card>
                    ))}
                </div>
            </main>

            <Footer />
        </div>
    )
}


export default MenuPage;