import { Button, List, message } from 'antd'
import React, { useEffect, useState } from 'react'
import menuService from '../../services/menuService';


const MenuItemList = () => {
    const [menuItems, setMenuItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMenuItems = async () => {
            try {
                const data = await menuService.getMenuItems();
                setMenuItems(data);
            } catch (error) {
                console.error('Error fetching menu items:', error);
                message.error('Failed to load menu items');
            } finally {
                setLoading(false);
            }
        };

        fetchMenuItems();
    }, [])

  return (
    <div>
        <h2>Menu Items</h2>
        <List 
            loading ={loading}
            itemLayout='horizontal'
            dataSource={menuItems}
            renderItem={(item) => (
                <List.Item actions = {[<Button type='link'>Edit</Button>, <Button type='link' danger>Delete</Button>]}>
                    <List.Item.Meta 
                    title={item.dish_name} description={item.dish_description}/>
                    <img src={item.imageUrl} alt={item.dish_name} className="w-16 h-16 object-cover"/>
                    <p>${item.price.toFixed(2)}</p>
                </List.Item>
            )}
        />
    </div>
  )
}

export default MenuItemList
