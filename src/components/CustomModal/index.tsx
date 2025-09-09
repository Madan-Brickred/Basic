import React, { ReactNode } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  StyleProp,
  ViewStyle,
  TextStyle,
} from "react-native";
import RNModal from "react-native-modal";

const { height } = Dimensions.get("window");

type FooterButton = {
  text: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};

type CustomModalProps = {
  visible: boolean;
  onClose: () => void;
  title?: string;
  children?: ReactNode;
  variant?: "center" | "bottom" | "fullScreen";
  footerButtons?: FooterButton[];
  backdropClose?: boolean;
  swipeToClose?: boolean;
};

const CustomModal: React.FC<CustomModalProps> = ({
  visible,
  onClose,
  title,
  children,
  variant = "center",
  footerButtons = [],
  backdropClose = true,
  swipeToClose = true,
}) => {
  return (
    <RNModal
      isVisible={visible}
      onBackdropPress={backdropClose ? onClose : undefined}
      onBackButtonPress={onClose}
      style={getVariantStyle(variant)}
      swipeDirection={variant === "bottom" && swipeToClose ? ["down"] : undefined}
      onSwipeComplete={variant === "bottom" && swipeToClose ? onClose : undefined}
      animationIn={variant === "bottom" ? "slideInUp" : "fadeIn"}
      animationOut={variant === "bottom" ? "slideOutDown" : "fadeOut"}
      useNativeDriver
      avoidKeyboard
    >
      <View style={[styles.container, getVariantContainer(variant)]}>
        {title && <Text style={styles.title}>{title}</Text>}

        <View style={styles.content}>{children}</View>

        {footerButtons.length > 0 && (
          <View style={styles.footer}>
            {footerButtons.map((btn, i) => (
              <TouchableOpacity
                key={i}
                style={[styles.footerBtn, btn.style]}
                onPress={btn.onPress}
              >
                <Text style={[styles.footerBtnText, btn.textStyle]}>
                  {btn.text}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>
    </RNModal>
  );
};

const getVariantStyle = (variant: "center" | "bottom" | "fullScreen") => {
  switch (variant) {
    case "bottom":
      return { justifyContent: "flex-end", margin: 0 };
    case "fullScreen":
      return { margin: 0 };
    default:
      return { justifyContent: "center", margin: 20 };
  }
};

const getVariantContainer = (variant: "center" | "bottom" | "fullScreen") => {
  switch (variant) {
    case "bottom":
      return {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingBottom: 30,
      };
    case "fullScreen":
      return { flex: 1, borderRadius: 0, height };
    default:
      return { borderRadius: 12 };
  }
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 12,
    color: "#222",
  },
  content: {
    marginBottom: 15,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 10,
  },
  footerBtn: {
    paddingVertical: 10,
    paddingHorizontal: 18,
    marginLeft: 10,
    borderRadius: 8,
    backgroundColor: "#007bff",
  },
  footerBtnText: {
    color: "#fff",
    fontWeight: "600",
  },
});

export default CustomModal;
