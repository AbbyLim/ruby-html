//lets toggle
function baToggle(obj){
	if($("input:checkbox[name=chkba]").is(':checked')){
		$(".sv-better").addClass("after");
	}else{
		$(".sv-better").removeClass("after");
	}
};
$(function(){	
	if($(".intro-wrap").length){
		$("html").addClass("intro-show");
		//인트로
		$(".intro-wrap .hello div").each(function(index){
			var target = $(this),
				parent = $(this).closest(".intro-wrap");
			 setTimeout(function () {
				 target.addClass("active");
			 }, 200*index);
			 setTimeout(function () {
				 parent.addClass("step2");
			 }, 2500);
		});
		//인트로 닫기
		/*$(".weight-close").each(function(e){
			$(this).off("click").on("click" , function(e){
				e.preventDefault();
				$(this).closest("html").removeClass("intro-show");
				$(this).closest("html").addClass("intro-hide");
			});
		});*/
	};
	
	//GNB
	$(".btn-nav").each(function(e){
		$(this).off("click").on("click" , function(e){
			e.preventDefault();
			$(".gnb-wrap").addClass("is-active");
			$("html").addClass("is-opened");
		});
	});
	$(".gnb-close").each(function(e){
		$(this).off("click").on("click" , function(e){
			e.preventDefault();
			$(this).closest(".gnb-wrap").removeClass("is-active");
			$("html").removeClass("is-opened");
		});
	});
	//dim 클릭시 팝업 닫기
	$(".dim").each(function(){
		$(this).off("click").on("click" , function(e){
			e.preventDefault();
			$("html").removeClass("is-opened over over2");
			$(".layerpop").each(function(){
				$(this).removeClass("is-opened");
			});
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
				//var name = $(this).data("name");
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
