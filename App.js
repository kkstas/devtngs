import { StatusBar } from "expo-status-bar"
import { StyleSheet, View, Text, Button } from "react-native"
import words from "./words"
import { useState, useEffect } from "react"
import GameModal from "./gameModal/GameModal"
import StartLearningButton from "./components/StartLearningButton"
import { init } from "./util/database"
import SQLtest from "./components/SQLtest"

export default function App() {
	const [gameOn, setGameOn] = useState(false)
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
			{gameOn ? (
				<GameModal
					data={words}
					stopLearningHandler={() => setGameOn(false)}
				/>
			) : (
				<StartLearningButton onPress={() => setGameOn(true)} />
			)}
			{/* <SQLtest /> */}
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
