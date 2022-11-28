import { StyleSheet, View, Text, Button } from "react-native"
import words from "../words"
import { useState, useEffect } from "react"
import GameModal from "../gameModal/GameModal"
import StartLearningButton from "../components/StartLearningButton"
import { fetchWords } from "../util/database"
import { insertDefaultData } from "./utils/dataHandler"

export default function MainScreen() {
	const [gameOn, setGameOn] = useState(false)
	console.log("Main Screen rendered")
	const [isFetching, setIsFetching] = useState(true)
	const [data, setData] = useState()
	const [error, setError] = useState()

	useEffect(() => {
		if (gameOn) {
			async function getData() {
				setIsFetching(true)
				console.log("fetching SQL database")
				try {
					const fetchedData = await fetchWords()
					setData(fetchedData)
					if (fetchedData && fetchedData.length < 10) {
						insertDefaultData()
						console.log("inserting default data to database")
					}
				} catch (error) {
					setError("Nie udalo sie pobrac danych z SQL")
					console.log("database fetch error")
				}
				setIsFetching(false)
			}
			getData()
		}
	}, [gameOn])

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
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		width: "100%",
		height: "100%",
	},
})
