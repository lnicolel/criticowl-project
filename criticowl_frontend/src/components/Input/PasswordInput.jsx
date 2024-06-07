import React from 'react';
import PropTypes from 'prop-types';

const PasswordInput = ({ name, placeholder, className, inputClasses, ...rest }) => {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <div className={`input-wrapper ${className}`} style={{ position: 'relative' }}>
      <input
        name={name}
        type={showPassword ? 'text' : 'password'}
        placeholder={placeholder}
        className={`p-4 text-lg bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full input ${inputClasses}`}
        {...rest}
        style={{ height: '80px' }}
      />
      <button
        type="button"
        className="p-0 m-0 absolute right-10 top-4 z-10"
        onClick={() => setShowPassword(!showPassword)}
      >
        <svg
          width="26"
          height="26"
          viewBox="0 0 41 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M30.3046 32.1613C27.4691 33.9592 24.1064 35.0003 20.5006 35.0003C11.5136 35.0003 4.037 28.534 2.46948 20.0003C3.19728 16.038 5.19895 12.5215 8.0342 9.89095L2.82285 4.67962L5.17988 2.32259L38.1782 35.3208L35.8212 37.678L30.3046 32.1613ZM10.3927 12.2495C8.17797 14.2669 6.56308 16.9453 5.87138 20.0003C7.40045 26.7535 13.4411 31.667 20.5006 31.667C23.1663 31.667 25.6868 30.9663 27.8739 29.7307L24.4934 26.3502C23.3372 27.0787 21.9681 27.5003 20.5006 27.5003C16.3584 27.5003 13.0005 24.1423 13.0005 20.0003C13.0005 18.5327 13.422 17.1635 14.1506 16.0074L10.3927 12.2495ZM22.0233 23.88L16.6208 18.4777C16.4356 18.9493 16.3339 19.4628 16.3339 20.0003C16.3339 22.3015 18.1994 24.167 20.5006 24.167C21.0379 24.167 21.5516 24.0652 22.0233 23.88ZM35.1781 27.6542L32.7934 25.2695C33.8866 23.7113 34.6924 21.931 35.1296 20.0003C33.6006 13.247 27.5599 8.3336 20.5006 8.3336C19.0908 8.3336 17.7216 8.52955 16.4209 8.89697L13.7908 6.26692C15.8689 5.44932 18.1323 5.00027 20.5006 5.00027C29.4874 5.00027 36.9641 11.4665 38.5316 20.0003C38.0112 22.833 36.8398 25.438 35.1781 27.6542ZM20.0383 12.5143C20.1911 12.505 20.3453 12.5003 20.5006 12.5003C24.6426 12.5003 28.0006 15.8581 28.0006 20.0003C28.0006 20.1555 27.9958 20.3097 27.9866 20.4625L20.0383 12.5143Z"
            fill="#70A4C8"
          />
        </svg>
      </button>
    </div>
  );
};

PasswordInput.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  inputClasses: PropTypes.string
};

PasswordInput.defaultProps = {
  placeholder: '',
  className: '',
  inputClasses: ''
};

export default PasswordInput;
