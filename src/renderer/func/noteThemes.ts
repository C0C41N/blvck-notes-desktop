import { createStyles, makeStyles } from '@material-ui/core/styles'

const themes = [
	{
		body: '#696969',
		titleBar: '#494745',
	},
]

type IThemes = typeof themes[0]
type IKey = keyof IThemes

type IThemeFunc = {
	[k in IKey]?: (props?: any) => Record<string, string>
}

export const noteTheme = createAll()

function createAll() {
	return themes.map((e: IThemes) =>
		Object.keys(e).reduce((a: IThemeFunc, key) => {
			Object.assign(a, {
				[key as IKey]: makeStyles(() =>
					createStyles({
						[key as IKey]: {
							backgroundColor: e[key as IKey],
						},
					})
				),
			})
			return a
		}, {})
	)
}
