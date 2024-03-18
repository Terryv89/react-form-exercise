import { useState } from "react";

const Account = ({ name, email, password, setName, setEmail, setPassword }) => {
  const [showBorder, setShowBorder] = useState(false);
  const [buttonText, setButtonText] = useState("Ändra");

  function changeShitUp() {
    setShowBorder(!showBorder);
  }

  function changeBtnName() {
    setButtonText("Spara");
  }

  function handleClick() {
    changeBtnName();
    changeShitUp();

    if (buttonText === "Spara") {
      console.log("ändra was clickced");
      console.log("updated");
      setButtonText("Ändra");
    }
  }

  return (
    <>
      <div>
        <h3>Ditt konto</h3>
        <p>name</p>
        <input
          className={showBorder ? "visible-input" : "hidden-input"}
          type="text"
          placeholder={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <p>Email</p>
        <input
          className={showBorder ? "visible-input" : "hidden-input"}
          type="text"
          placeholder={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <p>password</p>
        <input
          className={showBorder ? "visible-input" : "hidden-input"}
          type="password"
          placeholder={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>
      <button onClick={handleClick} className="change-btn">
        {buttonText}
      </button>
    </>
  );
};

export default Account;
