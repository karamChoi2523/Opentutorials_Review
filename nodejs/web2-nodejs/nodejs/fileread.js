//nodejs의 모듈 중 파일 시스템 호출
var fs = require('fs')
fs.readFile('sample.txt', 'utf8',function(err, data){
  console.log(data);
})
//상위 디렉토리에서 이걸 실행 시 sample.txt를 상위 디렉토리에서 찾는다.
//그러므로 디렉토리를 바꾸고 실행해야 함
