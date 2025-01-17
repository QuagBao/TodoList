import { useState } from "react";
interface InputFormProps {
    onAdd: (newItem: string) => void
    onClose: () => void
}

function InputForm({ onAdd, onClose }: InputFormProps) {
    const [inputValue, setInputValue] = useState("");

    const handleSubmit = () => {
        if (inputValue.trim() !== "") {
            onAdd(inputValue.trim());
            setInputValue(""); // Xóa input sau khi thêm
            onClose();
        }
        onClose();
    }
    return (
        <form onSubmit={handleSubmit} className="bg-slate-50 rounded-lg p-2 flex flex-col gap-2">
            <input className="bg-transparent p-2 focus:outline-violet-300 rounded" value={inputValue} onChange={(event) => setInputValue(event.target.value)} type="text" placeholder="Enter a new item" />
            <div className="frame-button flex gap-4 justify-between">
                <button className="text-xs p-2 rounded bg-sky-500 hover:opacity-70 text-slate-50" type="submit">Add New</button>
                <button className="text-xs p-2 rounded bg-red-500 hover:opacity-70 text-slate-50" type="button" onClick={onClose}>Cancel</button>
            </div>
        </form>
    )
}
export default InputForm