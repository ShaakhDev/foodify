import React, { useContext, useEffect } from "react";
import { AccountBackground } from "../components/account.styles";
import {
  AuthButton,
  AccountCover,
  AccountContainer,
  Title,
  AnimationWrapper,
} from "../components/account.styles";
import LottieView from "lottie-react-native";
import { Spacer } from "../../../components/spacer/spacer.component";

export const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackground>
      <AccountCover />
      <AnimationWrapper>
        <LottieView
          key="animation"
          autoPlay
          loop
          resizeMode="cover"
          source={require("../../../../assets/watermelon.json")}
        />
      </AnimationWrapper>
      <Title>Foodify</Title>
      <AccountContainer>
        <AuthButton
          onPress={() => navigation.navigate("Login")}
          icon="lock-open-outline"
          mode="contained"
        >
          Login
        </AuthButton>
        <Spacer position="top" size="large">
          <AuthButton
            onPress={() => navigation.navigate("Register")}
            icon="email"
            mode="contained"
          >
            Register
          </AuthButton>
        </Spacer>
      </AccountContainer>
    </AccountBackground>
  );
};
