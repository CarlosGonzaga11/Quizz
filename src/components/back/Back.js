import react from "react";
import { Link } from "react-router-dom";
function Back() {
  return (
    <div className="button-back">
      <Link to="/">
        <button>Back to start</button>
      </Link>
    </div>
  );
}
export default Back;
