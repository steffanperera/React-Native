import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const TaskItem = (props) => {
    return (
        <View style={styles.item}>
            <View style={styles.itemsLeft}>
                <View style={styles.square}></View>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
            <View style={styles.circular}></View>
        </View>
    );
};

const styles = StyleSheet.create({
    item: {
        backgroundColor: "black",
        padding: 15,
        marginBottom: 10,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    itemsLeft: {
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "wrap",
    },
    square: {
        height: 30,
        width: 30,
        backgroundColor: "#548CFF",
        marginRight: 20,
        borderRadius: 100,
    },
    itemText: {
        color: "white",
        fontSize: 16,
        maxWidth: "80%",
    },
    circular: {
        height: 12,
        width: 12,
        borderRadius: 100,
        borderColor: "#548CFF",
        borderWidth: 2,
    },
});

export default TaskItem;
