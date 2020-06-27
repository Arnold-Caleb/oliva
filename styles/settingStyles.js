import { StyleSheet, Dimensions } from "react-native";

var width = Dimensions.get("window").width;
var height = Dimensions.get("window").height;

export const SettingStyles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
		backgroundColor: "#f8f8f8",
	},
});
