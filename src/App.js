import AppRouter from "./routers/AppRouter";
import React, { useState, useMemo } from "react";
import "./components/style.scss";

export const AuthenticationContext = React.createContext({
  isLogged: false,
  setLogged: () => {},
});

function App(props) {
  const [isLogged, setLogged] = useState(false);
  const value = useMemo(() => ({ isLogged, setLogged }), [isLogged]);

  return (
    <AuthenticationContext.Provider value={value}>
      <div>
        <AppRouter />
      </div>
    </AuthenticationContext.Provider>
  );
}

export default App;
