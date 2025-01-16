import TodoListPage from "./pages/TodoListPage";
import './style.css';

function App() {
  return (
    // <h1 className="text-center text-red-900">Hello</h1>
    <>
      <div className="h-screen w-full bg-slate-200 overflow-y-hidden scrollbar-x  grid grid-cols-1 mx-auto">
        <TodoListPage />
      </div>
    </>
  );
}

export default App;
