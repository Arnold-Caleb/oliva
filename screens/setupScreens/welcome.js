import React from "react";
import {
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";

import { Styles } from "../../styles";

import * as Font from "expo-font";

export default class WelcomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      activity: true,
    };
  }

  handleNameChange = (name) => {
    this.setState({ name }, this.handleActivity);
  };

  handleActivity = () => {
    let { name } = this.state;
    name = name.trim();
    if (name.length >= 2) {
      if (name.length <= 20) {
        this.setState({ activity: false });
      }
      if (name.length > 20) {
        this.setState({ activity: true });
      }
    }
  };

  render() {
    return (
      <KeyboardAvoidingView
        style={Styles.container}
        behavior="height"
        keyboardVerticalOffset={0}
      >
        <Image
          source={require("../../assets/undraw/welcome.png")}
          style={Styles.welcomeImage}
        />
        <Text
          style={[Styles.homeParagraph, { fontSize: 20, marginRight: 120 }]}
        >
          Let's set up some things before we get started
        </Text>
        <TextInput
          autoFocus={true}
          style={Styles.input}
          placeholder="Enter your name"
          onChangeText={this.handleNameChange}
        />
        <TouchableOpacity
          disabled={this.state.activity}
          style={
            this.state.activity
              ? [Styles.touchableSection, { backgroundColor: "#9ec7db" }]
              : Styles.touchableSection
          }
          onPress={() =>
            this.props.navigation.navigate("Main", {
              name: this.state.name,
            })
          }
        >
          <Text style={Styles.touchableSectionText}>Continue</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}
