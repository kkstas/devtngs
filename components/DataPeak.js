import { View, Text, StyleSheet } from "react-native"

export default function DataPeak({ data }) {
	const preData = data.map((word) => {
		return {
			...word,
		}
	})
	const table = preData.map((word) => {
		return (
			<View
				style={styles.row}
				key={word.id}
			>
				<Text style={styles.text}>{word.id}</Text>
				<Text style={styles.text}>{word.eng}</Text>
				<Text style={styles.text}>{word.pl}</Text>
				<Text
					style={
						(styles.text,
						word.know ? styles.greenText : styles.redText)
					}
				>{`${word.know}`}</Text>
				<Text style={styles.text}>{word.try}</Text>
			</View>
		)
	})

	return <View style={styles.container}>{table}</View>
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		justifyContent: "center",
		alignItems: "center",
	},
	row: {
		width: "100%",
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "row",
	},
	text: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		textAlign: "center",
		width: "25%",
	},
	redText: {
		color: "red",
	},
	greenText: {
		color: "green",
	},
})
