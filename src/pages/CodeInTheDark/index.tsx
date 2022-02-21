import React, { useState } from 'react';
import AceEditor from 'react-ace';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import clsx from 'clsx';

import 'ace-builds/src-noconflict/mode-html';
import 'ace-builds/src-noconflict/theme-monokai';

import styles from './styles.module.scss';

type CodeInTheDarkSubmissionResponse = {
  success: boolean;
  message: string;
};

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
  const [discord, setDiscord] = useState('');
  const [codeValue, setCodeValue] = useState(starterCode);
  const [changeSinceSubmit, setChangeSinceSubmit] = useState(true);
  const [successfulSubmit, setSuccessfulSubmit] = useState(true);
  const [statusMessage, setStatusMessage] = useState('');

  const handleEditorChange = (newCode: string) => {
    setChangeSinceSubmit(true);
    setCodeValue(newCode);

    // We only want to display the success messsage until the user edits the code again,
    // but the error message should always be displayed if one occurred.
    if (successfulSubmit) {
      setStatusMessage('');
    }
  };

  const handleSubmit = async () => {
    setStatusMessage('Loading...');
    // If we haven't changed since last submit (and the last submit was successful), don't submit again
    if (!changeSinceSubmit && successfulSubmit) {
      setStatusMessage('No changes since last submit');
    } else {
      const errors = [];

      const params = { name, discord, html: codeValue };

      // First, we email their submission so we have a record of it
      const templateId = 'template_z0Z6Hki6';
      const userId = 'user_WBY9ARn5353jWW0nKOxH9';
      try {
        await emailjs.send('gmail', templateId, params, userId);
      } catch (err) {
        const e = err as EmailJSResponseStatus;
        errors.push(`🚫 Error (EmailJS): ${e.text}`);
      }

      // Then, we submit it to the serverless function that will compile and deploy their submissions
      try {
        const res = await fetch('/.netlify/functions/code-in-the-dark-submission', { method: 'POST', body: JSON.stringify(params) });
        const data: CodeInTheDarkSubmissionResponse = await res.json();
        if (!data.success) {
          errors.push(`🚫 Error (function): ${data.message}`);
        }
      } catch (e) {
        errors.push('🚫 Error: Unable to send request, please check network connection');
      }

      if (errors.length > 0) {
        setStatusMessage(errors.join('\n'));
        setSuccessfulSubmit(false);
      } else {
        setStatusMessage('✅ Success! Your submission has been sent.');
        setSuccessfulSubmit(true);
      }

      setChangeSinceSubmit(false);
    }
  };

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
            <input type="text" id="discord-input" name="discord" onChange={({ target: { value } }) => setDiscord(value)} />
            <button type="button" onClick={handleSubmit}>Submit</button>
            <p className={clsx(styles.status)}>
              {statusMessage}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeInTheDark;
