import { View, Text, StyleSheet, Button } from "react-native"
import { useState, useEffect } from "react"
import {
	fetchWords,
	updateWordDate,
	updateWordLevel,
	insertWord,
} from "../util/database"

export default function SQLtest() {
	const [isFetching, setIsFetching] = useState(true)
	const [data, setData] = useState()
	const [error, setError] = useState()

	const exampleWordData = {
		id: `${Math.floor(Math.random() * 100000)}`,
		eng: "anteater",
		pl: "mrowkojad",
		level: 1,
		nextdate: new Date().toString(),
	}
	// insert works:
	// insertWord(exampleWordData)

	// update level works:
	// updateWordLevel("4937", 4)

	// update date works:
	// updateWordDate("4937", new Date().toISOString().split("T")[0])

	useEffect(() => {
		async function getData() {
			setIsFetching(true)
			try {
				const fetchedData = await fetchWords()
				setData(fetchedData)
			} catch (error) {
				setError("Nie udalo sie pobrac danych z SQL!!!")
			}
			setIsFetching(false)
		}
		getData()
	}, [])

	function errorHandler() {
		setError(null)
	}

	if (error && !isFetching) {
		return (
			<View>
				<Text>{error}</Text>
				<Button
					title="zamknij"
					onPress={errorHandler}
				/>
			</View>
		)
	}

	if (isFetching) {
		return (
			<View>
				<Text>fetching in progress...</Text>
			</View>
		)
	}

	return (
		<View style={styles.container}>
			<Text>asdf</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		height: 200,
		justifyContent: "center",
		alignItems: "cenetr",
		borderWidth: 1,
	},
})
