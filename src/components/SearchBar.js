function SearchBar({setSearch}){

    return(

        <input
            placeholder="🔎 Tìm laptop..."
            style={{
                width:"400px",
                padding:"10px",
                borderRadius:"8px",
                border:"1px solid #ddd"
            }}
            onChange={(e)=>setSearch(e.target.value)}
        />

    )

}

export default SearchBar