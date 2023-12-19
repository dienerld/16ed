const dark = {
  title: 'dark',
  colors: {
    primary: '#345995',
    secondary: '#272928',
    backgroundColor: '#242525',
    textColor: '#FFF',
    title: '#e5e0d8',
  },
}

const light = {
  title: 'light',
  colors: {
    primary: '#F3726C',
    secondary: '#F7F8FA',
    backgroundColor: '#FFFFFF',
    textColor: '#94979E',
    title: '#000000',
  },
}

export const themes: Record<'light' | 'dark', typeof dark> = {
  dark,
  light,
} as const
