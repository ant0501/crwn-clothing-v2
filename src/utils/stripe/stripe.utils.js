import { loadStripe } from "@stripe/stripe-js";
const bb = 'pk_test_51LwFc0JCWbiz8AofXfy0ZXDkVEPsDM1pibrGa1PrI6ndbNjSQfB7nZX0D5ks62jlkF2sic6pSNjHx1GwQYSWq4m000gzNOaZYJ';
export const stripePromise = loadStripe(bb);
// export const stripePromise = loadStripe(
//     `${process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}`
// );