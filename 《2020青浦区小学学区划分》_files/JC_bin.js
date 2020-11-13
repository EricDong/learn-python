//收藏夹
function setBookmark(title) {
	var url=parent.location.href;
	if (window.sidebar) {
		window.sidebar.addPanel(title, url,"");
	} else if( document.all ) {
		window.external.AddFavorite( url, title);
	} else if( window.opera && window.print ) {
		return true;
	}
}

//设为首页
function setHome(obj,vrl){
	try{
		obj.style.behavior='url(#default#homepage)';obj.setHomePage(vrl);
	}
	catch(e){
		if(window.netscape) {
			try {
				netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
			}
			catch (e)
			{
				alertPanel("抱歉！您的浏览器不支持直接设为首页。请在浏览器地址栏输入“about:config”并回车然后将[signed.applets.codebase_principal_support]设置为“true”，点击“加入收藏”后忽略安全提示，即可设置成功。");
			}
			var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch);
			prefs.setCharPref('browser.startup.homepage',vrl);
		}
	}
}

//菜单头搜索动作
function do_search(){
	var s = $("#topkeyword").val();
	s =Trim(s);
	if(s=="" || s=="关键字输入"){
		alert("请输入关键字");
		return false;
	}else
	{
	   window.location.href="http://ss.shanghai.gov.cn/search?q="+encodeURI(s)+"&page=1&view=&contentScope=2&dateOrder=1&tr=1&dr=&format=1&uid=&sid=&re=2&all=1&debug=&siteId=edu.sh.gov.cn&siteArea=all";
	}
}

//内容页的通用搜索动作
function doSearch(formName,textName){
	if($("#"+textName)){
		$("#"+textName).val(Trim($("#"+textName).val()));
	}else{
		$('#keyword').value=Trim($('#keyword').value);
	}
	if($("#"+formName)){
		$("#"+formName).submit();
	}else{
		$('#search_form').submit();
	}

}

//搜索框 初始状态“请输入关键字”
function beginSearch(obj){
	if(obj.value==obj.defaultValue){
		obj.value ='';
		obj.style.color="#000";
	}else if(obj.value==''){
		obj.value=obj.defaultValue;
		obj.style.color="#999";
	}


}

//js去除空格
function LTrim(str)
{
	var whitespace = new String(" \t\n\r");
	var s = new String(str);
	if (whitespace.indexOf(s.charAt(0)) != -1)
	{
		var j=0, i = s.length;
		while (j < i && whitespace.indexOf(s.charAt(j)) != -1)
		{
			j++;
		}
		s = s.substring(j, i);
	}
	return s;
}

function RTrim(str)
{
	var whitespace = new String(" \t\n\r");
	var s = new String(str);
	if (whitespace.indexOf(s.charAt(s.length-1)) != -1)
	{
		var i = s.length - 1;
		while (i >= 0 && whitespace.indexOf(s.charAt(i)) != -1)
		{
			i--;
		}
		s = s.substring(0, i+1);
	}
	return s;
}

function Trim(str)
{
	return RTrim(LTrim(str));
}

function isEmail(email)
{
	invalidChars = " /;,:{}[]|*%$#!()`<>?";
	if(email == "") return false;
	for(i = 0;i < invalidChars.length; i ++) {
		badChar = invalidChars.charAt(i)
		if(email.indexOf(badChar,0) > -1) return false;
	}
	atPos = email.indexOf("@",1)
	if(atPos == -1) return false;
	if(email.indexOf("@",atPos + 1) != -1) return false;
	periodPos = email.indexOf(".",atPos)
	if(periodPos == -1) return false;
	if(atPos + 2 > periodPos) return false;
	if(periodPos + 3 > email.length) return false;
	return true;
}

function strlen(str)
{
	var len;
	var i;
	len = 0;
	for (i=0;i<str.length;i++)
	{
		if (str.charCodeAt(i)>255) len+=2; else len++;
	}
	return len;
}

function trim(s){
 return s.replace(/(^\s*)|(\s*$)/g, "");
}
/** 
 * 弹出层 v2.2
 * Url : http://stylechen.com/easydialog-v2.0.html
 * Author : chenmnkken@gmail.com
 * Date : 2012-04-22
 */
function Body(){
	var dde=document.body;
	if(window.innerWidth)
	{
		this.ww=window.innerWidth;
		this.wh=window.innerHeight;
		this.bgX=window.pageXOffset;
		this.bgY=window.pageYOffset;
	}
	else{
		this.ww=dde.offsetWidth;
		this.wh=dde.offsetHeight;
		this.bgX=dde.scrollLeft;
		this.bgY=document.documentElement.scrollTop;
	}
}



function getWinSize(_target){
	var windowWidth,windowHeight;
	if(_target)target=_target.document;
	else target=document;
	if(self.innerHeight){
		if(_target)target=_target.self;
		else target=self;
		windowWidth=target.innerWidth;
		windowHeight=target.innerHeight;
		}else if(target.documentElement&&target.documentElement.clientHeight){
			windowWidth=target.documentElement.clientWidth;windowHeight=target.documentElement.clientHeight;
			}else if(target.body){
				windowWidth=target.body.clientWidth;
				windowHeight=target.body.clientHeight;
				}
	return{
		width:parseInt(windowWidth),height:parseInt(windowHeight)
		};
}

function DialogShow(showdata,ow,oh,w,h)
{
	//HideOverSels(1);
	var objDialog=document.getElementById("DialogMove");
	if(!objDialog)objDialog=document.createElement("div");
	t_DiglogW=ow;t_DiglogH=oh;
	DialogLoc();
	objDialog.id="DialogMove";
	var oS=objDialog.style;
	oS.display="block";
	oS.top=t_DiglogY+"px";
	
	oS.left=t_DiglogX+"px";
	oS.margin="0px";
	oS.padding="0px";
	oS.width=w+"px";
	oS.height=h+"px";
	oS.position="absolute";
	oS.zIndex="1000";
	oS.border="solid #77AFEE 0px";
	objDialog.innerHTML=showdata;
	
	document.body.appendChild(objDialog);
	//alert(oS.left);
	//new Draggable('showlogin',{scroll:window,handle:'logintitle',revert:function(element){return true;}});
}
function ScreenConvert()
{
	var objScreen=document.getElementById("ScreenOver");
	if(!objScreen)objScreen=document.createElement("div");
	var oS=objScreen.style;
	objScreen.id="ScreenOver";
	oS.display="block";
	oS.top=oS.left=oS.margin=oS.padding="0px";
	oS.width=document.body.scrollWidth+'px';
	oS.height=document.body.scrollHeight+'px';
	oS.position="absolute";
	oS.zIndex="3";
	oS.background="#555";
	oS.filter="alpha(opacity=50)";
	oS.opacity=0.7;oS.MozOpacity=0.5;
	oS.display='';document.body.appendChild(objScreen);
}

function DialogHide(focusId)
{
	ScreenClean();
	var objDialog=document.getElementById("DialogMove");
	if(objDialog)objDialog.style.display="none";
	HideOverSels(0);
	if(focusId){
		var o = document.getElementById(focusId);
		if(o != null && o  != undefined)
			o.focus();
	}
}
function ScreenClean()
{
	var objScreen=document.getElementById("ScreenOver");
	if(objScreen)
	objScreen.style.display="none";
}
var t_DiglogX,t_DiglogY,t_DiglogW,t_DiglogH;
function DialogLoc()
{
	body=new Body;
	//alert(body.ww);
	//alert(t_DiglogW);
	t_DiglogX=(body.ww-t_DiglogW)/2;
	t_DiglogY=(body.bgY+((getWinSize().height-t_DiglogH)/2));
}

function HideOverSels(x)
{
	var sels=document.getElementsByTagName('select');
	var ifra=document.getElementsByTagName('iframe');
	var objt=document.getElementsByTagName('object');
	var emb=document.getElementsByTagName('embed');
	for(var i=0;i<sels.length;i++)if(x){sels[i].style.visibility='hidden';}else{sels[i].style.visibility='visible';}
	for(var i=0;i<ifra.length;i++)if(x&&FhasO(ifra[i])){ 
	ifra[i].style.visibility='hidden'; }else{ ifra[i].style.visibility='visible'; }
	//for(var i=0;i<objt.length;i++)if(x){objt[i].style.visibility='hidden';}else{objt[i].style.visibility='visible';}
	//for(var i=0;i<emb.length;i++)if(x){emb[i].style.visibility='hidden';}else{emb[i].style.visibility='visible';}
}

function FhasO(frm)
{
	//是否隐藏播放器
	if(is_ie){
		if(frm.document.getElementsByTagName('object')){
				return true;
			}else{
				alertPanel("无法加载播放器JS");
				return false;
			}
} else {
		obj=frm.src;
		if(obj!='')
		return true;
		return false;
	}
} 


function cutSpace(textName)
{
	var searchObj = document.getElementById(textName);
	if(searchObj){
		var spacetext = searchObj.value;
		var len = spacetext.length;
		var i;
		var ch;
		var result = "";
		i = 0;
		while (i < len)
		{
			ch = spacetext.charAt(i++);
			result += ch;
			if (ch != ' ')
			{
				continue;
			}
			while (i < len && (ch = spacetext.charAt(i)) == ' ')
			{
				i++;
			}
		}
		searchObj.value = result;
	}

}


function showIframe(state,topDiv,frameDiv,src){
	var cacheobj=$(topDiv).style;
	if (state==0){
	//cacheobj.visibility="hidden";
		cacheobj.display="none";
	}else{
		if($(frameDiv).src=="") $(frameDiv).src=src;
		//cacheobj.visibility=cacheobj.visibility=="hidden"? "visible" : "hidden";
		
		  cacheobj.display=cacheobj.display=="none"? "" : "none";
		  //alert(cacheobj.display);
		}
}



function previewFile(inputId,showdom){
	var x = document.getElementById(inputId);
	if(!x || !x.value) return;
	var patn = /\.jpg$|\.jpeg$|\.gif$/i;
	if(patn.test(x.value)){
		var y = document.getElementById("imagepreview");
		if(y){
			y.src = 'file://localhost/' + x.value;
		}else{
			var img=document.createElement('img');
			img.setAttribute('src','file://localhost/'+x.value);
			img.setAttribute('width','135');
			img.setAttribute('height','84');
			img.setAttribute('id','imagepreview');
			document.getElementById(showdom).appendChild(img);
		}
	}else{
		//alert("您选择的似乎不是图像文件。");
		//删除
		var y = document.getElementById("imagepreview");
		if(y){
			document.getElementById(showdom).removeChild(y);
		}
		
	}
}



function refreshV(){
	//$("#imgZ").html('<img style="width:55px; height:20px; float:left" src="/user/yanzhengma.html?'+Math.random()+'"/>');
}
function loginSub(){
	if($("#clienpass").val() == "" || $("#clienpass").val() == null || $("#clienname").val() == "" || $("#clienname").val() == null){
		alertPanel("用户名或密码为空，请填写！","/user/login.html","clienname");
	}else{
		hash = hex_md5($("#clienpass").val());
		$("#clienpass").val(hash);	
		$.ajax({
			type: "post",
			url: "/user/login_do.html",
			data: $("#loginFormShow").serialize(),
			dataType: 'json',
			async:false,
			success: function(result){	  
			   if(result.flag == "s"){					 
				   window.location.href=result.targetpage;
			   }else if(result.flag == "f"){
				   alertPanel(result.mess,'',result.name);
			   }
			}
		});
	}
};
function showlogin(a)
{
	returnurl='';
	ScreenConvert();
	var logindiv='<div id="showlogin"><form id="loginFormShow" name="loginForm" method="post" action="" autocomplete="off"><table style="width:500px; border:1px solid #ccc; background:#fff;" align="center" cellpadding="0" cellspacing="0"><tr><td><table style="width:480px; border:0; text-align:left;" cellspacing="0" cellpadding="0"><tr><td colspan="2" style="padding:10px;"><a href="javascript:void(0)" title="用户登录窗口" style="font-size:14px; font-weight:bold; color:blue;" id="loginFormShowFD">用户登录</a></td></tr><tr><td colspan="2" style="line-height:22px;padding:0 15px;">&nbsp;&nbsp;&nbsp;&nbsp;亲爱的用户，该项服务需要登陆后才能使用。如果您还没有帐号，请先注册申请；如果您已经注册，请输入用户名和密码进行登录。</td></tr><tr><td colspan="2" align="right" valign="top">&nbsp;</td></tr><tr><td width="178" align="right" valign="top"><img src="/imgs/index8/login_1.gif" width="108" height="137" /></td><td width="322" height="180" align="center"><table width="90%" border="0" cellpadding="2" cellspacing="2"><tr><td width="68" align="right">用户名：</td><td width="202" align="left"><input name="clienname" id="clienname" type="text" size="20" maxlength="20" value="" style="width:130px; height:16px" /></td></tr><tr><td align="right">密 码：</td><td align="left"><input id="clienpass" name="user_pass" type="password" size="20" maxlength="20" value="" style="width:130px; height:16px" autocomplete="off"></td></tr><tr><td><span>输入验证码</span></td><td><input id="yzm" name="yanzhengma" type="text" size="5" maxlength="5" style="float:left" title="请按快捷键ALT+Q播放验证码"/><input type="text" class="codeYZM" onclick="createYZMCode()" readonly="readonly" id="checkYZMCode" style="width: 45px"/><img id="loginImgRead" src="/imgs/yuyin.jpg" style="cursor: pointer;margin-left:5px;" alt="收听验证码" title="收听验证码" align="absmiddle" onclick="playLoginVoice();"/><span id="player_yzm"></span></td></tr><tr><td>&nbsp;</td><td align="left"><input type="hidden" name="loginfrom" value="'+a+'"/><input type="button" name="button" value=" 提 交 " class="butt" onClick="loginSub()"/>&nbsp;&nbsp;<input type="button" name="button2"value=" 取 消 " onclick="DialogHide()" class="butt"/></td></tr><tr><td colspan="2"><hr style="height:1px" /></td></tr></table><table border="0" cellspacing="2" cellpadding="2"><tr><td><img src="/imgs/index8/ico11.gif" width="8" height="7" /></td><td width="80" align="left"><a href="/user/register.html">用户注册</a></td><td><img src="/imgs/index8/ico11.gif" width="8" height="7" /></td><td><a href="/user/getpass.html">忘记密码</a></td></tr></table></td></tr></table></td></tr></table></form></div>';
	DialogShow(logindiv,550,300,550,300);
	//refreshV();
	returnurl=a;
	createYZMCode();
	document.getElementById("loginFormShowFD").focus();
}

function userloginout(a){
	window.location.href="/user/loginout.html?back="+a;
}


/*获取验证码
*/
function createYZMCode(){   
   var checkCode = document.getElementById("checkYZMCode");
   $.ajax({
		type: "GET",
		dataType: "json",
		data: "",
		url: "/user/yanzhengma2014.html?t=" + Math.random(),
		success: function (msg){
		   var num = msg.toString().length;
		   if(checkCode && num == 4){
			   checkCode.className="codeYZM"; 
			   checkCode.value = msg;  
		   }
		 }
	});         
}
/*
*替换默认JS的alter()函数
*/
function alertPanel(msg,flag,focusId)
{
	ScreenConvert();
	var logindiv='<div class="wrapper"><div class="w_top">'+
    '<h2 class="h_blue">&nbsp;&nbsp;&nbsp;&nbsp;<a title="信息提示" href="javascript:void(0)" id="w_top_focusId">信息提示</a></h2>'+
	'<div class="close"><a title="关闭信息提示窗口" href="javascript:DialogHide(\''+focusId+'\');"><img src="/imgs/alertPaint/pop_close.gif" title="关 闭" alt="关 闭" border="0"/></a></div>'+
	'</div><div class="w_cen"><div class="name" style="padding-bottom: 10px;">'+msg+'</div>';
	var shmecURL = /^[a-zA-Z0-9\=\/;@\.\-_\(\)\?{}\&]+$/;
	if(flag != undefined && shmecURL.test(flag)){
		logindiv +='<div class="btn"><input type="button" name="w_butt" onclick="javascript:window.location.href=\''+flag+'\'" value="确 认" class="w_butt" title="确 认"/></div>';
		
	}else{
		logindiv +='<div class="btn"><input type="button" name="w_butt" onclick="DialogHide(\''+focusId+'\');" class="w_butt" value="确 认" title="确 认"/></div>';
	}
	logindiv +='</div><div class="w_bot"></div></div>';
	DialogShow(logindiv,550,300,550,300);
	document.getElementById("w_top_focusId").focus();
}

if($('.sk_click').size() > 0){
	$('.sk_click').each(function(index, element) {
		  $(this).click(function(){
		  var obj5=$(this).siblings().children().eq(1).children('div');
		  if($(this).siblings().hasClass('hideshow')){
			  $(this).siblings().removeClass('hideshow');
			  $(this).siblings().children().eq(0).children().eq(1).removeClass('hideshow');
			  $(this).siblings().children().eq(1).children().eq(1).removeClass('hideshow');
			  var obj1=$(this).siblings().children().eq(0).children().eq(1);
			  var obj2=$(this).siblings().children().eq(0).children().eq(0).children().eq(0);
			  var obj3=$(this).siblings().children().eq(1).children().eq(1);
			  var obj4=$(this).siblings().children().eq(1).children().eq(0).children().eq(0);
				if(obj1.hasClass('hideshow')){
						obj2.text($('.folder').val()).removeClass('tree-close').addClass('blue');
					}else{
						obj2.text($('.add').val()).removeClass('blue').addClass('tree-close');
					}
				if(obj3.hasClass('hideshow')){
						obj4.text($('.folder').val()).removeClass('tree-close').addClass('blue');						
					}else{
						obj4.text($('.add').val()).removeClass('blue').addClass('tree-close');
					}
			  $(this).children().eq(0).text($('.add').val()).removeClass('blue').addClass('tree-close');	 
		  }else{
			   $(this).siblings().addClass('hideshow');
			   $(this).children().eq(0).text($('.folder').val()).removeClass('tree-close').addClass('blue');
			   if(obj5.length==1){
				   $(this).siblings().children().eq(1).children().children().eq(0).text($('.folder').val())
				   .removeClass('tree-close').addClass('blue');
				  }
		   }
		  });
	});
}
if($('.sk_click2').size() > 0){
	$(".sk_click2").each(function(){
		$(this).click(function(){
			if($(this).siblings().hasClass('hideshow')){
				$(this).siblings().removeClass('hideshow');
				$(this).children().eq(0).text($('.add').val()).removeClass('blue').addClass('tree-close');
			 }else{
				 $(this).siblings().addClass('hideshow');
				 $(this).children().eq(0).text($('.folder').val()).removeClass('tree-close').addClass('blue');
			 }
			});
	});
}
