import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

const App = () => {
    return (
        // task view
        <View style={styles.container}>
            <View style={styles.taskWarapper}>
                <Text style={styles.sectionTitle}>Today's tasks</Text>
                <View style={styles.items}>{/* tasks */}</View>
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
        paddingTop: 80,
        paddingHorizontal: 20,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: "bold",
    },
    items: {},
});

export default App;
