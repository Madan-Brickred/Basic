import React, { useState } from "react";
import {
  Image,
  ImageProps,
  StyleProp,
  ImageStyle,
  View,
  ActivityIndicator,
} from "react-native";
import { ms } from "react-native-size-matters";
import { ColorConstants } from "../../theme/ColorConstants";


interface AppImageProps extends ImageProps {
  width?: number;
  height?: number;
  borderRadius?: number;
  style?: StyleProp<ImageStyle>;
  placeholderColor?: string; // optional placeholder background
}

const AppImage: React.FC<AppImageProps> = ({
  width = 100,
  height = 100,
  borderRadius = 8,
  style,
  placeholderColor = ColorConstants.lightGray,
  resizeMode = "cover",
  ...rest
}) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  return (
    <View
      style={{
        width: ms(width),
        height: ms(height),
        borderRadius: ms(borderRadius),
        overflow: "hidden",
        backgroundColor: placeholderColor,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {loading && !error && <ActivityIndicator color="#999" />}
      <Image
        style={[
          {
            width: ms(width),
            height: ms(height),
            borderRadius: ms(borderRadius),
          },
          style,
        ]}
        resizeMode={resizeMode}
        onLoadEnd={() => setLoading(false)}
        onError={() => {
          setLoading(false);
          setError(true);
        }}
        {...rest}
      />
    </View>
  );
};

export default AppImage;
