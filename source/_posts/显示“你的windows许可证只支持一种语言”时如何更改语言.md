---
title: 显示“你的windows许可证只支持一种语言”时如何更改语言
tags: 教程
abbrlink: '5e1654'
date: 2025-12-19 12:39:51
---

## 原因&办法

可能是oem厂商的限制，笔记本电脑的windows版本是`CoreCountrySpecific`，所以没法更改语言. 但如果先更改windows许可版本的话，就可以更改语言了. 下面以把`CoreCountrySpecific`转换成常用的`Professional`为例子.

因为`CoreCountrySpecific`的Windows不支持直接转换成`Professional`，所以需要先转换成`ProfessionalEducation`再转换成`Professional`.(实测可行)

## 使用HEU KMS Activator转换

GitHub Release链接：[https://github.com/zbezj/HEU_KMS_Activator/releases](https://github.com/zbezj/HEU_KMS_Activator/releases)

安装时可能会被Windows Defender报毒，建议搭配以下指令使用：

**添加当前目录到白名单:**

```cmd
powershell "try {$null = icim MSFT_MpPreference @{ExclusionPath = @('%~dp0'); Force = $True} Add -Namespace root/Microsoft/Windows/Defender -EA 1} catch {$host.SetShouldExit($_.Exception.HResult)}"
powershell "try {$null = icim MSFT_MpPreference @{ExclusionPath = @('%temp%\_temp_heu168yyds'); Force = $True} Add -Namespace root/Microsoft/Windows/Defender -EA 1} catch {$host.SetShouldExit($_.Exception.HResult)}"
```
**移除当前目录出白名单:**
```cmd
powershell "try {$null = icim MSFT_MpPreference @{ExclusionPath = @('%~dp0'); Force = $True} Remove -Namespace root/Microsoft/Windows/Defender -EA 1} catch {$host.SetShouldExit($_.Exception.HResult)}"
powershell "try {$null = icim MSFT_MpPreference @{ExclusionPath = @('%temp%\_temp_heu168yyds'); Force = $True} Remove -Namespace root/Microsoft/Windows/Defender -EA 1} catch {$host.SetShouldExit($_.Exception.HResult)}"
```

然后在软件的`其他` -> `更改Windows10/11版本`处依次更改Windows版本为`ProfessionalEducation` and`Professional`.

## 直接使用cmd（未实测）

如果不想额外下软件，可以直接使用cmd更改版本.

依次在cmd运行（需要管理员）

```cmd
Dism /online /Set-Edition:ProfessionalEducation
```
重启后运行.
```cmd
Dism /online /Set-Edition:Professional
```

