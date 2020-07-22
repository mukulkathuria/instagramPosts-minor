import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { store, persistor } from "./Redux/root.redux";
import { PersistGate } from "redux-persist/integration/react";
import Spinner from "./Components/Spinner/spinner";
import "./index.css";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={<Spinner />} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
