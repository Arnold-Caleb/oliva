import React from "react";

import { View, Text, Image } from "react-native";

import Icon from "react-native-vector-icons/FontAwesome5";

export default class DetailScreen extends React.Component {
	constructor(props) {
		super(props);
		this.pictures = [
			require("../../assets/undraw/profile.png"),
			require("../../assets/undraw/welcomeavator.png"),
			require("../../assets/undraw/femaleavator.png"),
		];
	}

	render() {
		return (
			<View style={{ flex: 1, flexDirection: "column" }}>
				<Image
					source={this.pictures[this.props.navigation.getParam("id")]}
					style={{ width: 100, height: 200 }}
				/>
				<Text>{this.props.navigation.getParam("name")}</Text>
				<Text>{this.props.navigation.getParam("department")}</Text>
			</View>
		);
	}
}
