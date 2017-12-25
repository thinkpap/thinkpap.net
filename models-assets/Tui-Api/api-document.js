function tipmenu() {
    document.writeln("  <div class=\'tip-app-logo\'></div>");
    document.writeln("  <div class=\'f-l hid-xs\'>");
    document.writeln("    <a class=\'btn btn_40 btn-blue\' href=\'http://www.thinkpap.net\'><i class=\'fa fa-home\'></i> <em>网站首页</em>");
    document.writeln("    </a><a class=\'btn btn_40 btn-blue\' href=\'index.html\'><em>框架文档</em>");
    document.writeln("    </a><a class=\'btn btn_40 btn-blue\' href=\'#\'><em>框架实利</em>");
    document.writeln("    </a><a class=\'btn btn_40 btn-blue\' href=\'#\'><em>框架扩展</em>");
    document.writeln("    </a><a class=\'btn btn_40 btn-blue\' href=\'p-code.html\'><em>插件库</em>");
    document.writeln("    </a><a class=\'btn btn_40 btn-blue\' href=\'#\'><em>源码下载</em>");
    document.writeln("    </a><a class=\'btn btn_40 btn-blue\' href=\'print-style.html\'><em>样式打印</em>");
    document.writeln("    </a><a class=\'btn btn_40 btn-blue\' href=\'print-code.html\'><em>生成组件</em></a>");
    document.writeln("  </div>");
    document.writeln("  <div class=\'s-btn dropdown f-r\'>");
    document.writeln("    <a href=\'javascript:void(0);\' data-toggle=\'dropdown\' class=\'btn btn_40 ico btn-blue\'><i class=\'fa fa-navicon i\'></i></a>");
    document.writeln("    <div class=\'drop tip-app-drop right\'>");
    links();
    document.writeln("    </div>");
    document.writeln("  </div>");
    //document.writeln("  <div class=\'f-r hid-xs hid-sm hid-md\'>");
    //document.writeln("    <a href=\'#\' class=\'btn btn_40 btn-blue\'><i class=\'fa fa-weibo\'></i><em>新浪微博</em></a>");
    //document.writeln("    <a href=\'#\' class=\'btn btn_40 btn-blue\'><i class=\'fa fa-qq\'></i><em>QQ</em></a>");
    //document.writeln("    <a href=\'#\' class=\'btn btn_40 btn-blue\' target=\'_blank\'><i class=\'fa fa-weibo\'></i><em>微博</em></a>");
    //document.writeln("    <a href=\'#\' class=\'btn btn_40 btn-blue\'><i class=\'fa fa-weixin\'></i><em>微信</em></a>");
    //document.writeln("  </div>");
    document.writeln("  <div class=\'tip-app-logo\'></div>");
    document.writeln("  <div class=\'tip-app-title\'>" + classname + "</div>");
}


function links() {
    document.writeln("    <div class=\'cross border-l3\'>开始使用</div>");
    document.writeln("    <div class=\'cms pt10\'>");
    document.writeln("      <ul class=\'ul_list hover-purple\'>");
    document.writeln("        <li><a href=\'htmlstand.html\' title=\'\' class=\'blank a\'>书写标准<small class=\'darkgray ml10\'> HTML速写规范</small></a></li><li class=\'lines\'></li>");
    document.writeln("        <li><a href=\'filename.html\' title=\'\' class=\'blank a\'>命名规则<small class=\'darkgray ml10\'> 利于管理维护</small></a></li><li class=\'lines\'></li>");
    document.writeln("        <li><a href=\'index.html\' title=\'\' class=\'blank a\'>开始使用<small class=\'darkgray ml10\'> 框架的正确引用</small></a></li><li class=\'lines\'></li>");
    document.writeln("     </ul>");
    document.writeln("    </div>");

    document.writeln("    <div class=\'cross border-l3 mt10\'>页面排版</div>");
    document.writeln("    <div class=\'cms pt10\'>");
    document.writeln("      <ul class=\'ul_list hover-ivory\'>");
    document.writeln("        <li><a href=\'machine.html\' title=\'\' class=\'blank a\'>设备<small class=\'darkgray ml10\'> 不同设备响应</small></a></li><li class=\'lines\'></li>");
    document.writeln("        <li><a href=\'paiban.html\' title=\'\' class=\'blank a\'>文字<small class=\'darkgray ml10\'> 文字排版</small></a></li><li class=\'lines\'></li>");
    document.writeln("        <li><a href=\'color.html\' title=\'\' class=\'blank a\'>色彩<small class=\'darkgray ml10\'> 通用配色</small></a></li><li class=\'lines\'></li>");
    document.writeln("        <li><a href=\'classes.html\' title=\'\' class=\'blank a\'>常用标签<small class=\'darkgray ml10\'> 常见的类定义</small></a></li><li class=\'lines\'></li>");
    document.writeln("      </ul>");
    document.writeln("    </div>");



    document.writeln("    <div class=\'cross border-l3 mt10\'>页面元素</div>");
    document.writeln("    <div class=\'cms pt10\'>");
    document.writeln("      <ul class=\'ul_list hover-ivory\'>");
    document.writeln("        <li><a href=\'badge.html\' title=\'\' class=\'blank a\'>徽章<small class=\'darkgray ml10\'>badge</small></a></li><li class=\'lines\'></li>");
    document.writeln("        <li><a href=\'btn.html\' title=\'\' class=\'blank a\'>按钮<small class=\'darkgray ml10\'> button</small></a></li><li class=\'lines\'></li>");
    document.writeln("        <li><a href=\'btns.html\' title=\'\' class=\'blank a\'>按钮组<small class=\'darkgray ml10\'> button组</small></a></li><li class=\'lines\'></li>");
    document.writeln("        <li><a href=\'input.html\' title=\'\' class=\'blank a\'>输入框<small class=\'darkgray ml10\'> form元素集合</small></a></li><li class=\'lines\'></li>");
    document.writeln("        <li><a href=\'select.html\' title=\'\' class=\'blank a\'>下拉框<small class=\'darkgray ml10\'> form元素集合</small></a></li><li class=\'lines\'></li>");
    document.writeln("        <li><a href=\'checkbox.html\' title=\'\' class=\'blank a\'>单选复选<small class=\'darkgray ml10\'>  form元素集合</small></a></li><li class=\'lines\'></li>");
    document.writeln("        <li><a href=\'table.html\' title=\'\' class=\'blank a\'>表格<small class=\'darkgray ml10\'>  静态table</small></a></li><li class=\'lines\'></li>");
    document.writeln("        <li><a href=\'other.html\' title=\'\' class=\'blank a\'>辅助<small class=\'darkgray ml10\'> 引用 / 字段集 / 横线等</small></a></li><li class=\'lines\'></li>");
    document.writeln("      </ul>");
    document.writeln("    </div>");





    document.writeln("    <div class=\'cross border-l3 mt10\'>页面组件</div>");
    document.writeln("    <div class=\'cms pt10\'>");
    document.writeln("      <ul class=\'ul_list hover-ivory\'>");
    document.writeln("        <li><a href=\'drop.html\' title=\'\' class=\'blank a\'>下拉按钮<small class=\'darkgray ml10\'> 无限极下拉</small></a></li><li class=\'lines\'></li>");
    document.writeln("        <li><a href=\'proress.html\' title=\'\' class=\'blank a\'>进度条<small class=\'darkgray ml10\'> 多模式动态进度条</small></a></li><li class=\'lines\'></li>");
    document.writeln("        <li><a href=\'page.html\' title=\'\' class=\'blank a\'>分页<small class=\'darkgray ml10\'> 静态page</small></a></li><li class=\'lines\'></li>");
    document.writeln("        <li><a href=\'menu.html\' title=\'\' class=\'blank a\'>导航<small class=\'darkgray ml10\'>Tui框架的正确引用</small></a></li><li class=\'lines\'></li>");
    document.writeln("        <li><a href=\'tooltip.html\' title=\'\' class=\'blank a\'>警告提示<small class=\'darkgray ml10\'> tooltip</small></a></li><li class=\'lines\'></li>");
    document.writeln("        <li><a href=\'pannel.html\' title=\'\' class=\'blank a\'>面板<small class=\'darkgray ml10\'> pannel/well</small></a></li><li class=\'lines\'></li>");
    document.writeln("      </ul>");
    document.writeln("    </div>");
    document.writeln("");
}


function pluslinks() {
    document.writeln("    <div class=\'cross border-l3\'>HTML类</div>");
    document.writeln("    <div class=\'cms pt10\'>");
    document.writeln("      <ul class=\'ul_list hover-ivory\'>");
    document.writeln("        <li><a href=\'p-code.html\' title=\'\' class=\'blank a\'>代码显示插件<small class=\'darkgray ml10\'> code</small></a></li><li class=\'lines\'></li>");
    document.writeln("        <li><a href=\'p-tabs.html\' title=\'\' class=\'blank a\'>选项卡<small class=\'darkgray ml10\'> tabs</small></a></li><li class=\'lines\'></li>");
    document.writeln("     </ul>");
    document.writeln("    </div>");


    document.writeln("    <div class=\'cross border-l3 mt10\'>表单类</div>");
    document.writeln("    <div class=\'cms pt10\'>");
    document.writeln("      <ul class=\'ul_list hover-ivory\'>");
    document.writeln("        <li><a href=\'p-Validform.html\' title=\'\' class=\'blank a\'>Validform<small class=\'darkgray ml10\'>表单验证</small></a></li><li class=\'lines\'></li>");
    document.writeln("        <li><a href=\'p-My97DatePicker.html\' title=\'\' class=\'blank a\'>My97DatePicker<small class=\'darkgray ml10\'>日期插件</small></a></li><li class=\'lines\'></li>");
    document.writeln("        <li><a href=\'p-area.html\' title=\'\' class=\'blank a\'>area<small class=\'darkgray ml10\'>地区插件</small></a></li><li class=\'lines\'></li>");
    document.writeln("     </ul>");
    document.writeln("    </div>");
}




function footers() {
    document.writeln("<div class=\'col-xs-12 row border-t1 border-ivory p15 mt20 txt-c f12 darkgray\'>");
    document.writeln("关于ThinkUI | 软件著作权 | 感谢捐赠<br>");
    document.writeln("Copyright ©2013-2017 ThinkPaP.net All Rights Reserved. <br>");
    document.writeln("ICP备案号：皖ICP备14021811号-2<br>");
    document.writeln("</div>");
}


















function dropdowna(lr, color) {

    document.writeln("<ul class=\'drop drop-" + color + " " + lr + "\'>");
    document.writeln("  <ol class=\'border-orange\'><i class=\'fa fa-camera orange\'></i><span href=\'#\'>ThinkUI 下拉菜单</span></ol>");
    document.writeln("  <li><i class=\'fa fa-camera orange\'></i><a href=\'#\'> JavaScript</a></li>");
    document.writeln("  <li><i class=\'fa fa-tv\'></i><a href=\'#\'> .NET C#</a><span class='badge r bg-orange f-r'>5</span></li>");
    document.writeln("  <li><i class=\'fa fa-code\'></i><a href=\'#\'> 网页前端</a></li>");
    document.writeln("  <li class=\'disabled\'><i class=\'fa fa-envelope\'></i><a href=\'#\'> 数据库开发</a></li>");
    document.writeln("  <hr class=\'divider\'>");
    document.writeln("  <li><i class=\'fa fa-weibo\'></i><a href=\'#\'> bootstrap框架</a></li>");
    document.writeln("</ul>");

}

function dropdownb(lr, color) {

    document.writeln("<ul class=\'drop drop-" + color + " " + lr + "\'>");
    document.writeln("  <ol class=\'border-orange\'><i class=\'fa fa-camera orange\'></i><span href=\'#\'>ThinkUI 下拉菜单</span></ol>");
    document.writeln("  <li><i class=\'fa fa-camera orange\'></i><a href=\'#\'> JavaScript</a></li>");
    document.writeln("  <li class=\'drophover\'><i class=\'fa fa-tv\'></i><a href=\'#\'> .NET C#</a><i class=\'fa fa-angle-right exp\'></i>");
    document.writeln("    <ul class=\'drop drop-" + color + "\'>");
    document.writeln("      <li><i class=\'fa fa-feed\'></i><a href=\'#\'> C</a></li>");
    document.writeln("      <li><i class=\'fa fa-lock\'></i><a href=\'#\'> C++</a></li>");
    document.writeln("      <li><i class=\'fa fa-map\'></i><a href=\'#\'> C#</a></li>");
    document.writeln("      <hr class=\'divider\'>");
    document.writeln("      <li><i class=\'fa fa-feed\'></i><a href=\'#\'> C</a></li>");
    document.writeln("      <li><i class=\'fa fa-lock\'></i><a href=\'#\'> C++</a></li>");
    document.writeln("      <li><i class=\'fa fa-map\'></i><a href=\'#\'> C#</a></li>");
    document.writeln("    </ul>");
    document.writeln("  </li>");
    document.writeln("  <li class=\'drophover\'><i class=\'fa fa-code\'></i><a href=\'#\'> 网页前端</a><i class=\'fa fa-angle-right exp\'></i>");
    document.writeln("    <ul class=\'drop drop-" + color + "\'>");
    document.writeln("      <li><i class=\'fa fa-feed\'></i><a href=\'#\'> HTML</a></li>");
    document.writeln("      <li><i class=\'fa fa-lock\'></i><a href=\'#\'> PhotoShop</a></li>");
    document.writeln("    </ul>");
    document.writeln("  </li>");
    document.writeln("  <hr class=\'divider\'>");
    document.writeln("  <li class=\'disabled\'><i class=\'fa fa-envelope\'></i><a href=\'#\'> 数据库开发</a></li>");
    document.writeln("  <li><i class=\'fa fa-weibo\'></i><a href=\'#\'> bootstrap框架</a><span class='badge r bg-orange f-r'>5</span></li>");
    document.writeln("</ul>");


}

function dropdownc(lr, color) {

    document.writeln("<ul class=\'drop drop-default " + lr + "\'>");
    document.writeln("  <ol class=\'border-orange\'><i class=\'fa fa-camera orange\'></i><span href=\'#\'>ThinkUI 下拉菜单</span></ol>");
    document.writeln("  <li><i class=\'fa fa-camera orange\'></i><a href=\'#\'> JavaScript</a></li>");
    document.writeln("  <li class=\'drophover\'><i class=\'fa fa-tv\'></i><a href=\'#\'> .NET C#</a><i class=\'fa fa-angle-right exp\'></i>");
    document.writeln("    <ul class=\'drop drop-success\'>");
    document.writeln("      <li class=\'drophover\'><i class=\'fa fa-feed\'></i><a href=\'#\'> C</a><i class=\'fa fa-angle-right exp\'></i>");
    document.writeln("        <ul class=\'drop drop-orange\'>");
    document.writeln("          <li><i class=\'fa fa-feed\'></i><a href=\'#\'> C</a></li>");
    document.writeln("          <li><i class=\'fa fa-lock\'></i><a href=\'#\'> C++</a></li>");
    document.writeln("          <li><i class=\'fa fa-map\'></i><a href=\'#\'> C#</a></li>");
    document.writeln("          <hr class=\'divider\'>");
    document.writeln("          <li><i class=\'fa fa-feed\'></i><a href=\'#\'> C</a></li>");
    document.writeln("          <li><i class=\'fa fa-lock\'></i><a href=\'#\'> C++</a></li>");
    document.writeln("          <li><i class=\'fa fa-map\'></i><a href=\'#\'> C#</a></li>");
    document.writeln("        </ul>");
    document.writeln("      </li>");
    document.writeln("      <li><i class=\'fa fa-lock\'></i><a href=\'#\'> C++</a></li>");
    document.writeln("      <li><i class=\'fa fa-map\'></i><a href=\'#\'> C#</a></li>");
    document.writeln("    </ul>");
    document.writeln("  </li>");
    document.writeln("  <li class=\'drophover\'><i class=\'fa fa-code\'></i><a href=\'#\'> 网页前端</a><i class=\'fa fa-angle-right exp\'></i>");
    document.writeln("    <ul class=\'drop drop-azure\'>");
    document.writeln("      <li class=\'drophover\'><i class=\'fa fa-feed\'></i><a href=\'#\'> HTML</a><i class=\'fa fa-angle-right exp\'></i>");

    document.writeln("        <ul class=\'drop drop-azure\'>");
    document.writeln("          <li><i class=\'fa fa-feed\'></i><a href=\'#\'> HTML</a></li>");
    document.writeln("          <li><i class=\'fa fa-lock\'></i><a href=\'#\'> PhotoShop</a></li>");
    document.writeln("        </ul>");
    document.writeln("      </li>");

    document.writeln("      <li><i class=\'fa fa-lock\'></i><a href=\'#\'> PhotoShop</a></li>");
    document.writeln("    </ul>");
    document.writeln("  </li>");
    document.writeln("  <hr class=\'divider\'>");
    document.writeln("  <li class=\'disabled\'><i class=\'fa fa-envelope\'></i><a href=\'#\'> 数据库开发</a></li>");
    document.writeln("  <li><i class=\'fa fa-weibo\'></i><a href=\'#\'> bootstrap框架</a></li>");
    document.writeln("</ul>");

}