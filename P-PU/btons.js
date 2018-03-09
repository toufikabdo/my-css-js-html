/* download and disply bottons */
//<![CDATA[
!function(a){a(".ripple-effect").click(function(b){var c=a(this);0===c.find(".teffect").length&&c.append("<span class='teffect'></span>");var d=c.find(".teffect");if(d.removeClass("animate"),!d.height()&&!d.width()){var e=Math.max(c.outerWidth(),c.outerHeight());d.css({height:e,width:e})}var f=b.pageX-c.offset().left-d.width()/2,g=b.pageY-c.offset().top-d.height()/2;d.css({top:g+"px",left:f+"px"}).addClass("animate")})}(jQuery)
//]]>