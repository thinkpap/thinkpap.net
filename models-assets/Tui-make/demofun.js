var demobtnname = "", thbd = "", tdbd = "", striped = "",  bgdepbd = '', hoverbg = '';

var stripedq = "", stripeds = "", bglight = '', bgdeep = '', hoverlbg = '', hoverdbg = '', tdimport = "", tdimportbd="";

var btncolor = "", btnborder = '', btnk = '', btnl = '', btnlh = '', btnvh = '', btndh = '', badcl='';

var demosize = ["", "mini", "small", "lg", "xl", "24", "28", "30", "34", "36", "40", "42", '46', '48', '50']


for (var i = 0; i < colsys.length; i++) {
    var color_name = colsys[i].name;
    var color_color = colsys[i].color;
    var color_wcolor = colsys[i].wcolor;
    var color_cnname = colsys[i].cn;

    demobtnname += "<option value='btn-" + color_name + "' class='bg-" + color_name + "' style='color:" + color_wcolor + "'>" + color_cnname + "</option>";
    striped += "<option value='striped-" + color_name + "' class='bg-" + color_name + "' style='color:" + color_wcolor + "'>" + color_cnname + "</option>";
    bgdepbd += "<option value='bg-" + color_name + "' class='bg-" + color_name + "' style='color:" + color_wcolor + "'>" + color_cnname + "</option>";

    
    
    thbd += "<option value='th-" + color_name + "' class='bg-" + color_name + "' style='color:" + color_wcolor + "'>" + color_cnname + "</option>";
    tdbd += "<option value='td-" + color_name + "' class='bg-" + color_name + "' style='color:" + color_wcolor + "'>" + color_cnname + "</option>";
    stripedq += "<option value='stripedl-" + color_name + "' class='bg-l-" + color_name + "' style='color:" + color_color + "'>" + color_cnname + "</option>";
    stripeds += "<option value='striped-" + color_name + "' class='bg-" + color_name + "' style='color:" + color_wcolor + "'>" + color_cnname + "</option>";
    bglight += "<option value='bgl-" + color_name + "' class='bgl-" + color_name + "' style='color:" + color_color + "'>" + color_cnname + "</option>";
    bgdeep  += "<option value='bg-" + color_name + "' class='bg-" + color_name + "' style='color:" + color_wcolor + "'>" + color_cnname + "</option>";
    hoverlbg += "<option value='hoverl-" + color_name + "' class='bgl-" + color_name + "' style='color:" + color_color + "'>" + color_cnname + "</option>";
    hoverdbg += "<option value='hover-" + color_name + "' class='bg-" + color_name + "' style='color:" + color_wcolor + "'>" + color_cnname + "</option>";

    //tdimport += "<option value='bg-l-" + color_name + "' class='bg-l-" + color_name + "' style='color:" + color_color + "'>" + color_cnname + "</option>";
    tdimport += "<option value='bg-" + color_name + "' class='bg-" + color_name + "' style='color:" + color_wcolor + "'>" + color_cnname + "</option>";
    tdimportbd += "<option value='border-l-" + color_name + "' class='bg-" + color_name + "' style='color:" + color_wcolor + "'>" + color_cnname + "</option>";


    btncolor += "<option value='btn-" + color_name + "' class='bg-" + color_name + "' style='color:" + color_wcolor + "'>" + color_cnname + "</option>";

    btnborder += "<option value='border-" + color_name + "' class='bg-" + color_name + "' style='color:" + color_wcolor + "'>" + color_cnname + "</option>";
    btnk += "<option value='btnk-" + color_name + "' class='bg-" + color_name + "' style='color:" + color_wcolor + "'>" + color_cnname + "</option>";
    btnl += "<option value='btnl-" + color_name + "' class='bg-" + color_name + "' style='color:" + color_wcolor + "'>" + color_cnname + "</option>";
    btnlh += "<option value='btnh-l-" + color_name + "' class='bg-" + color_name + "' style='color:" + color_wcolor + "'>" + color_cnname + "</option>";
    btnvh += "<option value='btnh-v-" + color_name + "' class='bg-" + color_name + "' style='color:" + color_wcolor + "'>" + color_cnname + "</option>";
    btndh += "<option value='btnh-d-" + color_name + "' class='bg-" + color_name + "' style='color:" + color_wcolor + "'>" + color_cnname + "</option>";

    badcl += "<option value='bg-" + color_name + "' class='bg-" + color_name + "' style='color:" + color_wcolor + "'>" + color_cnname + "</option>";
    
    
}





function basebut() {
    document.writeln("<div class=\'button\'>");
    document.writeln("<a class=\'btn btn_30 btn-blue\' href=\'badgelayer.html\'><i class=\'fa fa-id-badge\'></i><em>生成徽章</em></a>");
    document.writeln("<a class=\'btn btn_30 btn-blue\' href=\'btnlayer.html\'><i class=\'fa fa-ban\'></i><em>生成按钮</em></a>");
    document.writeln("<a class=\'btn btn_30 btn-blue\' href=\'btngrouplayer.html\'><i class=\'fa fa-group\'></i><em>生成按钮组</em></a>");
    document.writeln("<a class=\'btn btn_30 btn-blue\' href=\'inputelayer.html\'><i class=\'fa fa-forumbee\'></i><em>生成输入框</em></a>");
    document.writeln("<a class=\'btn btn_30 btn-blue\' href=\'checkelayer.html\''><i class=\'fa fa-check-circle\'></i><em>生成选择框</em></a>");
    document.writeln("<a class=\'btn btn_30 btn-blue\' href=\'tablelayer.html\'><i class=\'fa fa-table\'></i><em>生成表格</em></a>");
    document.writeln("<a class=\'btn btn_30 btn-blue\' href=\'divtablelayer.html\'><i class=\'fa fa-table\'></i><em>生成DIV表格</em></a>");
    document.writeln("<a class=\'btn btn_30 btn-blue\' href=\'crosselayer.html\'><i class=\'fa fa-gittip\'></i><em>生成Cross标题</em></a>");
    document.writeln("<a class=\'btn btn_30 btn-blue\' href=\'qutolayer.html\'><i class=\'fa fa-quora\'></i><em>生成引用</em></a>");
    document.writeln("<a class=\'btn btn_30 btn-blue\' href=\'hrlayer.html\'><i class=\'fa fa-line-chart\'></i><em>生成分割线</em></a>");
    document.writeln("<a class=\'btn btn_30 btn-blue\' href=\'fieldsetlayer.html\'><i class=\'fa fa-flickr\'></i><em>生成字段集</em></a>");
    document.writeln("</div>");
}


