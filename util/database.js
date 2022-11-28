import * as SQLite from "expo-sqlite"

const database = SQLite.openDatabase("devtonguesdb.db")

export function init() {
	const promise = new Promise((resolve, reject) => {
		database.transaction((tx) => {
			tx.executeSql(
				`CREATE TABLE IF NOT EXISTS words (
                    id TEXT PRIMARY KEY NOT NULL,
                    eng TEXT NOT NULL,
                    pl TEXT NOT NULL,
                    level INTEGER NOT NULL,
                    nextdate TEXT
                )`,
				[],
				() => {
					resolve()
				},
				(_, error) => {
					reject(error)
				}
			)
		})
	})
	return promise
}

export function insertWord(word) {
	const promise = new Promise((resolve, reject) => {
		database.transaction((tx) => {
			tx.executeSql(
				`INSERT INTO words (id, eng, pl, level, nextdate) VALUES (?, ?, ?, ?, ?)`,
				[word.id, word.eng, word.pl, word.level, word.nextdate],
				(_, result) => {
					resolve(result)
				},
				(_, error) => {
					reject(error)
				}
			)
		})
	})
	return promise
}

export function fetchWords() {
	const promise = new Promise((resolve, reject) => {
		database.transaction((tx) => {
			tx.executeSql(
				"SELECT * FROM words",
				[],
				(_, result) => {
					resolve(result.rows._array)
				},
				(_, error) => {
					reject(error)
				}
			)
		})
	})
	return promise
}

export function fetchDueDateWords() {
	const today = new Date().toISOString().split("T")[0]
	const promise = new Promise((resolve, reject) => {
		database.transaction((tx) => {
			tx.executeSql(
				"SELECT * FROM words WHERE nextdate <= (?) ORDER BY nextdate ASC",
				[today],
				(_, result) => {
					resolve(result.rows._array)
				},
				(_, error) => {
					reject(error)
				}
			)
		})
	})
	return promise
}

export function fetchNullDateWords(length) {
	const promise = new Promise((resolve, reject) => {
		database.transaction((tx) => {
			tx.executeSql(
				"SELECT * FROM words WHERE nextdate IS NULL LIMIT (?)",
				[length],
				(_, result) => {
					resolve(result.rows._array)
				},
				(_, error) => {
					reject(error)
				}
			)
		})
	})
	return promise
}

export function updateWordLevel(id, level) {
	const promise = new Promise((resolve, reject) => {
		database.transaction((tx) => {
			tx.executeSql(
				`UPDATE words SET level = (?) WHERE id = (?)`,
				[level, id],
				(_, result) => {
					resolve(result)
				},
				(_, error) => {
					reject(error)
				}
			)
		})
	})
	return promise
}

export function updateWordDate(id, date) {
	const promise = new Promise((resolve, reject) => {
		database.transaction((tx) => {
			tx.executeSql(
				`UPDATE words SET nextdate = (?) WHERE id = (?)`,
				[date, id],
				(_, result) => {
					resolve(result)
				},
				(_, error) => {
					reject(error)
				}
			)
		})
	})
	return promise
}

export function updateWordLevelAndDate(id, level, date) {
	const promise = new Promise((resolve, reject) => {
		database.transaction((tx) => {
			tx.executeSql(
				`UPDATE words 
				SET nextdate = (?), level = (?) 
				WHERE id = (?)`,
				[date, level, id],
				(_, result) => {
					resolve(result)
				},
				(_, error) => {
					reject(error)
				}
			)
		})
	})
	return promise
}
