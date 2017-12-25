for (var i = 0; i < sizefont.size.length; i++) {
  //通用高度宽度
  size += ".btn_" + sizefont.size[i] + ",.btn_" + sizefont.size[i] + ".ico,.inp_" + sizefont.size[i] + ",.cka_" + sizefont.size[i] + ",.ckb_" + sizefont.size[i] + ",.page_" + sizefont.size[i] + " li{height:" + sizefont.size[i] + "px!important}";
  //size += ".btn_" + sizefont.size[i] + " i{min-width:" + sizefont.fontb[i] + "px}";
  //纯图片，lab按钮图标为正方形小1px
  size += ".btn_" + sizefont.size[i] + ".ico i,.btn_" + sizefont.size[i] + ".ico em,.btn_" + sizefont.size[i] + ".lab i{width:" + sizefont.sizef[i] + "px;height:" + sizefont.sizef[i] + "px;line-height:" + sizefont.sizef[i] + "px}";
  //将纯图片按钮和输入框图标定义为方块
  size += ".btn_" + sizefont.size[i] + ".ico,.inp_" + sizefont.size[i] + " i{width:" + sizefont.size[i] + "px}";
  size += ".select_" + sizefont.size[i] + " i{width:" + sizefont.sizes[i] + "px}";
  //修正输入框图标居中
  size += ".inp_" + sizefont.size[i] + " i,.ckb_" + sizefont.size[i] + " span,.select_" + sizefont.size[i] + " i,.page_" + sizefont.size[i] + " li{line-height:" + sizefont.size[i] + "px}";
  //图标文字大小统一声明
  size += ".btn_" + sizefont.size[i] + " i,.inp_" + sizefont.size[i] + " i,.select_" + sizefont.size[i] + " i{font-size:" + sizefont.fontb[i] + "px}";
  size += ".btn_" + sizefont.size[i] + " em,.inp_" + sizefont.size[i] + ",.inp_" + sizefont.size[i] + " .inp,.ckb_" + sizefont.size[i] + " span,.page_" + sizefont.size[i] + " li{font-size:" + sizefont.fonta[i] + "px}";
  //按钮内边距  
  size += ".btn_" + sizefont.size[i] + "{padding:" + btns.btnpadtb[i] + "px " + btns.btnpadlr[i] + "px}";
  size += ".btn_" + sizefont.size[i] + " i{margin-right:" + btns.btnimagr[i] + "px}";
  //lab按钮图标位置修正
  size += ".btn_" + sizefont.size[i] + ".lab i{margin:-" + btns.btnpadtb[i] + "px " + btns.btnpadlr[i] + "px -" + btns.btnpadtb[i] + "px -" + btns.btnpadlr[i] + "px}";
  //修正右侧下拉类图标边距
  size += ".btn.btn_" + sizefont.size[i] + ".d{padding:" + btns.btnpadtb[i] + "px " + btns.btndpad[i] + "px!important}";
  //纯图标输入框左右侧内边距纠正
  size += ".inp_" + sizefont.size[i] + ".ico-inp .inp{padding-left:" + sizefont.size[i] + "px}";
  size += ".inp_" + sizefont.size[i] + ".ico-inp.ico-r .inp{padding-right:" + sizefont.size[i] + "px;padding-left:8px}";
  //方块图标输入框左右侧内边距纠正
  size += ".inp_" + sizefont.size[i] + ".ico-inp.block .inp{padding-left:" + sizefont.sizee[i] + "px}";
  size += ".inp_" + sizefont.size[i] + ".ico-inp.block.ico-r .inp{padding-right:" + sizefont.sizee[i] + "px; padding-left:8px}";
  //右侧圆形图标输入框图标
  size += ".inp_" + sizefont.size[i] + ".ico-inp.ico-r i.o{width:" + sizefont.sizeb[i] + "px;height:" + sizefont.sizeb[i] + "px;line-height:" + sizefont.sizeb[i] + "px}";
  //选择框
  size += ".cka_" + sizefont.size[i] + "{padding:" + btns.btnpadtb[i] + "px 0}";
  size += ".ckb_" + sizefont.size[i] + " span{padding:0 " + btns.btnpadlr[i] + "px}";
  //select
  size += ".select_" + sizefont.size[i] + " .inp{padding-right:" + sizefont.sizeb[i] + "px}";
  //分页按钮
  size += ".page_" + sizefont.size[i] + " li{min-width:" + sizefont.size[i] + "px}";
  size += "<br><br>";
}
//进度条
for (var a = 0; a < progressres.progressresize.length; a++) {
  progressressize += ".progress_" + progressres.progressresize[a] + " .progress-bar{height:" + progressres.progressresize[a] + "px;line-height:" + progressres.progressresize[a] + "px}";
  progressressize += ".progress.v.progress_" + progressres.progressresize[a] + ",.progress.v.progress_" + progressres.progressresize[a] + " .progress-bar{width:" + progressres.progressresize[a] + "px}<br>";
}

for (var b = 0; b < colsys.length; b++) {
  var color_name = colsys[b].name;
  var color_color = colsys[b].color;
  var color_deepcolor = colsys[b].deepcolor;
  var color_lightcolor = colsys[b].lightcolor;
  var color_deeplightcolor = colsys[b].deeplightcolor;
  var color_wcolor = colsys[b].wcolor;
  var color_lwcolor = colsys[b].lwcolor;

  colora += "." + color_name + "{color:" + color_color + "!important}";
  colorb += ".bg-" + color_name + ",.btn-" + color_name + ",.drop-" + color_name + ">li:hover{background-color:" + color_color + "!important}";

  colorc += ".bgl-" + color_name + ",.btnl-" + color_name + "{background-color:" + color_deeplightcolor + "!important}";

  colord += ".border-" + color_name + ",.btnk-" + color_name + ",.btnl-" + color_name + ",.hr-" + color_name + ",.one-" + color_name + "::before" + ",.th-" + color_name + " th,.td-" + color_name + " td,.th-" + color_name + " .th::before,.td-" + color_name + " .td::before,.onepx-" + color_name + "::before{border-color:" + color_color + "!important}";

  colore += ".border-t-" + color_name + "{border-top-color:" + color_color + "!important}"+
            ".border-r-" + color_name + "{border-right-color:" + color_color + "!important}"+
            ".border-b-" + color_name + "{border-bottom-color:" + color_color + "!important}"+
            ".border-l-" + color_name + "{border-left-color:" + color_color + "!important}";

  colorf += ".btn-" + color_name + ":hover{background:" + color_lightcolor + "!important}";

  colorg += ".btnh-v-" + color_name + ":hover {background:" + color_color + "!important;border-color: " + color_color + "!important}";

  colorh += ".btnh-l-" + color_name + ":hover{background:" + color_lightcolor + "!important;border-color: " + color_lightcolor + "!important}";

  colori += ".btnh-d-" + color_name + ":hover{background:" + color_deepcolor + "!important;border-color: " + color_deepcolor + "!important}";

  colorj += ".btnl-" + color_name + ",.btnk-" + color_name + "{color: " + color_lwcolor + "!important}";

  colork += ".inp-h-" + color_name + ":hover,.inp-h-" + color_name + ":hover i{border-color:" + color_color + "; background-color:" + color_deeplightcolor + ";color:" + color_color + "}";

  colorl += ".th-" + color_name + " th,.td-" + color_name + " td,.th-" + color_name + " .th::before,.td-" + color_name + " .td::before,.onepx-" + color_name + "::before{border-color:" + color_color + "!important}";

  colorm += ".td-" + color_name + "{border-bottom-color:" + color_color + "!important}";

  colorn += ".th-" + color_name + " th,.th-" + color_name + " .th{background:" + color_color + "!important}";


  //tablecolor += ".hover-" + color_name + " tbody tr:hover td,.hover-" + color_name + " .tbody .tr:hover .td{border-color:" + color_color + "!important}";
  // tablecolor += ".hoverl-" + color_name + " tbody tr:hover td,.hoverl-" + color_name + " .tbody .tr:hover .td{border-color:" + color_color + "!important}";


}



for (var c = 8; c < colsys.length; c++) {
  var color_name = colsys[c].name;
  var color_color = colsys[c].color;
  var color_deepcolor = colsys[c].deepcolor;
  var color_lightcolor = colsys[c].lightcolor;
  var color_deeplightcolor = colsys[c].deeplightcolor;
  var color_wcolor = colsys[c].wcolor;
  var color_lwcolor = colsys[c].lwcolor;

  //隔行换色，滑过变色，行色----深色系列
  coloro += ".striped-" + color_name + " tr:nth-child(even),.striped-" + color_name + " .tr:nth-child(even)" +
            ",.striped-" + color_name + " tr:nth-child(even) a,.striped-" + color_name + " .tr:nth-child(even) a" +
            ",.hover-" + color_name + " tbody tr:hover td,.hover-" + color_name + " .tbody .tr:hover .td" +
            ",tr.bg-" + color_name + " td,.tr.bg-" + color_name + " .td" +
            ",.hover-" + color_name + " li:hover,.hover-" + color_name + " li:hover a" +
            "{background:" + color_color + "!important}";

  //隔行换色，滑过变色，行色----浅色系列,浅色系没有单元格强调
  colorp += ".stripedl-" + color_name + " tr:nth-child(even),.stripedl-" + color_name + " .tr:nth-child(even)" +
            "{background:" + color_deeplightcolor + "!important}";

  colorq += ".hoverl-" + color_name + " tbody tr:hover td,.hoverl-" + color_name + " .tbody .tr:hover .td,tr.bgl-" + color_name + " td,.tr.bgl-" + color_name + " .td" +
            "{background:" + color_deeplightcolor + "!important;color:" + color_lwcolor + "!important}";

  colorq += ".hoverl-" + color_name + " tbody tr:hover a.a,.hoverl-" + color_name + " .tbody .tr:hover a.a,tr.bgl-" + color_name + " td a.a,.tr.bgl-" + color_name + " .td a.a" +
            "{color:" + color_lwcolor + "!important}";


  colorr += ".cka-" + color_name + " span,.ckb-" + color_name + " span{color:" + color_color + "}" +
            ".cka-" + color_name + " span:before,.cka-" + color_name + " input[type=radio]:checked+span:after,.cka-" + color_name + " .slider input:checked+span:before{border-color:" + color_color + "}" +
            ".cka-" + color_name + " input+span:after,.cka-" + color_name + " input[type=checkbox]:checked+span:before{background-color:" + color_color + "}" +
            ".ckb-" + color_name + " span{border-color:" + color_color + "}" +
            ".ckb-" + color_name + " span{background:" + color_deeplightcolor + "}" +
            ".ckb-" + color_name + " span:hover,.ckb-" + color_name + " input:checked+span{background:" + color_color + "!important; color:" + color_wcolor + "}" +
            ".ckb-" + color_name + " input:checked+span{border-color:" + color_deepcolor + "}";

  colors += ".page-" + color_name + " li.curr a{background-color:" + color_color + "!important;border-color:" + color_color + "!important}";
}






for (var e = 0; e < colsys.length; e++) {
  var color_name = colsys[e].name;
  var color_color = colsys[e].color;
  var color_deepcolor = colsys[e].deepcolor;
  var color_lightcolor = colsys[e].lightcolor;
  var color_deeplightcolor = colsys[e].deeplightcolor;
  var color_wcolor = colsys[e].wcolor;
  var color_lwcolor = colsys[e].lwcolor;

  colorz += ".tooltip-" + color_name + "+.tooltip>.tooltip-inner{background-color:" + color_color + "!important}"+
            ".tooltip-" + color_name + "+.tooltip.top .tooltip-arrow{border-top-color:" + color_color + "!important}"+
            ".tooltip-" + color_name + "+.tooltip.right .tooltip-arrow{border-right-color:" + color_color + "!important}"+
            ".tooltip-" + color_name + "+.tooltip.bottom .tooltip-arrow{border-bottom-color:" + color_color + "!important}" +
            ".tooltip-" + color_name + "+.tooltip.left .tooltip-arrow{border-left-color:" + color_color + "!important}";
}



for (var d = 0; d < 5; d++) {
  var color_name = colsys[d].name;
  var color_color = colsys[d].color;
  var color_deepcolor = colsys[d].deepcolor;
  var color_lightcolor = colsys[d].lightcolor;
  var color_deeplightcolor = colsys[d].deeplightcolor;
  var color_wcolor = colsys[d].wcolor;
  var color_lwcolor = colsys[d].lwcolor;
  colory += ".btn-" + color_name + ",.btnh-l-" + color_name + ":hover,.btnh-v-" + color_name + ":hover,.btnh-d-" + color_name + ":hover,.drop-" + color_name + ">li:hover>i,.drop-" + color_name + ">li:hover>a,.ico-inp>i.bg-" + color_name + ",.th-" + color_name + " th,.th-" + color_name + " .th,.hover-" + color_name + " tbody tr:hover td,.hover-" + color_name + " tbody tr:hover a.a,.hover-" + color_name + " .tbody .tr:hover .td,.hover-" + color_name + " .tbody .tr:hover a.a,.hover-" + color_name + " li:hover,.hover-" + color_name + " li:hover a,tr.bg-" + color_name + " td,tr.bg-" + color_name + " a.a,.tr.bg-" + color_name + " .td,.tr.bg-" + color_name + " a.a,td.bg-" + color_name + ",td.bg-" + color_name + " a.a,.td.bg-" + color_name + ",.td.bg-" + color_name + " a.a,.page-" + color_name + " li.curr a,.tooltip-" + color_name + "+.tooltip>.tooltip-inner{color:" + color_lwcolor + "!important}";
}
