weibo_load();
function weibo_load() {
    if (window.addEventListener) {
        window.addEventListener("load", weibo_txtload, false);
    }
    else if (window.attachEvent) {
        window.attachEvent("onload", weibo_txtload);
    }
}
//�Ƽ�����ť
function weibo_txtload() {
    var innerHtml = "<li>������</li>"+
		"<li><a onclick=\"data_sendto('weix');return false;\" title=\"��΢��ɨ���ά����������Ѻ�����Ȧ\"> <img src=\"/imgs/weixin_1.png\" alt=\"��΢��ɨ���ά����������Ѻ�����Ȧ\"></a></li>"+
	"<li><a onclick=\"data_sendto('xinm');return false;\" title=\"��������΢��\"> <img src=\"/imgs/share_1.png\" alt=\"��������΢��\"></a></li>"+
	"<li><a onclick=\"data_sendto('eastday');return false;\" title=\"����������΢��\"><img src=\"/imgs/share_2.png\" alt=\"����������΢��\"></a></li>"+
	"<li><a onclick=\"data_sendto('tsina');return false;\" title=\"��������΢��\"><img src=\"/imgs/share_3.png\" alt=\"��������΢��\"></a></li>"+
	/*"<li><a onclick=\"data_sendto('t163');return false;\" title=\"��������΢��\"><img src=\"/imgs/share_4.png\" alt=\"��������΢��\"></a></li>"+*/
	"<li><a onclick=\"data_sendto('tqq');return false;\" title=\"������Ѷ΢��\"><img src=\"/imgs/share_5.png\" alt=\"������Ѷ΢��\"></a></li>"+
	"<li><a onclick=\"data_sendto('tzone');return false;\" title=\"������Ѷ�ռ�\"><img src=\"/imgs/share_6.png\" alt=\"������Ѷ�ռ�\"></a></li>"+
	/*"<li><a onclick=\"data_sendto('tsohu');return false;\" title=\"�����Ѻ�΢��\"><img src=\"/imgs/share_7.png\" alt=\"�����Ѻ�΢��\"></a></li>"+*/
	"<li><a onclick=\"data_sendto('renren');return false;\" title=\"����������\"><img src=\"/imgs/share_8.png\" alt=\"����������\"></a></li>"+
	"<li><a onclick=\"data_sendto('kaixin001');return false;\" title=\"����������\"><img src=\"/imgs/share_9.png\" alt=\"����������\"></a></li>"+
	"";
    $("#jw_share").html(innerHtml);
}
function data_sendto(a) {
    try { var conf = jiathis_config || {}; } catch (e) { var conf = {}; };
    var ec = encodeURIComponent;
	var	T = document.getElementById('title').value;
	var	ID = parseInt(document.getElementById('article_id').value);
	if(a == 'weix'){
		A = '/web/txwx/index.html?act=getShareBtnxinm&title='+ec(T || document.title)+'&url='+ec(document.location)+'&uid=&jtss=1&summary='+ ec(T || document.title);
	}else if(a == 'xinm'){
		A = 'http://t.xinmin.cn/api/share.php?act=getShareBtnxinm&title='+ec(T || document.title)+'&url='+ec(document.location)+'&uid=&jtss=1&summary='+ ec(T || document.title);
	}else if(a == 'eastday'){
		A = 'http://tframe.eastday.com/index.php?m=blog&a=showsend&con='+ec(document.location)+ec('|||')+ec(T || document.title);
	}else if(a == 'tsina'){
		A = 'http://v.t.sina.com.cn/share/share.php?title='+ec(T || document.title)+'&url='+ec(document.location)+'&source=bookmark';
	}else if(a == 't163'){
		A = 'http://t.163.com/article/user/checkLogin.do?link=http://www.shmec.gov.com&source='+ec('�Ϻ�����')+'&info='+ec(T || document.title)+ ' '+ec(document.location);
	}else if(a == 'tqq'){
		A = 'http://v.t.qq.com/share/share.php?act=getShareBtntqq&title='+ec(T || document.title)+'&url='+ec(document.location)+'&source=bookmark';
	}else if(a == 'tsohu'){
		A = 'http://t.sohu.com/third/post.jsp?act=getShareBtntsohu&title='+ec(T || document.title)+'&url='+ec(document.location)+'&uid=&jtss=1&summary='+ec(T || document.title);
	}else if(a == 'renren'){
		A = 'http://share.renren.com/share/buttonshare.do?link='+ec(document.location)+'&title='+ec(T || document.title);
	}else if(a == 'kaixin001'){
		A= 'http://www.kaixin001.com/repaste/share.php?rtitle='+ec(T || document.title)+'&rcontent='+ec(T || document.title)+'&rurl='+(document.location);
		//Sendkx((T || document.title),(document.location));			
	}else if(a == 'tzone'){
		A = 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?title='+ec(T || document.title)+'&url='+ec(document.location);	
	}		
    try {
		//��ʼ����.
		if(A != '')
        	window.open(A, '������');
		/*ͬʱ�ύ��̨��¼����켣.
		if(a == 'xinm' ||a == 'eastday'||a == 'tsina'||a == 't163'||a == 'tqq'||a == 'tsohu'||a == 'renren'||a == 'kaixin001'||a == 'tzone')
		jQuery.ajax({
            type: "post",
            url: "/wza/jwshare.html",
            data: "title="+ec(T || document.title)+"&article_id="+ID,
            dataType: 'json',
            async:false,
            success: function(response){
                
            }
        });*/			
    } catch (e) {}
    return false;
}
function Sendkx(title,url)
{	
	$("#formKaixin001").attr('action','');
	$("#rtitle").val(title);
	$("#rcontent").val(title);
	$("#rurl").val(url);
	$("#formKaixin001").submit();
	return false;
}