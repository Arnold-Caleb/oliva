import React from "react";
import {
  View,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { Styles, MapStyle } from "../../styles";

//import * as Font from "expo-font";

import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import * as Location from "expo-location";

export default class LocationScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "",
      mapRegion: {
        latitude: 0.3476,
        longitude: 32.5825,
        latitudeDelta: 0.0922 / 2,
        longitudeDelta: 0.0421 / 2,
      },
      activity: {
        location: true,
        continue: true,
      },
      currentLocation: null,
    };
  }

  componentDidMount() {
    this._getCurrentLocationAsync();
  }

  _getGeoCode = async () => {
    let { status } = await Location.requestPermissionsAsync();
    if (status !== "granted") {
      return;
    }
    console.log("Permission was granted!");
    let location = await Location.geocodeAsync(this.state.location);
    console.log(location);
    this.setState({
      mapRegion: {
        latitude: location[0].latitude,
        longitude: location[0].longitude,
        latitudeDelta: 0.0922 / 2,
        longitudeDelta: 0.0421 / 2,
      },
    });
    console.log(this.state.mapRegion);
  };

  _getCurrentLocationAsync = async () => {
    let { status } = await Location.requestPermissionsAsync();
    if (status !== "granted") {
      return;
    }

    try {
      let location = await Location.getCurrentLocationAsync({ accuracy: 6 });
      this.setState({ currentLocation: JSON.stringify(location) });

      this.setState({
        mapRegion: {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.0922 / 2,
          longitudeDelta: 0.0421 / 2,
        },
      });
    } catch (e) {
      console.log(e);
    }
  };

  onRegionChange = (region) => {
    this.setState({
      mapRegion: {
        latitude: region.latitude,
        longitude: region.longitude,
        latitudeDelta: 0.0922 / 2,
        longitudeDelta: 0.0421 / 2,
      },
    });
  };

  handleLocationChange = (location) => {
    this.setState({ location }, this.handleActivity);
  };

  handleActivity = () => {
    let { location } = this.state;
    location = location.trim();
    if (location.length >= 2) {
      if (location.length <= 20) {
        this.setState({ activity: { location: false } });
      }
      if (location.length > 20) {
        this.setState({ activity: { location: true } });
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
        <Text
          style={[
            Styles.heading,
            { fontSize: 32, marginBottom: 20, marginTop: 50 },
          ]}
        >
          Okay {this.props.navigation.getParam("name")},
        </Text>

        <Text
          style={[
            Styles.homeParagraph,
            {
              fontSize: 20,
              marginRight: 120,
              marginBottom: 10,
              color: "#272d38",
            },
          ]}
        >
          Enter your district
        </Text>

        <View style={Styles.mapContainer}>
          <MapView
            style={Styles.mapView}
            region={this.state.mapRegion}
            onRegionChange={this.onRegionChange}
            customMapStyle={MapStyle}
            provider={PROVIDER_GOOGLE}
          >
            <Marker
              draggable={true}
              onDragEnd={(e) =>
                this.setState({ mapRegion: e.nativeEvent.coordinate })
              }
              coordinate={{
                latitude: this.state.mapRegion.latitude,
                longitude: this.state.mapRegion.longitude,
              }}
              title="You are here"
              description="You are visiting a friend of yours here."
            />
          </MapView>
        </View>

        <TextInput
          blurOnSubmit={true}
          autoFocus={false}
          style={[Styles.input, { marginTop: 10, marginBottom: 0 }]}
          placeholder="Enter your location"
          onChangeText={this.handleLocationChange}
        />

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignContent: "center",
          }}
        >
          <TouchableOpacity
            disabled={this.state.activity.location}
            style={
              this.state.activity.location
                ? [Styles.touchableSection, { backgroundColor: "#9ec7db" }]
                : Styles.touchableSection
            }
            onPress={this._getGeoCode}
          >
            <Text style={Styles.touchableSectionText}>Get Location</Text>
          </TouchableOpacity>

          <TouchableOpacity
            disabled={this.state.activity.location}
            style={
              this.state.activity.location
                ? [Styles.touchableSection, { backgroundColor: "#9ec7db" }]
                : Styles.touchableSection
            }
            onPress={() =>
              this.props.navigation.navigate("Main", {
                params: {
                  location: this.state.location,
                  name: this.props.navigation.getParam("name"),
                },
              })
            }
          >
            <Text style={Styles.touchableSectionText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}
