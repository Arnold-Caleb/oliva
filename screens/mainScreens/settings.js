import React from "react";

import { View, Text, Switch } from "react-native";

import Icon from "react-native-vector-icons";

import { SettingStyles } from "../../styles/settingStyles";

const Title = (props) => {
	return (
		<View>
			<Text>Oliva</Text>
			<Text>Settings</Text>
		</View>
	);
};

export default class SettingsScreen extends React.Component {
	static navigationOptions = {
		headerTitle: <Title />,
		headerTitleAlign: "center",
	};

	constructor(props) {
		super(props);
		this.state = { isEnabled: false };
	}

	toggleSwitch = () => {
		console.log("I have reached here.");
		this.setState((prevState) => {
			return { isEnabled: !prevState.isEnabled };
		});
		console.log(this.state.isEnabled);
	};

	render() {
		return (
			<View class={SettingStyles.container}>
				<Text>We are in Settings</Text>
				<Switch
					trackColor={{ false: "#767577", true: "#81b0ff" }}
					thumbColor={this.state.isEnabled ? "#f5dd4b" : "#f4f3f4"}
					ios_backgroundColor="#3e3e3e"
					onValueChange={this.toggleSwitch}
					value={this.state.isEnabled}
				/>
			</View>
		);
	}
}
