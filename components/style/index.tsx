import React from 'react'
import shallowequal from 'shallowequal'
import defaultTheme from './themes/default'

export const ThemeContext = React.createContext(defaultTheme)
export type Theme = typeof defaultTheme & { [key: string]: any }
export type PartialTheme = Partial<Theme>
export interface ThemeProviderProps {
  value?: PartialTheme
  children?: React.ReactNode
}
export const ThemeProvider = (props: ThemeProviderProps) => {
  const { value, children } = props
  const theme = React.useMemo(() => ({ ...defaultTheme, ...value }), [value])
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
}
export interface UseThemeContextProps {
  theme?: PartialTheme
}
export const useTheme = (props: UseThemeContextProps = {}) => {
  const theme = React.useContext(ThemeContext)
  return { ...theme, ...props.theme }
}

export interface WithThemeProps<T, S> {
  themeStyles?: (theme: Theme) => T
  styles?: S & { [key: string]: any }
  children: (
    // fix: styles[`${size}RawText`]
    styles: T & { [key: string]: any },
    theme: Theme,
  ) => React.ReactNode
}

/**
 * Component can extends this props
 */
export type WithThemeStyles<T> = { styles?: Partial<T> }

export function WithTheme<T, S>(props: WithThemeProps<T, S>) {
  const { children, themeStyles, styles } = props

  const stylesRef = React.useRef<S | any>(undefined)
  const themeRef = React.useRef<T | any>(undefined)
  const cache = React.useRef<T | any>(undefined)

  const getStyles = React.useCallback(
    (theme: Theme) => {
      let updateCache = false

      if (themeStyles) {
        const newStyle = themeStyles(theme)
        if (
          themeRef.current === undefined ||
          !shallowequal(themeRef.current, newStyle)
        ) {
          themeRef.current = newStyle
          updateCache = true
        }
      }

      if (styles) {
        if (
          stylesRef.current === undefined ||
          !shallowequal(stylesRef.current, styles)
        ) {
          stylesRef.current = styles
          updateCache = true
        }
      }

      if (cache.current === undefined || updateCache) {
        cache.current = { ...themeRef.current }
        // merge styles from user defined
        if (stylesRef.current) {
          Object.keys(stylesRef.current).forEach((key) => {
            if (cache.current[key]) {
              cache.current[key] = [cache.current[key], stylesRef.current![key]]
            }
          })
        }
      }

      return cache.current || {}
    },
    [themeStyles, styles],
  )

  return (
    <ThemeContext.Consumer>
      {(theme) => children(getStyles(theme), theme)}
    </ThemeContext.Consumer>
  )
}
