/*
         ?q?????r?q?????r?q???r  ?q???r  TM
         ???q???s???q?r???t?r??  ?t?r?? 
         ???t???r???t?s??  ????    ????  
         ?t???r?????q?r??  ????    ????  
         ?q???s?????t?s???q?s?t?r?q?s?t?r
         ?t?????s?t?????s?t?????s?t?????s
                         
      Web: www.5811.com.cn  Tel: 4006-120-950
  
*/

$(function(){
  //????��?????????
	$(".MENUS li").hover(function(){           
		$(this).addClass("ok").find("dl").stop(true,true).slideUp(0).slideDown(300);
	},function(){
    $(".ok").find("dl").stop(true,true).slideUp(200);
		$(this).removeClass("ok");
	});
  
  //????????????
	$(".MENU li,.MENU_MY").hover(function(){           
		$(this).addClass("ok");
	},function(){
		$(this).removeClass("ok");
	});
  
  //??????????
      $('.HOTTOP li').mouseover(function(){
          $(this).parent('ul').find('.ok').removeClass('ok');
          $(this).addClass('ok');
          if(!$(this).next('li').text()){
              $(this).addClass('end');
          }
      });
      
  // ??????   
  $('.SLIDE h3').click(function(){
      var $nn=$(this).hasClass('ok');
      if($nn){
           $(this).removeClass();
           $(this).next('ul').removeClass();
      }
      else
      {
           $(this).addClass('ok');
           $(this).next('ul').addClass('dn');
      }
  });
  
  // ??? ??????��?
  $(".TAB li").mousemove(function(){
    var $vv=$(this).parent(".TAB").attr("id");
	  $($vv).hide();
	  $(this).parent(".TAB").find("li").removeClass("hover");
	  var xx=$(this).parent(".TAB").find("li").index(this);
	  $($vv).eq(xx).show();
	  $(this).addClass("hover");
  });

  // ??? ?????
  $(".TAB_CLIKE li").click(function(){
    var $vv=$(this).parent(".TAB").attr("id");
	  $($vv).hide();
	  $(this).parent(".TAB").find("li").removeClass("hover");
	  var xx=$(this).parent(".TAB").find("li").index(this);
	  $($vv).eq(xx).show();
	  $(this).addClass("hover");
  });

});