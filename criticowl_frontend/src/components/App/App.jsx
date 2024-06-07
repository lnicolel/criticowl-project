import PropTypes from 'prop-types';

function App({ children }) {
  return (
    <div className="min-h-screen w-full flex flex-col justify-between bg-primary">
      {children}
    </div>
  );
}

App.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
