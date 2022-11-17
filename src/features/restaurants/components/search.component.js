import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { LocationContext } from "../../../services/restaurants/location/location.context";
const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const Search = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  useEffect(() => {
    search(keyword);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <SearchContainer>
      <Searchbar
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        onChangeText={(text) => {
          setSearchKeyword(text);
        }}
        placeholder="Search for a location"
        value={searchKeyword}
      />
    </SearchContainer>
  );
};
