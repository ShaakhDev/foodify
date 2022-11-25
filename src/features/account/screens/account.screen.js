import React from "react";
import { AccountBackground } from "../components/account.styles";
import {
  AuthButton,
  AccountCover,
  AccountContainer,
} from "../components/account.styles";
import { Spacer } from "../../../components/spacer/spacer.component";

export const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackground>
      <AccountCover />
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
            icon="lock-open-outline"
            mode="contained"
          >
            Register
          </AuthButton>
        </Spacer>
      </AccountContainer>
    </AccountBackground>
  );
};
