import { StyleSheet, Dimensions } from "react-native";

var height = Dimensions.get("window").height;
var width = Dimensions.get("window").width;

export const FindStyles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
		backgroundColor: "#f8f8f8",
		paddingLeft: 5,
		paddingRight: 5,
		paddingBottom: 5,
	},
	searchBox: {
		flexDirection: "row",
		margin: 10,
		marginTop: 10,
		marginLeft: 10,
		marginRight: 10,
		backgroundColor: "#fff",
		borderRadius: 25,
		shadowColor: "#d2d3d6",
		shadowOpacity: 0.9,
		shadowRadius: 20,
		shadowOffset: {
			width: 0.1,
			height: 20,
		},
		elevation: 2,
	},
	searchInput: {
		padding: 10,
		paddingTop: 15,
		paddingBottom: 15,
		fontFamily: "Roboto",
		fontSize: 18,
	},
	banner: {
		flexDirection: "row",
		backgroundColor: "#fff",
		overflow: "hidden",
		margin: 10,
		borderRadius: 20,
		shadowColor: "#000",
		shadowOpacity: 0.8,
		shadowOffset: {
			width: 1,
			height: 0.4,
		},
		shadowRadius: 20,
		elevation: 3,
	},
	text: {
		padding: 10,
		paddingLeft: 20,
		paddingBottom: 5,
		fontFamily: "Open-Sans",
		fontSize: 21,
		color: "#333436",
	},
	content: {
		flex: 1,
		flexDirection: "column",
		paddingTop: 5,
		paddingBottom: 20,
	},
	row: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "center",
	},
	rowItem: {
		flex: 1,
		margin: 10,
		borderRadius: 20,
		padding: 10,
		height: 120,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
		shadowColor: "#d2d3d6",
		shadowOpacity: 0.8,
		shadowRadius: 20,
		shadowOffset: {
			width: 1,
			height: 4,
		},
		elevation: 1,
	},
});
