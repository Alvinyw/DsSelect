# DsSelect
用 div + css 模拟的兼容各大主浏览器的 select 下拉列表

## 一、默认参数
```javascript
$(targetNode).DsSelect(
{
	/*********插件涉及的元素节点*********/
	_selectWrapper: ".selectWrapper", //插件最外层的容器，可为 ID/tagName
	_toggleNode: ".toggleNode", //绑定了 click 事件的节点
	_currentText: ".curOptionText", //显示当前选中的 option 内容的容器
	_iconNode: ".icon", //右边的下拉小三角图标
	_selectNode: ".selectNode", //下拉列表 select 元素（可为 ID/tagName）
	_optionNode: "li", //下拉列表的 option 子项
	_controlContent: ".content", //插件控制显示切换的内容容器
	//插件在 sildeUp/slideDown 切换时用于改变元素样式的 class
	_currentSelectClass: "on", //当前选中的 option 新 Add 的 class
	_currentOptionClass: "on", //当前选中的 option 新 Add 的 class
	_toggleNodeClass: "on", //列表下拉时 _toggleNode 新 Add 的 class
	_toggleIconClass: "on", //列表下拉时 _iconNode 新 Add 的 class
	_currentContentClass: "on", //当前显示的 content 独有的 class
	_toggleIconText: "", //列表下拉时 _iconNode 的内容（只有在 _iconNode.text()初始值不为空时该属性才有效）
	
	/*********插件的其他属性*********/
	_switchSpeed: "", //下拉列表 sildeUp/slideDown 的切换速度
	_documentClick: "true", //点击页面是否收起下拉列表(true/false)
	
	/*********插件的默认样式设置*********/
	_borderColor: "#ccc", //select 默认的边框背景色
	_borderRadius: "3px", //select 默认的边框倒角
	
	_toggleNodeFontSize: "14px", //toggleNode 的默认字体大小
	_toggleNodeFontColor: "#444", //toggleNode 的默认颜色
	_toggleNodeHeight: "38px", //toggleNode 的默认高度
	_toggleNodePadding: "0 20px 0 10px", //toggleNode 的默认内填充
	
	_selectBgColor: "#fff", //select 默认的背景色
	_selectIndex: "5", //select 默认的 index
	
	_optionFontSize: "14px", //option 默认的字体大小
	_optionLineHeight: "34px", //option 默认的字体大小
	_optionFontColor: "#606060", //option 默认的字体颜色
	_optionHoverBgColor: "#fff6ed", //option hover 状态的背景色
	_optionCurBgColor: "#fff6ed", //当前选中的 option 背景色
	
	_iconPositionRight: "10px", //图标 icon 默认右边距
	_iconColor: "#999", //图标 icon 默认的颜色
	_iconBorderWidth: "5px", //图标 icon 默认的边框 width（当 icon 是伪类画出的小三角时才有效）
	_iconFontSize: "14px" //图标 icon 默认的字体大小
}
);
```

## 二、插件用法
1. 默认用法（插件全部元素和 class 取默认值）
	**html 代码**
	```html
	<div class="selectWrapper">
		<div class="toggleNode"><span class="curOptionText">Option 1</span><span class="icon"></span></div>
		<ul class="selectNode">
			<li class="on">Option 1</li>
			<li>Option 2</li>
			<li>Option 3</li>
		</ul>
	</div>
	<div class="content on"> Option 1 </div>
	<div class="content"> Option 2 </div>
	<div class="content"> Option 3 </div>
	```
	**javascript 代码**
	```javascript
	$(".selectWrapper").DsSelect();
	```
2. 将 select 元素由 ul 换成 div 或其他
	**html 代码**
	```html
	<div class="selectWrapper2">
	<div class="toggleNode"><span class="curOptionText">Option 1</span><span class="icon"></span></div>
	<div class="selectNode">
		<div class="on">Option 1</div>
		<div>Option 2</div>
		<div>Option 3</div>
	</div>
	</div>
	<div class="content2 on"> Option 1 </div>
	<div class="content2"> Option 2 </div>
	<div class="content2"> Option 3 </div>
	```
	**javascript 代码**
	```javascript
	$(".selectWrapper2").DsSelect({
		_selectWrapper: ".selectWrapper2",
		_controlContent: ".content2",
		
		_optionNode: "div"
	});
	```