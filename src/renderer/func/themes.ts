import { createStyles, makeStyles } from '@material-ui/core/styles'
import { CSSProperties } from '@material-ui/styles'

export let themes: IThemes[]

const constThemes /* : Record<string, CSSProperties>[] */ = [
	{
		bodyCls: {
			backgroundColor: '#696969',
			border: 'solid 1px #505050',
		},
		titleBarCls: {
			backgroundColor: '#484644',
		},
	},
]

export function InitTheme(exe: (fn: IUseStyle) => IStyle) {
	if (themes) return
	const rawThemes = createRawThemes()
	themes = rawThemes.map(e => exe(e)) as IThemes[]
}

function createRawThemes(): IUseStyle[] {
	return constThemes.map(e =>
		makeStyles(() =>
			createStyles(
				Object.keys(e).reduce((a, c) => {
					return {
						...a,
						[c]: {
							...e[c as keyof typeof e],
						},
					}
				}, {})
			)
		)
	)
}

type IThemes = {
	[key in keyof typeof constThemes[0]]: string
}
type IUseStyle = (props?: any) => Record<string, string>
type IStyle = Record<string, string>
