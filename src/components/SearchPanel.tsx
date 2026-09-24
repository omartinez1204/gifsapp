import { useState, type FC } from "react"
interface Props{
    onAddNewGif:(gif:string)=>void
}
export const SearchPanel:FC<Props> = ({onAddNewGif}) => {
    const [ search, setSearch ] = useState('')
    const handleOnClickButton =()=>{
        if(search.length === 0) return;
        onAddNewGif(search);
        setSearch('');
    }
    const hanldeOnKeyPress = (e:React.KeyboardEvent<HTMLInputElement>)=>{
        if(e.key === 'Enter'){
            handleOnClickButton();
        }
    }
    return (
        <div className="search-container">
            <input 
                type="text" 
                placeholder="Busca" 
                value={search}
                onChange={(e)=> setSearch(e.target.value) }
                onKeyDown={ (e)=>hanldeOnKeyPress(e) }
            />
            <button onClick={handleOnClickButton}> Buscar </button>
        </div>
    )
}
