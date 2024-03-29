import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';

import { In } from './styles';

export default function TextArea({ name, ...rest }) {

  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);
  return <In ref={inputRef} defaultValue={defaultValue} {...rest} />;
}
