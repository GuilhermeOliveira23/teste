import React, {useState, useEffect} from 'react';
import Rotas from './Routes/routes';
import { UserContext } from './context/AuthContext';



function App() {
  const [userData, setUserData] = useState(UserContext);

  useEffect(() => {
      const token = localStorage.getItem("token");

      setUserData(token === null ? {} : JSON.parse(token));
  }, []);

  return (
      <UserContext.Provider value={{ userData, setUserData }}>
          <Rotas />
      </UserContext.Provider>
  );
}

export default App;