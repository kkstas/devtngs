import { insertWord } from "../../util/database"
import { mydata } from "../../data/exampleData"

export function insertDefaultData() {
	let firstWords = []
	for (let i = 0; i < mydata.length; i++) {
		const word = {
			id: mydata[i].id,
			eng: mydata[i].eng,
			pl: mydata[i].pl,
			level: 1,
			nextDate: null,
		}
		insertWord(word)
		if (i < 10) {
			firstWords.push(word)
		}
	}
	return firstWords
}
