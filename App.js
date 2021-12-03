import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Modal, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function App() {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={true}

      // onRequestClose={() => setModalVisible(!modleVisible)}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.top}>
            <Text style={styles.modalTitle}>POOL REWARD </Text>
          </View>
          <View style={styles.bottom}>
            <View style={styles.leftside}>
              <View style={[styles.circle]}>
                <Text style={{ color: "white", fontSize: 18 }}>1</Text>
              </View>
              <View style={styles.line}></View>
              <View style={styles.circle}>
                <Text style={{ color: "white", fontSize: 18 }}>2</Text>
              </View>
              <View style={styles.line}></View>
              <View style={[styles.circle, { backgroundColor: "#FFAF7A" }]}>
                <Text style={{ color: "white", fontSize: 18 }}>3</Text>
              </View>
              <View style={styles.line}></View>
              <View style={styles.circle}>
                <Text style={{ color: "white", fontSize: 18 }}>4</Text>
              </View>
            </View>
            <View style={styles.rightside}>
              <Text style={styles.rightText}>
                hello hey hii hello hey hii hello hello{" "}
              </Text>
              <Text style={styles.rightText}>
                hello hey hii hello hey hii hello hello{" "}
              </Text>
              <Text style={styles.rightText}>
                hello hey hii hello hey hii hello hello{" "}
              </Text>
              <Text style={styles.rightText}>
                hello hey hii hello hey hii hello hello{" "}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",

    // opacity: 0.2,
  },
  modalView: {
    // zIndex: 10,
    // backgroundColor: "grey",
    backgroundColor: "white",
    width: windowWidth * 0.9,
    borderRadius: 20,
    // padding: 35,
    // paddingTop: 10,
    // paddingBottom: 30,
    paddingVertical: 30,
    paddingHorizontal: 15,
    justifyContent: "center",
    // shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    // shadowOpacity: 0.25,
    // shadowRadius: 4,
    elevation: 1,
    // borderWidth: 2,
    // flex: 1,
    // flexDirection: "row",
    borderWidth: 1,
    borderColor: "#ff6600",
  },
  top: {
    // justifyContent: "center",
    // alignItems: "center",
  },
  modalTitle: {
    fontSize: 20,
    // marginHorizontal: 10,
    marginHorizontal: 10,
    borderColor: "#ffaf7a",
    borderBottomWidth: 1,
    fontWeight: "bold",
    letterSpacing: 1.5,
    marginLeft: 25,
    // marginRight: 25,
  },
  bottom: {
    flexDirection: "row",
  },

  leftside: {
    flex: 3,
    // borderWidth: 1,
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 50,
    // backgroundColor: "black",
    backgroundColor: "#FF6600",
    justifyContent: "center",
    alignItems: "center",

    // marginVertical: 10,
  },
  line: {
    width: 4,
    height: 15,
    // backgroundColor: "black",
    // overflow: "hidden",
    backgroundColor: "#FF6600",
  },
  rightside: {
    flex: 7,
    // borderWidth: 1,
    paddingVertical: 10,
    justifyContent: "space-between",
  },
  rightText: {
    // marginBottom: 13,
    fontSize: 16,
    // borderWidth: 1,
    color: "black",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    padding: 30,
  },
});
