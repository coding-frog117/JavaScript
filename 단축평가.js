//옵셔널 체이닝 연산자
var elem=null;
var value=elem ?.value;
console.log(value);

var str='string';
var value=str?.length;
console.log(value);


//null 병합 연산자
var foo=null ?? 'default string';
console.log(foo);