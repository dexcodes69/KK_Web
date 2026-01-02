import React from "react";
import products from "../data/products";

const ProductSelection = ({ selectedProducts, setSelectedProducts }) => {
  const handleSelection = (productId, color) => {
    const selectedProduct = products.find((p) => p.id === productId);
    if (!selectedProduct) return;

    const updatedSelection = selectedProducts.filter((p) => p.id !== productId);
    updatedSelection.push({ ...selectedProduct, images: selectedProduct.images[color] });

    setSelectedProducts(updatedSelection);
  };

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Choose Products & Colors</h2>
      {products.map((product) => (
        <div key={product.id} className="mb-4">
          <h3 className="font-medium">{product.name}</h3>
          <div className="flex gap-2 mt-2">
            {Object.keys(product.images).map((color) => (
              <button
                key={color}
                onClick={() => handleSelection(product.id, color)}
                className="w-8 h-8 rounded-full border"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductSelection;
