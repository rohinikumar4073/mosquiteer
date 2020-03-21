import { Spinner } from 'spin.js';
import 'spin.js/spin.css';
import React from "react";

export default function withSpinner (WrappedComponent) {
  function startSpinner (ref) {
    var spinner = new Spinner().spin();
    if (ref) {
      ref.appendChild(spinner.el);
    }
    return spinner;
  }
  return function (props) {
    return <WrappedComponent startSpinner={startSpinner}  {...props}></WrappedComponent>
  }
}