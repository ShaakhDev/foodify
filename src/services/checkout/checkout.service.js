import createStripe from "stripe-client";

const stripe = createStripe(
  "pk_test_51KIRGOBUjGUZUHZWHCg4XSI1Z8beTyfskEXhQWEENFJ6q0owgD0u8K0sy5McXBp6uFUH6Js84aKSIOMsuRjX70Y800ieJfc2HY"
);

export const cardTokenRequest = async (card) => {
  try {
    const token = await stripe.createToken({ card });
    return token;
  } catch (e) {
    console.log(e);
  }
};
