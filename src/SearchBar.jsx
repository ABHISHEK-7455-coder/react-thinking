export default function SearchBar({
    filterText,
    inStock,
    onFilterChange,
    onStockChange
}){
    return (
        <form>
            <input type="text" 
            value={filterText} 
            placeholder="Search..."
            onChange={(e) => onFilterChange(e.target.value)}/>
            <label>
                <input type="checkbox"
                value={inStock}
                onChange={(e) => onStockChange(e.target.checked)}/>
                {' '}
                Only show products in stock
            </label>
        </form>
    )
}