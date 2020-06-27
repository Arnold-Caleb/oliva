import { Dimensions, StyleSheet } from "react-native";

var width = Dimensions.get("window").width;
var height = Dimensions.get("window").height;

export const DocStyles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
	},
	heading: {
		fontFamily: "Open-Sans",
		fontSize: 25,
		marginLeft: 15,
		marginTop: 20,
	},
	h2: {
		fontFamily: "Open-Sans",
		color: "black",
		fontSize: 18,
	},
	s: {
		fontFamily: "Open-Sans",
		color: "#555",
		fontSize: 15,
	},
	categories: {
		flex: 1,
		flexDirection: "row",
		padding: 20,
		paddingBottom: 0,
		paddingTop: 0,
	},
	catItem: {
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#fff",
		marginLeft: 0,
		margin: 8,
		marginBottom: 0,
		width: 120,
		height: 120,
		borderRadius: 20,
		shadowColor: "#000",
		shadowOpacity: 0.8,
		shadowRadius: 20,
		shadowOffset: {
			width: 0.2,
			height: 1,
		},
		elevation: 3,
	},
	row: {
		flexDirection: "row",
		borderRadius: 20,
		shadowColor: "#000",
		shadowOpacity: 0.8,
		shadowRadius: 20,
		shadowOffset: {
			width: 0.2,
			height: 1,
		},
		elevation: 2,
		padding: 20,
		paddingLeft: 5,
		paddingRight: 5,
		backgroundColor: "#fff",
		marginTop: 5,
		marginBottom: 15,
	},
	rowHeading: {
		fontFamily: "Open-Sans",
		fontWeight: "600",
		fontSize: 18,
	},
	toplabels: {
		flexDirection: "row",
		justifyContent: "space-between",
		margin: 20,
	},
	cardsView: {
		flex: 3,
		flexDirection: "column",
		marginTop: 2,
		padding: 10,
	},
});
