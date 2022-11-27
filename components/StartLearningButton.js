import { Pressable, Text, StyleSheet } from "react-native"

export default function StartLearningButton({ onPress }) {
	return (
		<Pressable
			style={({ pressed }) => [
				styles.pressable,
				pressed && styles.pressed,
			]}
			onPress={onPress}
		>
			<Text style={styles.text}>Rozpocznij naukę!</Text>
		</Pressable>
	)
}
const styles = StyleSheet.create({
	pressable: {
		borderWidth: 1,
		paddingVertical: 10,
		paddingHorizontal: 18,
		borderRadius: 5,
	},
	pressed: {
		opacity: 0.5,
	},
	text: {},
})
