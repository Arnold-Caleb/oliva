//
import React from "react";

import { Text, View, TouchableOpacity, Image } from "react-native";
import { Styles } from "../../styles";

import * as Font from "expo-font";
import { AppLoading } from "expo";

let customFonts = {
  "ubuntu-font": require("../../assets/ubuntu.regular.ttf"),
  "Open-Sans": require("../../assets/OpenSans-Light.ttf"),
  "Play-Fair": require("../../assets/Playfair.ttf"),
  Roboto: require("../../assets/Roboto-Light.ttf"),
};

export default class HomeScreen extends React.Component {
  state = {
    fontsLoaded: false,
  };

  _loadFontsAsync = async () => {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  };

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    return (
      (this.state.fontsLoaded && (
        <View style={Styles.container}>
          <Image
            source={require("../../assets/icon.png")}
            style={{ width: 150, height: 150, resizeMode: "contain" }}
          />
          <Text style={Styles.heading}>oliva</Text>
          <Text style={Styles.homeParagraph}>Healthcare delivery</Text>
          <TouchableOpacity
            style={Styles.touchableSection}
            onPress={() => this.props.navigation.navigate("Welcome")}
          >
            <Text style={Styles.touchableSectionText}>Get started</Text>
          </TouchableOpacity>
        </View>
      )) || <AppLoading />
    );
  }
}
