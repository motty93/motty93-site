import { atom, useRecoilState, useSetRecoilState } from 'recoil'
import { recoilPersist } from 'recoil-persist'

export type ThemeColor = 'light' | 'dark'

const { persistAtom } = recoilPersist()
const themeState = atom<ThemeColor>({
  key: 'theme',
  default: 'light',
  effects_UNSTABLE: [persistAtom],
})

export const useSetTheme = () => useSetRecoilState(themeState)

export const useTheme = () => {
  const [theme, setTheme] = useRecoilState(themeState)

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    window.localStorage.setItem('theme', newTheme)
    const root = window.document.documentElement
    root.setAttribute('data-theme', newTheme)
  }

  return {
    theme,
    toggleTheme,
  }
}
