import React from "react";
import { View } from "react-native";
import { ms } from "react-native-size-matters";

interface SpacerProps {
  height?: number; // vertical spacing
  width?: number;  // horizontal spacing
}

const Spacer: React.FC<SpacerProps> = ({ height = 0, width = 0 }) => {
  return <View style={{ height: ms(height), width: ms(width) }} />;
};

export default Spacer;
