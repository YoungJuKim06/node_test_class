console.log('require가 가장 위에 오지 않아도됩니다.');

module.export = '저를 찾아보세요';

require('../../02_module/var');

console.log('require.cache입니다.');
console.log(require.cache);
console.log('require.main 입니다.');
console.log(require.main === module);
console.log(require.main.filename);