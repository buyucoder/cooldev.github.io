---
title: 基于hexo博客多服务器全自动构建部署系统
---

将hexo博客系统自动部署到多个服务器上

目标：

 - 自动部署到以下服务器:

 1. [Github Pages][1] 
 2. [coding Pages][2]
 3.  自建服务器/FTP


- 通过一个域名智能分配流量到最快的服务,国内国外都能快速打开博客。


## 为什么需要自动构建部署？

hexo 静态博客的优点：全静态，可以用markdown写文字，部署简单，免费的github或一个ftp空间都可以存放。
缺点是：hexo 是基于 nodejs 的，需要安装 nodejs 环境，当我们换了一台电脑需要重新安装环境，并从 github 上克隆下来 博客的代码，略显繁琐，同时每一次新发布文章或者修改了hexo或者主题的配置，都需要 敲命令 hexo generate 和 hexo deploy 来部署，也是略显繁琐。

如果 hexo generate  和 hexo deploy 的过程能够自动，那么当更换电脑时只要下载git环境，写markdown提交就行了，不需要安装nodejs也不需要敲命令来部署。就算不安装git直接在github网站编辑提交也可以。

## 为什么要部署在多个服务器上？

1；【免费】[github][3] 使用方便，空间大，存放代码方便，但是在美国，在国内的访问速度是比较慢的。
2；【免费】codeing.net 是国内的，但是它的静态网站托管功能服务器是在香港的，在国内打开速度是不慢的，但是据测不是很稳定。
3；【收费】因此在添加一个国内的服务器或者ftp？这样更稳定，如果不想续费了，有前面两个网站还是可以打开的。

## 本地搭建 hexo 博客环境



## 建立代码仓库
coding.net的免费会员的git仓库空间只有128M，还不能绑定自定义域名，可以免费升级到银牌会员有512M，可以绑定自定义域名。

因此：
hexo的代码是放在github上同时也放生成后的静态网页，coding.net 只存放生成后的静态网页。

### 建立 github 仓库

仓库名必须是 {username}.github.io 的格式，如 cooldev.github.io

主分支默认为master，建立一个分支 blog-source 用来存放 hexo 的代码。

### 建立 coding 仓库

coding.net的 Pages 服务是分两种的，用户Pages和 项目Pages ,参见[官方文档][4]


| Coding Pages 类型 | Pages 默认分配的 URL                 | 允许的部署来源                                                |     |
| ----------------- | ------------------------------------ | ------------------------------------------------------------- | --- |
| 用户 Pages        | {user_name}.coding.me                | master 分支                                                   |     |
| 项目 Pages        | {user_name}.coding.me/{project_name} | master 分支、coding-pages 分支、或 master 分支中的 /docs 目录 |     |


比如你的用户名是cooldev ，如果创建的仓库名 是  cooldev.coding.me ， 那么访问的域名就是 http://cooldev.coding.me
如果创建的仓库名其他名字如blog ，访问域名是 http://cooldev.coding.me/blog

这个其实没有什么影响，因为我们要绑定域名，不用默认分配的域名。

这里只要一个master分支就行了。

创建仓库完毕后，进入项目 开启 Pages 服务。参见官方[文档][5]

## 通过SSH连接 Github 和 Coding

使用 gitBash 命令行 工具输入，直接三次回车不需要输入密码

```
ssh-keygen -t rsa
```
生成两个文件，id_rsa 和 id_ras.pub ，默认生成目录：

 - Linux 系统：~/.ssh 
 - Mac 系统：~/.ssh 
 - Windows 7及以上系统：C:\Users\{username}\.ssh  管理员：C:\Users\Administrator\.ssh



## Travis CI

自动构建部署使用的是 [Travis CI][6] ，可以完美的和 github 的搭配起来，当往 github 提交后会自动触发 Travis 的构建过程。
了解什么是 Travis ，可以参考阮一峰的博客文章《[持续集成服务 Travis CI 教程][7]》


## 使用 Travis 命令行加密文件和文本

hexo 的 deploy 可以通过 Git  , FTPSync，Rsync ，SFTP，Heroku，OpenShift  方式部署，可以参见 hexo 的[部署文档][8]

通过 Git 的方式 需要使用 SSH 秘钥文件，
通过 FTPSync 的方式 需要使用FTP的账号密码；

通过 Travis CI 部署又需要将这些信息放在github里面 ，这些都是不可以公开的，但是在 github 和 codeing.net 的代码都是公开的（私有项目需要付费）， 所以需要加密 才能保证信息的安全。

加密使用的是 Travis 的命令行工具，Travis命令行工具是基于 Ruby 语言的，所以我们需要先在本地安装 Ruby 环境并安装 travis命令行

```
gem install travis
```
进行登录
```
travis login
```

然后在博客的根目录下建立 .travis 文件夹来存放相关的资料（以下操作在gitbash中输入，不分操作系统）：

```
mkdir .travis && cd .travis
cp ~/.ssh/id_rsa .
travis encrypt-file id_rsa
rm id_rsa
```


  [1]: https://pages.github.com/
  [2]: https://coding.net/v1/pages/
  [3]: https://github.com
  [4]: https://coding.net/help/doc/pages/creating-pages.html
  [5]: https://coding.net/help/doc/pages/creating-pages.html#_Pages
  [6]: https://travis-ci.org/
  [7]: http://www.ruanyifeng.com/blog/2017/12/travis_ci_tutorial.html
  [8]: https://hexo.io/docs/deployment.html