//async & await 
// promise를 깔끔하게 작성하기 위한 방법! 그러나 프로미스를 사용해야 하는 상황이 있기 때문에 항상 async를 사용해야 하는 것이 아님. 

//1. async
//async 키워드를 써주면 코드블럭 안이 자동으로 프로미스로 변함
async function fetchUser(){
    //10초동안 네트워크 요청
    
    return 'ellie';
};
   

const user=fetchUser();
user.then(console.log);
console.log(user);

//2. await
function delay(ms){
    return new Promise(resolve=>setTimeout(resolve,ms));
}

async function getApple(){
    await delay(2000);
    return '사과';
}

async function getBanana(){
    await delay(1000);
    return '바나나';
}
// 동일한 코드
// function getBanana(){
//     return delay(3000)
//     .then(()=>'바나나');
// }

//*function pickFruits(){
//    return getApple()
//    .then(apple=>{
//        getBanana()
//        .then(banana=>`${apple}+${banana}`);
//    })
//}

async function pickFruits(){
    const applePromise=getApple();
    const bananaPromise=getBanana();
    const apple=await applePromise;
    const banana=await bananaPromise;
    return `${apple}+${banana}`;
}

pickFruits().then(console.log);

//3. 유용한 promise APIs
function pickAllFruits(){
    return Promise.all([getApple(),getBanana()])
    .then(fruits=>fruits.join('+'));
}
pickAllFruits().then(console.log);

function pickOnlyOne(){
    return Promise.race([getApple(),getBanana()]);
}

pickOnlyOne().then(console.log);