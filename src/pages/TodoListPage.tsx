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
  const handleDragDrop = (item: string, sourceList: string, targetList: string, location: number) => {
    // Tạo một bản sao của todoList
    const updateTodoList = [...todoList];
    const sourceIndex = updateTodoList.findIndex((board) => board.title === sourceList);
    const targetIndex = updateTodoList.findIndex((board) => board.title === targetList);

    // Kéo thả trong cùng một bảng
    if (sourceIndex === targetIndex) {
      const items = [...updateTodoList[sourceIndex].items];
      const currentIndex = items.indexOf(item);
      if (currentIndex >= 0) {
        // Di chuyển item đến vị trí mới (location)
        items.splice(currentIndex, 1);
        items.splice(location, 0, item);
      }
      updateTodoList[sourceIndex].items = items;
    } else {
      // Kéo thả giữa các bảng khác nhau
      if (sourceIndex >= 0 && targetIndex >= 0) {
        // Xóa item khỏi bảng nguồn
        const sourceItems = updateTodoList[sourceIndex].items.filter((task) => task !== item);

        // Thêm item vào vị trí chỉ định trong bảng đích
        const targetItems = [...updateTodoList[targetIndex].items];
        targetItems.splice(location, 0, item); // Chèn vào vị trí `location`

        // Cập nhật danh sách
        updateTodoList[sourceIndex].items = sourceItems;
        updateTodoList[targetIndex].items = targetItems;
      }
    }

    // Cập nhật todoList
    setTodoList(updateTodoList);
  };
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

  const handleRenameItem = (sourceIndex: number, newTitle: string, index: number) => {
    const updateTodoList = [...todoList];
    if (updateTodoList[sourceIndex] && updateTodoList[sourceIndex].items[index]) {
      updateTodoList[sourceIndex].items[index] = newTitle;
      setTodoList(updateTodoList);
      console.log("Item renamed: " + newTitle);
    } else {
      console.log("Item not found");
    }
  }
  // Function handle change location of two board
  const handleChangeLocationBoard = (sourceIndex: number, targetIndex: number) => {
    const updateTodoList = [...todoList];
    console.log("Source Index: " + sourceIndex);
    console.log("Target Index: " + targetIndex);
    const [sourceBoard] = updateTodoList.splice(sourceIndex, 1);
    console.log("Source Board: " + sourceBoard.title);
    updateTodoList.splice(targetIndex, 0, sourceBoard);
    setTodoList(updateTodoList);
    console.log("Board moved: " + sourceIndex + " to " + targetIndex);
  }
  const handleRenameBoard = (newTitle: string, index: number) => {
    const updateTodoList = [...todoList];
    updateTodoList[index].title = newTitle;
    setTodoList(updateTodoList);
    console.log("Board renamed: " + newTitle);
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="overflow-y-auto w-fit flex gap-5 px-10 py-5 bg-slate-200 justify-center items-start">
        {
          todoList.map((board, index) => (
            <BigCard key={index} index={index}
              title={board.title} items={board.items}
              onRenameItem={handleRenameItem}
              onDrop={handleDragDrop} onRenameBoard={handleRenameBoard}
              onAddNewItem={handleAddNewItem} onMoveBoard={handleChangeLocationBoard} />
          ))
        }
      </div>

    </DndProvider>
  );
}

export default TodoListPage;
