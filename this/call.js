//call은 함수에 this를 바인딩해주며 인자값으로 전달이 가능하다.

function ootd(item,price){
    console.log(`오늘은 ${item}에 ${this.top} 과 ${this.bottom}을 매치하세요`);
    return price*2
}

const look1={
    top:'니트',
    bottom:'스커트'
}

const look2={
    top:'후드티',
    bottom:'밴딩 팬츠'
}

// ootd 함수에 각각 다른 객체를 binding 해줌. 인자값을 풀어서 전달
ootd.call(look1,'머플러',100000);
ootd.call(look2,'장갑',85000);