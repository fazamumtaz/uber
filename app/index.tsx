import { Redirect } from "expo-router";
import React from "react";

const index = () => {
  return (
    // <SafeAreaView>
    //   <Text>index</Text>
    // </SafeAreaView>
    <Redirect href={"/(auth)/welcome"} />
  );
};

export default index;
