import camelize from "camelize";
import { host } from "../../utils/env";

export const locationRequest = (searchTerm) => {
  return fetch(`${host}/geocode?city=${searchTerm}`)
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

export const locationTransform = (result) => {
  const formattedResponse = camelize(result);
  console.log(JSON.stringify(result));
  const { geometry = {} } = formattedResponse.results[0];
  const { lat, lng } = geometry?.location;

  return { lat, lng, viewport: geometry.viewport };
};
