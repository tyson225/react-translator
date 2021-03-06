import React, { useState } from 'react';

const LANGUAGES = [
  { label: 'Arabic', value: 'ar' },
  { label: 'Bengali', value: 'be' },
  { label: 'French', value: 'fr' },
  { label: 'Hindi', value: 'hi' },
  { label: 'Indonesian', value: 'id' },
  { label: 'Portuguese', value: 'pt' },
  { label: 'Simplified Chinese', value: 'zh-CN' },
  { label: 'Spanish', value: 'es' },
  { label: 'Russian', value: 'ru' },
];

const Languages = ({ language, onLanguageChange }) => {
  if (language === undefined) {
    language = 'fr';
  }

  const languageConfig = LANGUAGES.find((l) => l.value === language);
  if (!languageConfig) {
    throw new Error(`Unknown language code '${language}'.`);
  }

  const [open, setOpen] = useState(false);

  const onSelect = (language) => {
    setOpen(false);
    onLanguageChange(language);
  };

  return (
    <div>
      <label className='label'>Select Language</label>

      <div className={`dropdown ${open && 'is-active'}`}>
        <div className='dropdown-toggle' href='#' role='button'>
          <button className='button' onClick={() => setOpen(!open)}>
            <span>{languageConfig.label}</span>
            <span className='icon is-small'>
              <i className='fas fa-angle-down' />
            </span>
          </button>
        </div>

        <div className='dropdown'>
          <div className='dropdown-toggle'>
            {LANGUAGES.map(({ label, value }) => {
              return (
                <a
                  href='#'
                  onClick={() => onSelect(value)}
                  className='dropdown-item'>
                  {label}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Languages;