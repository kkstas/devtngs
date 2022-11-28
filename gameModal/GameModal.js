import GameBox from "./GameBox"
import { useState } from "react"
import {
	reformatDataForState,
	knowWordTableRefactor,
	findNewActiveWord,
	dontKnowWordTableRefactor,
} from "./utils/dataHandler"
import markGame from "../screens/utils/markGame"

export default function GameModal({ data, stopLearningHandler }) {
	const [wordTable, setWordTable] = useState(reformatDataForState(data))
	const [activeWord, setActiveWord] = useState(findNewActiveWord(wordTable))
	const [translationVisible, setTranslationVisible] = useState(false)

	if (!findNewActiveWord(wordTable)) {
		const afterGameData = wordTable
		markGame(afterGameData)
		stopLearningHandler()
	}

	function knowOnPress() {
		if (activeWord) {
			if (translationVisible) {
				const newWordTable = knowWordTableRefactor(
					wordTable,
					activeWord
				)
				setActiveWord(findNewActiveWord(newWordTable))
				setWordTable(newWordTable)
				setTranslationVisible(false)
			} else {
				console.log("button inactive")
			}
		} else {
			console.log(
				"brak state aktywnego slowa. Klikniecie przycisku know powinno byc niemozliwe"
			)
		}
	}

	function dontKnowOnPress() {
		if (activeWord) {
			if (translationVisible) {
				const newWordTable = dontKnowWordTableRefactor(
					wordTable,
					activeWord
				)
				setActiveWord(findNewActiveWord(newWordTable))
				setWordTable(newWordTable)
				setTranslationVisible(false)
			} else {
				console.log("button inactive")
			}
		} else {
			console.log(
				" brak state aktywnego slowa. klikniecie przycisku dont know powinno byc niemozliwe"
			)
		}
	}

	function showTranslation() {
		setTranslationVisible(true)
	}

	return (
		<GameBox
			wordTable={wordTable}
			knowOnPress={knowOnPress}
			dontKnowOnPress={dontKnowOnPress}
			word={activeWord}
			stopLearningHandler={stopLearningHandler}
			translationVisible={translationVisible}
			showTranslation={showTranslation}
		/>
	)
}
