---
title: centos 搭建 git 服务器（二）
---

上一篇 git 已经安装好了，现在需要 添加用户，登录，创建仓库。

新建Git服务器使用的用户

```
useradd git
passwd git
```
111111

在  /data 目录下建立一个 git 用来存放代码仓库

`mkdir -p /data/git`

初始化一个空仓库，仓库名apicenter ，以 .git 结尾：

`git init --bare /data/git/apicenter.git`

修改 属组属主：

`chown -R git:git /data/git/apicenter.git`

可以看到现在 /data/git/apicenter.git 下

```
ll /data/git/apicenter.git/
total 16
drwxr-xr-x 2 git git    6 May  2 22:21 branches
-rw-r--r-- 1 git git   66 May  2 22:21 config
-rw-r--r-- 1 git git   73 May  2 22:21 description
-rw-r--r-- 1 git git   23 May  2 22:21 HEAD
drwxr-xr-x 2 git git 4096 May  2 22:21 hooks
drwxr-xr-x 2 git git   20 May  2 22:21 info
drwxr-xr-x 4 git git   28 May  2 22:21 objects
drwxr-xr-x 4 git git   29 May  2 22:21 refs
```

客户端进行连接：
客户端是在windows下面做开发的，命令行下载 [git-for-windows](https://gitforwindows.org/) ，图形界面可以下载 [sourcetree](https://www.sourcetreeapp.com/) （打开慢可能需要翻墙）

使用sourcetree图形界面， 选择 “克隆/新建”，路径填写：
`ssh://git@192.168.2.202:/data/git/apicenter.git`
默认SSH端口22，如果不是要这样填写（1234是假设端口号）：
`ssh://git@192.168.2.202:1234/data/git/apicenter.git`

![enter description here](http://cooldev-1251672755.cossh.myqcloud.com/cooldev/1525276690137.jpg)


命令行使用，在电脑上建立一个新文件夹，然后在文件内右键，“Git Bash Here”：
`git clone git@192.168.2.202:/data/git/apicenter.git`


192.168.2.202为服务器IP，根据自己的修改。

![首次克隆需要添加主机，输入yes](http://cooldev-1251672755.cossh.myqcloud.com/cooldev/1525274913422.jpg)

这个认证的文件是 known_hosts ，在 用户目录下面 .ssh 文件中。
```
 - Linux 系统：~/.ssh 
 - Mac 系统：~/.ssh 
 - Windows 7及以上系统：C:\Users\{username}\.ssh  管理员：C:\Users\Administrator\.ssh
```


参考：
https://github.com/LandChanning/DevNote/wiki/%E6%90%AD%E5%BB%BAGit%E6%9C%8D%E5%8A%A1%E5%99%A8


https://www.jianshu.com/p/0c939f63af41

https://www.jianshu.com/p/8fa1c989259b

https://www.jianshu.com/p/7a695fe06b18?utm_campaign=maleskine&utm_content=note&utm_medium=seo_notes&utm_source=recommendation

https://www.jianshu.com/p/7a695fe06b18?utm_campaign=maleskine&utm_content=note&utm_medium=seo_notes&utm_source=recommendation