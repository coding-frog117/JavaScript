//apply는 함수에 this값을 바인딩해준다. 다만 인자값을 배열형태로 전달한다.

function myHobby(hobby,food){
    console.log(`내 취미는 ${hobby}이고 내가 좋아하는 음식은 ${food}이야. 
    내가 좋아하는 뮤지컬 배우는 ${this.person1}이야`);
}

const data1={
    person1:'홍광호',
    person2:'류정한',
    person3:'고은성'
}

//myHobby함수에 객체를 바인딩. 인자는 함수로 전달함.
myHobby.apply(data1,['공놀이','떡볶이']);

