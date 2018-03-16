(function ($) {
/*drop down menu*/
$.fn.aDropDown = function (options) {
	/*default configuration properities*/
	var defaults = {
		_rootObjID: ".a-dropDown", //插件绑定在哪个元素下
		_toggleNode: ".a-click", //绑定了点击响应事件的节点
		_operateNode: "ul", //下拉列表（可为 class）
		_switchSpeed: "", //下拉列表展开（收起）的速度
		_controlContent: ".content", //点击切换显示的内容容器
		_documentClick: "true", //点击页面是否收起下拉列表
		_currentTabClass: "on" //当前的 _controlContent/_operateNode li 的 class
	};
	var options = $.extend(defaults, options);
	var rootObjID = $(options._rootObjID);
	var toggleNode = $(options._rootObjID).find(options._toggleNode);
	var operateNode = $(options._rootObjID).find(options._operateNode);
	var controlContent = $(options._controlContent);

	toggleNode.each(function(index, element) {   
       $(this).bind("click", function(e){
		  $(this).siblings(options._operateNode).slideToggle(options._switchSpeed);
		  $(this).find(".icon").toggleClass("on");
		  $(this).find(".icon").css({"border-bottom":"none","border-top":"6px solid #999"});
		  $(this).find(".icon.on").css({"border-top":"none","border-bottom":"6px solid #999"});
		  
		  var curToggleNode = $(this); //鼠标当前点击的节点
		  var curOperateNode = $(this).siblings(options._operateNode); //鼠标当前操作的下拉列表
		  
		  curOperateNode.find("li").each(function(index, element) {   
				$(this).hover(function(){
					$(this).css({"background-color":"#fff6ed"});
				},
				function(){
					curOperateNode.find("li").css({"background-color":""});
					curOperateNode.find("li.on").css({"background-color":"#fff6ed"});
				}).click(function(){
					var curText = $(this).text();
					curToggleNode.find(".cur-text").text(curText);
					curOperateNode.find("li").removeClass('on').css({"background-color":""});
					curOperateNode.find("li").eq(index).addClass('on').css({"background-color":"#fff6ed"});
					//call back function
					controlContent.removeClass("on").css("display","none");
					controlContent.eq(index).addClass("on").css("display","block");			
				});
			});
	  });
	});
	
	$(document).click(function(){
		if(options._documentClick == 'true'){
			toggleNode.find(".icon").removeClass("on").css({"border-bottom":"none","border-top":"6px solid #999"});
			operateNode.slideUp(options._switchSpeed);
		}
	});
	$(options._toggleNode).bind("click",function(e){
		if (e.stopPropagation){
			e.stopPropagation();
		}else{
			e.cancelBubble = true;
		}
	});
	//css
	$("div,ul,li").css({"padding":"0","margin":"0","list-style":"none","-webkit-box-sizing":"border-box","-moz-box-sizing":"border-box","box-sizing":"border-box"});
	rootObjID.css({"position":"relative"});
	toggleNode.css({"position":"relative","padding":"0 10px","width":"100%","height":"38px","font-size":"14px","line-height":"36px","border":"1px solid #ccc","border-radius":"3px 3px 0 0","-webkit-border-radius":"3px 3px 0 0","-moz-border-radius":"3px 3px 0 0","cursor":"pointer"});
	toggleNode.find(".icon").css({"position":"absolute","right":"10px","top":"15px","color":"#606060","display":"inline-block","width":"0","height":"0","border-top":"6px solid #999","border-left":"6px solid transparent","border-right":"6px solid transparent"});
	operateNode.css({"display":"none","position":"absolute","z-index":"5","width":"100%","background-color":"#fff","border":"1px solid #ccc","border-top":"none"});
	operateNode.find("li").css({"padding":"0 10px","font-size":"14px","line-height":"34px","cursor":"pointer"});
	operateNode.find("li:first-child").addClass("on").css("background-color","#fff6ed");
	controlContent.css({"display":"none"});
	controlContent.filter(".on").css({"display":"block"});
}


//使用 插件
$("#DropDown").aDropDown({
	_rootObjID: ".aa", //插件绑定在哪个元素下
	_toggleNode: ".a-click", //绑定了点击响应事件的节点
	_operateNode: "ul", //下拉列表（可为 class）
	_switchSpeed: "", //下拉列表展开（收起）的速度
	_controlContent: ".content", //点击切换显示的内容容器
	_documentClick: "true", //点击页面是否收起下拉列表
	_currentTabClass: "on" //当前的 _controlContent/_operateNode li 的 class
});

$("#DropDown").aDropDown({
	_rootObjID: ".bb", //插件绑定在哪个元素下
	_toggleNode: ".a-click", //绑定了点击响应事件的节点
	_operateNode: "ul", //下拉列表（可为 class）
	_switchSpeed: "", //下拉列表展开（收起）的速度
	_controlContent: ".content2", //点击切换显示的内容容器
	_documentClick: "true", //点击页面是否收起下拉列表
	_currentTabClass: "on" //当前的 _controlContent/_operateNode li 的 class
});

$("#DropDown").aDropDown({
	_rootObjID: ".cc", //插件绑定在哪个元素下
	_toggleNode: ".a-click", //绑定了点击响应事件的节点
	_operateNode: "ul", //下拉列表（可为 class）
	_switchSpeed: "", //下拉列表展开（收起）的速度
	_controlContent: ".content3", //点击切换显示的内容容器
	_documentClick: "true", //点击页面是否收起下拉列表
	_currentTabClass: "on" //当前的 _controlContent/_operateNode li 的 class
});



})(jQuery);