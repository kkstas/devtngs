import { View, Text, StyleSheet } from "react-native"

export default function ActiveWord({ word, translationVisible }) {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>{word.eng}</Text>
			<Text style={styles.text}>
				{translationVisible ? word.pl : " "}
			</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		justifyContent: "center",
		alignItems: "center",
		height: 70,
		paddingBottom: 15,
	},
	text: {
		fontSize: 20,
	},
})
