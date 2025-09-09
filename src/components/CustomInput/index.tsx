// components/CustomInput.js
import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const CustomInput = ({
  label,
  placeholder = "Enter text",
  value,
  onChangeText,
  secureTextEntry = false,
  error,
  success,
  variant = "outlined", // outlined | filled | underline
  size = "medium", // small | medium | large
  shape = "rounded", // rounded | square | pill
  leftIcon,
  rightIcon,
  passwordToggle = false,
  style = {},
  inputStyle = {},
  labelStyle = {},
  errorStyle = {},
  backgroundColor,
  textColor,
  ...props
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(!secureTextEntry);

  // Variant Styles
  const getVariantStyles = () => {
    switch (variant) {
      case "filled":
        return {
          backgroundColor: "#f1f1f1",
          borderWidth: 0,
          borderBottomWidth: 0,
        };
      case "underline":
        return {
          backgroundColor: "transparent",
          borderWidth: 0,
          borderBottomWidth: 2,
        };
      default:
        return {
          backgroundColor: "transparent",
          borderWidth: 1,
          borderBottomWidth: 0,
        };
    }
  };

  // Size Styles
  const getSizeStyles = () => {
    switch (size) {
      case "small":
        return { padding: 8, fontSize: 14 };
      case "large":
        return { padding: 16, fontSize: 18 };
      default:
        return { padding: 12, fontSize: 16 };
    }
  };

  // Shape Styles
  const getShapeStyles = () => {
    switch (shape) {
      case "square":
        return { borderRadius: 4 };
      case "pill":
        return { borderRadius: 50 };
      default:
        return { borderRadius: 10 };
    }
  };

  const variantStyles = getVariantStyles();
  const sizeStyles = getSizeStyles();
  const shapeStyles = getShapeStyles();

  return (
    <View style={{ width: "100%", marginVertical: 8 }}>
      {label && (
        <Text style={[styles.label, labelStyle]}>
          {label}
        </Text>
      )}

      <View
        style={[
          styles.inputContainer,
          {
            backgroundColor: backgroundColor || variantStyles.backgroundColor,
            borderWidth: variantStyles.borderWidth,
            borderBottomWidth: variantStyles.borderBottomWidth,
            borderColor: error
              ? "red"
              : success
              ? "green"
              : "#ccc",
            borderRadius: shapeStyles.borderRadius,
            paddingHorizontal: 10,
          },
          style,
        ]}
      >
        {leftIcon && (
          <Icon
            name={leftIcon}
            size={22}
            color={error ? "red" : "#555"}
            style={styles.icon}
          />
        )}

        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor="#999"
          secureTextEntry={!isPasswordVisible}
          style={[
            styles.input,
            {
              fontSize: sizeStyles.fontSize,
              paddingVertical: sizeStyles.padding / 2,
              color: textColor || "#000",
            },
            inputStyle,
          ]}
          {...props}
        />

        {passwordToggle && (
          <TouchableOpacity
            onPress={() => setIsPasswordVisible(!isPasswordVisible)}
          >
            <Icon
              name={isPasswordVisible ? "visibility" : "visibility-off"}
              size={22}
              color="#555"
              style={styles.icon}
            />
          </TouchableOpacity>
        )}

        {rightIcon && !passwordToggle && (
          <Icon
            name={rightIcon}
            size={22}
            color="#555"
            style={styles.icon}
          />
        )}
      </View>

      {error && <Text style={[styles.errorText, errorStyle]}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    fontWeight: "500",
  },
  label: {
    marginBottom: 5,
    fontWeight: "600",
    color: "#333",
  },
  errorText: {
    color: "red",
    marginTop: 4,
    fontSize: 13,
  },
  icon: {
    marginHorizontal: 6,
  },
});

export default CustomInput;
