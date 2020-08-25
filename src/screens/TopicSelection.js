import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function TopicSelection({route}) {
  const { PrimaryType } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.rect1Stack}>
        <View style={styles.rect1}>
          <Text style={styles.lowerPrimary}>{PrimaryType}</Text>
        </View>
        <View style={styles.rect2}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rect1: {
    top: 0,
    height: 239,
    position: "absolute",
    backgroundColor: "rgba(247,142,105,1)",
    left: 3,
    right: 4
  },
  lowerPrimary: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: 26,
    height: 88,
    width: 257,
    marginTop: 45,
    marginLeft: 37
  },
  rect2: {
    top: 151,
    left: 0,
    height: 141,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 100,
    right: 0
  },
  rect1Stack: {
    height: 292,
    marginLeft: -3,
    marginRight: -4
  }
});

export default TopicSelection;
