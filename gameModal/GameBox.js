import { StyleSheet, View } from "react-native"
import ActiveWord from "./components/ActiveWord"
import ButtonsContainer from "./components/buttons/ButtonsContainer"
import DataPeak from "../components/DataPeak"
import StopLearningButton from "./components/buttons/StopLearningButton"

export default function GameBox({
	wordTable,
	knowOnPress,
	dontKnowOnPress,
	word,
	stopLearningHandler,
	translationVisible,
	showTranslation,
}) {
	const wordComponent = word ? (
		<ActiveWord
			word={word}
			key={word.id}
			translationVisible={translationVisible}
		/>
	) : (
		<ActiveWord word="" />
	)

	console.log("game box rerendered")
	return (
		<View style={styles.container}>
			<View style={styles.stopLearningButton}>
				<StopLearningButton onPress={stopLearningHandler} />
			</View>
			{wordComponent}
			<ButtonsContainer
				knowOnPress={knowOnPress}
				dontKnowOnPress={dontKnowOnPress}
				showTranslation={showTranslation}
				translationVisible={translationVisible}
			/>
			<View style={{ paddingTop: 10 }}>
				<DataPeak data={wordTable} />
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		borderWidth: 1,
		borderRadius: 5,
		padding: 10,
		paddingTop: 30,
		justifyContent: "center",
		alignItems: "center",
	},
	stopLearningButton: {
		position: "absolute",
		top: 10,
		right: 10,
	},
})
