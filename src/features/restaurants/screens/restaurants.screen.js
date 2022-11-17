import React, { useContext } from "react";
import styled from "styled-components/native";
import { FlatList, View } from "react-native";
import { Search } from "../components/search.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { ActivityIndicator, Colors } from "react-native-paper";

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

const LoadingContainer = styled(View)`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const RestaurantsScreen = () => {
  const { isLoading, error, restaurants = [] } = useContext(RestaurantsContext);

  return (
    <>
      {/* <SafeArea> */}
      {isLoading ? (
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.blue300} />
        </LoadingContainer>
      ) : null}
      <Search />
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => (
          <Spacer position="bottom" size="large">
            <RestaurantInfoCard restaurant={item} />
          </Spacer>
        )}
        keyExtractor={(item) => item.name}
      >
        <RestaurantInfoCard />
      </RestaurantList>
      {/* </SafeArea> */}
    </>
  );
};
