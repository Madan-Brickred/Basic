import React from "react";
import { View, StyleSheet, ViewStyle, StyleProp } from "react-native";
import { ms } from "react-native-size-matters";

interface AppViewProps {
  style?: StyleProp<ViewStyle>;
  children: React.ReactNode;
  flex?: number;
  backgroundColor?: string;
  padding?: number;
  margin?: number;
  alignItems?: "flex-start" | "flex-end" | "center" | "stretch" | "baseline";
  justifyContent?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly";
}

const AppView: React.FC<AppViewProps> = ({
  style = {},
  children,
  flex = 1,
  backgroundColor = "transparent",
  padding = 0,
  margin = 0,
  alignItems = "flex-start",
  justifyContent = "flex-start",
}) => {
  return (
    <View
      style={[
        {
          flex,
          backgroundColor,
          padding: ms(padding),
          margin: ms(margin),
          alignItems,
          justifyContent,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
};

export default AppView;
