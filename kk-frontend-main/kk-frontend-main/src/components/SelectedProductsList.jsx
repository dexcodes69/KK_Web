import React from "react";
import { X } from "lucide-react";

const SelectedProductsList = ({ selectedProducts, setSelectedProducts }) => {
  const removeProduct = (id) => {
    setSelectedProducts(selectedProducts.filter((p) => p.id !== id));
  };

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Selected Items</h2>
      <div className="space-y-4">
        {selectedProducts.map((product) => (
          <div key={product.id} className="flex items-center justify-between border rounded-lg p-4">
            <div>
              <div className="font-medium">{product.name}</div>
            </div>
            <button onClick={() => removeProduct(product.id)} className="text-gray-500 hover:text-red-500 transition">
              <X className="h-5 w-5" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectedProductsList;
