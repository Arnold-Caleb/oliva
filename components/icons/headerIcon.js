import React from "react";
import { TouchableOpacity } from "react-native";

import Icon from "react-native-vector-icons/SimpleLineIcons";

export const HeaderIcon = (props) => {
	return (
		<TouchableOpacity>
			<Icon
				name="options"
				size={25}
				color="#1b3f54"
				style={{
					margin: 20,
					marginTop: 30,
					justifyContent: "center",
					alignItems: "center",
				}}
			/>
		</TouchableOpacity>
	);
};
