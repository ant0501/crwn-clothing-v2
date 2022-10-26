import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';
import Shop from './routes/shop/shop.component';
import Checkout from './routes/checkout/checkout.component';

// import {
//   onAuthStateChangedListener,
//   createUserDocumentFromAuth,
//   getCurrentUser
// } from "./utils/firebase/firebase.utils";

import { checkUserSession } from "./store/user/user.action";



const App = () => {
  // const people = [
  //   { id: "1", name: "Tom", age: 35 },
  //   { id: "2", name: "Jerry", age: 28 },
  //   { id: "3", name: "Peter", age: 33 },

  // ];


  // //max age
  // const maxAge = people.reduce((acc, person) => person.age > acc ? person.age : acc, 0);
  // console.log('aaaaa', maxAge);
  // const findName = people.find(person => person.name === "Tom");
  // console.log('findName', findName);

  // const result = people.reduce((acc, person) => {
  //   console.log('acc', person.name);
  //   if (!acc) return false;
  //   return person.age > 30;
  // }, true);
  // console.log('result', result);

  // const result2 = people.reduce((acc, person) => {
  //   if (acc) return true;
  //   return person.age > 35;
  // }, false);
  // console.log('result2', result2);

  // const orders = [
  //   { id: "1", status: "pending" },
  //   { id: "2", status: "pending" },
  //   { id: "3", status: "cancelled" },
  //   { id: "4", status: "shipped" },
  //   { id: "5", status: "shipped" },

  // ];

  // const result = orders.reduce((acc, order) => {
  //   return { ...acc, [order.status]: acc[order.status] ? acc[order.status] + 1 : 1 }
  // }, {});
  // console.log('result', result);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='checkout' element={<Checkout />} />
      </Route>

    </Routes>
  );
};

export default App;
