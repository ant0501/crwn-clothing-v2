import { Routes, Route } from "react-router";
import { fetchCategoriesStart } from "../../store/categories/category.action";
import CategoriesPreview from "../categories-preview/categories-preivew.component";
import Category from "../category/category.component";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

// import ProductCard from "../../components/product-card/product-card.component";
import "./shop.styles.scss";

const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategoriesStart());
  }, []);
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
