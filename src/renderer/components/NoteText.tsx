import 'react-quill/dist/quill.snow.css'

import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import { log } from 'src/log'

import { createStyles, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() =>
	createStyles({
		root: {},
	})
)

export default function NoteText() {
	const classes = useStyles()

	const [value, setValue] = useState('')

	log(`value: ${value}`)

	return <div className={classes.root}>{<ReactQuill theme='snow' value={value} onChange={setValue} />}</div>
}
