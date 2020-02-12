import React, { useState } from 'react';

const FormControls = props => {
  const [validationError, setValidationError] = useState();

  const validate = e => {
    if (props.validationRegex) {
      const regEx = new RegExp(props.validationRegex);
      if (!regEx.test(e.target.value)) {
        setValidationError(`${props.label} ${props.validationError}`);
        if (props.transmit) {
          props.transmit(null);
        }
      } else {
        setValidationError(null);
        if (props.transmit) {
          props.transmit(e.target.value);
        }
      }
    } else {
      if (props.transmit) {
        props.transmit(e.target.value);
      }
    }
  };

  const validationErrorJsx = <p className='text-danger'>{validationError}</p>;
  return (
    <React.Fragment>
      <div className='form-group'>
        <label>{props.label}</label>
        <input
          type={props.controlType}
          className={props.cssClass}
          onChange={validate}
        ></input>
        {validationError ? validationErrorJsx : null}
      </div>
    </React.Fragment>
  );
};

export default FormControls;
