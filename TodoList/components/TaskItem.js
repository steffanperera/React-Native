import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const TaskItem = (props) => {
    return (
        <View style={styles.item}>
            <View style={styles.itemsLeft}>
                <TouchableOpacity style={styles.square}></TouchableOpacity>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
            <View style={styles.circular}></View>
        </View>
    );
};

const styles = StyleSheet.create({
    item: {
        backgroundColor: "white",
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
        height: 24,
        width: 24,
        backgroundColor: "#55BCF6",
        opacity: 0.4,
        marginRight: 20,
    },
    itemText: {},
    circular: {},
});

export default TaskItem;
