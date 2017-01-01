function add(a,b, callback) {
  var result = a + b;
  callback(result);
}

add(10, 10, function(result){
  console.log('파라미터');
  console.log('더하기 결과 : %d', result);
});

add(10, 10, function(result) {
  result = -10;
  console.log(result);
});
