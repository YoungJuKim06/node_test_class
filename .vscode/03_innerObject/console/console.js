const string = 'abc';
const number = 1;
const boolean = true;
const obj = {
    
    outside: {
        inside: {
            key: 'value',
        },    
    },
};

console.time('전체시간');
console.log(string, number, boolean);
console.error('에러메세지는 console.error에 담기');

console.table([{ name: '제로', birth: 1994 }, { name:'hero', birth:1988 }]);

console.dir(obj, { colors: false, depth: 2 });
console.dir(obj, { colors: true, depth: 1 });

console.time('시간 측정');

for(let i = 0; i < 100000; i++) {}

console.timeEnd('시간측정');


function b() {
    console.trace('에러위치추적');
}

function a() {
    b();
}

a();

console.timeEnd('전체 시간');