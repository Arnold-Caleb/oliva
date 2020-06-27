import React from "react";
import { Text, View, ScrollView, TouchableOpacity } from "react-native";

import { DocStyles } from "../../styles/doctorStyles";
import Icon from "react-native-vector-icons/FontAwesome5";

import { Card, Square } from "../../components/card";

import { DETAILS, CATEGORIES } from "../../data/doctorinfo";

export default class DoctorScreen extends React.Component {
	render() {
		return (
			<View style={DocStyles.container}>
				<Text style={DocStyles.heading}>Top Doctors</Text>

				<View style={DocStyles.toplabels}>
					<Text style={DocStyles.h2}>Categories</Text>
					<TouchableOpacity>
						<Text style={DocStyles.s}>See all</Text>
					</TouchableOpacity>
				</View>

				<View style={{ flex: 1, flexDirection: "column" }}>
					<ScrollView style={DocStyles.categories} horizontal={true}>
						{CATEGORIES.map((category) => (
							<Square {...category} />
						))}
					</ScrollView>

					<View style={DocStyles.cardsView}>
						{DETAILS.map((detail) => (
							<Card
								id={detail.id}
								name={detail.name}
								department={detail.department}
								rating={detail.rating}
								navigation={this.props.navigation}
							/>
						))}
					</View>
				</View>
			</View>
		);
	}
}
