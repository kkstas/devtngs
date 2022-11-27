import { Pressable, StyleSheet, Text } from "react-native"

export default function RevealButton({ onPress, translationVisible }) {
	return (
		<Pressable
			onPress={onPress}
			style={({ pressed }) => [
				styles.pressable,
				pressed && styles.pressed,
				translationVisible && styles.inactive,
			]}
		>
			<Text style={styles.text}>Odkryj tłumaczenie</Text>
		</Pressable>
	)
}

const styles = StyleSheet.create({
	pressable: {
		borderWidth: 1,
		justifyContent: "center",
		alignItems: "center",
		flex: 1,
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
