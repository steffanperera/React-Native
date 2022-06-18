import React from "react";
import { StyleSheet, Text, View } from "react-native";

import TaskItem from "./components/TaskItem";

const App = () => {
    return (
        // task view
        <View style={styles.container}>
            <View style={styles.taskWarapper}>
                <Text style={styles.sectionTitle}>Today's tasks</Text>
                <View style={styles.items}>
                    <TaskItem text="text 1" />
                    <TaskItem text="text 2" />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#E8EAED",
    },
    taskWarapper: {
        paddingTop: 50,
        paddingHorizontal: 20,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },
    items: {},
});

export default App;
