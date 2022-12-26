import {useState} from 'react';

function SearchBar({searching}){

    const [keyword, setKeyword]= useState();
    
    const handleInp=(e)=>{
        setKeyword(e.target.value)
    }

    const handleSubmit=(e)=>{
        e.preventDefault(); //콘솔 사라지지 않게 함(form에서)
        searching(keyword);
    }

    return <nav>
        <form onSubmit={handleSubmit}>
            <label htmlFor="keyword">검색어를 입력하세요</label>
            <input type="text" id="keyword" value={keyword} onChange={handleInp}/>
            <button>검색</button>
        </form>
    </nav>

}

export default SearchBar;