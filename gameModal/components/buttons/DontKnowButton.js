import { Pressable, StyleSheet, Text } from "react-native"

export default function DontKnowButton({ onPress, translationVisible }) {
	return (
		<Pressable
			onPress={onPress}
			style={({ pressed }) => [
				styles.pressable,
				pressed && styles.pressed,
				!translationVisible && styles.inactive,
			]}
		>
			<Text style={styles.text}>Nie znam</Text>
		</Pressable>
	)
}

const styles = StyleSheet.create({
	pressable: {
		borderWidth: 1,
		justifyContent: "center",
		alignItems: "center",
		flex: 25,
		paddingVertical: 5,
		borderRadius: 5,
	},
	pressed: {
		opacity: 0.5,
	},
	inactive: {
		opacity: 0.2,
	},
	text: {},
})
