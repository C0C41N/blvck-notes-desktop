export type Closed = (id: string) => void
export type Theme = 'light' | 'dark'
export type winType = 'note' | 'list'

//

export interface INoteWin {
	type: 'note'
	id: string
	subTheme: number
	size: IXY
	pos: IXY
}

export interface IListWin {
	type: 'list'
	size: IXY
	pos: IXY
}

export interface INote {
	id: string
	data: string
}

export interface IXY {
	x: number
	y: number
}

export interface InitIPCArgs {
	id: string
	type: 'list' | 'note'
	subTheme?: number
}
