import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div>
      <p>
        Sorry but could not find this page <br />
        <Link to="/">Return to Home</Link>
      </p>
    </div>
  );
};

export default NotFound;
