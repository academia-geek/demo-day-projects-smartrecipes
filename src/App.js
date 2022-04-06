import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import { store } from "./redux/store/store";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { GoblalStyles } from "./styles/styledComponents/goblalStyles";
import React, {  useEffect, useState } from "react";
import { ResizeContext } from "./context/ResizeContext";



function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 850;
  
  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    // subscribe to window resize event "onComponentDidMount"
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      // unsubscribe "onComponentDestroy"
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  return (
    <Provider store={store}>
      <GoblalStyles />
      <ResizeContext.Provider value={{ width, breakpoint }}>
        <AppRouter />
      </ResizeContext.Provider>
    </Provider>
  );
}

export default App;
