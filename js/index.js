//日期显示
$(function(){
	var enabled = 0; 
	var today = new Date();
	var day=today.getDay();
	var days=[" 星期日"," 星期一"," 星期二"," 星期三"," 星期四"," 星期五"," 星期六"];
	var date = (today.getFullYear()) + "年" + (today.getMonth() + 1 ) + "月" + today.getDate() + "日" + days[day] +"";
	$('#nowtime').text(date);
	
	$("#info_ul1>li").bind({
		click:function(){
			var num=$(this).index();
			$("#info_ul1>li").removeClass("info_show");
			$("#info_ul1>li").eq(num).addClass("info_show");
			$("#info_ul2>li").css("display","none")
			$("#info_ul2>li").eq(num).css("display","block")
		}
	});
	
	$("#info_ul3>li").bind({
		click:function(){
			var num=$(this).index();
			$("#info_ul3>li").removeClass("info_show");
			$("#info_ul3>li").eq(num).addClass("info_show");
			$("#info_ul4>li").css("display","none")
			$("#info_ul4>li").eq(num).css("display","block")
		}
	});
	
	$("#info_ul5>li").bind({
		click:function(){
			var num=$(this).index();
			$("#info_ul5>li").removeClass("info_show");
			$("#info_ul5>li").eq(num).addClass("info_show");
			$("#info_ul6>li").css("display","none")
			$("#info_ul6>li").eq(num).css("display","block")
		}
	});
	
	$("#info_ul7>li").bind({
		click:function(){
			var num=$(this).index();
			$("#info_ul7>li").removeClass("info_show");
			$("#info_ul7>li").eq(num).addClass("info_show");
			$("#info_ul8>li").css("display","none")
			$("#info_ul8>li").eq(num).css("display","block")
		}
	});
	
	$("#info_ul9>li").bind({
		click:function(){
			var num=$(this).index();
			$("#info_ul9>li").removeClass("info_show");
			$("#info_ul9>li").eq(num).addClass("info_show");
			$("#info_ul10>li").css("display","none")
			$("#info_ul10>li").eq(num).css("display","block")
		}
	});
	
	$("#info_ul11>li").bind({
		click:function(){
			var num=$(this).index();
			$("#info_ul11>li").removeClass("info_show");
			$("#info_ul11>li").eq(num).addClass("info_show");
			$("#info_ul12>li").css("display","none")
			$("#info_ul12>li").eq(num).css("display","block")
		}
	});
})

//图片轮播
var index = 1;

function show(id) {
	if (id) {
		index = id;
		clearInterval(time);
	} else {
		index = index % 5 + 1;
	}
	// 设置图片
	$(".showPic>.pic>li").css("display","none");
	$(".showPic>.pic>li").eq(index-1).css("display","block");
	
	$("#scroll_number>li").css("background","#D6D6D6");
	$("#scroll_number>li").eq(index-1).css("background","#9D9D9D");
}

var time = window.setInterval("show()", 2000);

function start() {
	time = window.setInterval("show()", 2000)
}


