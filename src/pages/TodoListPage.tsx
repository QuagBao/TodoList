import '../style.css';
import { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import BigCard from "../components/BigCard";

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
  // Function handle drag&drop
  const handleDragDrop = (item: string, sourceList: string, targetList: string) => {
    if (sourceList === targetList) {
      return;
    }
    // Create a copy of the todoList, get index of source and target
    const updateTodoList = [...todoList];
    const sourceIndex = updateTodoList.findIndex((board) => board.title === sourceList);
    const targetIndex = updateTodoList.findIndex((board) => board.title === targetList);

    if (sourceIndex >= 0 && targetIndex >= 0) {
      // Remove from sourceList and Add to targetList
      const sourceItems = updateTodoList[sourceIndex].items.filter((task) => task !== item);
      const targetItems = [...updateTodoList[targetIndex].items, item];

      // Update todoList
      updateTodoList[sourceIndex].items = sourceItems;
      updateTodoList[targetIndex].items = targetItems;

      setTodoList(updateTodoList);
    }
  }
  // Function handle add new item
  const handleAddNewItem = (item: string, targetList: string) => {
    const updateTodoList = todoList.map((board) => {
      if (board.title === targetList) {
        return {
          ...board,
          items: [...board.items, item]
        };
      }
      return board;
    });
    setTodoList(updateTodoList);
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="overflow-y-auto w-fit flex gap-5 px-10 py-5 bg-slate-200 justify-center items-start">
        {
          todoList.map((board, index) => (
            <BigCard key={index} title={board.title} items={board.items} onDrop={handleDragDrop}
              onAddNewItem={handleAddNewItem} />
          ))
        }
      </div>

    </DndProvider>
  );
}

export default TodoListPage;
