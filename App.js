import { StatusBar } from "expo-status-bar"
import { StyleSheet, View, Text, Button } from "react-native"
import { useState, useEffect } from "react"
import { init } from "./util/database"
import MainScreen from "./screens/MainScreen"

export default function App() {
	const [dbInitialized, setDbInitialized] = useState(false)

	useEffect(() => {
		init()
			.then(() => {
				setDbInitialized(true)
			})
			.catch((err) => {
				console.log(err)
			})
	}, [])

	if (!dbInitialized) {
		return (
			<View>
				<Text>database not initialized</Text>
			</View>
		)
	}

	return (
		<View style={styles.container}>
			<MainScreen />
			<StatusBar style="auto" />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
		paddingHorizontal: "5%",
	},
})
