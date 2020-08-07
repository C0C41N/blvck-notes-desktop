import { ipcRenderer } from 'electron'

import { log } from '../../log'
import store, { setId, setSubTheme, setTheme, setType } from '../redux'
import { Theme, winType } from '../redux/types'

const dispatch = store.dispatch

export function funcInit() {
	ipcListenInit()
	ipcListenTheme()
}

export function closeWindow(id: string) {
	ipcRenderer.send('close', id)
}

function ipcListenInit() {
	ipcRenderer.on('init', (_, id: string, type: winType, theme: Theme, subTheme?: number) => {
		dispatch(setId(id))
		dispatch(setType(type))
		dispatch(setTheme(theme))

		if (type === 'note' && subTheme !== undefined) {
			dispatch(setSubTheme(subTheme))
		}
	})
}

function ipcListenTheme() {
	ipcRenderer.on('onThemeChange', (_, theme: Theme) => {
		dispatch(setTheme(theme))
	})
}
