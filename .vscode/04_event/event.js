const EventEmitter = require('events');

const myEvent = new EventEmitter();

myEvent.addListener('event1', () => {
    console.log("이벤트1");
});

myEvent.on('event2', () => {
    console.log("이벤트2");
});

myEvent.on('event2', () => {
    console.log("이벤트2 추가");
});

myEvent.once('event3', () => {
    console.log("이벤트3 한번만실행됨");
});

myEvent.emit('event1');
myEvent.emit('event2');
myEvent.emit('event3');
myEvent.emit('event3'); // 한 번만 실행되는 이벤트이므로 실행 안 됨

myEvent.once('event4', () => {
    console.log("이벤트4");
});

myEvent.removeAllListeners('event4'); // 이벤트에 연결된 모든 이벤트 리스너를 제거
myEvent.emit('event4'); // 제거했으므로 실행 안 됨


const listeners = () => {
    console.log("이벤트5");
};
myEvent.on('event5',listeners);
myEvent.removeListener('event5', listeners);
myEvent.emit('event5', listeners);

console.log(myEvent.listenerCount('event2'));