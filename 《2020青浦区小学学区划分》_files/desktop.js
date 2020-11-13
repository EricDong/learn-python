$(function(){
	
});

$(window).load(function(){
	
	//顶部滚动消息
	if($('#scroll-news').size() > 0){
		$('#scroll-news').each(function(index, element) {
			var $obj = $(this).children('ul')
				size = $obj.children().size(),
				mTop = 0, num = 0;
			$obj.append($obj.children().first().clone().addClass('clone'));
			window.setInterval(function(){
				num++;
				mTop = -36 * num;
				$obj.animate({marginTop: mTop}, 500, function(){
					if(num >= size){
						num = 0;
						$obj.css('margin-top', 0);
					}
				});
			}, 3000);
		});
	};
	/* slogan切换 */
	if($('#top-slogan').size() > 0){
		$('#top-slogan').each(function(index, element) {
			var _obj = $(this).find('dd'),
				num = 0;

			_obj.first().show();

			if(_obj.size()<=1){
				return false;
			};

			window.setInterval(function(){
				_obj.eq(num).fadeOut(300, function(){
					num++;
					if(num >= _obj.size()){
						num = 0;
					}
					_obj.eq(num).fadeIn(500);
				});
			}, 5000);

		});
	};
	var k = 1;
	/* hp-list-group  滑动切换内部tab*/
	if($('.hp-list-group').size() > 0){
		$('.hp-list-group').each(function(index, element) {			
			var $nav = $(this).find('.list-group-nav').children(),
				$jumps = $(this).find('.jump');	
			var $nav_id = $(this).find('.list-group-nav').attr('id');
			if($nav_id != undefined && $nav_id == 'special'){
				var $items = $(this).find('.list-cell2');
			}else{
				var $items = $(this).find('.list-cell');
			}	
			var k = 1;
			$nav.mouseover(function(e) {
				var i = $(this).index();
				$(this).addClass('act').siblings().removeClass('act');
				var $nowItem = $items.removeClass('blur').eq(i);
				$nowItem.addClass('blur');
				if($(this).attr('id')!= undefined && $(this).attr('id')=='index_button_btn'){
					$(".banner-btn-index").css('display','block');
				}else{
					$(".banner-btn-index").css('display','none');
				}
			});
			$nav.on("keydown",function(e){
				 var i = $(this).index();
				 if(e.keyCode===9&&!e.shiftKey){
					$(this).addClass('act').siblings().removeClass('act');
					$nextItems = $items.removeClass('blur').eq(i);
					$nextItems.addClass('blur');
					$nextItems.find("a").eq(0).focus();
				}
			});		 
			$jumps.on("keydown",function(e){	
				 var L = $jumps.length;
				 if(e.keyCode===9&&!e.shiftKey){
					if(k < L){
						//当前页中tab切换.						
						$nav.siblings().removeClass('act').eq(k).addClass('act');
						$nextItems = $items.removeClass('blur').eq(k);
						$nextItems.addClass('blur');
						$nextItems.find("a").eq(0).focus();
					}else{
						//导航栏中tab切换.
						var M = $nav.length;
						if(index == M){
							$(".box_1").find("a").eq(0).focus();
						}else{
							$nextItems = $('#navi').children().eq(index);
							$nextItems.find("a").eq(0).focus();
						}
					}
					k++;
				}
			});	
			
					
		});
	};
	
	/* hp-news 切换导航栏*/
	if($('.hp-news').size() > 0){
		$('.hp-news').not('.nottt').each(function(index, element) {
			var $nav = $('#navi').children(),
				$items = $(this).find('.hp-news-item');
			$nav.not('.nottt').mouseover(function(e){
				var i = $(this).index();
				$items.removeClass('blur').eq(i).addClass('blur');
			});
			$nav.on("keydown",function(e){
			     var i = $(this).index();
				 if(e.keyCode===9&&!e.shiftKey){
					$nextItems = $items.removeClass('blur').eq(i);
					$nextItems.addClass('blur');
					$nextItems.find("a").eq(0).focus();
				}
				k = 1;
			});
						
		});
	};
	
	/* hp-focus */
	if($(".hp-focus").size() > 0) {
		$(".hp-focus").flexslider({
			animation: "slide",
			controlNav : false,
			prevText : '',
			nextText : ''
		});
	};
	/* hp-banners */
	if($(".hp-banners").size() > 0) {
		$(".hp-banners").flexslider({
			animation: "slide",
			directionNav : false,
			prevText : '',
			nextText : ''
		});
	};
	/* first_stage 信息公开首页*/
	$(".first_stage>a").click(function(){
		var $toggle = $(this).parent();
		var $show  = $toggle.next().css('display');
		if($show == "none")
		  $toggle.next().css('display','list-item');
		else
		  $toggle.next().css('display','none');
	});
	/*office_hall办事大厅*/
	$("#oh_conten_btn1").click(function(){
		$("#oh_conten_btn1").addClass("act");
		$("#oh_conten_btn2").removeClass("act");
		$(".oh_content_text2").css("display","none");
		$(".oh_content_text1").css("display","block");
	});
           $("#page_skip a").click(function(){
               // location.href="http://www.baidu.com";
                $("#oh_conten_btn1").addClass("act");
                $("#oh_conten_btn2").removeClass("act");
                $(".oh_content_text2").css("display","none");
                $(".oh_content_text1").css("display","block");
        });
	$("#oh_conten_btn2").click(function(){
		$("#oh_conten_btn2").addClass("act");
		$("#oh_conten_btn1").removeClass("act");
		$(".oh_content_text1").css("display","none");
		$(".oh_content_text2").css("display","block");
	});
	/* //office_hall_details办事大厅详情*/
	$(".content_nav>li").click(function(){
		$(".content_nav>li").removeClass("act");
		$(this).addClass("act");
		$(".content_nav2").css("display","none");
	});

	if($(".ohd_content").size() > 0){
		$(".ohd_content").each(function(index, element) {
			var $nav = $('.content_nav').children(),
				$items = $(this).find('.content_nav2');
			$nav.click(function(e){
				var i = $(this).index();
				$items.removeClass('blur').eq(i).addClass('blur');
			})
		});
	};

	if($(".content_nav2").size() > 0){
		$(".content_nav2").each(function(index, element) {
			var $nav = $('.ohd_nav2').children(),
				$items = $(this).find('.text_content');
			$nav.click(function(e){
				var i = $(this).index();
				$items.removeClass('show').eq(i).addClass('show');
			});
			$(".ohd_guide").click(function(){
				$items.addClass('show');
			})
		});
	};

	/* //opened_list 文号弹出*/
	$("#opened_num_li").click(function(){
		$(".opened_num_input").show();
	});
	$("#opened_num_input_close").click(function(){
		$(".opened_num_input").hide();
	});

	/* //opened_list 时间范围搜索弹出*/
	$("#corp6,#corp9,#corp10>input").click(function(){
		WdatePicker();
	});
	
});


/*去除各种资料自带在标签内的属性*/
$(window).load(function(){

	$('.article_content').each(function(){

		$('p, div, a, img, h1, h2, h3, h4, h5, h6, table, ul, th, td, li, dl, span, strong, label, em, b, i', this).each(function(){

			//$(this).removeAttr('style').removeAttr('width').removeAttr('height').removeAttr('bgColor');

		});

	});

});
