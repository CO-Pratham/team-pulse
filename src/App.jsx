import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/slice/store";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Dashboard />
    </Provider>
  );
}

export default App;
