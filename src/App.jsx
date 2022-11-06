// import React from 'react';
// import AppRouter from './routers/AppRouter';


// const App = () => {
//   return (
//     <div>
//      <AppRouter/>
//     </div>
//   )
// }

// export default App

import React, { useState, useEffect } from 'react';
import AppRouter from './routers/AppRouter';

const App=()=> {
  const [isLoading, setLoading] = useState(true);

  function fakeRequest() {
    return new Promise(resolve => setTimeout(() => resolve(), 2500));
  }

  useEffect(() => {
    fakeRequest().then(() => {
      const el = document.querySelector(".loader-container");
      if (el) {
        el.remove();
        setLoading(!isLoading);
      }
    });
  }, []);

  if (isLoading) {
    return null;
  }

  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}
export default App;