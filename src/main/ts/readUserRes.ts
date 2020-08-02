import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs'
import { type } from 'os'

import { IListWin } from './list'
import { INote, INoteWin } from './note'

export type WinFile = (INoteWin | IListWin)[]
export type NoteFile = INote[]
export type rFile = WinFile | NoteFile

class readFile {
	protected fileName = ''
	protected path = ''

	protected constructor(protected file: string) {
		this.assignProperties()
		this.createPath()
	}

	public read() {
		const contentString = readFileSync(this.file).toString()
		const content: rFile = JSON.parse(contentString)

		return content.length > 0 ? content : false
	}

	private assignProperties() {
		const parts = this.file.split('/')

		this.fileName = parts.pop() as string
		this.path = parts.join('/')
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
		writeFileSync(path, JSON.stringify([]))
	}

	private isFile = (path: string) => path.length > this.path.length
}

export class readWin extends readFile {
	public constructor() {
		super('user/windows.json')
	}

	public read = () => super.read() as false | WinFile
}
