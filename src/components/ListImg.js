import ItemImg from "./ItemImg"

function ListImg({images}){
    //아이템 변경시 효율적으로 관리하기 위해(전체 다 리렌더링하는 것은 비효율적임) key값 정해야함. 문자 또는 숫자만 가능. 해당 반복문 안에서만 unique하면 됨, id값은 불변해야 한다. 따라서 Math.random() 은 리렌더링마다 값이 바뀌기 때문에 쓰면안됨. index를 쓰더라도 배열순서가 바뀔 수 있기 때문에 아주 좋은 방법은 아님(서버로부터 데이터를 받는 경우). 결론은 서버로부터 전달받는 데이터중에 id를 key값으로 넣어주는 게 정답이고 정 없다면 index 값을 넣어줌.
    const renderImages= images.map((image)=>{
        return <ItemImg key={image.id} image={image}></ItemImg>
    })
    return <ul>{renderImages}</ul> 
}

export default ListImg;