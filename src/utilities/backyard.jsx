import ReactDOM from 'react-dom';

const BackyardLayer = ({ children }) => {
  const content = <div className="w-full h-full fixed z-[5] top-0 bottom-0 left-0 bg-black/60">{children}</div>;

  return ReactDOM.createPortal(content, document.getElementById('backyard--root'));
};

const Backyard = ({ children }) => {
  return <BackyardLayer>{children}</BackyardLayer>;
};

export default Backyard;
