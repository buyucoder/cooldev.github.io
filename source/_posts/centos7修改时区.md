---
layout: post
title: Centos7 修改时区
date: 2018/8/14 10:39:21
updated: 2018/8/14 10:39:30
comments: true
tags: 
- Centos7
- 时区
categories: 
- Linux
---


查看时区:
```
[vagrant@localhost ~]$ timedatectl | grep "Time zone"
       Time zone: UTC (UTC, +0000)
```

修改时区:
```
sudo timedatectl set-timezone Asia/Shanghai
```

使用ntpdate 同步时间:

安装:
```
yum install -y ntpdate
```

ntpdate 时间服务器

时间服务器:https://blog.csdn.net/maxsky/article/details/53866475

推荐使用:

pool.ntp.org
阿里云的:
ntp1.aliyun.com
ntp2.aliyun.com
ntp3.aliyun.com
ntp4.aliyun.com
ntp5.aliyun.com
ntp6.aliyun.com
ntp7.aliyun.com

```
sudo ntpdate ntp1.aliyun.com
```

crontab定时任务 同步时间:

使用`crontab -e` 添加一行,每20分钟同步一次时间:

```
*/20 * * * * /sbin/ntpdate pool.ntp.org > /dev/null 2>&1

```