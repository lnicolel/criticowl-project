import PropTypes from 'prop-types';
import { useRef, useEffect } from 'react';

const InputDashboard = ({ name, placeholder, className, inputClasses, ...rest }) => {
  const textareaRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [rest.value]);

  const handleInput = () => {
    textareaRef.current.style.height = "auto";
    textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
  };

  return (
    <div className={`input-wrapper ${className}`}>
      <textarea
        name={name}
        placeholder={placeholder}
        className={`p-6 text-lg bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full input ${inputClasses}`}
        ref={textareaRef}
        onInput={handleInput}
        {...rest}
      />
    </div>
  );
};

InputDashboard.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  inputClasses: PropTypes.string
};

InputDashboard.defaultProps = {
  placeholder: "",
};

export default InputDashboard;
