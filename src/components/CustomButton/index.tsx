import React from "react";
import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
  StyleSheet,
  View,
  StyleProp,
  TextStyle,
  ViewStyle,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { ms } from "react-native-size-matters";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store"; // your store type

type Variant = "primary" | "secondary" | "outline" | "text" | "danger";
type Size = "small" | "medium" | "large";
type Shape = "rounded" | "square" | "pill";

interface CustomButtonProps {
  title?: string;
  onPress?: () => void;
  disabled?: boolean;
  loading?: boolean;
  variant?: Variant;
  size?: Size;
  shape?: Shape;
  leftIcon?: string;
  rightIcon?: string;
  iconColor?: string;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  backgroundColor?: string;
  textColor?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title = "Button",
  onPress = () => {},
  disabled = false,
  loading = false,
  variant = "primary",
  size = "medium",
  shape = "rounded",
  leftIcon,
  rightIcon,
  iconColor,
  style = {},
  textStyle = {},
  backgroundColor,
  textColor,
}) => {
  // Get theme from Redux
  const theme = useSelector((state: RootState) => state.theme.theme); // assuming state.theme has colors
console.log(theme,'theme')
  // Variant Styles
  const getVariantStyles = () => {
    switch (variant) {
      case "secondary":
        return {
          backgroundColor: theme.colors.secondaryColor,
          borderColor: theme.colors.secondaryColor,
          color: theme.colors.white,
        };
      case "outline":
        return {
          backgroundColor: "transparent",
          borderColor: theme.colors.primaryColor,
          color: theme.colors.primaryColor,
        };
      case "text":
        return {
          backgroundColor: "transparent",
          borderColor: "transparent",
          color: theme.colors.primaryColor,
        };
      case "danger":
        return {
          backgroundColor: theme.colors.redColor,
          borderColor: theme.colors.redColor,
          color: theme.colors.white,
        };
      default: // primary
        return {
          backgroundColor: theme.colors.primaryColor,
          borderColor: theme.colors.primaryColor,
          color: theme.colors.white,
        };
    }
  };

  // Size Styles
  const getSizeStyles = () => {
    switch (size) {
      case "small":
        return { paddingVertical: ms(6), paddingHorizontal: ms(14), fontSize: ms(14) };
      case "large":
        return { paddingVertical: ms(14), paddingHorizontal: ms(22), fontSize: ms(18) };
      default:
        return { paddingVertical: ms(10), paddingHorizontal: ms(18), fontSize: ms(16) };
    }
  };

  // Shape Styles
  const getShapeStyles = () => {
    switch (shape) {
      case "square":
        return { borderRadius: ms(4) };
      case "pill":
        return { borderRadius: ms(50) };
      default:
        return { borderRadius: ms(10) };
    }
  };

  const variantStyles = getVariantStyles();
  const sizeStyles = getSizeStyles();
  const shapeStyles = getShapeStyles();

  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor: backgroundColor || variantStyles.backgroundColor,
          borderColor: variantStyles.borderColor,
          borderRadius: shapeStyles.borderRadius,
          paddingVertical: sizeStyles.paddingVertical,
          paddingHorizontal: sizeStyles.paddingHorizontal,
          opacity: disabled ? 0.6 : 1,
        },
        style,
      ]}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.8}
    >
      {loading ? (
        <ActivityIndicator color={textColor || variantStyles.color} />
      ) : (
        <View style={styles.row}>
          {leftIcon && (
            <Icon
              name={leftIcon}
              size={ms(20)}
              color={iconColor || variantStyles.color}
              style={styles.icon}
            />
          )}
          <Text
            style={[
              styles.text,
              {
                color: textColor || variantStyles.color,
                fontSize: sizeStyles.fontSize,
              },
              textStyle,
            ]}
          >
            {title}
          </Text>
          {rightIcon && (
            <Icon
              name={rightIcon}
              size={ms(20)}
              color={iconColor || variantStyles.color}
              style={styles.icon}
            />
          )}
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
  },
  text: {
    fontWeight: "600",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginHorizontal: ms(5),
  },
});

export default CustomButton;
