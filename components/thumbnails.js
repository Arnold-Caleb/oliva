import React from "react";
import {
	ScrollView,
	View,
	Image,
	TouchableOpacity,
	Text,
	Dimensions,
} from "react-native";

import { overviewStyles } from "../styles/overviewStyles";

export const Thumbnail = (props) => {
	return (
		<View style={overviewStyles.container}>
			<Text style={overviewStyles.heading}>
				Choose the doctor that suits you.
			</Text>
			<Text
				style={[
					overviewStyles.heading,
					{
						fontSize: 18,
						paddingTop: 0,
						paddingBottom: 20,
						color: "#777",
					},
				]}
			>
				Getting the right doctor to attend to you needs is what is best for you.
			</Text>
			<TouchableOpacity
				style={[
					overviewStyles.touchableSection,
					{
						backgroundColor: "#63bbdb",
						width: 150,
						alignSelf: "flex-start",
						marginBottom: -10,
						elevation: 1,
						marginLeft: 20,
					},
				]}
				onPress={() => props.screenProps.navigation.navigate("Find")}
			>
				<Text style={overviewStyles.touchableSectionText}> Find doctor</Text>
			</TouchableOpacity>
			<Image
				source={require("../assets/undraw/medicine.png")}
				style={overviewStyles.doc}
			/>
		</View>
	);
};
