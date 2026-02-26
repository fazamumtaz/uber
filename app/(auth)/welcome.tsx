import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import "../../global.css";

const Onboarding = () => {
  return (
    <SafeAreaView
      // style={{
      //   flex: 1,
      //   justifyContent: "center",
      //   alignItems: "center",
      // }}
      className="flex h-full items-center justify-between bg-white"
    >
      <Text>Onboarding</Text>
    </SafeAreaView>
  );
};

export default Onboarding;
