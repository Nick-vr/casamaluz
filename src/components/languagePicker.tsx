import { languages } from '../i18n/ui'

type Props = {
  lang: string
}
const LanguagePicker = (props: Props) => {
  const { lang } = props
  const handleChange = (e: { target: { value: any } }) => {
    const selectedLanguage = e.target.value.toLowerCase()
    window.location.href = selectedLanguage
  }

  return lang === 'en' ? (
    <select onChange={handleChange}>
      {Object.entries(languages).map(([lang, label]) => (
        <option key={lang} value={`/${label}`}>
          {label}
        </option>
      ))}
    </select>
  ) : (
    <select onChange={handleChange}>
      {Object.entries(languages)
        .sort(([a], [b]) => b.localeCompare(a))
        .map(([lang, label]) => (
          <option key={lang} value={`/${label}`}>
            {label}
          </option>
        ))}
    </select>
  )
}
export default LanguagePicker
