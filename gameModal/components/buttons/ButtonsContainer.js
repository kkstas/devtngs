import { View, StyleSheet } from "react-native"
import KnowButton from "./KnowButton"
import DontKnowButton from "./DontKnowButton"
import RevealButton from "./RevealButton"

export default function ButtonsContainer({
	knowOnPress,
	dontKnowOnPress,
	showTranslation,
	translationVisible,
}) {
	return (
		<View style={styles.container}>
			<View style={styles.row}>
				<RevealButton
					onPress={showTranslation}
					translationVisible={translationVisible}
				/>
			</View>
			<View style={styles.row}>
				<DontKnowButton
					onPress={dontKnowOnPress}
					translationVisible={translationVisible}
				/>
				<View style={styles.break}></View>
				<KnowButton
					onPress={knowOnPress}
					translationVisible={translationVisible}
				/>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		width: "90%",
	},
	row: {
		width: "100%",
		flexDirection: "row",
		marginBottom: 8,
	},
	break: {
		flex: 1,
	},
})
