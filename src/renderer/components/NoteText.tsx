import 'draft-js/dist/Draft.css'

import { Editor, EditorState, RichUtils } from 'draft-js'
import React from 'react'
import { cls, log } from 'src/log'

import { createStyles, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() =>
	createStyles({
		root: {
			position: 'absolute',
			top: '43px',
			left: '10px',
			right: '10px',
			bottom: '39px',
		},
	})
)

export default function NoteText(props: INoteTextProps) {
	const classes = useStyles()

	const { toggleInlineStyle } = RichUtils

	const { editorState, setEditorState, bold, italic, underline, strike, setStrike } = props

	// log(editorState.getCurrentContent().getPlainText().endsWith(' '))

	const editorUpdate = (x: EditorState) => {
		x = bold === isBold(x) ? x : toggleBold(x)
		x = italic === isItalic(x) ? x : toggleItalic(x)
		x = underline === isUnderline(x) ? x : toggleUnderline(x)
		x = strike === isStrike(x) ? x : toggleStrike(x)

		setEditorState(x)
	}

	return (
		<div className={classes.root}>
			<Editor editorState={editorState} onChange={editorUpdate} placeholder={'Take a Note...'} spellCheck={true} />
		</div>
	)

	function isBold(e: EditorState) {
		return e.getCurrentInlineStyle().includes('BOLD')
	}

	function isItalic(e: EditorState) {
		return e.getCurrentInlineStyle().includes('ITALIC')
	}

	function isUnderline(e: EditorState) {
		return e.getCurrentInlineStyle().includes('UNDERLINE')
	}

	function isStrike(e: EditorState) {
		return e.getCurrentInlineStyle().includes('STRIKETHROUGH')
	}

	function toggleBold(e: EditorState) {
		return toggleInlineStyle(e, 'BOLD')
	}

	function toggleItalic(e: EditorState) {
		return toggleInlineStyle(e, 'ITALIC')
	}

	function toggleUnderline(e: EditorState) {
		return toggleInlineStyle(e, 'UNDERLINE')
	}

	function toggleStrike(e: EditorState) {
		return toggleInlineStyle(e, 'STRIKETHROUGH')
	}
}

interface INoteTextProps {
	editorState: EditorState
	setEditorState: (editorState: EditorState) => void
	bold: boolean
	italic: boolean
	underline: boolean
	strike: boolean
	setStrike: (strike: boolean) => void
}
