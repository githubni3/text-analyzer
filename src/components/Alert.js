import React from "react";
import './Alert.css';

export default function Alert(props) {
  if (props.alert !== false) {
    
      return (
        <div id="alert">
          <div
            className={`alert alert-${props.alert.type} alert-dismissible fade show`}
            role="alert"
          >
            <strong>{props.alert.type} </strong> {props.alert.msg}
          </div>
        </div>
      );
    
  }
  else{
    return null;
  }
}
