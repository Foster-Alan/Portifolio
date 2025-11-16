// src/context/LanguageContext.js
import React, { createContext, useState, useContext } from "react";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("pt");

  const toggleLanguage = () => {
    setLang((prev) => (prev === "pt" ? "en" : "pt"));
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

// importante para Home.jsx (component class)
export default LanguageContext;
