import camelize from "camelize";

export const restaurantsRequest = (location) => {
  return fetch(
    `https://foodify-backend-3wumo.ondigitalocean.app/api/placesNearby?location=${location}`
  )
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

export const restaurantsTransform = ({ results = [] }) => {
  const mappedResults = results.map((restaurant) => {
    return {
      ...restaurant,
      address: restaurant.vicinity,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
    };
  });

  return camelize(mappedResults);
};
