
export const RTL_LANGUAGES: ReadonlyArray<string> = ['ar', 'he'];

export function getDirection(language: string | undefined) {
  if (!language) return 'ltr';
  return RTL_LANGUAGES.includes(language) ? 'rtl' : 'ltr';
}
