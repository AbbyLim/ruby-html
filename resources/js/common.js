$(function(){	
	//팝업 공통 열기
	function openpop(obj){
		var pops = $(obj).attr("data-link");
		$(pops).addClass("is-opened");
		$("html").addClass("is-opened");
		if($(pops).hasClass("layer-over")){
			$("html").addClass("over");
		};
		if($(obj).hasClass("btn-over")){
			$("html").addClass("over");
			$(pops).addClass("layer-over");
		};
	};
	//팝업 공통닫기
	function closepop(obj){
		var pops = $(obj).closest(".layerpop");
		$(pops).removeClass("is-opened");
		if($(pops).hasClass("layer-over")){
			$("html").removeClass("over");
		}else{
			$("html").removeClass("is-opened");
		};
		$("html").removeClass("is-opened");
	};
	
	//팝업 열기 버튼 공통
	$(".btn-layer").each(function(e){
		$(this).off("click").on("click" , function(e){
			e.preventDefault();
			openpop(this);
		});
	});
	//팝업 닫기 버튼 공통
	$(".layer-close").each(function(){
		$(this).off("click").on("click" , function(e){
			e.preventDefault();
			closepop(this);
		});
	});
	//dim 클릭시 팝업 닫기
	/*$(".dim").each(function(){
		$(this).off("click").on("click" , function(e){
			e.preventDefault();
			$("html").removeClass("is-opened");
			$(".layerpop").each(function(){
				$(this).removeClass("is-opened");
			});
		});
	});*/
	
	//GNB
	$(".btn-nav").each(function(e){
		$(this).off("click").on("click" , function(e){
			e.preventDefault();
			$(".gnb-wrap").addClass("is-active");
			$("html").addClass("gnb-opened");
		});
	});
	$(".gnb-close").each(function(e){
		$(this).off("click").on("click" , function(e){
			e.preventDefault();
			$(this).closest(".gnb-wrap").removeClass("is-active");
			$("html").removeClass("gnb-opened");
		});
	});
	

	$(window).scroll(function(){
		var $scrollLeft = -this.scrollX    
		$(".scroll-x").css({left:$scrollLeft}) 
	});
	if($(".import-wrap").length){
		$(".import-wrap .btn-imp").each(function(){
			$(this).on("click" , function(e){
				//var name = $(this).data("name");
				var imp = $(this).data("val");
				$(this).closest(".import-wrap").find(".ip-import").val(imp);
			});
		});
		$(".btn-reset").on("click" , function(e){
			//var name = $(this).data("name");
			var name = $(this).data("name");
			console.log(name)
			$(this).closest(".import-wrap").find("input[data-name='+name+']").val("0");
		});
	};
	if($(".select-wrap").length){
		$(".ip-import").each(function(){
			$(this).on("click" , function(e){
				var imp = $(this).data("val");
				$(this).closest(".import-wrap").toggleClass("opened");
			});
		});
		$(".btn-imp").each(function(){
			$(this).on("click" , function(e){
				$(this).closest(".import-wrap").removeClass("opened");
			});
		});
	};
	if($(".accor-list").length){
		$(".accor-list li").each(function(){
			$(this).on("click" , function(e){
				$(this).siblings("li").removeClass("is-active");
				$(this).addClass("is-active");
				if($(this).closest(".contact-wrap").hasClass("message-wrap")){
					$(this).addClass("read");
				};
			});
		});
		$(".title-box .title").each(function(e){
			var $width = $(this).width();
			if($(this).children("div").width > $width){
				$(this).addClass("txt-over");
			};
		});
	};


	//weeks 모션
	$(".v-motion").each(function(){
		var wh = $(window).innerHeight(),
		$st = $(window).scrollTop(),
		$top = $(this).offset().top,
		$bottom = $top + $(this).outerHeight()*0.6;
		if($st >= $top - wh){
			$(this).addClass("active");
		};

		$(window).scroll( function(){
			var wh = $(window).innerHeight(),
			$st = $(window).scrollTop();
			$(".v-motion").each( function(){
				var $top = $(this).offset().top,
				$bottom = $top + $(this).outerHeight()*0.6,
				$bottom2 = $top + $(this).outerHeight(),
				$trigger = $top - wh*0.6;
				if($st >= $trigger){
					$(this).addClass("active");
					if($st > $bottom2){
						$(this).removeClass("active");
					};
				}else{
					if($st < $top - wh){
						$(this).removeClass("active");
					}
				};
			});
		});
	});
	//goTop
	$(".btn-top").off("click").on("click" , function(e){
		e.preventDefault();
		$("html, body").animate( { scrollTop : 0 }, 400 );
		return false;
	});
	/*
	$(window).scroll( function(){
		$st = $(window).scrollTop();
		if($st > 0){
			$(".btn-top").fadeIn();
		}else{
			$(".btn-top").fadeOut();
		};
	});
	*/
	$st = $(window).scrollTop();
	if($st > 0){
		$(".btn-top").fadeIn();
	}else{
		$(".btn-top").fadeOut();
	};
});
