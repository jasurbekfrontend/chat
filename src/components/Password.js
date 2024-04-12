import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Password = () => {
  const navigate = useNavigate();
  const passwordRef = useRef();
  const nameRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    const enteredPassword = passwordRef.current.value;
    // Convert entered password to lowercase for case-insensitive comparison
    const lowercasePassword = enteredPassword.toLowerCase();

    if (
      lowercasePassword === "macbook" ||
      lowercasePassword === "mac" ||
      lowercasePassword === "makbuk" ||
      lowercasePassword === "mak" ||
      lowercasePassword === "macbook pro" ||
      lowercasePassword === "makbook" ||
      lowercasePassword === "makbook pro" ||
      lowercasePassword === "macbook pro" ||
      lowercasePassword === "macbookpro" ||
      lowercasePassword === "makbuk pro" ||
      lowercasePassword === "makbukpro" ||
      lowercasePassword === "mak" ||
      lowercasePassword === "macpro" ||
      lowercasePassword === "makpro"
    ) {
      const data = nameRef.current.value;
      localStorage.setItem("name", data);
      navigate("/macbook");
    } else {
      alert("Parol xato!");
    }
  }

  return (
    <div className="wrapper-password">
      <form onSubmit={handleSubmit}>
        <input type="text" required ref={nameRef} placeholder="Ismingiz" />
        <input
          type="password"
          required
          ref={passwordRef}
          placeholder="Parol (men yoqtirgan noutbuk)"
        />
        <button>O'tish</button>
      </form>
    </div>
  );
};

export default Password;
