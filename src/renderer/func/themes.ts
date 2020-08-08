import { createStyles, makeStyles } from '@material-ui/core/styles'
import { CSSProperties } from '@material-ui/styles'

export let themes: IThemes

const lightThemes /* : Record<string, CSSProperties>[] */ = [
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

const darkThemes = [
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
	const rawLightThemes = createRawThemes(lightThemes)
	const rawDarkThemes = createRawThemes(darkThemes)
	const LightThemes = rawLightThemes.map(e => exe(e)) as Themes[]
	const DarkThemes = rawDarkThemes.map(e => exe(e)) as Themes[]
	themes = { light: LightThemes, dark: DarkThemes }
}

function createRawThemes(theme: Record<string, CSSProperties>[]): IUseStyle[] {
	return theme.map(e =>
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

interface IThemes {
	light: Themes[]
	dark: Themes[]
}

type Themes = {
	[key in keyof typeof lightThemes[0]]: string
}

type IUseStyle = (props?: any) => Record<string, string>
type IStyle = Record<string, string>
