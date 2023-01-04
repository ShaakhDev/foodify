import camelize from "camelize";

export const locationRequest = (searchTerm) => {
  return fetch(
    `https://foodify-backend-3wumo.ondigitalocean.app/api/geocode?city=${searchTerm}`
  )
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

export const locationTransform = (result) => {
  const formattedResponse = camelize(result);

  const { geometry = {} } = formattedResponse.results[0];
  const { lat, lng } = geometry?.location;

  return { lat, lng, viewport: geometry.viewport };
};
