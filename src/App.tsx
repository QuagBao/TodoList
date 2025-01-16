import TodoListPage from "./pages/TodoListPage";

function App() {
  return (
    // <h1 className="text-center text-red-900">Hello</h1>
    <>
      <div className="grid grid-cols-1 mx-auto bg-slate-200 py-10">
        <TodoListPage />
      </div>
    </>
  );
}

export default App;
