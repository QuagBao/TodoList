import BigCard from "../components/BigCard";
import '../style.css';
import { useState } from "react";

interface objectToDo {
  title: string;
  items: string[];
}

function TodoListPage() {
  // Define list object Todo by using useState
  const [todoList, setTodoList] = useState<objectToDo[]>([
    {
      title: 'Beginning of Term',
      items: [
        'Reserve Labs / Special Rooms', 'Set up Trello Boards',
        'Set up dropbox folders', 'Web Enhance Class',
        'Set up Learning Management System', 'Make Semester Plan',
        'Write Syllabus'
      ]
    },
    {
      title: 'Week 1 (copy for remaining weeks)',
      items: [
        'Lesson Plan', 'After Class',
        'Weekly Schedule', 'Make Assignment 1',
        'Correct Assignment 1'
      ]
    },
    {
      title: 'End of Term',
      items: [
        'Reflection Meeting', 'Assessments for college',
        'Complete Curriculum Development', 'Make Final Exam',
        'Correct Final Exam'
      ]
    },
    {
      title: 'Done',
      items: [
        'Set up Google Drive', 'Set up Online Textbook',
      ]
    },
  ])

  return (
    <div className="overflow-y-auto w-fit flex gap-5 px-10 py-5 bg-slate-200 justify-center items-start">
      {
        todoList.map((board, index) => (
          <BigCard key={index} title={board.title} items={board.items} />
        ))
      }
    </div>
  );
}

export default TodoListPage;
