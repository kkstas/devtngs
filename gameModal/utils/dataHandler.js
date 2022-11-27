export function reformatDataForState(data) {
	const result = data.map((element) => {
		return {
			...element,
			know: false,
			try: 0,
		}
	})
	return result
}

export function findNewActiveWord(data) {
	const result = data.find((el) => el.know == false)
	return result
}

export function knowWordTableRefactor(wordTable, activeWord) {
	const result = wordTable.map((word) => ({
		...word,
		know: word.eng === activeWord.eng ? true : word.know,
		try: word.eng === activeWord.eng ? word.try + 1 : word.try,
	}))
	return result
}

export function dontKnowWordTableRefactor(wordTable, activeWord) {
	const tableWithoutWord = wordTable.filter(
		(word) => word.id !== activeWord.id
	)
	const updatedWord = { ...activeWord, try: activeWord.try + 1 }
	const result = [...tableWithoutWord, updatedWord]
	return result
}
