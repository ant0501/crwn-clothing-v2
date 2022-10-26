require("dotenv").config();
console.log('aaaaaaaaaa')
console.log(process.env.STRIPE_SECRET_KEY);
const aa = 'sk_test_51LwFc0JCWbiz8Aoflqf6ywJdKRee4LqIwSMFbhNVsoRiTxTP2zmJwGba6p6uNjmP1jz3aqEsnhUHRgLC2g0F8S0A00AU4l1VhB'
const stripe = require("stripe")(aa);
exports.handler = async (event) => {

    try {
        const { amount } = JSON.parse(event.body);
        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency: "usd",
            payment_method_types: ["card"],
        });
        return {
            statusCode: 200,
            body: JSON.stringify({ paymentIntent }),
        };
    } catch (error) {
        console.log({ error });
        return {
            statusCode: 400,
            body: JSON.stringify({ error }),
        };
    }
};