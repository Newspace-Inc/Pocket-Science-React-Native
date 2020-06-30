import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import CupertinoSearchBarWithCancelButton from "../components/CupertinoSearchBarWithCancelButton";
import CupertinoButtonInfo from "../components/CupertinoButtonInfo";

function Untitled(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rectStack}>
        <View style={styles.rect}>
          <Text style={styles.loremIpsum7}>Lorem Ipsum</Text>
          <Text style={styles.loremIpsum}>Lorem Ipsum</Text>
          <Text style={styles.loremIpsum3}>Lorem Ipsum</Text>
          <Text style={styles.loremIpsum5}>Lorem Ipsum</Text>
        </View>
        <View style={styles.rect2}>
          <CupertinoSearchBarWithCancelButton
            rect="#CECED2"
            rightIconButton="Go Back"
            rect="rgba(255,255,255,1)"
            style={styles.cupertinoSearchBarWithCancelButton}
          ></CupertinoSearchBarWithCancelButton>
          <View style={styles.lowerPrimaryRow}>
            <Text style={styles.lowerPrimary}>Lower Primary</Text>
            <Text style={styles.upperPrimary}>Upper Primary</Text>
          </View>
          <Image
            source={require("../assets/images/Screenshot_2020-06-21_at_3.13.58_PM.png")}
            resizeMode="contain"
            style={styles.image}
          ></Image>
        </View>
        <CupertinoButtonInfo
          caption=" "
          style={styles.cupertinoButtonInfo2}
        ></CupertinoButtonInfo>
        <CupertinoButtonInfo
          caption=" "
          style={styles.cupertinoButtonInfo3}
        ></CupertinoButtonInfo>
      </View>
      <View style={styles.cupertinoButtonInfo4Stack}>
        <CupertinoButtonInfo
          caption=" "
          style={styles.cupertinoButtonInfo4}
        ></CupertinoButtonInfo>
        <Text style={styles.loremIpsum9}>Lorem Ipsum</Text>
      </View>
      <Text style={styles.recentlyOpened}>Recently Opened</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,1)"
  },
  rect: {
    position: "absolute",
    backgroundColor: "rgba(247,142,105,1)",
    top: 0,
    left: 0,
    right: 0,
    height: 234
  },
  loremIpsum7: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 63,
    marginLeft: 282
  },
  loremIpsum: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginLeft: 15
  },
  loremIpsum3: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 6,
    marginLeft: 12
  },
  loremIpsum5: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 8,
    marginLeft: 11
  },
  rect2: {
    top: 211,
    left: 0,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "rgba(252,249,249,1)",
    borderStyle: "solid",
    borderRadius: 24,
    right: 2,
    height: 319
  },
  cupertinoSearchBarWithCancelButton: {
    height: 65,
    width: 330,
    borderRadius: 21,
    shadowOpacity: 1,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 1,
      height: 1
    },
    elevation: 15,
    shadowRadius: 5,
    backgroundColor: "rgba(255,255,255,1)",
    marginTop: 30,
    marginLeft: 22
  },
  lowerPrimary: {
    fontFamily: "helvetica-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    marginTop: 7
  },
  upperPrimary: {
    fontFamily: "helvetica-regular",
    color: "rgba(123,122,122,1)",
    fontSize: 20,
    textAlign: "justify",
    height: 46,
    width: 141,
    marginLeft: 52,
    zIndex: 3
  },
  lowerPrimaryRow: {
    height: 46,
    flexDirection: "row",
    marginTop: 58,
    marginLeft: 32,
    marginRight: 21
  },
  image: {
    width: 98,
    height: 107,
    marginTop: 10,
    marginLeft: 229
  },
  cupertinoButtonInfo2: {
    height: 238,
    position: "absolute",
    left: 209,
    top: 333,
    borderRadius: 32,
    backgroundColor: "rgba(243,223,162,1)",
    width: 151,
    overflow: "scroll"
  },
  cupertinoButtonInfo3: {
    height: 243,
    width: 157,
    position: "absolute",
    left: 15,
    top: 333,
    borderRadius: 32,
    backgroundColor: "rgba(125,207,182,1)"
  },
  rectStack: {
    height: 576,
    marginTop: -1,
    marginLeft: -1,
    marginRight: -2
  },
  cupertinoButtonInfo4: {
    height: 82,
    width: 346,
    position: "absolute",
    left: 0,
    top: 0,
    borderRadius: 28,
    backgroundColor: "rgba(100,170,149,1)",
    overflow: "scroll"
  },
  loremIpsum9: {
    top: 19,
    left: 80,
    position: "absolute",
    fontFamily: "helvetica-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    width: 105,
    height: 22
  },
  cupertinoButtonInfo4Stack: {
    width: 346,
    height: 82,
    marginTop: 100,
    marginLeft: 13
  },
  recentlyOpened: {
    fontFamily: "helvetica-regular",
    color: "rgba(123,122,122,1)",
    fontSize: 23,
    marginTop: -123,
    marginLeft: 22
  }
});

export default Untitled;