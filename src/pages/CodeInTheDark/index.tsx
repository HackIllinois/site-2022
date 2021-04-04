import React, { useState } from 'react';
import AceEditor from 'react-ace';
import emailjs from 'emailjs-com';
import clsx from 'clsx';

import 'ace-builds/src-noconflict/mode-html';
import 'ace-builds/src-noconflict/theme-monokai';

import caterpillar from 'assets/sponsors/caterpillar_white.svg';
import styles from './styles.module.scss';

const starterCode = `<html>
  <head>
    <title>Code in the Dark</title>

    <style></style>
  </head>

  <body>

  </body>
</html>
`;

const CodeInTheDark = (): JSX.Element => {
  const [name, setName] = useState('');
  const [problem, setProblem] = useState('');
  const [codeValue, setCodeValue] = useState(starterCode);
  const [changeSinceSubmit, setChangeSinceSubmit] = useState(true);
  const [successfulSubmit, setSuccessfulSubmit] = useState(true);
  const [statusMessage, setStatusMessage] = useState('');

  const handleEditorChange = (newCode: string) => {
    setChangeSinceSubmit(true);
    setCodeValue(newCode);
  };

  const handleSubmit = () => {
    if (!changeSinceSubmit && successfulSubmit) {
      setStatusMessage('No changes since last submit');
    } else {
      const params = { name, problem, message_body: codeValue };
      const templateId = 'template_z0Z6Hki6';
      const userId = 'user_WBY9ARn5353jWW0nKOxH9';

      emailjs.send('gmail', templateId, params, userId)
        .then(() => {
          setChangeSinceSubmit(false);
          setStatusMessage('✅ Success! Your submission has been sent.');
        })
        .catch((err) => {
          setChangeSinceSubmit(false);
          setStatusMessage(`🚫 Error: ${err.text}`);
        });
    }
  };

  const displayStatus = !successfulSubmit || !changeSinceSubmit;

  return (
    <div className={styles.codeInTheDark}>
      <div className={styles.title}>
        <h1>CODE IN THE DARK</h1>
        <div>
          <h3>Sponsored by</h3>
          <img src={caterpillar} alt="Caterpillar logo" />
        </div>
      </div>

      <div className={styles.content}>
        <AceEditor
          className={styles.aceEditor}
          mode="html"
          theme="monokai"
          showGutter
          highlightActiveLine
          fontSize={16}
          tabSize={2}
          value={codeValue}
          onChange={handleEditorChange}
          setOptions={{
            showLineNumbers: true,
            useSoftTabs: true,
          }}
        />

        <div className={styles.rules}>
          <h3>Rules</h3>
          <ul>
            <li>Wait until the timer starts to begin editing your code</li>
            <li>You are limited only to HTML/CSS (No libraries, Javascript, etc.)</li>
            <li>Do not leave this tab to access any external websites or resources</li>
            <li>Do not preview the result of your code!</li>
          </ul>

          <h3>Tips</h3>
          <ul>
            <li>Write your CSS inline, or inside the provided style tags</li>
            <li>The HackIllinois logo can be found at <b>assets/logo.png</b></li>
          </ul>

          <h3>Submit</h3>
          <div className={styles.submit}>
            <p>Team Name:</p>
            <input type="text" id="name-input" name="name" onChange={({ target: { value } }) => setName(value)} />
            <p>Problem Number:</p>
            <input type="text" id="problem-input" name="problem" onChange={({ target: { value } }) => setProblem(value)} />
            <button type="button" onClick={handleSubmit}>Submit</button>
            <p className={clsx(styles.status, !displayStatus && styles.inactive)}>
              {statusMessage}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeInTheDark;
