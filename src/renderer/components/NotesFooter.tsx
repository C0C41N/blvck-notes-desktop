import React from 'react'

import { createStyles, makeStyles } from '@material-ui/core/styles'

import { ReactComponent as Bold } from '../svgs/Bold.svg'
import { ReactComponent as Bullets } from '../svgs/Bullets.svg'
import { ReactComponent as Italic } from '../svgs/Italic.svg'
import { ReactComponent as Picture } from '../svgs/Picture.svg'
import { ReactComponent as Strikethrough } from '../svgs/Strikethrough.svg'
import { ReactComponent as Underline } from '../svgs/Underline.svg'
import BtnSvg from './BtnSvg'

const useStyles = makeStyles(() =>
	createStyles({
		root: {
			borderTop: 'solid 1px #747474',
			bottom: 0,
			display: 'flex',
			height: 32,
			padding: 3,
			position: 'fixed',
			width: 'calc(100% - 2px)',

			'& > button': {
				margin: '0px 5px',
			},

			'& > button:first-child': {
				margin: '0px 5px 0px 0px',
			},

			'& > button:last-child': {
				margin: '0px 0px 0px 5px',
			},
		},
	})
)

export default function NotesFooter() {
	const classes = useStyles()
	const color = '#D4D4D4'

	return (
		<div className={classes.root}>
			<BtnSvg component={Bold} fill={color} />
			<BtnSvg component={Italic} fill={color} />
			<BtnSvg component={Underline} fill={color} />
			<BtnSvg component={Strikethrough} fill={color} />
			<BtnSvg component={Bullets} />
			<BtnSvg component={Picture} fill={'transparent'} stroke={color} />
		</div>
	)
}
