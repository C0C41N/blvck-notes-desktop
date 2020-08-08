import { ipcRenderer, remote } from 'electron'
import { log } from 'src/log'
import { InitIPCArgs } from 'src/shared/types'

import store, { setId, setSubTheme, setTheme, setType } from '../redux'

const dispatch = store.dispatch

export function funcInit() {
	ipcListenInit()
	setInitTheme()
	listenTheme()
}

function setInitTheme() {
	dispatch(setTheme(getTheme()))
}

function ipcListenInit() {
	ipcRenderer.on('init', (_, { id, type, subTheme }: InitIPCArgs) => {
		dispatch(setId(id))
		dispatch(setType(type))

		if (type === 'note' && subTheme !== undefined) {
			dispatch(setSubTheme(subTheme))
		}
	})
}

function listenTheme() {
	remote.nativeTheme.on('updated', () => {
		setInitTheme()
	})
}

function getTheme() {
	return remote.nativeTheme.shouldUseDarkColors ? 'dark' : 'light'
}
