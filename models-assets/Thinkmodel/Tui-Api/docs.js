function dropdowna(lr, color) {
    
    document.writeln("<ul class=\'drop drop-" + color + " " + lr + "\'>");
    document.writeln("  <ol class=\'border-orange\'><i class=\'fa fa-camera orange\'></i><span href=\'#\'>ThinkUI 下拉菜单</span></ol>");
    document.writeln("  <li><i class=\'fa fa-camera orange\'></i><a href=\'#\'> JavaScript</a></li>");
    document.writeln("  <li><i class=\'fa fa-tv\'></i><a href=\'#\'> .NET C#</a><span class='badge r bg-orange fr'>5</span></li>");
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
    document.writeln("  <li><i class=\'fa fa-weibo\'></i><a href=\'#\'> bootstrap框架</a><span class='badge r bg-orange'>5</span></li>");
    document.writeln("</ul>");


}

function dropdownc(lr, color) {

    document.writeln("<ul class=\'drop drop-" + color + " " + lr + "\'>");
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
    document.writeln("    <ul class=\'drop drop-" + color + "\'>");
    document.writeln("      <li class=\'drophover\'><i class=\'fa fa-feed\'></i><a href=\'#\'> HTML</a><i class=\'fa fa-angle-right exp\'></i>");

    document.writeln("        <ul class=\'drop drop-" + color + "\'>");
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

function widget() { document.writeln("<a href=\'#\' class=\'btn btn_22 ico\' data-toggle=\'config\'><i class=\'fa fa-gear blue f16\'></i></a><a href=\'#\' class=\'btn btn_22 ico\' data-toggle=\'maximize\'><i class=\'fa fa-expand pink f14\'></i></a><a href=\'#\' class=\'btn btn_22 ico\' data-toggle=\'collapse\'><i class=\'fa fa-minus blue\'></i></a><a href=\'#\' class=\'btn btn_22 ico\' data-toggle=\'dispose\'><i class=\'fa fa-close orange f16\'></i></a>"); }
