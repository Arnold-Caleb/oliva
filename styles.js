import React from "react";
import { StyleSheet, Dimensions } from "react-native";

var width = Dimensions.get("window").width;
var height = Dimensions.get("window").height;

export const THEME_COLOR = "#4d4a37";

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 5,
    paddingTop: 20,
    backgroundColor: "#f5f3ed",
    width: width,
    height: height,
  },
  heading: {
    marginLeft: 5,
    marginTop: 20,
    fontSize: 70,
    //fontWeight: 'bold',
    color: "#1b3f54",
    fontFamily: "Play-Fair",
  },
  welcomeImage: {
    width: width - 100,
    height: height / 5,
    marginBottom: 20,
  },
  homeParagraph: {
    marginTop: 20,
    marginLeft: 10,
    fontSize: 18,
    color: "#1b0c36",
    fontFamily: "Open-Sans",
    lineHeight: 30,
    fontWeight: "500",
  },
  touchableSection: {
    backgroundColor: "#54a4cc",
    borderRadius: 20,
    margin: 10,
    alignItems: "center",
    marginTop: 20,
    padding: 8,
    width: 120,
  },
  touchableSectionText: {
    fontSize: 16,
    color: "#f5f3ed",
    fontFamily: "Open-Sans",
  },
  section: {
    flex: 1,
    margin: 2,
    padding: 5,
    paddingTop: 10,
    borderColor: THEME_COLOR,
  },
  input: {
    borderColor: "#1b0c36",
    borderStyle: "solid",
    borderWidth: 1 / 2,
    padding: 8,
    paddingLeft: 12,
    paddingRight: 12,
    fontSize: 16,
    fontWeight: "300",
    color: "#1b0c36",
    margin: 5,
    marginTop: 50,
    marginBottom: 5,
    borderRadius: 20,
  },
  touchableContinue: {
    backgroundColor: "#a9c7a9",
    borderRadius: 20,
    borderStyle: "solid",
    borderColor: "#4d4a37",
    borderWidth: 0.1,
    padding: 16,
    marginTop: 40,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  mapContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 0,
    marginTop: 10,
    height: height - 100,
    width: width - 10,
    borderRadius: 30,
    overflow: "hidden",
  },
  mapView: {
    flex: 1,
    margin: 0,
    height: height - 200,
    width: width - 10,
  },
});

export const MapStyle = [
  {
    elementType: "geometry",
    stylers: [
      {
        color: "#242f3e",
      },
    ],
  },
  {
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#746855",
      },
    ],
  },
  {
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#242f3e",
      },
    ],
  },
  {
    featureType: "administrative.locality",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#d59563",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#d59563",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [
      {
        color: "#263c3f",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#6b9a76",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [
      {
        color: "#38414e",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#212a37",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#9ca5b3",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [
      {
        color: "#746855",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#1f2835",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#f3d19c",
      },
    ],
  },
  {
    featureType: "transit",
    elementType: "geometry",
    stylers: [
      {
        color: "#2f3948",
      },
    ],
  },
  {
    featureType: "transit.station",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#d59563",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [
      {
        color: "#17263c",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#515c6d",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#17263c",
      },
    ],
  },
];
