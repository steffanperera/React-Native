import React from "react";
import { View, Text, StyleSheet } from "react-native";

const TaskItem = (props) => {
    return (
        <View>
            <Text>{props.text}</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default TaskItem;
