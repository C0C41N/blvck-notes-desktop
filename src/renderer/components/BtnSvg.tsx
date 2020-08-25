import React from 'react'

import { IconButton, IconButtonProps, SvgIcon } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/styles'

export default function BtnSvg({ height = 32, width = 32, fill = '#fff', stroke = 'transparent', component, ...args }: IBtnSvgProps) {
	const useStyles = makeStyles(() =>
		createStyles({
			svg: {
				'& > path': {
					fill,
					stroke,
				},
			},
		})
	)

	const classes = useStyles()

	return (
		<IconButton style={{ padding: 0, borderRadius: 0 }} disableRipple {...args}>
			<SvgIcon style={{ width, height }} className={classes.svg} component={component} viewBox={`0 0 ${width} ${height}`} htmlColor={fill}></SvgIcon>
		</IconButton>
	)
}

interface IBtnSvgProps extends IconButtonProps {
	height?: number
	width?: number
	fill?: string
	stroke?: string
	component: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
}
