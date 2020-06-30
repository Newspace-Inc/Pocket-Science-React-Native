import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text
} from "react-native";
import MaterialCommunityIconsIcon from 'react-native-vector-icons/MaterialCommunityIcons';

function CupertinoSearchBarWithCancelButton(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View
        style={[
          styles.rect,
          {
            backgroundColor: props.rect || "#CECED2"
          }
        ]}
      >
        <MaterialCommunityIconsIcon
          name="magnify"
          style={styles.inputLeftIcon}
        ></MaterialCommunityIconsIcon>
        <MaterialCommunityIconsIcon
          name="help-box"
          style={styles.inputRightIcon}
        ></MaterialCommunityIconsIcon>
        <TextInput
          placeholder="Enter your topic..."
          enablesReturnKeyAutomatically={true}
          multiline={false}
          numberOfLines={2}
          style={styles.inputStyle}
        ></TextInput>
      </View>
      <TouchableOpacity /* Conditional navigation not supported at the moment */
        style={styles.rightIconButton}
      >
        <Text style={styles.rightButtonText}>
          {props.rightButtonText || "Cancel"}

        </Text>
        
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EFEFF4",
    padding: 8,
    paddingRight: 0
  },
  rect: {
    flex: 1,
    flexDirection: "row",
    borderRadius: 5,
    alignSelf: "stretch"
  },
  inputLeftIcon: {
    color: "rgba(255,249,249,1)",
    fontSize: 20,
    alignSelf: "center",
    paddingLeft: 5,
    paddingRight: 5,
    height: 0,
    width: 0,
    opacity: 0
  },
  inputRightIcon: {
    color: "#000",
    fontSize: 20,
    alignSelf: "center",
    paddingLeft: 5,
    paddingRight: 5,
    height: 0,
    width: 0,
    opacity: 0
  },
  inputStyle: {
    fontSize: 15,
    lineHeight: 15,
    color: "#000",
    flex: 1,
    backgroundColor: "rgba(255,255,255,1)",
    alignSelf: "stretch"
  },
  rightIconButton: {
    alignItems: "center",
    padding: 8
  },
  rightButtonText: {
    color: "#007AFF",
    fontSize: 15
  }
});

export default CupertinoSearchBarWithCancelButton;
