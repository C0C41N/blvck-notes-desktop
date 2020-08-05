import { createStyles, makeStyles } from '@material-ui/core/styles'

export let themes: IThemes[]

const constThemes = [
	{
		body: '#696969',
		titleBar: '#494745',
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
							backgroundColor: e[c as keyof typeof e],
						},
					}
				}, {})
			)
		)
	)
}

type IThemes = typeof constThemes[0]
type IUseStyle = (props?: any) => Record<string, string>
type IStyle = Record<string, string>
