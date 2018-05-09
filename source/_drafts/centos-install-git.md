---
title: centos编译安装git
---

centos默认安装的是1.18.3旧版本，下面编译安装最新版2.17.0

卸载老版本：

`yum remove git`


git:
https://github.com/git/git
https://git-scm.com/

安装说明：
https://github.com/git/git/blob/master/INSTALL

下载最新版的 [v2.17.0][1]  (2018-04-02)


下载解压：
```bash?linenums
wget wget https://github.com/git/git/archive/v2.17.0.tar.gz
tar -zxvf v2.17.0.tar.gz
cd git-2.17.0
mkdir /usr/local/git	#安装目录
```
编译安装：
```bash?linenums
make prefix=/usr/local/git install install-doc install-html install-info
```
或者这样编译安装：
```bash?linenums
$ make configure ;# as yourself
$ ./configure --prefix=/usr/local/git ;# as yourself
$ make all doc ;# as yourself
# make install install-doc install-html;# as root
```

报错： asciidoc: command not found

```bash?linenums
/bin/sh: line 1: asciidoc: command not found
make[1]: *** [git-log.xml] Error 127
make[1]: Leaving directory `/root/git-2.17.0/Documentation'
make: *** [install-doc] Error 2
```
安装  asciidoc

asciidoc官网：http://www.methods.co.nz/asciidoc/index.html
https://sourceforge.net/projects/asciidoc/files/?source=navbar （翻墙）
最新：8.6.9版本(	2013-11-09)
https://cfhcable.dl.sourceforge.net/project/asciidoc/asciidoc/8.6.9/asciidoc-8.6.9.tar.gz

官网安装说明：
```bash?linenums
The autoconf(1) generated configure script creates a make file that is tailored for your system. To install:

$ tar -xzf asciidoc-8.6.9.tar.gz
$ cd asciidoc-8.6.9
$ ./configure
$ sudo make install
To install the documentation:

$ sudo make docs
To uninstall AsciiDoc:

$ sudo make uninstall
```

实际安装过程:

```bash?linenums
wget https://cfhcable.dl.sourceforge.net/project/asciidoc/asciidoc/8.6.9/asciidoc-8.6.9.tar.gz
tar -xzf asciidoc-8.6.9.tar.gz
cd asciidoc-8.6.9
./configure
sudo make install	#非root用户
make install		#root用户
```

继续安装git,等待，又报错：xmlto: command not found
```bash?linenums
/bin/sh: line 1: xmlto: command not found
make[1]: *** [git-log.1] Error 127
```

安装 xmlto

`yum -y install  xmlto`

继续安装git，等待，又报错：docbook2x-texi: command not found
```
/bin/sh: line 1: docbook2x-texi: command not found
make[1]: *** [user-manual.texi] Error 127

```

安装 docbook2X：
使用yum 一键安装
`yum -y install docbook2X` (X要大写)

继续编译git还是不行，于是google，找到[此篇][2]，原来在centos下 docbook2x-texi 不叫这个名字了，而是 db2x_docbook2texi ，需要修改 Documentation/Makefile 

```
vi Documentation/Makefile 
按 / 搜索 DOCBOOK2X_TEXI
修改后面的值为 db2x_docbook2texi
DOCBOOK2X_TEXI = db2x_docbook2texi
```

或者建立一个软链接：
`sudo ln -s /usr/bin/db2x_docbook2texi /usr/bin/docbook2x-texi`


继续编译git，此过程根据机器配置，时间挺长，耐心等待。
`make prefix=/usr/local/git install install-doc install-html install-info`

安装成功，git 是安装在 /usr/local/git 目录下的，需要加入到环境变量中才能全局使用。
```
echo 'export PATH=$PATH:/usr/local/git/bin' > /etc/profile.d/git.sh
source /etc/profile
```

任意位置查看git 版本：
```
# git --version
git version 2.17.0
```




参考：
http://dvbing.blog.163.com/blog/static/164830269201052651939613/
https://www.cnblogs.com/betx/p/6559127.html
https://mozillazg.com/2015/08/install-git-2-on-centos-6.html
https://blog.csdn.net/permanent_2008/article/details/73839315



  [1]: https://github.com/git/git/archive/v2.17.0.tar.gz
  [2]: https://linuxfollies.blogspot.com/2015/11/docbook2x-texi.html