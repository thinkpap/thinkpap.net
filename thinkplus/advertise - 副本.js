(function (window, $, undefined) {

    //构建函数：广告控制,随机图片、动画、文字、网页兼容手机端
    $.fn.thinkads = function (options) {
        var ad = {
            folder: [{ res: "", url: "", word: "", mres: "", murl: "", mword: "" }],
            rand: 1,
            model: "image", display: "", width: "", height: "", margin: "", pos: 1,
            mmodel: "image", mdisplay: "", mwidth: "", mheight: "", mmargin: "", mimgcel: 0.3
        };
        if (options) { $.extend(ad, options) };
        this.each(function () {
            var $this = $(this);
            var devicewidth = $this.width();
            var pcdisplay = ad.display;
            var pcwidth = ad.width;
            var pcheight = ad.height;
            var pcmargin = ad.margin;
            var pcmodel = ad.model;

            var mbdisplay = ad.mdisplay;
            var mbwidth = ad.mwidth;
            var mbheight = ad.mheight;
            var mbmargin = ad.mmargin;
            var mbmodel = ad.mmodel;

            var gpos = ad.pos;
            if (gpos==1) {  $(this).append("<div class='eye'>广告</div>");}
           

            function mixArray(source) {var goal = [];for (var i = 0; i < source.length; i++) {var pos = Math.floor(Math.random() * (source.length - i)); goal[i] = source[pos];source[pos] = source[source.length - 1 - i]}return goal;}

            var ro = new Array();
            for (var x = 0; x < ad.folder.length; x++) {ro[x] = x;};
            ro = mixArray(ro);
            for (var j = 0; j < ad.rand; j++) {
                var pcres = ad.folder[ro[j]].res;
                var pcurl = ad.folder[ro[j]].url;
                var pcword = ad.folder[ro[j]].word;

                var mbres = ad.folder[ro[j]].mres;
                var mburl = ad.folder[ro[j]].murl;
                var mbword = ad.folder[ro[j]].mword;
                var mbmimgcel = ad.mimgcel;

                var pcflinkheight = pcheight - 45;
                var pchref = "", pcflhref = "", mbhref = "";
                var pcimagetempltet = "", pcflashtemplate = "", pcwordstemplate = "", pcimgwordtemplate = "";
                var mbimgtempltet = "", mbwordtemplate = "";

                if (mbwidth == '') { mbwidth = devicewidth }
                if (mbheight == '') { mbheight = mbwidth * mbmimgcel }
                if (pcurl == '') { pchref = "href='javascript:void(0);'"; pcflhref = ""; }
                else {
                    pchref = "href=" + pcurl + " target='_blank'";
                    pcflhref = "<div style='position:absolute;z-index:10'><a href=" + pcurl + " target='_blank' style='width:" + pcwidth + "px; height:" + pcflinkheight + "px; display:block'></a></div>";
                };
                if (mburl == '') {mbhref = "href='javascript:void(0);'";} else {mbhref = "href=" + mburl + " target='_blank'";};
                pcimagetempltet = "<div class='hid-xs'><a " + pchref + "><img src=" + pcres + " style='width:100%;height:" + pcheight + "px'></a></div>";
                pcflashtemplate = "<div class='hid-xs' style='width:100%; height:" + pcheight + "px'>" + pcflhref + "<embed src=" + pcres + " allowFullScreen='true' quality='high' style='width:100%; height:" + pcheight + "px' align='middle' allowScriptAccess='always' type='application/x-shockwave-flash'></embed></div>";
                pcwordstemplate = "<a " + pchref + ">" + pcword + "</a>";
                pcimgwordtemplate = "<dl><a " + pchref + "><dt><img src='" + pcres + "' /></dt><dd>" + pcword + "</dd></a></dl>";

                mbimgtempltet = "<div class='hid-sm'><a " + mbhref + "><img src=" + mbres + " style='height:" + mbheight + "px'></a></div>";
                mbwordtemplate = "<a " + mbhref + ">" + mbword + "</a>";
                if (device.mobile()) {
                    if (mbmodel == 'image') { $(this).append(mbimgtempltet); }
                    else if (mbmodel == 'word') { $(this).append(mbwordtemplate); }
                } else {
                    if (pcmodel == 'image') { $(this).append(pcimagetempltet); }
                    else if (pcmodel == 'flash') { $(this).append(pcflashtemplate) }
                    else if (pcmodel == 'word') { $(this).append(pcwordstemplate) }
                    else if (pcmodel == 'imgword') { $(this).append(pcimgwordtemplate) }
                }
            }
            //(device.mobile()) ? $(this).css({ "margin": mbmargin })  : $(this).css({ "margin": pcmargin });
            if (device.mobile()) {
                $(this).css({ "margin": mbmargin });
                if (mbdisplay == 'none') { $(this).css({ "display": "none" }) }
            } else {
                $(this).css({ "margin": pcmargin });
                if (pcdisplay == 'none') { $(this).css({ "display": "none" }) }
            }
        });
    }



})(window, jQuery);

//负载函数

