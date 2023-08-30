$(function(){
	var xDown;
	var yDown;
	var direction="";
	var dragn=0;
	var total=6;
	var pos=0;
	var moving=false;
	var timer;
	var distance;

	$(".btns .right_btn").addClass("active");
	$(".page3_back").addClass("case0");
	$(".page3_front").addClass("case0");

	$(window).resize(function(){
		clearTimeout(timer);

		timer=setTimeout(function(){
			distance=$("#page_content > ul > li").width();
			pos=distance*(-1)*dragn;
			$("#page_content").animate({left:pos}, 200);
		}, 50);
	});
	$(window).trigger("resize");

	$("#page_content").on("touchstart", function(e){
		var evt=e.originalEvent;
		xDown=evt.touches[0].clientX;
		yDown=evt.touches[0].clientY;
		// console.log(xDown+" : "+yDown);
	});
	$("#page_content").on("touchmove", function(e){
		var evt=e.originalEvent;

		if(moving == true) return;

		direction=swipeAPI(evt, xDown, yDown);
		// console.log("direction : "+direction);

		if(direction == "right"){
			if(dragn > 0){
				dragn-=1;
			}
			else{
				return;
			}
		}
		else if(direction == "left"){
			if(dragn < (total-1)){
				dragn+=1;
			}
			else{
				return;
			}
		}
		moving=true;
		dragUI(dragn);
	});
	$(".btns li").click(function(){
		if(moving == true) return;
		moving=true;

		if($(this).index() == 0){
			if(dragn > 0){
				dragn=dragn-1;
			}
		}
		else{
			if(dragn < (total-1)){
				dragn=dragn+1;
			}
		}
		dragUI(dragn);
	});
	function dragUI(n){
		pos=distance*(-1)*n;

		$("#page_content").animate({left:pos}, 400, function(){
			if(n == 0){
				$(".btns .left_btn").removeClass("active");
				$(".btns .right_btn").addClass("active");
			}
			else if(n == (total-1)){
				$(".btns .left_btn").addClass("active");
				$(".btns .right_btn").removeClass("active");
			}
			else{
				$(".btns .left_btn").addClass("active");
				$(".btns .right_btn").addClass("active");
			}

			$(".page3_front").attr({class:"page3_front case"+n});

			$(".page3_front").fadeIn(600, function(){
				moving=false;
				$(".page3_back").attr({class: "page3_back case" +n});
				$(".page3_front").hide();
			});
		});
	}
	function swipeAPI(evt, xd, yd){
		var moveDirection="";
		var xUp=evt.touches[0].clientX;
		var yUp=evt.touches[0].clientY;
		var xDiff=xd-xUp;
		var yDiff=yd-yUp;

		if(Math.abs(xDiff) > Math.abs(yDiff)){
			if(xDiff > 0){
				moveDirection="left";
			}
			else{
				moveDirection="right";
			}
		}
		else{
			if(yDiff > 0){
				moveDirection="up"
			}
			else{
				moveDirection="down";
			}
		}
		return moveDirection;
	}
});