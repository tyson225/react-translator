import './App.css';
import React, { useState} from 'react';
import Translate from './components/Translate';
import Field from './components/Field';
import Language from './components/Language';

function App() {
  const [language, setLanguage] = useState('fr');
  const [text, setText] = useState('');

  return (
    <div className="App">
      <Field label='Type your words in English' onChange={setText} value={text} />
      <Language language={language} onLanguageChange={setLanguage} />
      <hr />
      <Translate text={text} language={language} />
    </div>
  );
}

export default App;
