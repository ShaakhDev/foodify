import React, { memo } from "react";
import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import { Favourite } from "../../../components/favourites/favourites.component";
import { FadeInView } from "../../../components/animations/fade.animation";
import { theme } from "../../../infrastructure/theme";
import {
  RestaurantCard,
  RestaurantCardCover,
  Info,
  Gradient,
  Address,
  Section,
  SectionEnd,
  Rating,
  Icon,
} from "./restaurants-info-card.styles";

const RestaurantInfoCard = ({ restaurant = {} }) => {
  const { navigate } = useNavigation();
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;
  const gradientColors = isClosedTemporarily
    ? ["transparent", "rgba(255, 0, 0, 0.6)"]
    : ["transparent", "transparent", "rgba(0,0,0, 0.8)"];

  return (
    <>
      <Favourite restaurant={restaurant} />

      <Pressable
        onPress={() => navigate("RestaurantDetail", { restaurant: restaurant })}
      >
        <Spacer position="bottom" size="large">
          <FadeInView>
            <RestaurantCard elevation={5}>
              <Gradient colors={gradientColors}>
                <Text variant="title" theme={theme}>
                  {name}
                </Text>
              </Gradient>
              <RestaurantCardCover key={name} source={{ uri: photos[0] }} />

              <Info>
                <Section>
                  <Rating>
                    {Array.from(new Array(Math.floor(rating))).map((_, i) => (
                      <SvgXml
                        key={`star-${restaurant.name}-${i}`}
                        xml={star}
                        width={20}
                        height={20}
                      />
                    ))}
                  </Rating>
                  <SectionEnd>
                    {isClosedTemporarily && (
                      <Text variant="error">CLOSED TEMPORARILY</Text>
                    )}
                    <Spacer position="left" size="large">
                      {isOpenNow ? (
                        <SvgXml xml={open} width={20} height={20} />
                      ) : null}
                    </Spacer>

                    <Spacer position="left" size="large">
                      <Icon source={{ uri: icon }} />
                    </Spacer>
                  </SectionEnd>
                </Section>
                <Address>{address}</Address>
              </Info>
            </RestaurantCard>
          </FadeInView>
        </Spacer>
      </Pressable>
    </>
  );
};

export default memo(RestaurantInfoCard);
