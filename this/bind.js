//bind는 함수에 객체를 바인딩한 새로운 함수를 반환함.

function weather(today){
    console.log(`오늘의 날씨는 ${today} 입니다. ${this.item1} 과 ${this.item2}를 준비하세요`)
}

const sunny={
    item1:'양산',
    item2:'썬글라스'
}

const rainy={
    item1:'우산',
    item2:'막걸리',
    hello(){
        console.log(`비오는 날에는 역시 ${this.item2}이다!`);
    }
}

//weather 함수에 sunny객체 바인딩한 함수를 맑음에 할당. 해 쨍쨍이 맑음 함수의 인자로 전달.
//맑음은 바인딩된 새로운 함수이므로 맑음 함수 호출시 인자 전달해도 됨.
const 맑음= weather.bind(sunny,'해 쨍쨍');
맑음();

// const 맑음= weather.bind(sunny);
// 맑음('해 쨍쨍');

const 흐림= weather.bind(rainy);
흐림('비옴');

//이렇게 다른 객체에 속한 함수일지라도 (원래는 this값이 다른 객체) 바인딩 되는 객체를 따로 지정해줄 수 있음
//ex1
sunny.새함수=weather;
weather.call(rainy,'비 옴');
//ex2
hello.call(sunny);