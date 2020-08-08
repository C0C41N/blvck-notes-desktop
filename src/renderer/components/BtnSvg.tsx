import React from 'react'
import { log } from 'src/log'

import { IconButton, SvgIcon } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/styles'

export default function BtnSvg({ height = 32, width = 32, color = '#fff', component }: IBtnSvgProps) {
	const useStyles = makeStyles(() =>
		createStyles({
			svg: {
				'& > path': {
					fill: color,
				},
			},
		})
	)

	const classes = useStyles()

	log({ height, width, color, component })
	return (
		<IconButton style={{ padding: 0, borderRadius: 0 }} disableRipple>
			<SvgIcon style={{ width, height }} className={classes.svg} component={component} viewBox={`0 0 ${width} ${height}`} htmlColor={color}></SvgIcon>
		</IconButton>
	)
}

interface IBtnSvgProps {
	height?: number
	width?: number
	color?: string
	component: any
}
