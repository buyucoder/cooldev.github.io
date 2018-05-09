---
layout: post
title: Hexo标签测试
date: 2018/5/09 22:59:25
updated: 2018/5/09 22:59:31
comments: true
tags: 
- Injury
- Fight
- Shocking
categories: 
- [Sports, Baseball]
- [MLB, American League, Boston Red Sox]
- [MLB, American League, New York Yankees]
- Rivalries
---

### 文字居中

```
{% centerquote %} 文本居中 {% endcenterquote %}
```

{% centerquote %} 文本居中 {% endcenterquote %}


### 图片突出放大
```
{% fullimage /image-url, alt, title %}
```
{% fullimage http://theme-next.iissnan.com/uploads/tags/full-image.jpg, 图片突出放大, 图片突出放大 %}

### 引导突出

```
{% note class_name %} Content (md partial supported) {% endnote %}
```
其中，class_name 可以是以下列表中的一个值：

default
primary
success
info
warning
danger

{% note default %} Content (md partial supported) {% endnote %}
{% note primary %} Content (md partial supported) {% endnote %}
{% note success %} Content (md partial supported) {% endnote %}
{% note info %} Content (md partial supported) {% endnote %}
{% note warning %} Content (md partial supported) {% endnote %}
{% note danger %} Content (md partial supported) {% endnote %}

