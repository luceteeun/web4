(function($){

  let cnt=0;
  let setId=0;


  // 정지함수  (아래 중복되는 함수들 이걸로 대체가능)
  function pausefn(){
    clearInterval(setId);
    // $('.pause-btn').children().removeClass('fa-pause');
    // $('.pause-btn').children().addClass('fa-play');
  
  //위의 리무브클래스, 애드클래스 대신에  아래 한줄로 요약가능
  // html 속성을 변경 매서드 : attr();  attribute  어트리뷰트
  // html 속성을 변경 매서드 : prop();  properties 프로퍼티이스

  // 선택자(selector)
  // $('.pause-btn').children().attr('속성','속성값');
  $('.pause-btn').children().attr('class','fa fa-play');
  // $('.pause-btn').children().prop('class','fa fa-play');
  }


  // 1. 메인슬라이드 함수 
    function mainSlide(){
      pageBtn();
      $('.slide-wrap').stop().animate({left:`${-100*cnt}%`}, 600, function(){
        cnt>5?cnt=0:cnt;
        cnt<0?cnt=5:cnt;
        $('.slide-wrap').stop().animate({left:`${-100*cnt}%`}, 0);
      });
    }

  // 2. 다음카운트함수
    function nextCount(){
      cnt++;
      //console.log( `nextCount() ${cnt}`); // ㅡ> 디버깅: 개발자 오류 수정하고 확인
      mainSlide();
    }
    // 2-2. 이전카운트함수
    function prevCount(){
      cnt--;
      mainSlide();
    }

  // 3. 자동타이머함수
    function autoTimer(){
      setId = setInterval(nextCount, 4000);
    }
    autoTimer();
    

  //  4. 페이지버튼 함수
    function pageBtn(){
      $('.page-btn').removeClass('on');
      $('.page-btn').eq(cnt>5?0:cnt).addClass('on');

    }

    // 5. 페이지버튼 클릭 이벤트
    $('.page-btn').each(function(idx){
      $(this).click(function(){
        
        cnt=idx;
        mainSlide();

          pausefn(); 
          // clearInterval(setId);
          // $('.pause-btn').children().removeClass('fa-pause');
          // $('.pause-btn').children().addClass('fa-play');
         
      });


    });

    // 6. 다음화살버튼 클릭 이벤트
    $('.next-btn').click(function(){
      // 선택자(wrap)가 애니메이션이 진행중인 경우는 클릭을 취소해라..if(){}  ---긍정문
      // if( $('.slide-wrap').is(':animated') ){
      //   return; -리턴을 사용해야함
      // }
      // clearInterval(setId);
      // nextCount();


      // 애니메이션이 진행중이 아닐때만 실행해라    --부정문(!)
      if( !$('.slide-wrap').is(':animated') ){
        nextCount();
        pausefn();
          // clearInterval(setId);
          // $('.pause-btn').children().removeClass('fa-pause');
          // $('.pause-btn').children().addClass('fa-play');
         

      } 
    });

    // 6-2. 이전화살버튼 클릭 이벤트
    $('.prev-btn').click(function(){

      if( !$('.slide-wrap').is(':animated') ){
        prevCount();
        pausefn();
          // clearInterval(setId);
          // $('.pause-btn').children().removeClass('fa-pause');
          // $('.pause-btn').children().addClass('fa-play');
      } 

    });



    // 7. 정지버튼 클릭 이벤트()
    $('.pause-btn').click(function(){
      // 한번 누르면 정지 두번누르면 실행 =이게 반복되야함
      clearInterval(setId);


      // 플레이 버튼 누르면 다시 재생되게 하기

      // *hasClass*

      //정지버튼을 클릭하면 자식요소인 i태그((this).children())에 클래스이름이 fa-pause 이면 fa-play로 바꾸고 클래스 이름이 반대면 fa-pause로 바꿔라
      // console.log( $(this).children().hasClass('fa-pause') );

      // // 포즈가 있으면 포즈를 제거하고 플레이를 넣어라
      // if( $(this).children().hasClass('fa-pause') === true){
      // $(this).children().removeClass('fa-pause');
      // $(this).children().addClass('fa-play');
      // }

      
      // // 포즈가 없으면 플레이를 제거하고 포즈를 추가하라
      // else{
      //   $(this).children().removeClass('fa-play');
      //   $(this).children().addClass('fa-pause');
      //   }

      //한번더 연습 : 토글 기능= 한번은 정지, 또 한번은 플레이
     if( $(this).children().hasClass('fa-pause') ){
      clearInterval(setId);  // 타이머정지
      $(this).children().removeClass('fa-pause');
      $(this).children().addClass('fa-play');
     }
     else{
      nextCount();   // 플레이버튼 누르고 다음이미지가 바로 나오게하기
      autoTimer();   //타이머호출
      $(this).children().removeClass('fa-play');
      $(this).children().addClass('fa-pause');
     }


    // 8. 정지상태에서 일정시간이 지나면 자동으로 플레이트 해주는 카운트 프로그래밍

    // ㅡ> 일단 다음시간에 







    });


})(jQuery);