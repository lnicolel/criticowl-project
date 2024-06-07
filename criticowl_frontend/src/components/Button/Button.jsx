import PropTypes from 'prop-types';

function Button({ className, children, ...props }) {
  return (
    <button
      className={`bg-cblue hover:bg-blue-700 text-white p-4 rounded-lg text-2xl font-semibold disabled:bg-gray-300 disabled:cursor-not-allowed ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Button;
