import clsx from 'clsx'
import { EditorState } from 'draft-js'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import { themes } from '@/func/themes'
import { IState } from '@/redux'
import { createStyles, makeStyles } from '@material-ui/core/styles'

import NotesFooter from './NotesFooter'
import NoteText from './NoteText'
import Titlebar from './Titlebar'

const useStyles = makeStyles(() =>
	createStyles({
		root: {
			height: '100vh',
			width: '100vw',
			boxSizing: 'border-box',
		},
	})
)

export default function Note() {
	const classes = useStyles()

	const theme = useSelector((state: IState) => state.theme)
	const subTheme = useSelector((state: IState) => state.subTheme)

	const { bodyCls } = themes[theme][subTheme]

	const [editorState, setEditorState] = useState(() => EditorState.createEmpty())
	const [bold, setBold] = useState(false)
	const [italic, setItalic] = useState(false)
	const [underline, setUnderline] = useState(false)
	const [strike, setStrike] = useState(false)

	return (
		<div className={clsx(classes.root, bodyCls)}>
			<Titlebar />
			<NoteText
				editorState={editorState}
				setEditorState={setEditorState}
				bold={bold}
				italic={italic}
				underline={underline}
				strike={strike}
				setStrike={setStrike}
			/>
			<NotesFooter
				bold={bold}
				italic={italic}
				underline={underline}
				strike={strike}
				setBold={setBold}
				setItalic={setItalic}
				setUnderline={setUnderline}
				setStrike={setStrike}
			/>
		</div>
	)
}
