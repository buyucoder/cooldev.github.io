---
layout: post
title: PHP 使用下标读写字符串的细节整理
categories: [PHP, string]
description:  PHP 使用下标读写字符串
keywords: php,string,offset
---



string 中的字符可以通过一个从 0 开始的下标，用类似 array 结构中的方括号包含对应的数字来访问和修

改，比如 $str[42]。可以把 string 当成字符组成的 array。函数 substr() 和 substr_replace() 可用于操
作多于一个字符的情况。

Note: string 也可用花括号访问，比如 $str{42}。
Warning
用超出字符串长度的下标写入将会拉长该字符串并以空格填充。非整数类型下标会被转换成整数。非法下标类型会产生一个 E_NOTICE 级别错误。用负数下标写入字符串时会产生一个 E_NOTICE 级别错误，用负数下标读取字符串时返回空字符串。写入时只用到了赋值字符串的第一个字符。用空字符串赋值则赋给的值是 NULL 字符。
Warning
PHP 的字符串在内部是字节组成的数组。因此用花括号访问或修改字符串对多字节字符集很不安全。仅应对单字节编码例如 ISO-8859-1 的字符串进行此类操作。

http://php.net/manual/zh/language.types.string.php 




```php
<?php 

$url = 'weixin';

echo $url[0];
echo $url{0};	//可以用{}取,但不安全


var_dump($url[10]);	//不存在的小标访问,返回空,并报Notice


//自 PHP 5.4 起字符串下标必须为整数或可转换为整数的字符串，否则会发出警告。之前例如 "foo" 的下标会无声地转换成 0。
echo $url['0'];
echo $url['weixin'];	//PHP5.4以后报Warning


//汉字字符不能这样取
$url = '微信';
echo $url[0];	

$a = "123";  
$a[$a[1]] = "5";  
echo $a;     // 输出125 


/**
php7.1 下标访问字符串变量可能造成混淆
http://blog.csdn.net/Allen_Tsang/article/details/76795388 

**/
$var = '';
$var[0] = 'v';
var_export($var);
/* 
7.1.0之前版本输出：
array (
  0 => 'v',
)
以后版本输出：'v'
*/


/**
另一个比较有意思的问题
http://blog.csdn.net/topasstem8/article/details/39694039 

**/
```
