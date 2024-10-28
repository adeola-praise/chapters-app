import React, { useState } from 'react'
import menuService from '../../services/menuService';
import { Button, Input, message, Upload } from 'antd';

const MenuForm = () => {
    const [dish_name, setDish_Name] = useState('');
    const [dish_description, setDish_Description] = useState('');
    const [price, setPrice] = useState('');
    const [imageFile, setImageFile] = useState(null);

    const handleImageChange = (info) => {
        if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded sucessfully`);
            setImageFile(info.file.originFileObj);
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const imageResponsse = await menuService.uploadImage(imageFile);
            const imageUrl = imageResponsse?.$id;

            const menuItem = {
                dish_name,
                dish_description,
                price: parseFloat(price),
                imageUrl
            };

            await menuService.addMenuItem(menuItem);
            message.success('Menu item added sucessfully');
            // Clear the form
            setDish_Name('');
            setDish_Description('');
            setPrice('');
            setImageFile(null);
        } catch (error) {
            message.error('Failed to add menu item')
        }
    };

  return (
    <Form className="mb-4 p-4 bg-white shadow-md rounded">
        <h2 className="text-2xl font-semibold mb-4">Add Menu Item</h2>
        <Input 
            placeholder='Item Name' 
            value={dish_name} onChange={(e) => setDish_Name(e.target.value)} className='mb-4'/>
        <Input.TextArea 
            placeholder='Description'
            value={dish_description}
            onChange={(e) => setDish_Description(e.target.value)}
            className='mb-4'
        />
        <Input 
            placeholder='Price'
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className='mb-4'
            type='number'
        />
        <Upload 
            beforeUpload={() => false} // Prevent automatic upload
            onChange={handleImageChange}
        />
        <Button type='primary' htmlType='submit' className='mt-4'>Add Item</Button>
    </Form>
  )
}

export default MenuForm