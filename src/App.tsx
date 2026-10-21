import { useState } from "react";
import AlertBox from "./components/AlertBox/AlertBox"
import ProductDisplay from "./components/ProductDisplay/ProductDisplay";
import UserProfileCard from "./components/UserProfileCard/UserProfileCard";

const user = {
  id: '1',
  name: 'John Doe',
  email: 'john.doe@example.com',
  role: 'Software Engineer',
  avatarUrl: 'https://example.com/avatar.jpg'
};

const product = {
  id: '1',
  name: 'Wireless Headphones',
  price: 199.99,
  description: 'High-quality wireless headphones with noise cancellation.',
  imageUrl: 'https://example.com/headphones.jpg',
  inStock: true
};

function App() {
  const [showAlert, setShowAlert] = useState(false);
  const [cartItems, setCartItems] = useState<string[]>([]);
 
  const handleAddToCart = (productId: string) => {
    setCartItems([...cartItems, productId]);
    setShowAlert(true);
  };
 
  return (
    <div className="p-4">
      {showAlert && (
        <AlertBox
          type="success"
          message="Product added to cart!"
          onClose={() => setShowAlert(false)}
        />
      )}
 
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <UserProfileCard
          user={user}
          showEmail={true}
          showRole={true}
          onEdit={(userId) => alert(`Editing user ${userId}`)}
        />
 
        <ProductDisplay
          product={product}
          showDescription={true}
          showStockStatus={true}
          onAddToCart={handleAddToCart}
        />
      </div>
    </div>
  );
};

export default App
