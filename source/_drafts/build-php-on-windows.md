---
title: windows上编译PHP
date: 2018-5-4
tags:
---


windows 上编译 PHP 7.2 之前的版本，如果想编译PHP 7.2 之后的版本请点击 windows上构建PHP7.2+

在 windows 上的PHP 版本官方已经给我们编译好了，大多数是不需要自己编译的，不过官方也是给出了在 windows 上编译 PHP 的[文档](https://wiki.php.net/internals/windows/stepbystepbuild)，本文也是在参考文档下的实践。

如果想直接下载官方编译好的 windows 下的PHP版本，资源索引在文末。

构建环境需要3个部分：
1. VC ++ 编译器 （包含在visual studio中）
2. PHP源码 
3. PHP-SDK 及依赖库
4. 如果要编译PHP扩展，则PHP扩展的源码

 ## 1.编译器
### 要求
PHP正式支持使用微软的Visual C ++编译器进行构建。免费的Express和Developer版本也可以使用，支持以下VC版本：

- 用于 PHP 5.4 的 Visual C ++ 9.0（Visual Studio 2008或Visual C ++ 2008）。
- 用于 PHP 5.5 或 5.6 的 Visual C ++ 11.0（Visual Studio 2012）。
- 用于 PHP 7.0+ 的 Visual C ++ 14.0（Visual Studio 2015）。
如果使用VC9，则还需要Windows SDK 6.1（有关SDK的其他信息，请参阅此页面）

更多 windows 下编译 PHP 的编译器版本（[文档](https://wiki.php.net/internals/windows/compiler)）:

| Product Name | 5.2.x | 5.3.x | 5.4.x | 5.5.x | 5.6.x | 7.0.x | 7.1.x | 7.2.x | 64bits (\*\*\*) |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Visual C++ 6 (SP6 only) | Yes | Yes | No | No | No | No | No | No | No |
| Visual C++ 7/7.1 (2002, 2003, 2003+sp1) | Yes (\*\*) | Yes (\*\*) | No | No | No | No | No | No | No |
| Visual C++ 8 (2005) | Yes (\*\*) | No | No | No | No | No | No | No | No |
| Visual C++ 9 (2008 SP1 only) | Yes (\*\*) | Yes | Yes | Yes (\*\*) | No | No | No | No | No |
| Visual C++ 11 (2012) | No | No | Yes (\*\*) | Yes | Yes | Yes (\*\*) | No | No | Yes |
| Visual C++ 14 (2015) | No | No | No | No | No | Yes | Yes(\*\*) | Yes(\*\*) | Yes |
| Visual C++ 15 (2017) | No | No | No | No | No | Yes(\*\*) | Yes(\*\*) | Yes | Yes |

Yes：此版本受支持，我们提供使用此编译器构建的二进制文件
No：不支持
（\*）可能会在最终发布之前被删除
（\*\*）没有正式支持，但已知工作
（\*\*\*）根据当前官方支持（或已知工作）支持此编译器

### 建立
- 如果编译PHP 5.4：
	 - 安装Visual Studio 2008
	 - 安装Windows SDK 6.1
- 如果编译PHP 5.5或5.6：
	- 安装Visual Studio 2012 ，可以使用快速版本，请安装“ Visual Studio 2012 Express for Windows Desktop ”
- 如果编译PHP 7.0+：
	- 安装Visual Studio 2015
	
### 命令提示符
Visual Studio（或Windows SDK）的每个版本都提供了用于编译的命令提示符环境（可从“开始”菜单组获得）。

- 如果编译 PHP 5.4，请打开“Windows SDK 6.1 shell”并在其中执行以下命令：`setenv/x86/xp/release`
- 如果编译 PHP 5.5或5.6，打开“VS2012 x86 本机工具命令提示”，
- 如果编译 PHP 7.0+，则打开“VS2015 x64本机工具命令提示符”或“VS2015 x86本机工具命令提示符”。

以编译 PHP5.6版本为例，需要使用 VC++ 11 编译器，则需要安装 Visual Studio 2012，安装 Visual Studio 是要使用其中的编译器，在 Visual Studio 2017 之前的版本编译器和开发环境是在一起的，所以要下载整个 Visual Studio ，Visual Studio 2017 有单独的编译器，如果是编译 PHP7.2+ 是可以不安装 Visual Studio 2017 ，具体情况这里不说了。


这里说一下 Visual Studio，有4种版本：Express，Community，Professional，Enterprise；其中 Express，Community 免费，Professional，Enterprise 收费。
- Express ：从2010，2012，2013，2015，2017 版本都是提供的，按官网说的，Visual Studio Express 2017 将是 Visual Studio Express 的最终版本。
-  Community（社区版）：从2013开始提供，也是官方推荐的免费版本。


 ==如果要使用免费版，2012的话就去下载 Express 版的，2015，2017 就去下载 Community 版的，Professional，Enterprise 破解版网上自己找。==
 
 免费版 Visual Studio 如何获取？
 
 最新版2017 现在官网可以直接下载，老版本先要注册一个账号，然后加入 [Visual Studio Dev Essentials](https://www.visualstudio.com/zh-hans/dev-essentials/) 订阅，在到 [download](https://my.visualstudio.com/Downloads) 搜索下载对应的版本，不加入看不到下载！！！
 
 以下载 Visual Studio 2012 Express for Windows Desktop 为例，在下载页面搜索 “visual studio express” 找到 2012 版本，选择x86(32位)或x64(64位)版本（2012只要32位版）、选择语言中文、格式选择 DVD 或者 EXE ，然后点击 “Download” 下载，EXE格式下载下来的是一个安装器，大小几百KB，打开后在线安装，DVD格式下载的是 iso 镜像是完整的，2012 版大小620MB，选择哪一种根据自己情况。
  
 ![enter description here](http://cooldev-1251672755.cossh.myqcloud.com/cooldev/1525521402986.jpg)
 
 我这里使用的是 iso 镜像，直接用压缩软件打开，选好安装位置，安装没难度
 
 ![enter description here](http://cooldev-1251672755.cossh.myqcloud.com/cooldev/1525522217827.jpg)
 


演示编译环境：windows 7 64位，用win8，win10都是可以的。安装好后在开始菜单里面找到 Visual Studio 2012 -> Visual Studio Tools ，选择 “VS2012 x86 本机工具命令提示”  ==虽然是64位系统，但也要选择x86的命令提示符，不要选择那个x64兼容工具命令提示==

![enter description here](http://cooldev-1251672755.cossh.myqcloud.com/cooldev/1525523162002.jpg)

将打开一个命令行窗口，如下：

![VS2012 x86 本机工具命令提示](http://cooldev-1251672755.cossh.myqcloud.com/cooldev/1525523607317.jpg)

## 2. PHP 源码下载

1.从[官网](http://php.net/downloads.php)下载最新版或 [历史存档](http://php.net/releases/) 或[windows专用的历史存档](https://windows.php.net/downloads/releases/archives/)下载对应版本和平台 的PHP源码
2.用 git 从 [github](https://github.com/php/php-src) 下载源码，[参阅](http://php.net/git.php)
您可以使用以下命令从我们的GitHub镜像检索PHP源代码 ： 

git clone https://github.com/php/php-src.git 

或者，您可以使用以下命令从git.php.net检索源代码 ： 

git clone http://git.php.net/repository/php-src.git 

您也可以从GitHub下载快照：

转到php-src项目页面。
从分支下拉列表中选择您感兴趣的分支。
点击下载ZIP按钮。

我这里下载一个 [php-5.6.27-src.zip](https://windows.php.net/downloads/releases/archives/php-5.6.27-src.zip)


## 3.PHP-SDK 及依赖库

下载 [php-sdk-tools](https://github.com/Microsoft/php-sdk-binary-tools) ，项目下面有使用说明最好看一下，可以使用 git 去克隆项目，也可以直接下载压缩包然后使用。

==注意： PHP SDK 2.0+与PHP 7.0及以上版本兼容 ， 老版本在这里下载：[下载1](https://windows.php.net/downloads/php-sdk/) （里面有php-sdk和依赖库），[下载2](https://github.com/Microsoft/php-sdk-binary-tools/tree/legacy)==

我这里是要编译 PHP 5.6，所以要下载老版本：[php-sdk-binary-tools-20110915.zip](https://windows.php.net/downloads/php-sdk/php-sdk-binary-tools-20110915.zip)

我是解压到 E:\php-sdk 下面，包含三个子目录：bin，script和share，结构如下：
```
E:\PHP-SDK
├─bin
├─script
└─share
```

下载依赖库：
php7.2 之前的依赖库需要自己下载安装，php7.2之后的依赖库可以通过命令安装，不要自己安装了，越来越方便。

php5.3-7.1 的依赖库点[这里](https://windows.php.net/downloads/php-sdk/archives/)下载，文件名格式： `deps-<php version>-<vc version>-<architecture>.7z` ，一定要选对应版本下载，如我这里需要编译的是 php5.6 的 64位版，所以要下载 ：[deps-5.6-vc11-x64.7z](https://windows.php.net/downloads/php-sdk/archives/deps-5.6-vc11-x64.7z)

在 VS2012 的命令行工具 中 ，cd到 php-sdk 的目录，执行以下：

```
cd E:\php-sdk
bin\phpsdk_buildtree.bat phpdev
```

![enter description here](http://cooldev-1251672755.cossh.myqcloud.com/cooldev/1525528291432.jpg)

此时 E:\php-sdk 中会生成一个 phpdev 文件夹，里面有 vc6，vc8，vc9 三个子目录，因为脚本没有针对vc11，vc14 做更新，没有生成对应的文件夹，需要我们手动去生成一下，将 vc9 的目录复制并改名为一个 vc11和 vc14。现在目录结构如下 (很多地方以省略)：

```
E:\PHP-SDK
├─bin
├─phpdev
│  ├─vc11
│  │  ├─x64
│  │  │  └─deps
│  │  │      ├─bin
│  │  │      ├─include
│  │  │      └─lib
│  │  └─x86
│  │      └─deps
│  │          ├─bin
│  │          ├─include
│  │          └─lib
│  ├─vc14
│  ├─vc6
│  ├─vc8
│  └─vc9
├─script
└─share
```

---

编译PHP5.6使用的VC++11编译器，并且要编译的是64位版本
 - 将 依赖包 deps-5.6-vc11-x64.7z 解压到 E:\php-sdk\phpdev\vc11\x64 下，与已有的 deps 文件夹合并。
 - 将 PHP 源码 php-5.6.27-src.zip  也解压到  E:\php-sdk\phpdev\vc11\x64 下。

现在 E:\php-sdk\phpdev\vc11\x64 结构如下：

![enter description here](http://cooldev-1251672755.cossh.myqcloud.com/cooldev/1525598499664.jpg)


在 “VS2012 命令行工具” 执行以下命令：
进入源码目录
```
cd E:\php-sdk
bin\phpsdk_setvars.bat				#设置临时环境变量
cd E:\php-sdk\phpdev\vc11\x64\php-5.6.27-src	#根据自己放的目录修改
buildconf
configure --help							# --help 查看有哪些参数
```

根据自己需要加上编译选项，我只给几个选项：

```
configure --disable-zts --enable-cli-win32 --with-bz2 --with-curl
```
--disable-zts 表示非线程安全，执行完成后可以看到有哪些模块和信息

```
Enabled extensions:
-----------------------
| Extension  | Mode   |
-----------------------
| bcmath     | static |
| bz2        | static |
| calendar   | static |
| com_dotnet | static |
| ctype      | static |
| curl       | shared |		# shared 动态模块，会生成.dll文件
| date       | static |
| dom        | static |
| ereg       | static |
| filter     | static |
| ftp        | static |
| gd         | shared |
| hash       | static |
| iconv      | static |
| json       | static |
| libxml     | static |
| mysqlnd    | static |
| odbc       | static |
| opcache    | shared |
| pcre       | static |
| phar       | static |
| reflection | static |
| session    | static |
| simplexml  | static |
| spl        | static |
| standard   | static |
| tokenizer  | static |
| wddx       | static |
| xml        | static |
| xmlreader  | static |
| xmlwriter  | static |
| zip        | static |
| zlib       | static |
-----------------------
Enabled SAPI:
-------------
| Sapi Name |
-------------
| cgi       |
| cli       |
| cli_win32 |
-------------
----------------------------------------------
|                 |                          |
----------------------------------------------
| Build type      | Release                  |
| Thread Safety   | No                       |		#非线程安全，nts
| Compiler        | MSVC11 (Visual C++ 2012) |				 #VC++编译器版本
| Architecture    | x86                      |		 #平台
| Optimization    | PGO disabled             |
| Static analyzer | disabled                 |
----------------------------------------------
Type 'nmake' to build PHP
```

构建php：

```
nmake
```
如果要生成 zip 压缩包，再执行完 `nmake` 后 执行：
```
nmake snap
```



## 报错

1. Checking for bison.exe ...  \<not found>

bison.exe 文件是在 php-sdk\bin 目录下，在配置 php-sdk 时 通过命令行执行过一个 `bin\phpsdk_setvars.bat` （往上文翻翻看），就是将 php-sdk\bin 目录加入环境变量，但不是永久性的，当关闭 “VS2012 命令行工具” 时就失效了，需要在编译重新执行一下，也可以自己将`E:\php-sdk\bin` 加入全局环境变量（自己百度下怎么添加环境变量）

```
E:\php-sdk\bin\phpsdk_setvars.bat			#设置临时环境变量
cd E:\php-sdk\phpdev\vc11\x64\php-5.6.27-src	#根据自己放的目录修改
buildconf
configure --help							# --help 查看有哪些参数
```
 2. > ext\calendar\jewish.c(346) : error C2001: 常量中有换行符
ext\calendar\jewish.c(347) : error C2001: 常量中有换行符
ext\calendar\jewish.c(365) : error C2001: 常量中有换行符
ext\calendar\jewish.c(366) : error C2001: 常量中有换行符
ext\calendar\jewish.c(368) : error C2001: 常量中有换行符
NMAKE : fatal error U1077: “"E:\Dev\Microsoft Visual Studio 11.0\VC\BIN\cl.exe"”: 返回代码“0x2”

这个有人在官网上提了一个[bug](https://bugs.php.net/bug.php?id=75100&edit=3)，下面说了解决方法，找到 ext\calendar\jewish.c，用文本编辑器打开，如notepad++，编码->转为UTF-8 无 BOM 编码格式，保存，重新 `nmake`。


![enter description here](http://cooldev-1251672755.cossh.myqcloud.com/cooldev/1525602110936.jpg)









http://museum.php.net/php5/

https://windows.php.net/

https://windows.php.net/downloads/releases/archives/

http://pecl.php.net/

http://php.net/manual/zh/install.pecl.windows.php

http://php.net/manual/zh/install.windows.legacy.index.php#install.windows.building

https://wiki.php.net/internals/windows/compiler

https://wiki.php.net/internals/windows/stepbystepbuild

https://wiki.php.net/internals/windows/windowssdk

https://windows.php.net/snapshots/

https://windows.php.net/downloads/php-sdk/

windows 编译PHP
https://blog.csdn.net/zhaobisheng1/article/details/78416640
https://blog.csdn.net/tangshangkui/article/details/79840748
https://blog.ianli.xyz/2013/09/build-php-and-extension-for-windows/

http://www.kshabazz.net/build-php-on-windows.html


http://www.cnblogs.com/matchless/p/5170785.html