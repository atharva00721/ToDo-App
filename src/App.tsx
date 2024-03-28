import Navbar from "./components/Navbar";
import MyCheckbox from "./pages/todolist";

export default function App() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <MyCheckbox />
    </div>
  );
}
