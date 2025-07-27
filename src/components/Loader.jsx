import { ClipLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="loader-wrapper">
      <ClipLoader color="#1976d2" size={50} />
      <p>Loading Todos...</p>
    </div>
  );
};

export default Loader;
