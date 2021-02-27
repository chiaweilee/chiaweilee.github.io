import { LanguageCode } from './languages';

export const request = (
  word: string,
  languageCode = 'en_GB' as LanguageCode,
  version = 2 as number,
) => {
  return fetch(
    `https://api.dictionaryapi.dev/api/v${version}/entries/${languageCode}/${word}`,
  ).then((res) => res.json());
};
