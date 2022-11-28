import { updateWordLevelAndDate } from "../../util/database"

function setDate(level) {
	const today = new Date()
	const delay = 2 ** level
	today.setDate(today.getDate() + delay)
	const dateFormatted = today.toISOString().split("T")[0]
	return dateFormatted
}

function markWord(word) {
	const oldLevel = Number(word.level)
	let newLevel = 0
	const wordTry = word.try
	console.log("TRY:" + wordTry)
	if (wordTry === 1) {
		if (oldLevel !== 5) {
			newLevel = oldLevel + 1
		} else {
			newLevel = oldLevel
		}
	}
	if (wordTry === 2) {
		if (oldLevel > 3) {
			newLevel = oldLevel - 1
		} else {
			newLevel = oldLevel
		}
	}
	if (wordTry > 2) {
		if (oldLevel > 1) {
			newLevel = oldLevel - 1
		} else {
			newLevel = 1
		}
	}
	const newDate = setDate(newLevel)
	console.log("NEW WORD UPDATE:")
	console.log(word.id)
	console.log(newLevel)
	console.log(newDate)
	console.log("----")
	updateWordLevelAndDate(word.id, newLevel, newDate)
}

export default function markGame(allWords) {
	for (let i = 0; i < allWords.length; i++) {
		markWord(allWords[i])
	}
}
