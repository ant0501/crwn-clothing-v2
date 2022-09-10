import { Routes, Route } from "react-router";

import CategoriesPreview from "../categories-preview/categories-preivew.component";
import Category from "../category/category.component";

// import ProductCard from "../../components/product-card/product-card.component";
import "./shop.styles.scss";

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
