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

该插件是引用了 jQuery，所以使用前需引入 jQuery 文件：
```javascript
<script type="text/javascript" src="jquery.min.js"></script>
```

1. **默认用法（插件全部元素和 class 取默认值）**

	html 代码
	
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
	javascript 代码
	
	```javascript
	$(".selectWrapper").DsSelect();
	```
2. **将 select 元素由 ul 换成 div 或其他**

	html 代码
	
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
	javascript 代码
	
	```javascript
	$(".selectWrapper2").DsSelect({
		_selectWrapper: ".selectWrapper2",
		_controlContent: ".content2",
		
		_optionNode: "div"
	});
	```
3. **将插件所有元素的 class 改成 id**

	html 代码
	
	```html
	<div id="selectWrapper3">
		<div id="toggleNode"><span id="curOptionText">Option 1</span><span id="icon"></span></div>
		<ul id="selectNode">
			<li class="on">Option 1</li>
			<li>Option 2</li>
			<li>Option 3</li>
		</ul>
	</div>
	<div class="content3 on"> Option 1 </div>
	<div class="content3"> Option 2 </div>
	<div class="content3"> Option 3 </div>
	```
	javascript 代码
	
	```javascript
	$("#selectWrapper3").DsSelect({
		_selectWrapper: "#selectWrapper3",
		_controlContent: ".content3",
		
		_toggleNode: "#toggleNode",
		_currentText: "#curOptionText",
		_iconNode: "#icon", 
		_selectNode: "#selectNode"
	});
	```
	
4. **插件全部元素的 class 都不用默认值**

	html 代码
	
	```html
	<div class="selectWrapper4">
		<div class="aa"><span class="bb">Option 1</span><span class="cc"></span></div>
		<ul class="dd">
			<li class="ee">Option 1</li>
			<li>Option 2</li>
			<li>Option 3</li>
		</ul>
	</div>
	<div class="content4 ii"> Option 1 </div>
	<div class="content4"> Option 2 </div>
	<div class="content4"> Option 3 </div>
	```
	javascript 代码
	
	```javascript
	$(".selectWrapper4").DsSelect({
	_selectWrapper: ".selectWrapper4",
		_controlContent: ".content4",
		
		_toggleNode: ".aa",
		_currentText: ".bb",
		_iconNode: ".cc", 
		_selectNode: ".dd", 
		_currentOptionClass: "ee",
		_currentSelectClass: "ff",
		_toggleNodeClass: "gg",
		_toggleIconClass: "hh",
		_currentContentClass: "ii"
	});
	```
5. **将 toggleNode 的子元素的 class 去掉**

	html 代码
	
	```html
	<div class="selectWrapper5">
		<div class="toggleNode"><span>Option 1</span><i></i></div>
		<ul class="selectNode">
			<li class="on">Option 1</li>
			<li>Option 2</li>
			<li>Option 3</li>
		</ul>
	</div>
	<div class="content5 on"> Option 1 </div>
	<div class="content5"> Option 2 </div>
	<div class="content5"> Option 3 </div>
	```
	javascript 代码
	
	```javascript
	$(".selectWrapper5").DsSelect({
		_selectWrapper: ".selectWrapper5",
		_controlContent: ".content5",
		
		_currentText: "span",
		_iconNode: "i"
	});

	```
	
6. **将下拉小三角改为 font-awesome 的下拉箭头**

	html 代码
	
	```html
	<!--head-->
	<link type="text/css" rel="stylesheet" href="font-awesome.min.css"/>
	
	<!--Body-->
	<div class="selectWrapper6">
		<div class="toggleNode"><span class="curOptionText">Option 1</span><span class="icon"><i class="fa fa-angle-down" aria-hidden="true"></i></span></div>
		<ul class="selectNode">
			<li class="on">Option 1</li>
			<li>Option 2</li>
			<li>Option 3</li>
		</ul>
	</div>
	<div class="content6 on"> Option 1 </div>
	<div class="content6"> Option 2 </div>
	<div class="content6"> Option 3 </div>
	```
	javascript 代码
	
	```javascript
	$(".selectWrapper6").DsSelect({
		_selectWrapper: ".selectWrapper6",
		_controlContent: ".content6",
		
		_toggleIconText: "<i class='fa fa-angle-up' aria-hidden='true'></i>"
	});
	```
7. **改变插件边框颜色和倒角**

	html 代码
	
	```html
	<div class="selectWrapper7">
		<div class="toggleNode"><span class="curOptionText">Option 1</span><span class="icon"></span></div>
		<ul class="selectNode">
			<li class="on">Option 1</li>
			<li>Option 2</li>
			<li>Option 3</li>
		</ul>
	</div>
	<div class="content7 on"> Option 1 </div>
	<div class="content7"> Option 2 </div>
	<div class="content7"> Option 3 </div>
	```
	javascript 代码
	
	```javascript
	$(".selectWrapper7").DsSelect({
		_selectWrapper: ".selectWrapper7",
		_controlContent: ".content7",
		
		_borderColor: "#fe8d14",
		_borderRadius: "6px"
	});
	```
8. **改变绑定点击事件的节点 toggleNode 的样式**

	html 代码
	
	```html
	<div class="selectWrapper8">
		<div class="toggleNode"><span class="curOptionText">Option 1</span><span class="icon"></span></div>
		<ul class="selectNode">
			<li class="on">Option 1</li>
			<li>Option 2</li>
			<li>Option 3</li>
		</ul>
	</div>
	<div class="content8 on"> Option 1 </div>
	<div class="content8"> Option 2 </div>
	<div class="content8"> Option 3 </div>
	```
	javascript 代码
	
	```javascript
	$(".selectWrapper8").DsSelect({
		_selectWrapper: ".selectWrapper8",
		_controlContent: ".content8",
		
		_toggleNodeFontSize: "18px",
		_toggleNodeFontColor: "#fe8e14",
		_toggleNodeHeight: "58px",
		_toggleNodePadding: "0 30px 0 30px"
	});
	```
9. **改变 select 下 option 的样式**

	html 代码
	
	```html
	<div class="selectWrapper9">
		<div class="toggleNode"><span class="curOptionText">Option 1</span><span class="icon"></span></div>
		<ul class="selectNode">
			<li class="on">Option 1</li>
			<li>Option 2</li>
			<li>Option 3</li>
		</ul>
	</div>
	<div class="content9 on"> Option 1 </div>
	<div class="content9"> Option 2 </div>
	<div class="content9"> Option 3 </div>
	```
	javascript 代码
	
	```javascript
	$(".selectWrapper9").DsSelect({
		_selectWrapper: ".selectWrapper9",
		_controlContent: ".content9",
		
		_optionFontSize: "18px",
		_optionLineHeight: "48px",
		_optionFontColor: "#000",
		_optionHoverBgColor: "#fe8e14",
		_optionCurBgColor: "green"
	});
	```
10. **改变 toggleNode 下 icon 的样式**

	html 代码
	
	```html
	<div class="selectWrapper10">
		<div class="toggleNode"><span class="curOptionText">Option 1</span><span class="icon"></span></div>
		<ul class="selectNode">
			<li class="on">Option 1</li>
			<li>Option 2</li>
			<li>Option 3</li>
		</ul>
	</div>
	<div class="content10 on"> Option 1 </div>
	<div class="content10"> Option 2 </div>
	<div class="content10"> Option 3 </div>
	```
	javascript 代码
	
	```javascript
	$(".selectWrapper10").DsSelect({
		_selectWrapper: ".selectWrapper10",
		_controlContent: ".content10",
		
		_iconPositionRight: "20px",
		_iconColor: "#fe8e14",
		_iconBorderWidth: "8px",
		_iconFontSize: "14px"
	});
	```
11. **改变 select 的下拉速度**

	html 代码
	
	```html
	<div class="selectWrapper11">
		<div class="toggleNode"><span class="curOptionText">Option 1</span><span class="icon"></span></div>
		<ul class="selectNode">
			<li class="on">Option 1</li>
			<li>Option 2</li>
			<li>Option 3</li>
		</ul>
	</div>
	<div class="content11 on"> Option 1 </div>
	<div class="content11"> Option 2 </div>
	<div class="content11"> Option 3 </div>
	```
	javascript 代码
	
	```javascript
	$(".selectWrapper11").DsSelect({
		_selectWrapper: ".selectWrapper11",
		_controlContent: ".content11",
		
		_switchSpeed: "fast"
	});
	```

## 三、插件 Demo

[DsSelect Demo](https://alvinyw.github.io/Blog/DsSelect/DsSelect.html)

## 四、插件优缺点

**优点**：参数齐全，插件样式高度可定制化；

**缺点**：对参数 content 模块的操作不是很友好，后期会改成回调函数的方式来执行操作方法；