document.writeln("<link href=\'../../../thinkui/Thinkmodel/ThinkUi/css/think-font/think-font.css\' rel=\'stylesheet\' />");
document.writeln("<link href=\'../../../thinkui/Thinkmodel/thinkplus/font-awesome/css/font-awesome.min.css\' rel=\'stylesheet\' />");
document.writeln("<link href=\'../../../thinkui/Thinkmodel/ThinkUi/css/Tui.css\' rel=\'stylesheet\' />");
document.writeln("<link href=\'../../../thinkui/Thinkmodel/ThinkUi/css/Tui-developing.css\' rel=\'stylesheet\' />");
document.writeln("<link href=\'../../../thinkui/Thinkmodel/Think-exp/Admin-page.css\' rel=\'stylesheet\' />");
document.writeln("<script src=\'../../../thinkui/Thinkmodel/ThinkUi/js/size.js\'></script>");
document.writeln("<script src=\'../../../thinkui/Thinkmodel/ThinkUi/js/colors.js\'></script>");

document.writeln("<script src=\'../../../thinkui/Thinkmodel/ThinkUi/js/jquery-2.1.4.js\' type=\'text/javascript\'></script>");
document.writeln("<script src=\'../../../thinkui/Thinkmodel/ThinkUi/js/device.js\'></script>");
document.writeln("<script src=\'../../../thinkui/Thinkmodel/ThinkUi/js/tui.js\'></script>");
document.writeln("<script src=\'../../../thinkui/Thinkmodel/ThinkUi/js/layers/cnlayer/layer.js\'></script>");
document.writeln("<link href=\'../../../thinkui/Thinkmodel/ThinkUi/js/layers/cnlayer/skin/layer.css\' rel=\'stylesheet\' />");
document.writeln("<script src=\'../../../thinkui/Thinkmodel/ThinkUi/js/My97Date/WdatePicker.js\'></script>");
document.writeln("<script src=\'../../../thinkui/Thinkmodel/ThinkUi/js/commons.js\' type=\'text/javascript\'><\/script>");
document.writeln("<script src=\'../../../thinkui/Thinkmodel/Think-exp/Admincontext.js\'><\/script>");


function adddata(title,width,height,url) {
  layer.open({
    type: 2,
    title: title,
    shadeClose: true,
    shade: 0.3,
    maxmin:true,
    area: [width, height],
    content: url
  });
}
