import React from "react";

import {
	ScrollView,
	View,
	TouchableOpacity,
	TextInput,
	Text,
	Image,
} from "react-native";

import Icon from "react-native-vector-icons/FontAwesome5";

import { FindStyles } from "../../styles/findStyles";

import { Square } from "../../components/find";

export default class FindScreen extends React.Component {
	render() {
		return (
			<ScrollView style={FindStyles.container}>
				<Text style={FindStyles.text}>Search for a doctor</Text>
				<TouchableOpacity style={FindStyles.searchBox}>
					<Icon
						name="search"
						size={22}
						color="#54a4cc"
						style={{ alignSelf: "center", padding: 10, paddingLeft: 20 }}
					/>
					<TextInput placeholder="Search..." style={FindStyles.searchInput} />
				</TouchableOpacity>
				<TouchableOpacity style={FindStyles.banner}>
					<Image
						source={require("../../assets/undraw/covid.jpg")}
						style={{ width: 400, height: 255 }}
					/>
				</TouchableOpacity>
				<Text style={FindStyles.text}>What do you need?</Text>
				<View style={FindStyles.content}>
					<View style={FindStyles.row}>
						<Square
							name="diagnoses"
							navigation={this.props.navigation}
							screen="Doctor"
						/>
						<Square
							name="notes-medical"
							navigation={this.props.navigation}
							screen=""
						/>
					</View>
					<View style={FindStyles.row}>
						<Square
							name="ambulance"
							navigation={this.props.navigation}
							screen=""
						/>
						<Square
							name="user-cog"
							navigation={this.props.navigation}
							screen="Settings"
						/>
						<Square
							name="walking"
							navigation={this.props.navigation}
							screen=""
						/>
					</View>
				</View>
			</ScrollView>
		);
	}
}
