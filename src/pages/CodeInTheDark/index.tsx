import React, { useState } from 'react';
import AceEditor from 'react-ace';
import emailjs from 'emailjs-com';
import clsx from 'clsx';

import 'ace-builds/src-noconflict/mode-html';
import 'ace-builds/src-noconflict/theme-monokai';

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
  const [successfulSubmit] = useState(true); // TODO: remove?
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
          <img src="/assets/sponsor_logos/caterpillar_white.svg" alt="Caterpillar logo" />
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
            <li>Wait until the timer starts and the image link has been provided to begin editing your code.</li>
            <li>You will be able to view the reference image for the whole time.</li>
            <li>You are allowed to use all tools available. This includes a text editor to preview your website.</li>
            <li>Submit your code in a single file.</li>
          </ul>

          <h3>Tips</h3>
          <ul>
            <li>Write your CSS inline, or inside the provided style tags</li>
            <li>The images can be found at <b>assets/dig.png</b> and <b>assets/dump.png</b></li>
          </ul>

          <h3>Submit</h3>
          <div className={styles.submit}>
            <p>Name:</p>
            <input type="text" id="name-input" name="name" onChange={({ target: { value } }) => setName(value)} />
            <p>Discord Username (e.g. Pat#6154):</p>
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
