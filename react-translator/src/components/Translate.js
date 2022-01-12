import React, { useEffect, useState } from 'react';
import axios from 'axios';

let apiKey = process.env.REACT_APP_TRANSLATION_API_KEY;

const Translate = async (input, languageCode, cancelToken) => {
  try {
    const { data } = await axios.post(
      apiKey,
      {
        q: input,
        target: languageCode,
      },
      { cancelToken: cancelToken.token }
    );
    return data.data.translations[0].translatedText;
  } catch (err) {
    return '';
  }
};

const FinishedTranslation = ({ language, text }) => {
  const [translated, setTranslated] = useState('');

  useEffect(() => {
    if (!text) {
      return;
    }

    const cancelToken = axios.CancelToken.source();

    Translate(text, language, cancelToken).then(setTranslated);

    return () => {
      try {
        cancelToken.cancel();
      } catch (err) {}
    };
  }, [text, language]);

  return (
    <div>
      <label className='label'>Output</label>
      <h1 className='title'>{translated}</h1>
    </div>
  );
};

export default FinishedTranslation;