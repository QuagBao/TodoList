import InputForm from "./InputForm";
import ItemCard from "./ItemCard";

interface ListItemCardProps {
    titles: string[],
    sourceList: string,
    showInputForm: boolean,
    onToggleInputForm: (value: boolean) => void;
    onAddNewItem: (item: string, targetList: string) => void
}

function ListItemCard({ titles, sourceList, showInputForm, onToggleInputForm, onAddNewItem }: ListItemCardProps) {
    const handleAddItem = (newItem: string) => {
        onAddNewItem(newItem, sourceList);
    }

    return (
        <>
            <div className="title-card overflow-y-auto smooth scrollbar scrollbar-thin scrollbar-thumb-sky-300 scrollbar-track-slate-50">
                <div className="content-area max-h-fit text-left p-2 flex flex-col gap-5">
                    {
                        titles.map((item) => (
                            <ItemCard key={item} title={item} sourceList={sourceList}></ItemCard>
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