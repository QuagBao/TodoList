import ItemCard from "./ItemCard";
function ListItemCard() {
    return (
        <>
            <div className="title-card overflow-y-auto smooth scrollbar scrollbar-thin scrollbar-thumb-sky-300 scrollbar-track-slate-50">
                <div className="content-area max-h-fit text-left p-2 flex flex-col gap-5">
                    <ItemCard></ItemCard>
                    <ItemCard></ItemCard>
                    <ItemCard></ItemCard>
                    <ItemCard></ItemCard>
                    <ItemCard></ItemCard>
                    <ItemCard></ItemCard>
                </div>
            </div>
        </>
    );
}

export default ListItemCard