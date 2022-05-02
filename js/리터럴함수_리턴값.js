// 순수자바스크립트

//ES5
// 1. 선언적 함수() : 괄호옆에 이름이 있는 함수
function 함수1(){
  console.log('선언적 함수 호출 실행 위치 관계없이 실행 가능함');
}  
함수1();         //ㅡ> 함수 호출 위치가 자유로움(어디 위치에나 호출가능)


// 2. 리터럴(익명함수) 함수() : 괄호옆에 이름이 없는 함수
const 변수1 = function(){
  console.log('리터럴함수(이름없는함수) 반드시 함수선언 아래에서만 실행 가능');   
                  //ㅡ> 함수 호출은 반드시 함수 아래에서만 호출 가능
}                //ㅡ> 변수 이름에 괄호를 사용함
변수1();


// ES6
// 3. 화살표 표현형식 : 화살함수 : 익명함수와 모두 같지만 function 키워드가 사라지고 괄호 뒤에 화살표가 붙는다.
const 변수2 = () => {
  console.log('화살표 함수도 반드시 함수선언 아래에서만 실행 가능');
}                
변수2();

// 4. 즉시표현식 함수 == 즉시실행함수 IIFE (이피)
// 외부로부터 차단하는 함수
(function(){
  console.log('즉시표현식 함수 즉 즉시실행함수는 곧바로 실행');
})();

//5. 
(function($){
  console.log('제이쿼리 매개변수 받아서 실행 곧바로 실행' + $ );
})(jQuery);


// 외부호출 버튼 클릭 호출 실행
let cnt = 0;   //로딩시 : 홈페이지가 처음 열릴 때 실행
function count(){
  cnt++;
  console.log( cnt );
}

//버튼2 클릭시 호출 실행
cnt = 0;
function count2(){
  cnt+=100;
  alert( cnt );
  return;    //리턴문 이후로는 실행이 안된다.
  alert( cnt );
}

const x = function count3(){
  cnt +=1000;
  // console.log( cnt );
  return console.log( cnt ); //여기까지는 실행 되고 끝
  cnt +=2000;
}

//타이머함수로 호출 실행
setInterval(count3, 500);