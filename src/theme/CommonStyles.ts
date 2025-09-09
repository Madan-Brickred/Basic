import { StyleSheet } from 'react-native';
import { moderateScale as ms } from 'react-native-size-matters';

export const commonStyles = StyleSheet.create({
  // ====== Flex ======
  flex1: { flex: 1 },
  flexRow: { flexDirection: 'row' },
  flexCol: { flexDirection: 'column' },
  flexWrap: { flexWrap: 'wrap' },

  // Alignment
  justifyStart: { justifyContent: 'flex-start' },
  justifyCenter: { justifyContent: 'center' },
  justifyEnd: { justifyContent: 'flex-end' },
  justifyBetween: { justifyContent: 'space-between' },
  justifyAround: { justifyContent: 'space-around' },
  justifyEvenly: { justifyContent: 'space-evenly' },

  alignCenter: { alignItems: 'center' },
  alignStart: { alignItems: 'flex-start' },
  alignEnd: { alignItems: 'flex-end' },
  alignStretch: { alignItems: 'stretch' },

  selfCenter: { alignSelf: 'center' },
  selfStart: { alignSelf: 'flex-start' },
  selfEnd: { alignSelf: 'flex-end' },

  center: { justifyContent: 'center', alignItems: 'center' },

  // ====== Spacing (Padding + Margin) ======
  // Padding
  p5: { padding: ms(5) },
  p10: { padding: ms(10) },
  p15: { padding: ms(15) },
  p20: { padding: ms(20) },
  p30: { padding: ms(30) },

  px5: { paddingHorizontal: ms(5) },
  px10: { paddingHorizontal: ms(10) },
  px20: { paddingHorizontal: ms(20) },

  py5: { paddingVertical: ms(5) },
  py10: { paddingVertical: ms(10) },
  py20: { paddingVertical: ms(20) },

  pt10: { paddingTop: ms(10) },
  pb10: { paddingBottom: ms(10) },
  pl10: { paddingLeft: ms(10) },
  pr10: { paddingRight: ms(10) },

  // Margin
  m5: { margin: ms(5) },
  m10: { margin: ms(10) },
  m15: { margin: ms(15) },
  m20: { margin: ms(20) },
  m30: { margin: ms(30) },

  mx10: { marginHorizontal: ms(10) },
  mx20: { marginHorizontal: ms(20) },

  my10: { marginVertical: ms(10) },
  my20: { marginVertical: ms(20) },

  mt10: { marginTop: ms(10) },
  mb10: { marginBottom: ms(10) },
  ml10: { marginLeft: ms(10) },
  mr10: { marginRight: ms(10) },

  // ====== Typography ======
  textXs: { fontSize: ms(12) },
  textSm: { fontSize: ms(14) },
  textMd: { fontSize: ms(16) },
  textLg: { fontSize: ms(18) },
  textXl: { fontSize: ms(22) },
  text2xl: { fontSize: ms(28) },
  text3xl: { fontSize: ms(36) },

  textBold: { fontWeight: 'bold' },
  textMedium: { fontWeight: '500' },
  textLight: { fontWeight: '300' },

  textCenter: { textAlign: 'center' },
  textLeft: { textAlign: 'left' },
  textRight: { textAlign: 'right' },

//   textPrimary: { color: Colors.primary },
//   textSecondary: { color: Colors.secondary },
//   textWhite: { color: Colors.white },
//   textBlack: { color: Colors.black },
//   textGray: { color: Colors.gray },
//   textError: { color: Colors.error },
//   textSuccess: { color: Colors.success },

//   // ====== Background Colors ======
//   bgPrimary: { backgroundColor: Colors.primary },
//   bgSecondary: { backgroundColor: Colors.secondary },
//   bgWhite: { backgroundColor: Colors.white },
//   bgBlack: { backgroundColor: Colors.black },
//   bgGray: { backgroundColor: Colors.gray },
//   bgLightGray: { backgroundColor: Colors.lightGray },

  // ====== Borders ======
  border: { borderWidth: ms(1),  },
  borderPrimary: { borderWidth: ms(1) },
  borderSecondary: { borderWidth: ms(1)},
  borderError: { borderWidth: ms(1) },

  roundedSm: { borderRadius: ms(4) },
  rounded: { borderRadius: ms(8) },
  roundedLg: { borderRadius: ms(16) },
  roundedXl: { borderRadius: ms(24) },
  roundedFull: { borderRadius: ms(999) },

  // ====== Shadows ======
  shadowSm: {
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: ms(1) },
    shadowRadius: ms(2),
    elevation: 2,
  },
  shadow: {
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: ms(2) },
    shadowRadius: ms(4),
    elevation: 4,
  },
  shadowLg: {
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: ms(4) },
    shadowRadius: ms(6),
    elevation: 6,
  },

  // ====== Sizes ======
  fullWidth: { width: '100%' },
  fullHeight: { height: '100%' },
  halfWidth: { width: '50%' },
  halfHeight: { height: '50%' },

  h50: { height: ms(50) },
  h100: { height: ms(100) },
  h150: { height: ms(150) },
  w50: { width: ms(50) },
  w100: { width: ms(100) },
  w150: { width: ms(150) },

  // ====== Position ======
  absolute: { position: 'absolute' },
  relative: { position: 'relative' },

  top0: { top: 0 },
  bottom0: { bottom: 0 },
  left0: { left: 0 },
  right0: { right: 0 },

  top10: { top: ms(10) },
  left10: { left: ms(10) },
  right10: { right: ms(10) },
  bottom10: { bottom: ms(10) },

  z1: { zIndex: 1 },
  z10: { zIndex: 10 },
  z50: { zIndex: 50 },
  z100: { zIndex: 100 },
});
