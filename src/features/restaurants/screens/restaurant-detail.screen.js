import React, { useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import RestaurantInfoCard from "../components/restaurant-info-card.component";
import { List } from "react-native-paper";

import { SafeArea } from "../../../components/utility/safe-area.component";

export const RestaurantDetailScreen = ({ route }) => {
  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);

  const { restaurant } = route.params;
  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        <List.Accordion
          title="Breakfast"
          titleStyle={styles.titleStyle(breakfastExpanded)}
          // titleStyle={{ color: breakfastExpanded ? "tomato" : "black" }}
          left={(props) =>
            expandIcon({
              ...props,
              expanded: breakfastExpanded,
              icon: "bread-slice",
            })
          }
          expanded={breakfastExpanded}
          onPress={() => setBreakfastExpanded(!breakfastExpanded)}
        >
          <List.Item title="Eggs Benedict" />
          <List.Item title="Classic Breakfast" />
        </List.Accordion>
        <List.Accordion
          title="Lunch"
          titleStyle={styles.titleStyle(lunchExpanded)}
          left={(props) =>
            expandIcon({ ...props, expanded: lunchExpanded, icon: "hamburger" })
          }
          expanded={lunchExpanded}
          onPress={() => setLunchExpanded(!lunchExpanded)}
        >
          <List.Item title="Burger w/ Fries" />
          <List.Item title="Steak Sandwich" />
          <List.Item title="Mushroom Soup" />
        </List.Accordion>
        <List.Accordion
          title="Dinner"
          titleStyle={styles.titleStyle(dinnerExpanded)}
          left={(props) =>
            expandIcon({
              ...props,
              expanded: dinnerExpanded,
              icon: "food-variant",
            })
          }
          expanded={dinnerExpanded}
          onPress={() => setDinnerExpanded(!dinnerExpanded)}
        >
          <List.Item title="Spaghetti Bolognese" />
          <List.Item title="Veal Cutlet with Chicken Mushroom Rotini" />
          <List.Item title="Steak Frites" />
        </List.Accordion>
        <List.Accordion
          title="Drinks"
          titleStyle={styles.titleStyle(drinksExpanded)}
          left={(props) =>
            expandIcon({ ...props, expanded: drinksExpanded, icon: "cup" })
          }
          expanded={drinksExpanded}
          onPress={() => setDrinksExpanded(!drinksExpanded)}
        >
          <List.Item title="Coffee" />
          <List.Item title="Tea" />
          <List.Item title="Modelo" />
          <List.Item title="Coke" />
          <List.Item title="Fanta" />
        </List.Accordion>
      </ScrollView>
    </SafeArea>
  );
};

const expandIcon = ({ color, expanded, icon }) => (
  <List.Icon color={expanded ? "tomato" : color} icon={icon} />
);

const styles = StyleSheet.create({
  titleStyle: (expanded) => ({
    color: expanded ? "tomato" : "black",
  }),
});
