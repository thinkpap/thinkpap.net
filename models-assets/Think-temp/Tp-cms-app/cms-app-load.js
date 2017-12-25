
$(function()
{
  $(".img_titauto").autoimgs();//自然排列只有一行

  $(".img_hovauto").autoimgs({ spanhight: 0 });
    $(".img_notit").autoimgs({ spanhight: 0 }); $(".cms").listwidth();
    //$('.Tui-web_section img').lazyload({effect:"fadeIn"})});$(function(){$('.Tui-web_aside img').lazyload({effect:"fadeIn"});
    //$('.zoom img').zoomImgRollover();
	$(".img_tit1000232").autoimgs({ model: 1000, pc_imgcel: 0.6, pc_rowlictrl: 2, mb_rowlictrl: 3, spanno: 2 });//pc只显示2个，手机只显示3个,文字2行
	$(".img_tit100023").autoimgs({ model: 1000, pc_imgcel: 0.6, pc_rowlictrl: 2, mb_rowlictrl: 3 });//pc只显示2个，手机只显示3个
	$(".img_tit10003").autoimgs({ model: 1000, mb_rowlictrl: 3 });//pc正常排列一排，手机只显示3个
	$(".img_titrows").autoimgs({pc_rowlictrl:3,mb_rowlictrl:3});//PC/手机按照指令多行排列
	$(".img_hovauto100023").autoimgs({model:1000,pc_rowlictrl:2,mb_rowlictrl:3,spanhight:0});//pc只显示2个，手机只显示3个
	$(".img_hovauto10003").autoimgs({model:1000,mb_rowlictrl:3,spanhight:0});//pc正常排列一排，手机只显示3个
	$(".cms_notit").autoimgs({ model: 1000, pc_rowlictrl: 4, mb_rowlictrl: 3, pc_imgcel: 0.65, mb_imgcel: 0.65, spanhight: 0 });//分页列表专用
//	$(".showcont").hide(); // 默认隐藏所有内层元素






	$(".img_tit_auto").autoimgs();//自然排列只有一行
	$(".img_auto").autoimgs({ spanhight: 0 });//自然排列只有一行,无文字

	$(".img_tit_lines").autoimgs({ pc_rowlictrl: 5, mb_rowlictrl: 3 });//分行排列
	$(".img_lines").autoimgs({ pc_rowlictrl: 5, mb_rowlictrl: 3, spanhight: 0 });//分行排列,无文字


	$(".img_titpc2mb3").autoimgs({ model: 1000, pc_imgcel: 0.6, pc_rowlictrl: 2, mb_rowlictrl: 3 });//pc只显示2个，手机只显示3个





});
if(device.mobile())
{
    document.writeln("<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no\">");
  $(function()
  {
      $(".cms").listwidth({ dtscale: 0.30, ddscale: 0.66, imgscale: 0.68, model: 0 });
  });
}
else 
{
  $(function()
  {
      $(".cms-list").listwidth({ dtscale: 0.23, ddscale: 0.75, imgscale: 0.65, model: 0 });
	$(".blank").attr("target","_blank");
  });

}

if (/AppleWebKit.*Mobile/i.test(navigator.userAgent) || (/MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/.test(navigator.userAgent))) {
    if (/iPad|Pad/i.test(navigator.userAgent)) { $(function () { $("body").css("minWidth", "1130px") }) }

}

