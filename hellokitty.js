$(function() {
	var count = 0;
    $("body").on("click", ".dot", {}, function() {
        $(".head").addClass("drop-head");
        setTimeout(function(){
			$(".head").addClass("drop-head-end");
        },1000);
    });

    $("body").on("mouseover", ".neck", {}, function() {
        $(".left-arm").addClass("roll");
        $(".right-arm").addClass("roll1");
    });
    $("body").on("mouseout", ".neck", {}, function() {
        $(".left-arm").removeClass("roll");
        $(".right-arm").removeClass("roll1");
    });

    $("body").on("click", ".left-ear", {}, function() {
        $(".head").addClass("change-face");
        setTimeout(function(){
			$(".head").removeClass("change-face");
			$(".changed-head").show();
        },500);
    });
    $(".changed-head").click(function(){
    	$(this).hide();
    	count++;
    	$("img").attr("src","img/"+count%3+".png")
    });
});
