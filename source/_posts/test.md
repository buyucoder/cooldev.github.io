---
title: test
date: 2018-04-03 23:46:51
tags:
---


### 如何触发事件

1.HTML 事件属性 如需向 HTML 元素分配 事件，您可以使用事件属性。
2.使用js绑定 ,使用 HTML DOM 来分配事件
HTML DOM 允许您通过使用 JavaScript 来向 HTML 元素分配事件：
3.


### JS原生事件
HTML DOM Event 对象
http://www.w3school.com.cn/jsref/dom_obj_event.asp

事件句柄　(Event Handlers)
HTML 4.0 的新特性之一是能够使 HTML 事件触发浏览器中的行为，比如当用户点击某个 HTML 元素时启动一段 JavaScript。下面是一个属性列表，可将之插入 HTML 标签以定义事件的行为。

| 属性 | 此事件发生在何时... |
|---|---|
| [onabort](http://www.w3school.com.cn/jsref/event_onabort.asp) | 图像的加载被中断。 |
| [onblur](http://www.w3school.com.cn/jsref/event_onblur.asp) | 元素失去焦点。 |
| [onchange](http://www.w3school.com.cn/jsref/event_onchange.asp) | 域的内容被改变。 |
| [onclick](http://www.w3school.com.cn/jsref/event_onclick.asp) | 当用户点击某个对象时调用的事件句柄。 |
| [ondblclick](http://www.w3school.com.cn/jsref/event_ondblclick.asp) | 当用户双击某个对象时调用的事件句柄。 |
| [onerror](http://www.w3school.com.cn/jsref/event_onerror.asp) | 在加载文档或图像时发生错误。 |
| [onfocus](http://www.w3school.com.cn/jsref/event_onfocus.asp) | 元素获得焦点。 |
| [onkeydown](http://www.w3school.com.cn/jsref/event_onkeydown.asp) | 某个键盘按键被按下。 |
| [onkeypress](http://www.w3school.com.cn/jsref/event_onkeypress.asp) | 某个键盘按键被按下并松开。 |
| [onkeyup](http://www.w3school.com.cn/jsref/event_onkeyup.asp) | 某个键盘按键被松开。 |
| [onload](http://www.w3school.com.cn/jsref/event_onload.asp) | 一张页面或一幅图像完成加载。 |
| [onmousedown](http://www.w3school.com.cn/jsref/event_onmousedown.asp) | 鼠标按钮被按下。 |
| [onmousemove](http://www.w3school.com.cn/jsref/event_onmousemove.asp) | 鼠标被移动。 |
| [onmouseout](http://www.w3school.com.cn/jsref/event_onmouseout.asp) | 鼠标从某元素移开。 |
| [onmouseover](http://www.w3school.com.cn/jsref/event_onmouseover.asp) | 鼠标移到某元素之上。 |
| [onmouseup](http://www.w3school.com.cn/jsref/event_onmouseup.asp) | 鼠标按键被松开。 |
| [onreset](http://www.w3school.com.cn/jsref/event_onreset.asp) | 重置按钮被点击。 |
| [onresize](http://www.w3school.com.cn/jsref/event_onresize.asp) | 窗口或框架被重新调整大小。 |
| [onselect](http://www.w3school.com.cn/jsref/event_onselect.asp) | 文本被选中。 |
| [onsubmit](http://www.w3school.com.cn/jsref/event_onsubmit.asp) | 确认按钮被点击。 |
| [onunload](http://www.w3school.com.cn/jsref/event_onunload.asp) | 用户退出页面。 |



输入框只能输入指定类型内容:
http://www.jb51.net/article/51102.htm



### Jquery 事件

http://www.w3school.com.cn/jquery/jquery_ref_events.asp




jquery 动态绑定事件

$().click();	不能对新追加的元素生效

$().bind();		不能对新追加的元素生效

$().live();		可以对新追加的元素生效,但只有jquery 1.9 以下版本有这个函数.以上版本已经移除这个函数 [相关连接][1]

从jQuery 1.7开始，.live（）方法已被弃用。 使用.on（）附加事件处理程序。 老版本的jQuery用户应该优先使用.delegate（），而不要使用.live（）。

$().on();		可以对新追加的元素生效, [enter description here][2]	jquery  1.7版本以后可以使用

$().delegate();	可以对新追加的元素生效


---

举例代码:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>JS事件</title>
    <!--<script src="https://cdn.bootcss.com/jquery/1.11.2/jquery.js"></script>-->
    <script src="../jq/jquery.js"></script>
    <style>
          .box {width:100px;height: 100px;background-color: #1bae19;float: left;margin-left: 20px;}
          .uppercase {text-transform: uppercase}
          .lowercase {text-transform: lowercase}
          .capitalize {text-transform: capitalize}
          ul li {width:60px;height:30px;border:1px solid black;background-color: pink;}
    </style>
</head>
<body onunload="checkCookies()">


<div class="box" onclick="this.innerHTML='谢谢!'">请点击该文本</div>

<div class="box" onclick="changetext(this);notify();">请点击该文本</div>

<a href="javascript:;" onclick="changetext(this);">百度一下,你就知道</a>
<a href="javascript:void(0);" onclick="changetext(this);">百度一下,你就知道</a>


<input type="text" id="fname" onchange="upperCase(this)">

<input type="text" onchange="upperCase2(this)" >

<input type="text" class="uppercase" onblur="alert(this.value);">

<!--<input type="text" class="uppercase" onfocus="alert(this.value);">-->

<p>输入大于0的正整数</p>
<input onkeyup="if(this.value.length==1){this.value=this.value.replace(/[^1-9]/g,'')}else{this.value=this.value.replace(/\D/g,'')}" onafterpaste="if(this.value.length==1){this.value=this.value.replace(/[^1-9]/g,'')}else{this.value=this.value.replace(/\D/g,'')}">

<p>键盘监听,举例:回车搜索</p>
<input type="text" onkeyup="search(this);">

<p>使用 HTML DOM 来分配事件</p>
<ul id="ul_1">
    <li id="ul_li_1">菜单1</li>
    <li id="ul_li_2">菜单2</li>
    <li id="ul_li_3">菜单3</li>
</ul>

<ul id="ul_2">
    <li id="ul_2_li_1">菜单1</li>
    <li id="ul_2_li_2">菜单2</li>
    <li id="ul_2_li_3">菜单3</li>
</ul>


<ul id="ul_3">
    <li>菜单1</li>
    <li>菜单2</li>
    <li>菜单3</li>
</ul>

<ul id="ul_4">
    <li>菜单1</li>
    <li>菜单2</li>
    <li>菜单3</li>
</ul>

<ul id="ul_5">
    <li>菜单1</li>
    <li>菜单2</li>
    <li>菜单3</li>
</ul>

<script>
    var id;
    id && alert(111);

    function changetext(id) {
        id.innerHTML="谢谢!";
    }

    function notify () {
        alert('3Q');
    }


    function checkCookies()
    {
        alert("已启用 cookie")

    }

    function upperCase()
    {
        var x=document.getElementById("fname");
        x.value=x.value.toUpperCase();
    }

    function upperCase2(id) {

        id.value=id.value.toLowerCase();
    }


    function search (id) {

        // 兼容FF和IE和Opera

        var theEvent =  window.event;

        var code = theEvent.keyCode || theEvent.which || theEvent.charCode;

        if (code == 13) {

            //回车执行查询
          location.href="https://www.baidu.com/s?wd="+id.value;
        }
    }

//    for ( var i=1;i<=8;i++ ) {
//        document.getElementById("ul_li_"+i).onclick = function () {
//            console.log($(this).html());
//            alert(this.innerHTML);
//        }
//    }

    $(document).ready(function(){
        //jquery
        $('ul#ul_1 li').click(function(){
            console.log($(this).html());
            //alert(this.innerHTML);

            var para=document.createElement("li");
            var node=document.createTextNode("新菜单");
            para.appendChild(node);
            var element=document.getElementById("ul_1");
            element.appendChild(para);

        });


        $("ul#ul_2 li").bind("click",function(){
            console.log($(this).html());
            //alert(this.innerHTML);

            var para=document.createElement("li");
            var node=document.createTextNode("新菜单");
            para.appendChild(node);
            var element=document.getElementById("ul_2");
            element.appendChild(para);
        });


        //jquery 1.9以后已经移除
//        $("ul#ul_3 li").live("click",function(){
//            console.log($(this).html());
//            //alert(this.innerHTML);
//
//            var para=document.createElement("li");
//            var node=document.createTextNode("新菜单");
//            para.appendChild(node);
//            var element=document.getElementById("ul_3");
//            element.appendChild(para);
//        });


        /**
         * $( "ul#ul_3 li" ).on( "click",function() {}) 对新追加的元素不生效
         */
        $( "ul#ul_3" ).on( "click", 'li',function() {
            console.log($(this).html());
//
            var para=document.createElement("li");
            var node=document.createTextNode("新菜单");
            para.appendChild(node);
            var element=document.getElementById("ul_3");
            element.appendChild(para);
        });

        $(document).on('click','ul#ul_4 li', function(){
            console.log($(this).html());
//
            var para=document.createElement("li");
            var node=document.createTextNode("新菜单");
            para.appendChild(node);
            var element=document.getElementById("ul_4");
            element.appendChild(para);
        });


        $("ul#ul_5").delegate("li","click",function(){
            console.log($(this).html());
//
            var para=document.createElement("li");
            var node=document.createTextNode("新菜单");
            para.appendChild(node);
            var element=document.getElementById("ul_5");
            element.appendChild(para);
        })

    });

</script>
</body>
</html>
```

  [1]: https://api.jquery.com/live/
  [2]: https://api.jquery.com/on/