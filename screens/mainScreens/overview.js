import React from "react";

import { Thumbnail } from "../../components/thumbnails";

export default class OverviewScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.navigation.getParam("name"),
      location: this.props.navigation.getParam("location"),
    };
  }

  componentDidMount() {
    console.log("Hi " + this.props.navigation.getParam("name"));
  }

  render() {
    return <Thumbnail screenProps={{ navigation: this.props.navigation }} />;
  }
}
