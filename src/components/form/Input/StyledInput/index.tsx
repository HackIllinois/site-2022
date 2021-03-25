import React, { forwardRef } from 'react';
import clsx from 'clsx';

import styles from './styles.module.scss';

type PropTypes = {
  className?: string;
  multiline?: boolean;
  [key: string]: unknown;
};

// Adapted from https://stackoverflow.com/a/46777664
const adjustHeight = (textarea: HTMLTextAreaElement|null) => {
  if (textarea) {
    textarea.style.height = '';
    textarea.style.height = `${textarea.scrollHeight}px`;
  }
};

const StyledInput = forwardRef<HTMLInputElement|HTMLTextAreaElement, PropTypes>(({ className, multiline = false, ...props }: PropTypes, ref): JSX.Element => {
  if (multiline) {
    return (
      <textarea
        className={clsx(styles.input, styles.multiline, className)}
        {...props}
        onChange={({ target }) => adjustHeight(target)}
        ref={(r) => {
          if (typeof ref === 'function') {
            ref(r);
          } else if (ref) {
            ref.current = r;
          }
          adjustHeight(r); // set initial height when the texarea is loaded
        }}
      />
    );
  }

  return <input className={clsx(styles.input, className)} {...props} ref={ref as React.Ref<HTMLInputElement>} />;
});

export default StyledInput;
