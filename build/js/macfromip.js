"use strict";var macfromip=exports,cp=require("child_process"),os=require("os"),MACADDRESS_LENGTH=17;macfromip.getMacInWin32=function(a,b){cp.exec("ping  "+a+" -n 1",function(c,d,e){null!==c&&b("exec error: "+c),null!==e&&""!==e&&b("stderr: "+e);cp.exec("arp -a",function(c,d,e){null!==c&&b("exec error: "+c),null!==e&&""!==e&&b("stderr: "+e);var f=22-a.length;d=d.substring(d.indexOf(a)+(a.length+f)).substring(MACADDRESS_LENGTH,0),b(d)})})},macfromip.getMac=function(a,b,c){if(a!=b)switch(os.platform()){case"win32":macfromip.getMacInWin32(a,function(a){c(a)});break;default:c("Unsupported platform")}else cp.exec("getmac",function(a,b,d){null!==a&&c("exec error: "+a),null!==d&&""!==d&&c("stderr: "+d),c(b.substring(156,173))})};