import { databases, storage} from "./appwrite";

const menuService = {
    uploadImage: async (imageFile) => {
       try {
        const response = await storage.createFile('671d02bf0004c0c6042d', 'unique()', imageFile);
        return response;
       } catch (error) {
        console.error("Error uploading image:", error);
        throw new Error('Image upload failed')
       }
    },

    addMenuItem: async (menuItem) => {
        try {
            await databases.createDocument('671cf6470039a1051d20', '671cf696003b59120128', 'unique()', menuItem);
        } catch (error) {
            console.error("Error adding menu item:", error);
            throw new Error('Failed to add menu item');
        }
    },

  getMenuItems: async () => {
    try {
      const response = await database.listDocuments('671cf6470039a1051d20', '671cf696003b59120128');
      return response.documents;
    } catch (error) {
        console.error('Error fetching menu items:', error);
      throw new Error('Failed to fetch menu items');
    }
  },
};

export default menuService;
