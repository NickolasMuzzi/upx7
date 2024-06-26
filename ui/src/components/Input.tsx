import React from "react";
import { Field, useField } from "formik";
import styled from "styled-components";

type InputProps = {
  className?: string;
  placeholder?: string;
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  min?: number;
  max?: number;
};

const Input = ({ ...props }: InputProps) => {
  const [field, meta] = useField(props.name);
  return (
    <div className={props.className}>
      <label className="input-label" htmlFor="input">
        {props.label}
      </label>
      <Field
        min={props.min}
        max={props.max}
        type={props.type || "text"}
        className="input"
        name={props.name}
        placeholder={props.placeholder}
        required={props.required}
      />
      {meta && <label className="error-div">{meta.error}</label>}
    </div>
  );
};

export default styled(Input)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;

  label {
    width: 200px;
    text-align: left;
    color: #628662;
  }
  .input {
    width: 200px;
    height: 40px;
    border-radius: 4px;
    border: 1px solid #272727;
    outline: 0.5;
    outline-color: #628662;
  }
  .input-label {
    font-size: 12px;
  }
  .error-div {
    color: red;
    font-size: 8px;
  }
`;
