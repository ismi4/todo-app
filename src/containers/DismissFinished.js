import React, { Component } from "react";
import { connect } from "react-redux";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Button,
} from "react-native";
import { dismissFinished } from "../actions";

class DismissFinished extends React.Component {
  dismiss = () => {
    this.props.dispatch(dismissFinished());
  };

  render() {
    return (
      <View style={{ width: 200, alignSelf: "center", marginTop: 20 }}>
        <Button title="Dismiss Finished" onPress={this.dismiss} />
      </View>
    );
  }
}
export default connect()(DismissFinished);
