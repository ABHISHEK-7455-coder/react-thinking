import { useState } from "react"
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

export default function Table({products}){
    const [filterText, setFilterText] = useState('');
    const [inStock, setInStock] = useState(false)
    return (
        <div>
            <SearchBar
                filterText={filterText} 
                inStock={inStock} 
                onFilterChange={setFilterText} 
                onInStockChange={setInStock}
            ></SearchBar>
            <ProductTable></ProductTable>
        </div>
    )
}