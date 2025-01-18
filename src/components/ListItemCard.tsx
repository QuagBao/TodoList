import InputForm from "./InputForm";
import ItemCard from "./ItemCard";
import { useDrop } from "react-dnd";
import { useRef } from "react";
interface ListItemCardProps {
    titles: string[],
    sourceIndex: number,
    sourceList: string,
    showInputForm: boolean,
    onToggleInputForm: (value: boolean) => void;
    onAddNewItem: (item: string, targetList: string) => void
    onDrop: (item: string, sourceList: string, targetList: string, location: number) => void
    onRenameItem: (sourceIndex: number, newTitle: string, index: number) => void
}

function ListItemCard({ titles, sourceIndex, sourceList, showInputForm, onToggleInputForm, onAddNewItem, onDrop, onRenameItem }: ListItemCardProps) {
    const handleAddItem = (newItem: string) => {
        onAddNewItem(newItem, sourceList);
    }

    const listRef = useRef<HTMLDivElement | null>(null);

    const calculateItemHeight = (): number => {
        const items = listRef.current?.querySelectorAll('.item-card');
        if (!items || items.length === 0) return 0;
        const itemHeight = (items[0] as HTMLElement).getBoundingClientRect().height;
        return itemHeight;
    };

    const calculateLocation = (mouseY: number | undefined): number => {
        if (!listRef.current || mouseY === undefined) return titles.length;
        console.log("Mouse Y: " + mouseY);
        const listRect = listRef.current.getBoundingClientRect();
        console.log("List Rect: " + listRect.top);
        const itemHeight = calculateItemHeight();
        if (itemHeight === 0) return 0;
        console.log("Item Height: " + itemHeight);
        const relativeY = mouseY - listRect.top;
        console.log("Relative Y: " + relativeY);
        const index = Math.floor(relativeY / itemHeight);
        console.log("Index: " + index);
        return Math.max(0, Math.min(titles.length, index));
    };

    const [, dropRef] = useDrop({
        accept: 'CARD',
        drop: (dragItem: { title: string; sourceList: string, indexLocation: number }, monitor) => {
            const clientOffset = monitor.getClientOffset();
            if (!clientOffset) return;
            console.log("Location Index: " + dragItem.indexLocation);
            const location = calculateLocation(clientOffset.y);
            onDrop(dragItem.title, dragItem.sourceList, sourceList, location);
        }
    })

    return (
        <>
            <div
                ref={(node) => {
                    dropRef(node);
                    listRef.current = node;
                }}
                className="title-card overflow-y-auto smooth scrollbar scrollbar-thin scrollbar-thumb-sky-300 scrollbar-track-slate-50">
                <div className="content-area max-h-fit text-left p-2 flex flex-col gap-5">
                    {
                        titles.map((item) => (
                            <ItemCard key={item} title={item} indexBoard={sourceIndex} indexItem={titles.indexOf(item)} sourceList={sourceList} onRenameItem={onRenameItem}></ItemCard>
                        ))
                    }
                    {/* Show Input Form */}
                    {
                        showInputForm &&
                        <InputForm onAdd={handleAddItem} onClose={() => onToggleInputForm(false)}></InputForm>
                    }
                </div>
            </div>
        </>
    );
}

export default ListItemCard