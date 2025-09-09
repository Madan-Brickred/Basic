import React from "react";
import { ScrollView, StyleSheet, ViewStyle, StyleProp } from "react-native";
import { ms } from "react-native-size-matters";

interface AppScrollViewProps {
  style?: StyleProp<ViewStyle>;
  children: React.ReactNode;
  contentContainerStyle?: StyleProp<ViewStyle>;
  padding?: number;
  margin?: number;
  horizontal?: boolean;
  showsVerticalScrollIndicator?: boolean;
  showsHorizontalScrollIndicator?: boolean;
}

const AppScrollView: React.FC<AppScrollViewProps> = ({
  style = {},
  contentContainerStyle = {},
  children,
  padding = 0,
  margin = 0,
  horizontal = false,
  showsVerticalScrollIndicator = false,
  showsHorizontalScrollIndicator = false,
}) => {
  return (
    <ScrollView
      horizontal={horizontal}
      showsVerticalScrollIndicator={showsVerticalScrollIndicator}
      showsHorizontalScrollIndicator={showsHorizontalScrollIndicator}
      style={[{ margin: ms(margin) }, style]}
      contentContainerStyle={[{ padding: ms(padding) }, contentContainerStyle]}
    >
      {children}
    </ScrollView>
  );
};

export default AppScrollView;
