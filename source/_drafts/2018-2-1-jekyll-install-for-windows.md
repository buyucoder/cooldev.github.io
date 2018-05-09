---
layout: post
title: PHP windows 下安装 jekyll
categories: [jekyll,windows]
description:  windows下安装jekyll以及使用说明
keywords: jekyll,windows,ruby
---


## 1. 安装Ruby


Ruby 官网：https://rubyinstaller.org/downloads/

安装 Ruby 2.3.3 版本 64位
https://dl.bintray.com/oneclick/rubyinstaller/rubyinstaller-2.3.3-x64.exe


cmd 中 

```
C:\Users\Administrator>ruby -v
ruby 2.3.3p222 (2016-11-21 revision 56859) [x64-mingw32]
```

## 2. 安装 DEVELOPMENT KIT

For use with Ruby 2.0 to 2.3 (x64 - 64bits only)

DevKit-mingw64-64-4.7.2-20130224-1432-sfx.exe

https://dl.bintray.com/oneclick/rubyinstaller/DevKit-mingw64-64-4.7.2-20130224-1432-sfx.exe

#### 初始化






## 3.安装 jekyll

查看 gem 版本，有版本号才表示 gem 正常
gem -v

安装 jekyll
gem install jekyll

![enter description here][1]

这个地方的安装进度不快，需要耐心等待。

安装完毕后 检查 jekyll

jekyll -v

![enter description here][2]

##  jekyll 命令帮助
可以使用 jekyll --help 先查看下有哪些命令

```
jekyll 3.7.2 -- Jekyll is a blog-aware, static site generator in Ruby

Usage:

  jekyll <subcommand> [options]

Options:
        -s, --source [DIR]  Source directory (defaults to ./)
        -d, --destination [DIR]  Destination directory (defaults to ./_site)
            --safe         Safe mode (defaults to false)
        -p, --plugins PLUGINS_DIR1[,PLUGINS_DIR2[,...]]  Plugins directory (defaults to ./_plugins)
            --layouts DIR  Layouts directory (defaults to ./_layouts)
            --profile      Generate a Liquid rendering profile
        -h, --help         Show this message
        -v, --version      Print the name and version
        -t, --trace        Show the full backtrace when an error occurs

Subcommands:
  docs
  import
  build, b              Build your site
  clean                 Clean the site (removes site output and metadata file) without building.
  doctor, hyde          Search site and print specific deprecation warnings
  help                  Show the help message, optionally for a given subcommand.
  new                   Creates a new Jekyll site scaffold in PATH
  new-theme             Creates a new Jekyll theme scaffold
  serve, server, s      Serve your site locally
```

## 新建 jekyll 项目
```
jekyll new phpdaniu.github.io -s E:\DevCode\github\phpdaniu.github.io
```
-s 指定目录

![enter description here][3]


## 使用 git 导入项目


## 编译网站生产静态页面

使用 jekyll build 来生成静态 页面
```
jekyll build phpdaniu.github.io -s E:\DevCode\github\phpdaniu.github.io -d E:\DevCode\github\phpdaniu.github.io\_site
```
生成的文件在 代码目录下的  \_site ，可以通过 -d 参数指定生成的目录

可能会产生报错，提示是缺少依赖，需要通过使用 gem 来安装，如下图：缺少 tzinfo ， 则使用

gem install tzinfo

![enter description here][4]

安装后还是报错 jekyll 3.7.2 | Error:  No source of timezone data could be found. 查询[资料][5]

gem install tzinfo-data

后面再报错就是缺什么装什么
gem install jekyll-github-metadata
gem install jekyll-paginate
gem install jekyll-sitemap
gem install jekyll-feed
gem install jemoji

  ### Ruby SSL_connect 报错问题
  
  升级 gem , 更换ruby 源
  参考：[ruby-china 源][6]
  
  gem update --system # 这里请翻墙一下
  gem sources --add https://gems.ruby-china.org/ --remove https://rubygems.org/

更换源的时候可能会证书报错，请参考[这里][7]

![enter description here][8]

下载 https://curl.haxx.se/ca/cacert.pem
在Ruby23\lib\ruby\site_ruby\2.3.0\rubygems\ssl_certs\中创建新的文件夹并命名为“gems.ruby-china.org”，最后把cacert.pem文件放入到该文件夹下。

添加之后可以成功更换源；

![enter description here][9]


  [1]: https://www.github.com/phpdaniu/images/raw/master/2018/2/4/1517504821854.jpg "1517504821854"
  [2]: https://www.github.com/phpdaniu/images/raw/master/2018/2/4/1517505622702.jpg "1517505622702"
  [3]: https://www.github.com/phpdaniu/images/raw/master/2018/2/4/1517506462083.jpg "1517506462083"
  [4]: https://www.github.com/phpdaniu/images/raw/master/2018/2/4/1517506794216.jpg "1517506794216"
  [5]: http://www.rubydoc.info/gems/tzinfo/frames
  [6]: http://gems.ruby-china.org/
  [7]: http://blog.csdn.net/ailurus_fulgens/article/details/54287621
  [8]: https://www.github.com/phpdaniu/images/raw/master/2018/2/4/1517753169195.jpg "1517753169195"
  [9]: https://www.github.com/phpdaniu/images/raw/master/2018/2/4/1517753370610.jpg "1517753370610"