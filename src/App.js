import logo from "./logo.svg";
import "./App.css";
import Todo from "./components/Todo";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className="App">
      <ToastContainer
        limit={3}
        closeOnClick
        hideProgressBar
        autoClose={3000}
        newestOnTop={true}
      />
      <Todo />
    </div>
  );
}

export default App;
