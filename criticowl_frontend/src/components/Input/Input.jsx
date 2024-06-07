import PropTypes from 'prop-types';
import  { useRef, useEffect } from 'react';

const Input = ({ name, placeholder, className, inputClasses, ...rest }) => {
  const textareaRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [rest.value]);


  return (
    <div className={`input-wrapper ${className}`}>
      <input
        name={name}
        type={'email'}
        placeholder={placeholder}
        className={`p-4 text-lg bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full input ${inputClasses}`}
        {...rest}
        style={{ height: '80px' }}
      />
    </div>
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  inputClasses: PropTypes.string
};

Input.defaultProps = {
  placeholder: "",
};

export default Input;
