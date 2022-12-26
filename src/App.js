import searchImg from "./imgApi";
import SearchBar from "./components/SearchBar";
import ListImg from "./components/ListImg";
import ItemImg from "./components/ItemImg";
import {useState} from 'react'
 //기본적인 props 진행방향은 상위 -> 하위이지만 우리는 이미 state를 변경시키고 있다. 이것은 하위에서 상위로 끌어올려지는 것과 마찬가지
//자식에서 부모로 데이터를 보내는 것을 위해 state 끌어올리는 방법을 반쪽만 쓴다.
function App() {

    const [images,setImages]=useState([]);
    //여기서도 데이터를 받아오기도 전에 다음 줄로 넘어가버림. 따라서 여기서도 데이터 통신이 끝날때까지 기다려줘야함
    const handleKeyword=async(keyword)=>{
        const result=await searchImg(keyword);
        setImages(result);
        //값이 바뀔때도 새로 뿌려줘야 해서 state전달. 데이터가 업데이트될 시 리렌더링됨. 컴포넌트가 렌더링되면 자식 컴포넌트도 리렌더링됨.
    }   //그래서 값이 바뀔 때 항상 리렌더링 되게 함

    return <div>App
        <SearchBar searching={handleKeyword}></SearchBar>
        <ListImg images={images}></ListImg>
    </div>
}

export default App;