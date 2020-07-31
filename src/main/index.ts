import { app, BrowserWindow } from 'electron'

import { winURL } from './misc'

app.on('ready', createNote)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (Note === null) {
    createNote()
  }
})

let Note: BrowserWindow | null

function createNote() {
  Note = new BrowserWindow({
    frame: false,
    x: 1000,
    y: 90,
    height: 640,
    useContentSize: true,
    width: 800,
    webPreferences: {
      nodeIntegration: true
    }
  })

  Note.removeMenu()
  Note.loadURL(winURL)
  Note.setTitle('Blvck Notes')
  Note.on('closed', () => {
    Note = null
  })
}
