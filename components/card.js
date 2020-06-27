import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import Icon from "react-native-vector-icons/FontAwesome5";

import { DocStyles } from "../styles/doctorStyles";

export const Card = (props) => {
	const avator = [
		require("../assets/undraw/profile.png"),
		require("../assets/undraw/welcomeavator.png"),
		require("../assets/undraw/femaleavator.png"),
	];

	return (
		<TouchableOpacity
			style={DocStyles.row}
			onPress={() =>
				props.navigation.push("Details", {
					id: props.id,
					name: props.name,
					department: props.department,
				})
			}
		>
			<View style={{ marginRight: 10 }}>
				<Image source={avator[props.id]} style={{ width: 100, height: 100 }} />
			</View>
			<View>
				<Text style={DocStyles.rowHeading}>Dr. {props.name}</Text>
				<Text
					style={[
						DocStyles.heading,
						{
							marginLeft: 0,
							marginBottom: 15,
							marginTop: 5,
							fontSize: 16,
							color: "#777",
						},
					]}
				>
					{props.department}
				</Text>
				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
					}}
				>
					<View style={{ flexDirection: "row" }}>
						<Icon name="star" size={15} color="red" />
						<Text
							style={{
								fontFamily: "Open-Sans",
								marginLeft: 10,
								marginRight: 10,
							}}
						>
							{props.rating}
						</Text>
					</View>
					<View style={{ flexDirection: "row" }}>
						<Icon name="clock" size={15} color="#2b9cc4" />
						<Text
							style={{
								fontFamily: "Open-Sans",
								marginLeft: 10,
								paddingBottom: 5,
							}}
						>
							10 am to 8 pm
						</Text>
					</View>
				</View>
			</View>
		</TouchableOpacity>
	);
};

export const Square = (props) => {
	return (
		<TouchableOpacity style={DocStyles.catItem}>
			<Icon name={props.name} size={30} color="#2b9cc4" />
			<Text style={{ fontFamily: "Roboto", color: "#777", marginTop: 10 }}>
				{props.title}
			</Text>
		</TouchableOpacity>
	);
};
