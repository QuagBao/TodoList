import { useDrop } from 'react-dnd';
import { useState } from "react";
import ListItemCard from "./ListItemCard";
import InputForm from './InputForm';

interface BigCardProps {
  title: string;
  items: string[];
  onDrop: (item: string, sourceList: string, targetList: string) => void //Function handle Drop
  onAddNewItem: (item: string, targetList: string) => void
}

function BigCard({ title, items, onDrop, onAddNewItem }: BigCardProps) {
  const [, dropRef] = useDrop({
    accept: 'CARD',
    drop: (dragItem: { title: string; sourceList: string }) => {
      onDrop(dragItem.title, dragItem.sourceList, title);
    }
  })

  const addNewItem = (item: string) => {
    onAddNewItem(item, title);
    setShowInputForm(false);
  }

  const [showInputForm, setShowInputForm] = useState(false);

  return (
    <>
      <div
        ref={dropRef}
        className="flex flex-col text-left max-h-full overflow-hidden bg-slate-300 rounded-xl p-2 max-w-80">
        {/* Top Title */}
        <div className="title-card flex gap-5 p-2 justify-between items-center align-middle">
          <h1 className="mx-3 text-sky-800 font-bold w-36 text-wrap">{title}</h1>
          <button className="p-2 bg-transparent rounded-xl hover:bg-slate-100">
            <abbr title="Operation">
              <svg
                className="fill-sky-800"
                width={"30px"}
                height={"30px"}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z" />
              </svg>
            </abbr>
          </button>
        </div>

        {/* Content Table */}
        <ListItemCard
          titles={items}
          sourceList={title}
          showInputForm={showInputForm}
          onToggleInputForm={setShowInputForm}
          onAddNewItem={addNewItem} />


        {/* Footer Table */}
        <div className="footer flex justify-between p-2 gap-5">
          {/* Button Add */}
          <button
            onClick={() => setShowInputForm(true)}
            className="flex w-full gap-2 p-2 bg-transparent rounded-md hover:bg-slate-100 text-sky-800">
            <svg fill="currentColor" width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z" />
            </svg>
            Add another card
          </button>

          {/* Open a new template */}
          <button className="text-sky-800 bg-transparent rounded-md hover:bg-slate-100 min-w-10 flex justify-center items-center">
            <abbr className="text-sky-800" title="Add from sample template">
              <svg
                width="24"
                height="24"
                role="presentation"
                focusable="false"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 6V5C3 3.89543 3.89543 3 5 3H6C6.55228 3 7 3.44772 7 4C7 4.55228 6.55228 5 6 5H5V6C5 6.55228 4.55228 7 4 7C3.44772 7 3 6.55228 3 6Z"
                  fill="currentColor"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6 8C6 6.89543 6.89543 6 8 6H19C20.1046 6 21 6.89543 21 8V18C21 19.1046 20.1046 20 19 20H8C6.89543 20 6 19.1046 6 18V8ZM8 8H19V14H8V8ZM18 18C17.4477 18 17 17.5523 17 17C17 16.4477 17.4477 16 18 16C18.5523 16 19 16.4477 19 17C19 17.5523 18.5523 18 18 18ZM8 17C8 17.5523 8.44772 18 9 18H12C12.5523 18 13 17.5523 13 17C13 16.4477 12.5523 16 12 16H9C8.44772 16 8 16.4477 8 17Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M4 14C3.44772 14 3 14.4477 3 15V16C3 17.1046 3.89543 18 5 18V15C5 14.4477 4.55228 14 4 14Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M3 9C3 8.44772 3.44772 8 4 8C4.55228 8 5 8.44772 5 9V12C5 12.5523 4.55228 13 4 13C3.44772 13 3 12.5523 3 12V9Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M8 4C8 3.44772 8.44772 3 9 3H13C13.5523 3 14 3.44772 14 4C14 4.55228 13.5523 5 13 5H9C8.44772 5 8 4.55228 8 4Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M16 3C15.4477 3 15 3.44772 15 4C15 4.55228 15.4477 5 16 5H19C19 3.89543 18.1046 3 17 3H16Z"
                  fill="currentColor"
                ></path>
              </svg>
            </abbr>
          </button>
        </div>
      </div>
    </>
  );
}
export default BigCard;
