
const FormField = ({ children, label, htmlFor, hasError, errorMessage,required }) => {
  return (
    <div className="form-field">
      <label htmlFor={htmlFor}>{label} {required&&<span className="required">*</span>}</label>
      {children}
      {hasError && errorMessage ? 
        <p data-testid="error-message">{errorMessage}</p> : null}
    </div>
  );
};

export default FormField;
