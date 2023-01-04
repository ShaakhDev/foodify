import React, { useContext } from "react";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";
import { Pressable } from "react-native";
import { FavouritesContext } from "../../services/favourites/favourites.context";

const FavouriteButton = styled(Pressable)`
  position: absolute;
  top: 25px;
  right: 25px;
  z-index: 9;
`;

export const Favourite = ({ restaurant }) => {
  const { favourites, addToFavourites, removeFromFavourites } =
    useContext(FavouritesContext);

  const isFavourite = favourites.find((r) => r.placeId === restaurant.placeId);
  const handlePress = () => {
    if (isFavourite) {
      removeFromFavourites(restaurant);
    } else {
      addToFavourites(restaurant);
    }
  };
  return (
    <FavouriteButton onPress={handlePress}>
      <AntDesign
        name={isFavourite ? "heart" : "hearto"}
        size={24}
        color={isFavourite ? "#fb3958" : "white"}
      />
    </FavouriteButton>
  );
};
