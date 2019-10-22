

jQuery(document).ready(function($) {

	// 电脑导航
	$('.nav li').hover(function(){
		$(this).find('dl').stop().slideToggle();
		$(this).toggleClass('ok');
	});

	// 手机导航
	$('.menuBox .menu-btn').click(function(){
		$('.searchBox .soBox').stop().slideUp();
		$(this).next('ul').stop().slideToggle();
	});
	$('.menuBox .v1').click(function() {
		if( $(this).next('dl').length ){
			$(this).next('dl').stop().slideToggle();
			return false;
		}
	});
	$('.menuBox').click(function(e) {
		e.stopPropagation();
	});

	// 搜索
	$('.searchBox .search-btn').click(function() {
		$('.menuBox ul').stop().slideUp();
		$(this).next('.soBox').stop().slideToggle();
	});
	$('.searchBox').click(function(e) {
		e.stopPropagation();
	});

	$('body').click(function(){
		$('.menuBox ul').stop().slideUp();
		$('.searchBox .soBox').stop().slideUp();
	});

	// 返回顶部
	$('.toTop').click(function(){
		$('body,html').animate({
			'scrollTop':0
		},500);
	});

	// 选项卡 鼠标点击
	$(".TAB li").click(function(){
		var $vv=$(this).parent(".TAB").attr("id");
		$($vv).hide();
		$(this).parent(".TAB").find("li").removeClass("on");
		var xx=$(this).parent(".TAB").find("li").index(this);
		$($vv).eq(xx).show();
		$(this).addClass("on");
	});

	// 视频播放
	$('video').click(function(){
		$(this).next('.play-btn').addClass('paused-btn').fadeToggle();
	});
	$('.play-btn').click(function(){
		$(this).addClass('paused-btn').fadeToggle();
	});


});

// 视频播放
function videoplay(id) {
	var video = document.getElementById(id);
	if ( video.paused ) {
		video.play();
	} else {
		video.pause();
	}
}

// 判断底部位置
function fixme(){
	$('body').removeClass('fixme');
		if( $('body,html').height() < $(window).height() ){
		$('body').addClass('fixme');
	}else{
		$('body').removeClass('fixme');
	}
};
