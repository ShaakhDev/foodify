import React, { useContext, useState } from "react";
import styled from "styled-components/native";
import { ActivityIndicator, Colors } from "react-native-paper";
import { View, StyleSheet } from "react-native";
import { Search } from "../components/search.component";
import RestaurantInfoCard from "../components/restaurant-info-card.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { theme } from "../../../infrastructure/theme";
import { LocationContext } from "../../../services/location/location.context";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { FavouritesBar } from "../../../components/favourites/favourites-bar.component";
import { RestaurantList } from "../components/restaurants-list.style";

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

const LoadingContainer = styled(View)`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const RestaurantsScreen = ({ navigation }) => {
  const { error: locationError } = useContext(LocationContext);
  const { isLoading, restaurants = [], error } = useContext(RestaurantsContext);
  const { favourites } = useContext(FavouritesContext);
  const [isToggled, setIsToggled] = useState(false);
  const hasError = !!error || !!locationError;
  return (
    <>
      <SafeArea>
        {isLoading ? (
          <LoadingContainer>
            <Loading size={50} animating={true} color={Colors.blue300} />
          </LoadingContainer>
        ) : null}
        <Search
          isFavouritesToggled={isToggled}
          onFavouritesToggle={() => setIsToggled(!isToggled)}
        />
        {isToggled && (
          <FavouritesBar
            onNavigate={navigation.navigate}
            favourites={favourites}
          />
        )}
        {hasError && !isLoading && (
          <View style={styles.container}>
            <Text variant="emptyStateHeading">Ooops!</Text>
            <Text variant="emptyState">
              Something went wrong retrieving the data. Please try again.
            </Text>
          </View>
        )}
        {!hasError && (
          <RestaurantList
            data={restaurants}
            initialNumToRender={7}
            renderItem={_renderItem}
            keyExtractor={(item) => item.name}
          />
        )}
      </SafeArea>
    </>
  );
};

const _renderItem = ({ item }) => <RestaurantInfoCard restaurant={item} />;

const styles = StyleSheet.create({
  notFoundImage: {
    width: 300,
    height: 400,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
