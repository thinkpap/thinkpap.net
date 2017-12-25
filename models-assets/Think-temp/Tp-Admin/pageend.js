


  $(".form").Validform({
      btnSubmit: "#submit",
      btnReset: ".btn_reset",
      ignoreHidden: false,
      dragonfly: false,
      tipSweep: true,
      label: ".label",
      showAllError: true,
      postonce: true,
      ajaxPost: false,
      datatype: {},
      usePlugin: {
          swfupload: {},
          datepicker: {},
          passwordstrength: {},
          jqtransform: {
              selector: "select,input"
          }
      },
      beforeCheck: function (curform) {
          //在表单提交执行验证之前执行的函数，curform参数是当前表单对象。
          //这里明确return false的话将不会继续执行验证操作;    
      },
      beforeSubmit: function (curform) {
          //在验证成功后，表单提交前执行的函数，curform参数是当前表单对象。
          //这里明确return false的话表单将不会提交;    
      },
      callback: function (data) {
          //返回数据data是json对象，{"info":"demo info","status":"y"}
          //info: 输出提示信息;
          //status: 返回提交数据的状态,是否提交成功。如可以用"y"表示提交成功，"n"表示提交失败，在ajax_post.php文件返回数据里自定字符，主要用在callback函数里根据该值执行相应的回调操作;
          //你也可以在ajax_post.php文件返回更多信息在这里获取，进行相应操作；
          //ajax遇到服务端错误时也会执行回调，这时的data是{ status:**, statusText:**, readyState:**, responseText:** }；

          //这里执行回调操作;
          //注意：如果不是ajax方式提交表单，传入callback，这时data参数是当前表单对象，回调函数会在表单验证全部通过后执行，然后判断是否提交表单，如果callback里明确return false，则表单不会提交，如果return true或没有return，则会提交表单。
      },
      tiptype: function (msg, o) {
          if (o.type == 3) {
              // 只有在验证失败的时候，才会弹出相关的信息
              layer.alert(msg, { icon: 6 });
          }
      }


      //tiptype:function(msg,o,cssctl){
      //msg：提示信息;
      //o:{obj:*,type:*,curform:*},
      //obj指向的是当前验证的表单元素（或表单对象，验证全部验证通过，提交表单时o.obj为该表单对象），
      //type指示提示的状态，值为1、2、3、4， 1：正在检测/提交数据，2：通过验证，3：验证失败，4：提示ignore状态, 
      //curform为当前form对象;
      //cssctl:内置的提示信息样式控制函数，该函数需传入两个参数：显示提示信息的对象 和 当前提示的状态（既形参o中的type）;
      //}

  });

new PCAS("province", "city", "area", "吉林省", "白城市", "大安市");


function adddata(title, width, height, url) {
    layer.open({
        type: 2,
        title: title,
        shadeClose: true,
        shade: 0.3,
        maxmin: true,
        area: [width, height],
        content: url
    });
}


