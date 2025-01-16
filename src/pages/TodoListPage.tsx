import BigCard from "../components/BigCard";
import '../style.css';

function TodoListPage() {
  return (
    <div className="overflow-y-auto w-fit flex gap-5 px-10 py-5 bg-slate-200 justify-center items-center">
      <BigCard />
      <BigCard />
      <BigCard />
      <BigCard />
      <BigCard />
      <BigCard />
      <BigCard />
      <BigCard />
    </div>
  );
}

export default TodoListPage;
