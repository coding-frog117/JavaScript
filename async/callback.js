'use strict'

//자바스크립트는 작성순서에 맞춰서 하나하나씩 실행됨
//호이스팅된 이후부터 코드가 나타난 순서대로 나타난다.

console.log('1');
setTimeout(()=>console.log('2') ,1000); //브라우저에게 요청. 비동기
console.log('2');
console.log('3');

//즉각적으로 동기되는 콜백
function printImmediately(print){
    print(); 
}
printImmediately(()=>console.log('hello world'));

//나중에 언제 실행될지 예측할수없는 콜백
function printWithDelay(print,timeout){
    setTimeout(print,timeout);  
}

printWithDelay(()=>console.log('async callback'),2000);//비동기

//콜백지옥
class UserStorage{
    loginUser(id,password,onSuccess,onError){
        setTimeout(()=>{
            if(
                (id==='ellie'&&password==='dream')||
                (id==='coder'&&password==='academy')
            ){
                onSuccess(id);
            } else{
                onError(new Error('not found'));
            }
        },2000);
    }
    getRoles(user, onSuccess, onError){
        setTimeout(()=>{
            if (user==='ellie'){
                onSuccess({name:'ellie',role:'admin'});
            }else{
                onError(new Error('no access'));
            }
            
        },1000);
    }
}

const userStorage=new UserStorage();
const id=prompt("enter your id");
const password=prompt("enter your password");
userStorage.loginUser(
    id,
    password,
    user=>{
        userStorage.getRoles(
            user,
            userWithRole=>{
                alert(`hello ${userWithRole.name}, you have a ${userWithRole.role} role`);

            },
            error=>{
                console.log(error);
            }

        )
    },
    error=> {console.log(error)}
    )
