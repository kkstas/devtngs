import { Pressable, Text, StyleSheet } from "react-native"

export default function StopLearningButton({ onPress }) {
	return (
		<Pressable
			style={({ pressed }) => [
				styles.pressable,
				pressed && styles.pressed,
			]}
			onPress={onPress}
		>
			<Text style={styles.text}>X</Text>
		</Pressable>
	)
}
const styles = StyleSheet.create({
	pressable: {
		borderWidth: 1,
		borderRadius: 15,
		width: 40,
		height: 40,
		justifyContent: "center",
		alignItems: "center",
	},
	pressed: {
		opacity: 0.5,
	},
	text: {},
})
