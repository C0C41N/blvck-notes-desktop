import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs'

import { IListWin, INote, INoteWin } from './window'

export type WinFile = (INoteWin | IListWin)[]
export type NoteFile = INote[]
export type RFile = WinFile | NoteFile

class userFile {
	protected constructor(protected file: string) {
		this.createPath()
	}

	public read() {
		const contentString = readFileSync(this.file).toString()
		const content: RFile = JSON.parse(contentString)

		return content.length > 0 ? content : false
	}

	private createPath() {
		const parts = this.file.split('/')

		parts.reduce((a: string, e: string) => {
			const path = a ? [a, e].join('/') : e

			if (!existsSync(path))
				this.isFile(path) ? this.makeFile(path) : mkdirSync(path)

			return path
		}, '')
	}

	private makeFile(path: string) {
		writeFileSync(path, '[]')
	}

	private isFile = (path: string) => path === this.file
}

export class userFileWin extends userFile {
	public constructor() {
		super('user/windows.json')
	}

	public read = () => super.read() as false | WinFile
}
