import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    KeyboardAvoidingView,
    Platform,
    TextInput,
    TouchableOpacity,
} from "react-native";
import TaskItem from "./components/TaskItem";

const App = () => {
    const [task, setTask] = useState();
    const [taskItem, setTaskItems] = useState();

    const handleAddTask = () => {
        setTaskItems([...taskItem, task]);
        setTask(null);
    };

    return (
        // task view
        <View style={styles.container}>
            <View style={styles.taskWarapper}>
                <Text style={styles.sectionTitle}>Today's tasks</Text>
                <View style={styles.items}>
                    {taskItem.map((item, index) => {
                        return <TaskItem key={index} text={item} />;
                    })}
                </View>
            </View>
            {/* write a task */}
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.writeTaskWrapper}
            >
                <TextInput
                    style={styles.input}
                    placeholder={"Enter task"}
                    placeholderTextColor="white"
                    color="white"
                    fontSize="16"
                    value={task}
                    onChangeText={(text) => setTask(text)}
                />
                <TouchableOpacity onPress={() => handleAddTask()}>
                    <View style={styles.addWrapper}>
                        <Text style={styles.addText}>+</Text>
                    </View>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1B1A17",
    },
    taskWarapper: {
        paddingTop: 50,
        paddingHorizontal: 20,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: "bold",
        color: "white",
    },
    items: {
        marginTop: 20,
    },
    writeTaskWrapper: {
        position: "absolute",
        bottom: 10,
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    input: {
        margin: 15,
        padding: 15,
        width: 250,
        height: 50,
        backgroundColor: "black",
        borderRadius: 100,
    },
    addWrapper: {
        marginHorizontal: 15,
        paddingHorizontal: 15,
        width: 50,
        height: 50,
        backgroundColor: "black",
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
    },
    addText: {
        color: "white",
        fontSize: 16,
    },
});

export default App;
