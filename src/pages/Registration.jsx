import { useNavigate } from "react-router-dom";

const Registration = ({ setName, setEmail, setPassword }) => {
  const navigate = useNavigate();

  return (
    <div className="form-card">
      <h3>Registrera dig för ett konto</h3>
      <div className="form">
        <p>Name</p>
        <input
          onChange={(e) => {
            setName(e.target.value);
          }}
          type="text"
          placeholder="Name"
        />
        <p>Email</p>
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="text"
          placeholder="Email"
        />
        <p>Password</p>
        <input
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="password"
          placeholder="Password"
        />
      </div>

      <button
        onClick={() => {
          navigate("/Account");
        }}
      >
        Sign me up!
      </button>
    </div>
  );
};

export default Registration;
