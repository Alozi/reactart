import { useState } from "react";
// import { styled } from "styled-components";

import Button from "./Button";
import CustomInput from "./CustomInput";

// const ControlsContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 0.5rem;
//   margin-bottom: 1.5rem;
// `;

// const ButtonText = styled.button`
//   color: #f0b322;
//   border: none;
// `;

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === "email") {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes("@");
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div
      // id="auth-inputs"
      className="w-full max-w-sm p-8 mx-auto rounded shadow-md bg-gradient-to-b from-stone-700 to-stone-800"
    >
      {/* <ControlsContainer> */}
      <div className="flex flex-col gap-2 mb-6">
        <CustomInput
          label="Email"
          type="email"
          invalid={emailNotValid}
          onChange={(event) => handleInputChange("email", event.target.value)}
        />
        <CustomInput
          label="Password"
          type="password"
          invalid={passwordNotValid}
          onChange={(event) =>
            handleInputChange("password", event.target.value)
          }
        />
        {/* <p>
          <Label $invalid={emailNotValid}>Email</Label>
          <Input
            type="email"
            // style={{
            //   color: emailNotValid ?'#ef4444' : '',
            //   borderColor: emailNotValid ? '#f73f3f' : '',
            //   backgroundColor: emailNotValid ? '#fed2d2' : ''
            // }}
            onChange={(event) => handleInputChange("email", event.target.value)}
            $invalid={emailNotValid}
          />
        </p>
        <p>
          <Label className={`label ${passwordNotValid ? "invalid" : ""}`}>
            Password
          </Label>
          <Input
            type="password"
            className={passwordNotValid ? "invalid" : undefined}
            onChange={(event) =>
              handleInputChange("password", event.target.value)
            }
          />
        </p> */}
        {/* </ControlsContainer> */}
      </div>
      {/* <div className="actions"> */}
      <div className="flex justify-end gap-4">
        {/* <ButtonText>Create a new account</ButtonText> */}
        <button className="text-amber-400 hover:text-amber-500">Create a new account</button>
        <Button onClick={handleLogin}>Sign In</Button>
      </div>
    </div>
  );
}
