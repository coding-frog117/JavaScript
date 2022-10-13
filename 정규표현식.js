const target='my name is yeeun';
//undefined
const regexp=/my/g;
//undefined
regexp.exec(target);
//['my', index: 0, input: 'my name is yeeun', groups: undefined]

target.match(regexp);
['my']
//const target='my name is my name';
//target.match(regexp);
//(2) ['my', 'my']

const str="my name is my name";
const regexp2=/.../g;
str.match(regexp2);
//(6) ['my ', 'nam', 'e i', 's m', 'y n', 'ame']

const str2="todaaayy is aa friday"
const regexp3=/a{2,3}/g;
str2.match(regexp3);
//(2) ['aaa', 'aa']
const regexp4=/a{2}/g;
str2.match(regexp4);
//(2) ['aa', 'aa']
const regexp5=/a{2,}/g;
str2.match(regexp5);
//(2) ['aaa', 'aa']
const regexp6=/a+/g; //===const regexp6=/a{1,}/g;
str2.match(regexp6);
//(3) ['aaa', 'aa', 'a']

const target2="AA BB aa bb Aa Bb";
const regexp7=/[AB]+/g;
target2.match(regexp7);
//(4) ['AA', 'BB', 'A', 'B']
const target3="ABCdefghiJkLmN";
const regexp8=/[a-z]/g;
const regexp9=/[A-Z]/g;
target3.match(regexp8);
target3.match(regexp9);

const target4="AbcD2e4F1230GJJ2334dk6f";
const regexp10=/[A-Za-z]/g;
const regexp11=/[0-9]/g;
const regexp12=/[^0-9]/g; //===const regexp12=/[^\d]/g;

const newstr="my hobby is watching movie";
const regexp13=/^my/;
const regexp14=/movie$/;