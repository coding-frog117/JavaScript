'use strict';

//자바스크립트는 promise에 내장된 객체. 비동기적인 것을 수행할 때 콜백함수 대신에 유용하게 쓰인다.
//1.state (수행중, 성공, 실패)
//2. producer(제공자) 와 consumer(소비자) 차이
//state: pending -> fulfilled or rejected
//producer vs consumer

//1. producer
const promise=new Promise((resolve,reject)=>{
    //heavy한 일을 수행하는 것이 동기적으로 수행된다면 수행하는 동안 아무것도 할 수 없을 것이다. 따라서시간이 걸리는 일들(네트워크 통신, 파일을 읽어오기)등은 비동기적으로 처리하는 것이 좋다

    console.log("doing something..");
    setTimeout(()=>{
        //resolve('ellie');
        reject(new Error('no network'));
    },2000);
});
//promise 객체를 만드는 순간 바로 안의 콜백함수가 실행된다. 따라서 만약 사용자가 버튼을 누르면 네트워크 통신을 하게 하고싶다면 이러한 방법 사용 안됨

//2. consumer : then, catch, finally
promise
.then((value)=>{
    console.log(value); 
}) ///체이닝을 통해 리턴된 promise에 catch를 등록
.catch(error=>{
    console.log(error);
})
.finally(()=>{console.log('finally');
});

//promise chaining
const fetchNumber=new Promise((resolve,reject)=>{
    setTimeout(()=>resolve(1),1000);
});

//then 에서는 값을 바로 전달해도 되고 비동기인 promise를 전달해도 됨
fetchNumber
.then(num=>num*2)
.then(num=>num*3)
.then(num=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>resolve(num -1),1000);
    });
})
.then(num=>console.log(num));

//4. error handing
const getHen=()=>
new Promise((resolve,reject)=>{
    setTimeout(()=>resolve('암탉'),1000);
});
const getEgg=hen=>
new Promise((resolve,reject)=>{
    setTimeout(()=>resolve(`${hen}=>달걀`),1000);
});
const cook=egg=>
new Promise((resolve,reject)=>{
    setTimeout(()=>reject(`${egg}=>탄 치킨`),1000);
});

getHen()
.then(getEgg) //함수 하나에 전달할 때는 이렇게 생략 가능
.catch(error=>{
    return '빵';
})
.then(cook)
.catch(console.log);