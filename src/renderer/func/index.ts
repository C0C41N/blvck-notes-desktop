import { ipcRenderer } from 'electron'

import store, { setId, setType } from '../redux'
import { winType } from '../redux/types'

const dispatch = store.dispatch

export function closeWindow(id: string) {
	ipcRenderer.send('close', id)
}

export function ipcListenInit() {
	ipcRenderer.on('init', (_, id: string, type: winType) => {
		dispatch(setId(id))
		dispatch(setType(type))
	})
}
