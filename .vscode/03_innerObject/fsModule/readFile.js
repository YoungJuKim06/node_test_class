
const fs = require('fs');

fs.readFile('./.vscode/03_innerObject/fsModule/readme.txt', (err, data) => {

    if (err) {
        console.error(err);
    }
    console.log(data);
    console.log(data.toString());
});

//readme 파일의 경로는 명령어를 실행하는 콘솔 기준