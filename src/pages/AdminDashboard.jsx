import React from "react";
import Header from "../components/Layout/Header"
import MenuForm from "../components/Admin/MenuForm";
import MenuItemList from "../components/Admin/MenuItemList";
import Footer from "../components/Layout/Footer";
import React, { useEffect, useState } from "react";
import { isAdmin } from "../../utils/authUtils";
import { message } from "antd";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {

    const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAdminAccess = async () => {
      const hasAdminAccess = await isAdmin();
      if (!hasAdminAccess) {
        message.error("Access denied. Admins only.");
        navigate("/login"); // Redirect to login or another appropriate page
      } else {
        setLoading(false); // Proceed to render the dashboard
      }
    };

    checkAdminAccess();
  }, [navigate]);

  if (loading) return <p>Loading...</p>;

    return (
        <div>
            <Header />
            <main className="flex-grow p-4 bg-gray-100">
                <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
                <MenuForm />
                <MenuItemList />
            </main>
            <Footer />
        </div>
    )
}

export default AdminDashboard;