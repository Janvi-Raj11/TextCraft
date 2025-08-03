import React from "react"; 

export default function Alert(props) {
  
  const capitalize = (word) => {    
    if (!word || typeof word !== "string") return "";
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };

  return (
    <div style={ {height:'45px'}}> 
      {props.alert && (
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert"
        >
          {/* Changes the alert's style based on props.alert.type (e.g., success, danger, etc.) */}
          <strong>{capitalize(props.alert.type)}</strong>:{props.alert.msg}
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      )}
    </div>
  ); // { props.alert && ( ... ) } This is a conditional render.It means: “Only show the alert box if props.alert is not null.”So if props.alert === null, nothing will be shown — and that's expected.
}
