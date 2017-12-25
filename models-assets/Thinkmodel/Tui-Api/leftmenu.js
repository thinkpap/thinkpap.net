function leftmenu() {
    document.writeln("<ul class='sidebar-menu'>  ");
    document.writeln("  <li><a href='index.html' class='menu-dropdown'><i class='menu-icon fa fa-home'></i><span class='menu-text'>Think UI Menus</span></a></li>");
    document.writeln("</ul>  ");

    document.writeln("<ul class='sidebar-menu' id='tmC0'>  ");
    document.writeln("  <li><a href='#' class='menu-dropdown'><i class='menu-icon fa fa-tasks'></i><span class='menu-text item'>结构配色<span class='badge bg-orange'>4</span></span><i class='fa fa-angle-right menu-expand'></i></a>");
    document.writeln("    <ul class='submenu'>");
    document.writeln("      <li><a href='base.html' target='adminbox'><span class='menu-text'>1. 基本说明<span class='badge bg-orange'>4</span></span></a></li>");
    document.writeln("      <li><a href='cols.html' target='adminbox'><span class='menu-text'>2. 栅格</span></a></li>");
    document.writeln("      <li><a href='typography.html' target='adminbox'><span class='menu-text'>3. 排版</span></a></li>");
    document.writeln("      <li><a href='color.html' target='adminbox'><span class='menu-text'>3. 颜色表</span></a></li>");
    document.writeln("      <li><a href='com-dom.html' target='adminbox'><span class='menu-text'>4. 元素标签</span></a></li>");
    document.writeln("      <li><a href='effect.html' target='adminbox'><span class='menu-text'>5. 常用特效</span></a></li>");
    document.writeln("    </ul>");
    document.writeln("  </li>");
    document.writeln("  <li class='open active'><a href='#' class='menu-dropdown'><i class='menu-icon fa fa-sitemap'></i><span class='menu-text'>基础框架 </span><i class='fa fa-angle-right menu-expand'></i></a>");
    document.writeln("    <ul class='submenu'>");
    document.writeln("      <li><a href='badge.html' target='adminbox'><span class='menu-text'>1. badge</span></a></li>");
    document.writeln("      <li><a href='button.html' target='adminbox'><span class='menu-text'>2. 按钮</span></a></li>");
    document.writeln("      <li><a href='button-group.html' target='adminbox'><span class='menu-text'>3. 按钮组</span></a></li>");
    document.writeln("      <li><a href='input.html' target='adminbox'><span class='menu-text'>4. 输入框</span></a></li>");
    document.writeln("      <li><a href='checkbox.html' target='adminbox'><span class='menu-text'>5. 单选复选</span></a></li>");
    document.writeln("      <li><a href='table.html' target='adminbox'><span class='menu-text'>6. 表格</span></a></li>");
    document.writeln("      <li><a href='cross.html' target='adminbox'><span class='menu-text'>7. 辅助</span></a></li>");
    document.writeln("    </ul>");
    document.writeln("  </li>");
    document.writeln("  <li><a href='#' class='menu-dropdown'><i class='menu-icon fa fa-desktop'></i><span class='menu-text'>组件中心 </span><i class='fa fa-angle-right menu-expand'></i></a>");
    document.writeln("    <ul class='submenu'>");
    document.writeln("      <li><a href='dropdown.html' target='adminbox'><span class='menu-text'>1. 下拉按钮</span></a></li>");
    document.writeln("      <li><a href='progressbars.html' target='adminbox'><span class='menu-text'>2. 进度条</span></a></li>");
    document.writeln("      <li><a href='page.html' target='adminbox'><span class='menu-text'>3. 分页</span></a></li>");
    document.writeln("      <li><a href='menu.html' target='adminbox'><span class='menu-text'>4. 导航</span></a></li>");
    document.writeln("      <li><a href='tooltip.html' target='adminbox'><span class='menu-text'>5. 警告提示</span></a></li>");
    document.writeln("      <li><a href='well.html' target='adminbox'><span class='menu-text'>6. well&widget</span></a></li>");
    document.writeln("      <li><a href='tabs.html' target='adminbox'><span class='menu-text'>7. 选项卡</span></a></li>");
    document.writeln("      <li><a href='code.html' target='adminbox'><span class='menu-text'>8. 代码编辑器</span></a></li>");
    document.writeln("      <li><a href='Tui-Sub-datapicks.html' target='adminbox'><span class='menu-text'>9. 数据设置</span></a></li>");
    document.writeln("      <li><a href='Tui-Plug-RightCode.html' target='adminbox'><span class='menu-text'>10. 右侧导航</span></a></li>");
    document.writeln("    </ul>");
    document.writeln("  </li>");


    document.writeln("      <li><a href='#' class='menu-dropdown'><i class='menu-icon fa fa-image'></i><span class='menu-text'>图标中心</span><i class='fa fa-angle-right menu-expand'></i></a>");
    document.writeln("        <ul class='submenu'>");
    document.writeln("          <li><a href='#' class='menu-dropdown'><span class='menu-text'>awesome</span><i class='fa fa-angle-right menu-expand'></i></a>");
    document.writeln("            <ul class='submenu'>");
    document.writeln("              <li><a href='fonts/fontawesome.html' target='adminbox'><span class='menu-text'>awesome</span></a></li>");
    document.writeln("              <li class='active'><a href='../../thinkui/ThinkPlus/font-awesome/awesome.pdf' target='adminbox'><span class='menu-text'>awesome矢量</span></a></li>");
    document.writeln("            </ul>");
    document.writeln("          </li>");
    document.writeln("        </ul>");
    document.writeln("      </li>");

    document.writeln("  <li><a href='#' class='menu-dropdown'><i class='menu-icon fa fa-mobile'></i><span class='menu-text'>手 机 端 </span><i class='fa fa-angle-right menu-expand'></i></a>");
    document.writeln("    <ul class='submenu'>");
    document.writeln("      <li><a href='mob-cells.html' target='adminbox'><span class='menu-text'>1. 页面元素</span></a></li>");
    document.writeln("    </ul>");
    document.writeln("  </li>");


    document.writeln("</ul>");




    document.writeln("<ul class='sidebar-menu none' id='tmC1'>");
    document.writeln("  <li class='open active'> <a href='#' class='menu-dropdown'><i class='menu-icon fa fa-table'></i><span class='menu-text'> 表单控件</span><i class='fa fa-angle-right menu-expand'></i></a>");
    document.writeln("    <ul class='submenu'>");
    document.writeln("      <li><a href='p-Validform.html' target='adminbox'><span class='menu-text'>1. Validform</span></a></li>");
    document.writeln("      <li><a href='p-My97DatePicker.html' target='adminbox'><span class='menu-text'>2. My97DatePicker</span></a></li>");
    document.writeln("      <li><a href='p-province.html' target='adminbox'><span class='menu-text'>3. area</span></a></li>");
    document.writeln("    </ul>");
    document.writeln("  </li>");


    document.writeln("<li><a href='Tui-Plug-.html' class='menu-dropdown'><i class='menu-icon fa fa-briefcase'></i><span class='menu-text'> Layer</span><i class='fa fa-angle-right menu-expand'></i></a>");
    document.writeln("  <ul class='submenu'>");
    document.writeln("    <li><a href='Tui-Plug-layer.html' target='adminbox'><span class='menu-text'>1. cnlayer</span></a></li>");
    document.writeln("  </ul>");
    document.writeln("</li>");
    document.writeln("<li><a href='#' class='menu-dropdown'><span class='menu-text'>4.3 广告控件</span><i class='fa fa-angle-right menu-expand'></i></a>");
    document.writeln("  <ul class='submenu'>");
    document.writeln("    <li><a href='advertise.html' target='adminbox'><span class='menu-text'>1. Thinkad</span></a></li>");
    document.writeln("  </ul>");
    document.writeln("</li>");
    document.writeln("<li><a href='Tui-Plug-.html' class='menu-dropdown'><span class='menu-text'>4.4 slider</span><i class='fa fa-angle-right menu-expand'></i></a>");
    document.writeln("  <ul class='submenu'>");
    document.writeln("    <li><a href='Tui-ArtList.html' target='adminbox'><span class='menu-text'>1. ArtList</span></a></li>");
    document.writeln("  </ul>");
    document.writeln("</li>");
    document.writeln("<li><a href='Tui-Plug-.html' class='menu-dropdown'><span class='menu-text'>4.5 Js storage</span><i class='fa fa-angle-right menu-expand'></i></a>");
    document.writeln("  <ul class='submenu'>");
    document.writeln("    <li><a href='Tui-ArtList.html' target='adminbox'><span class='menu-text'>1. ArtList</span></a></li>");
    document.writeln("  </ul>");
    document.writeln("</li>");
    document.writeln("<li><a href='#' class='menu-dropdown'><span class='menu-text'>4.6 DataBase</span><i class='fa fa-angle-right menu-expand'></i></a>");
    document.writeln("  <ul class='submenu'>");
    document.writeln("    <li><a href='#' class='menu-dropdown' target='adminbox'><span class='menu-text'>1. Dalian首闻</span><i class='fa fa-angle-right menu-expand'></i></a>");
    document.writeln("      <ul class='submenu'>");
    document.writeln("        <li><a href='../../plus/dlshouwen.grid.v1.2.1/doc/i18n/zh-cn/example.html' target='adminbox'><span class='menu-text'>官方api</span></a></li>");
    document.writeln("        <li><a href='Tui-Plug-datashouwen.html' target='adminbox'><span class='menu-text'>数据演示</span></a></li>");
    document.writeln("      </ul>");
    document.writeln("    </li>");
    document.writeln("  </ul>");
    document.writeln("</li>");
    document.writeln("</ul>");

    document.writeln("<ul class='sidebar-menu none' id='tmC2'>");
    document.writeln("  <li class=\'open active\'><a href='#' class='menu-dropdown'><i class='menu-icon fa fa-mobile'></i><span class='menu-text'>手 机 端 </span><i class='fa fa-angle-right menu-expand'></i></a>");
    document.writeln("    <ul class='submenu'>");
    document.writeln("      <li><a href='mob-icomenu.html' target='adminbox'><span class='menu-text'>2. ICO菜单</span></a></li>");
    document.writeln("      <li><a href='mob-ctrl.html' target='adminbox'><span class='menu-text'>3. 控制中心</span></a></li>");
    document.writeln("    </ul>");
    document.writeln("  </li>");
    document.writeln("  <li class=\'open active\'><a href='#' class='menu-dropdown'><i class='menu-icon fa fa-mobile'></i><span class='menu-text'>通用后台</span><i class='fa fa-angle-right menu-expand'></i></a>");
    document.writeln("    <ul class='submenu'>");
    document.writeln("      <li><a href='../Tui-Manage-Frame/index.html' target='adminbox'><span class='menu-text'>1. ThinkFrame</span></a></li>");
    document.writeln("    </ul>");
    document.writeln("  </li>");
    document.writeln("  <li class=\'open active\'><a href='#' class='menu-dropdown'><i class='menu-icon fa fa-mobile'></i><span class='menu-text'>响应信息</span><i class='fa fa-angle-right menu-expand'></i></a>");
    document.writeln("    <ul class='submenu'>");
    document.writeln("      <li><a href='../Tui-Cms-App/cms-article.html' target='_blank'><span class='menu-text'>1. 响应文章/列表</span></a></li>");
    document.writeln("      <li><a href='../Tui-Cms-App/cms-videos.html' target='_blank'><span class='menu-text'>2. 响应视频/列表</span></a></li>");
    document.writeln("    </ul>");
    document.writeln("  </li>");

    document.writeln("</ul>");


    document.writeln("<ul class='sidebar-menu none' id='tmC3'>");
    document.writeln("  <li class='open active'><a href='#' class='menu-dropdown'><i class='menu-icon fa fa-calculator'></i><span class='menu-text'>5.应用工具</span><i class='fa fa-angle-right menu-expand'></i></a>");
    document.writeln("    <ul class='submenu'>");
    document.writeln("      <li><a href='print-size.html' target='adminbox'><span class='menu-text'>1. 打印尺寸</span></a></li>");
    document.writeln("      <li><a href='print-size-moren.html' target='adminbox'><span class='menu-text'>1. 打印默认尺寸</span></a></li>");


    document.writeln("      <li><a href='print-color.html' target='adminbox'><span class='menu-text'>2. 打印色彩 </span></a></li>");
    document.writeln("      <li><a href='print-dom.html' target='adminbox'><span class='menu-text'>3. 建立元素 </span></a></li>");
    document.writeln("      <li><a href='Tui-checkitems.html' target='adminbox'><span class='menu-text'>100. 组件检验</span></a></li>");
    document.writeln("      <li><a href='print-color-model.html' target='adminbox'><span class='menu-text'>101. 配色模版</span></a></li>");
    document.writeln("      <li><a href='print-color.html' target='adminbox'><span class='menu-text'>2. 打印色彩 </span></a></li>");
    document.writeln("    </ul>");
    document.writeln("  </li>");
    document.writeln("</ul>");

}
