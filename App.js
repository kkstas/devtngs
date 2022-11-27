import { StatusBar } from "expo-status-bar"
import { StyleSheet, View } from "react-native"
import words from "./words"
import { useState } from "react"
import GameModal from "./gameModal/GameModal"
import StartLearningButton from "./components/StartLearningButton"

export default function App() {
	const [gameOn, setGameOn] = useState(false)

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
