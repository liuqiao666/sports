layui.use(['element','form','layedit'], function(){
  var element = layui.element; //导航的hover效果、二级菜单等功能，需要依赖element模块
    $ = layui.jquery; $("<script src='../assets/lib/layer/layer.js'>" + "<" + "/script>").appendTo('body');
    var form = layui.form;
  //监听导航点击
  element.on('nav(demo)', function(elem){
    //console.log(elem)
    layer.msg(elem.text());
  });
  

    
    $('.chbox').on('click',function(){
        //获取checkbox，并且切换状态，触发事件
       var $check= $(this).find('input[type=checkbox]');
        if($check.is(':checked')){
            $check.prop('checked',false).attr('checked',false);
            
        }else{
             $check.prop('checked',true).attr('checked',true);
           
        }
        $check.trigger('change');
    })
    
    /*
    复选框change事件，可复用
    */
    function changeEvent(dom){
         if($(dom).attr('name')=='selectAll'){//全选
              if(dom.checked){
                  $('.incheck').prop('checked',true).attr('checked',true);
              }else{
                  $('.incheck').prop('checked',false).attr('checked',false);
              }
              
              
          }else {//普通按钮
              
                	  	//判断未被选中的复选框个数
                if($('.incheck:checked').length==$('.incheck').length){
                    $('input[name=selectAll]').prop('checked',true).attr('checked',true)
                }else{
                    $('input[name=selectAll]').prop('checked',false).attr('checked',false)

                }
          }
          form.render('checkbox')
          
          $('.chbox input').each(function(){

          	if($(this).is(':checked')){
          		$(this).parent().parent().addClass('bordercolor');
          		$(this).next().find('i').addClass('bordercolor');
          	}else{
          		$(this).parent().parent().removeClass('bordercolor');
          		$(this).next().find('i').removeClass('bordercolor');
          	}
          	
          })
    		}
    
  	  form.on('checkbox', function(data){
         changeEvent(data.elem);
      }); 
    $('input[type=checkbox]').on('change',function(){
        changeEvent(this);
    })
//  	  $('.incheck').on('change',function(){
//  	  	
//  	  	
//  	  	
//  	  	
//  	  })
  
  
  $('#pass').on('click',function(){
	  //提示
	  layer.open({
	    content: '成功！'
	    ,skin: 'msg'
	    ,time: 2 //2秒后自动关闭
	})
	setTimeout(function(){
	  	window.parent.location.reload();
	},1200)
 }),
 $('#out').on('click',function(){
	  //提示
	  layer.open({
	    content: '成功！'
	    ,skin: 'msg'
	    ,time: 2 //2秒后自动关闭
	})
	setTimeout(function(){
	  	window.parent.location.reload();
	},1200)
 })
});