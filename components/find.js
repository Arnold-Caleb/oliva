import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

import { FindStyles } from "../styles/findStyles";

import Icon from "react-native-vector-icons/FontAwesome5";

export const Square = (props) => {
	return (
		<TouchableOpacity
			style={FindStyles.rowItem}
			onPress={() => props.navigation.navigate(props.screen)}
		>
			<Icon
				name={props.name}
				size={35}
				color="#54a4cc"
				style={{ alignSelf: "center", padding: 10 }}
			/>
			<Text style={{ fontFamily: "Open-Sans" }}> Ambulance</Text>
		</TouchableOpacity>
	);
};
