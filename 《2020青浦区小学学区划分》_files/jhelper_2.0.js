//------------------------------------------------------------------------------------
//���ϰ���ݼ�������������JS
//Version��V1.0
//Author��ivan
//Date��2013-07-03
//------------------------------------------------------------------------------------
var serverUrl = "https://voice.ewdcloud.com/js/tongyi/jhelper/";
//var serverUrl = "http://www.wdit.com.cn/wza/V2.0/";
document.writeln("<script type=\"text/javascript\" src=\"" + serverUrl + "pinyin.js\"  charset=\"gb2312\" ></script>");
document.writeln("<script type=\"text/javascript\" src=\"" + serverUrl + "jhelper_urls.js\" charset=\"gb2312\" ></script>");


//------------------------------------------------------------------------------------
//-----------------------------------�����������忪ʼ------------------------------------

function debugAlert(msg) {
	//alert(msg);
}

//����������ж�

function browserFlag() {
	var Sys = {};
	var ua = navigator.userAgent.toLowerCase();
	var s;
	(s = ua.match(/msie ([\d.]+)/)) ? Sys.ie = s[1] :
		(s = ua.match(/firefox\/([\d.]+)/)) ? Sys.firefox = s[1] :
		(s = ua.match(/chrome\/([\d.]+)/)) ? Sys.chrome = s[1] :
		(s = ua.match(/opera.([\d.]+)/)) ? Sys.opera = s[1] :
		(s = ua.match(/version\/([\d.]+).*safari/)) ? Sys.safari = s[1] : 0;
	return Sys;
}

//cookie����--------------------------
//����cookie//����������һ����cookie�����ӣ�һ����ֵ

function SetCookie(name, value) {
	//�� cookie �������� 30 ��
	var Days = 30;
	var exp = new Date();
	exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
	document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
}

//ȡcookies

function getCookie(name) {
	var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
	if (arr != null) return unescape(arr[2]);
	return null;
}

//ɾ��cookie

function delCookie(name) {
	var exp = new Date();
	exp.setTime(exp.getTime() - 1);
	var cval = getCookie(name);
	if (cval != null) document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
}

// ��ȡx��yλ�õ�element

function getHTMLElementsAtPoint(x, y) {
	var tags = ",";
	var e = document.elementFromPoint(x, y);
	return e;
	while (e) {
		if (e.tagName) {
			tags += e.tagName + ',';
		}
		e = e.parentNode;
	}
	return tags;
}

// fengjunfeng ����ʹ��

function changefoucs(newnav) {
	document.getElementById(newnav).style.display = "block";
}

function changeblur(newnav) {
	document.getElementById(newnav).style.display = "none";
}

function changeinput(newid) {
	if (newid.value != "") {
		newid.value = "";
	}
}

function blurinput(newid) {
	if (newid.value == "") {
		newid.value = "������ؼ���"
	}
}

function getText(element) {
	var elementText;
	if (element.nodeName == "H1" || element.nodeName == "H2" || element.nodeName == "H3" || element.nodeName == "H4" || element.nodeName == "H5" || element.nodeName == "H6")

	{
		element = element.firstChild;
	}
	if (element.nodeName == "#text") {
		elementText = thisElement.nodeValue;
	} else if (element.nodeName == "IMG") {
		if (element.getAttribute("alt")) {
			elementText = element.getAttribute("alt");
		} else if (element.getAttribute("title")) {
			elementText = element.getAttribute("title");
		} else {
			elementText = document.title;
		}
	} else {
		elementText = element.innerText || element.textContent;
	}
	return elementText;
}

// ��ת������

function JTPYStr() {
	return '�����רҵ�Զ�˿������ɥ���ܷ���Ϊ����ô��������ϰ�����������ڿ���ب�ǲ�Ķ�����ڽ����ز����Ǽ����Ż����ɡΰ����������α������Ӷ�����½�����ȿ�٭ٯٶٱٲ��ٳ��ծ�������ǳ����ϴ��ж��������������������ڸԲ�д��ũڣ��������������������ݼ�����ƾ��������ۻ������մ�ɾ���i�ٹ����ܼ��н�����Ȱ����۽����������ѫ����������ҽ��Э����¬±����ȴ�᳧������ѹ���ǲ������ó������ز΅���˫�������Ҷ��̾ߴ�����������Ķ�������߼߽Ż߿��Ա��Ǻ��ӽ���������������������������ܻ�������Ӵ��y��|������������������Х����࿺�������������������԰��Χ���ͼԲʥ�۳��໵���̳�ް����׹¢�����ݿ����ѵ��눙����������������ǵ��Gǽ׳���Ǻ��״�������ͷ��ж���ۼ�ܽ���ױ���������橽�¦�欽�����测OӤ���������������ѧ������ʵ�����ܹ������޶�Ѱ���ٽ�����Ң��ʬ��������������������᫸���ᰵ�����ᴿ��N�Ͽ�i����������ո�ɍ��������۹��ϱ�˧ʦ�������Ĵ�֡����������᥸ɲ���ׯ��®�п�Ӧ���ӷώ��޿������������䵯ǿ�鵱¼���峹�������������黳̬���������������������Ҷ�������������������������ҳͱ�㫲ѵ�����㳷��Ը��\�����������Ϸ�ս꯻�����Ǥִ����ɨ���Ÿ����ҿ�������������£��ӵ��š�����ֿ�Β���̢Ю�ӵ��������Ӓ�����񻻵�����°������������������§��Я�����ҡ��̯������ߢߣߥ���ܵ�����ի쵶�ն���޾�ʱ���D���o�Խ�ɹ�����������������ӻ�ɱ��Ȩ������追ܼ���������������ǹ���ɹ�������դ��ջ���ж����������������������嵵����������׮�Η���������������¥���鷘������ƺ���ӣ�ͳ��������ݻ��ŷ���������������Ź��챱ϱ�ձ�������뵻㺺����������û��Ž���ٲכh�����mŢ����������к�������������ǳ����䥛��ǲ�䫼�䯛����Ũ䱛�Ϳӿ���������Л��������ɬ��Ԩ�����½���������������ʪ�����Ӝ�������������������б�̲����������ΫǱ���������������ֲ��¯�����������˸�������̷����ǻ��̽��Ȼ����������ְ�ү���ǣ������״�����̱���A������ʨ����������������è���̡��_�`���⻷�֫o�����巩�竚���Q��������������걵续�������ű�����ߴ�������Ӹ�������컾������}������̱���Ѣ�񳰨����յ�μ�ǵ���������������������������������ש���������������n��˶���ͳ}�~ȷ�ﰭ���׼�������t����������»����ͺ���ֻ��ƻඌ��˰�����������Ҥ���ѿ��������������ȼ���������ɸ�Y�ݳ�ǩ����������������¨���������������������������׽�����������������Լ����������γ������ɴ���������ڷ�ֽ�Ʒ�����Ŧ������������ϸ֯��称������ﾭ窰��޽������笻��Ѥ������ͳ�篾��������м�簼���������糴�����ά��緱��������������׺��罼������翼�������綶��������Ļ����Ʊ���Ե�Ƹ����Ƿ����ɲ���������������ӧ���������������������ٽ�������޷��������������������ʳ�����ְ���������೦����������в��ʤ�������ֽ�����������ŧ���������������N�������������H��������������ܳ�ս���ܼ��«��έ�����ɲ�������ƻ����������뾣���Q���������������ٻ�����ӫݡݣݥ��ݤݦݧҩݰݯ����ݪݫݲ��ݵӨݺݻ�[��өӪ�����������޽���������������Ǿ������ޭ��޴޻޺²���������Ϻ�ʴ������������������������������Ӭ���Ы����΅���]���β��������Є��Ϯ�Bװ���T���Ͽ����������[�����_�������������������`��������������Ԁ����ڥ�ƶ����ϼ�ڦڧ����ڨ��ѵ��Ѷ��ך����کڪ��ګ������כ�Ϸ���þ�֤ڬڭ����ʶלթ����ڮ�ߴ�ڰگם��ڱڲڳ��ڴʫڵڶ����ڷ����ڸڹ��ѯ��ں�����ڻڼמ������ڽ��ھ�ջ�ڿ˵����������ŵ���·̿�����˭�ŵ�����׻��̸��ı�ȵ�����г����ν�����β�������������נ������лҥ����ǫ�׽�á������̷������������Ǵ���߹��k���긺�O�������Ͱ��˻��ʷ�̰ƶ�Ṻ���ᷡ�����������ܴ�ó�Ѻ������޼ֻ�����¸���������������޸��������ʹ��P�Q���������R׸��׬���������S����Ӯ���W�Ը�������Ծ�����ȼ��Q��������ӻ������������������������������a��ת���������������������������������������b�����������������Թ����c��ꣷ����d����ԯϽշ���ꥴǱ����ɴ�Ǩ�����˻����ԶΥ�������ɼ���ѡѷ��������ң����������������ۣۧۦ֣۩۪�ǵ����N������������⠼����������붤��������ǥ����蕷����������藸����Ѷ۳����Ʊ�������Կ�վ��ٹ���������ť����Ǯ��ǯ�ܲ������������������������������Ǧí������������������������������ͭ��������ա��ϳ���������������綠�ҿ������������������������ﭳ��������ﲷ�п���������������ê���������സ׶���������Ķ������������A������������������B���Ͷ�þ���C�����D�����������ָ�����F�������G�޾��������H���������������������������I�����������J�ⳤ���������\���ʴ��������ȼ�������բ�ֹ����������]��������������^���������������ղ������_���������`�����a��������׼�½¤���������������������ѳ���������ù����������������Τ��킺������ҳ��������˳������˶���������Ԥ­���ľ����F���G���Ƶ�H����Iӱ�����J���ն�������K����ȧ���r�s����t��u�vƮ�쮷�����𗼢����������������α�����¶�����������������������ڹ�������Ȳ��@���A����������������Ԧ��ѱ�����R��¿��ʻ�������פ��������������S�����溧���T������U�V�����������W�X��ƭ���Yɧ����������������������Z������������������������³�����������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������@��𯼦����\Ÿѻ�]�����Ѽ�^���_��ԧ�`��������a�b�����c���������������ȵ�����d�����e���f�g�h���i�����������k���l�m�n�o�Ϻ��p�����������������rӥ���s���t����������d������������ػ������촳�����������������������ȣ���������־����ֻ��ϵ����û��������׼�ӱ��иɾ���';
}

function FTPYStr() {
	return '�f�c�h���I���|�z�G�ɇ��ʂ����S�R�����e�N�x���������l���I�y���̝녁����a���H�C���|�H�ā��}�x���r����ⷕ����ゥ�����t����΁��w�N��L�b�H�e�ɂȃS�~���z�R�����z�������A��E�f�����������������h�m�P�dƝ�B�F�σȌ��Ԍ�܊�r�V�T�n�Q�r���Q�D���R�p���C���P�D�{�P������c�����t�����h�e�}�q�������������������k�Մ�ӄ�ńڄ݄��̈́��Q�T�^�t�A�f���u�R�u�P�l�s���S�d�х��������������B�N���P�h���a�^�p�l׃���B�~̖�U�\�n�ᇘ�Ά�w�� ���Ǉ`�҇I���h�T�J�܆�ԁ�U�����z߸�j�y��푆��}�^�􇂇W�������чO�߇Z����r����K�݇��m�Ӈc�[���D���������u�ڇ������o�F�@��������D�A�}������ĉK�ԉ��ȉΉ]�����ŉŉ������s�׉|�������N�߉P�_��|���q���Ϡ������؉�̎���}���^�F�A�Z�Y�J�^���W�y�D�����������K��I�ƋɌD�ʋz������ȋ����܋�ԋߌO�W�\�������������m���e���������ی����m����ƱM�ӌڌόÌٌҌՎZ�q�M�獏�s�S���u�X�[���h�G�F�{�A�����n�����M��V�􍣍⼹�p얎��Ŏ����������Î����͎Ύ������L�ցK�V�f�c�]�T�쑪�R���U�F�[�_�����������������w��䛏����؏��ƶR���ԑn���ёB�Z���Y����z�������ّ����Q�Ð�Ő�������ґa���@�֑K�͑v�ܑM���T���C���|ؑ��𑿑Б��ߑ����������L�̔U�ВߓP�_�ᒁ���������o����M�n����r�Q�ܓ�쓴�����钶�ϓ��ג�D�]�͓Ɠp��Q�v���ӓ�S�ۓ���������v�R�����y�z�d�[�u�P���t�Δf�X�]�x�\���������S���Y�ؔ��o�f�r�番�ҕ����@�x��ԕϕ������ᄞ�g��C���s���l���q�ܘO�����З����g�������n�����f�d�Ř˗����ɗ������ژ䗫�ә藨����E�n�����u�����������z����������E�Ǚ���Ιx�������M�{�љ����������_�g�e�W���{����������������ݞ�����֚Кښ���菡�h�@�����e�ϛ]���a�r�S��t��������I�͞{�o�T�a���ɛܝ����D�ќ\�{�����۝�y�ҝ��g�I���G�❡���T�������Z�i���u�ݜo�읙���q���՜Y�O�n�^�u�ƝO�c�B���[���񝢞R�s�U���L�������M�]�V�E���I���˞E�u�t���H���z���|�l������`�ĠN���t�������c����q���N�T��������Z�C�a�៨�F�c������۠����Ӡ��ޠُ���E�w�q�N���������M�{���b�z�s���C�J�M�i؈�o�I�H�^�m�����|�h�F���t�z�k�m���c�q�\�I�������a�v�����Y�T늮����ܮ��X�����O��󜯏�������b�d�W�{�A���B�V�D�������T�c�a�`�]�_�dğ�}�����K�}�O�w�I�P�g�{�������A���m���C���\�V�X�a�u�����^�Z�a�[�A�����T�����o���_�|�K���~�A���L�Y�B�[���\���A���U�x�d���N�e�Q�x�v�����d���w�F�`�[�G�Z�C�Q�]�M�Q���V�S�P�a�{�\�e�B�`�Y���~�I�����U�j�D�X�j�������t�@�h�f�[�ei�g�c���S�Z�R�f�o�{��m�u�t�q�w�v�s���w�k�o�x�������������V�{���v�]�����y�������~�����C�X�����M�������K�U�O�E�I�B�[���H���q�Y�f�@�x�W�L�o�k�{�j�^�g�y�������C�����d�^�����w�c�x�m�_�p�b�y�i�K�S�d�R���I�T�^�J�C�`�U�G�Y�l�~�|�}���|�������Z�D���E���������P�����|�������N�`�d�b�p�\�c�p�r�O�V�_�~�z�w�t�s�����i�������\�`�R�Q�U�y���W�_�P�T�`�b�u�w�N�P�E�g�e�u�@�C�c�w�d�I�[Û�{đ�ٖV�L�FÄ�z�}Ē�vĚ�Xē�L�_Ó�TĘ�D�Z�s�|ā�t�e�vĜ�NݛŜŞœ�A�D�W�Hˇ���d�Gʏ�JɐȔ˞�{�O�n�r�K���O�o�d�\�L���O�G�]�R�vʁɜ�w�C�jʎ�sȝ��Ο��n�|�p�a�{ȇȒˎ�Wɉ�Rɏ�P�n�W�@�~���Lɔ�E�}Ξ�I�Mʒ�_�[�rʉ�Y�V�{�E�yʚ�v��N�`�A�@�I�N˒���\̔�]̓�x�A�l�m�rϊ�gρΛ�Qϖ͘�MϠ�|�U�U͐�u·ϓ͑΁Ϟω�X�sϐ�Nϔ�Q�\�D���a�rЖ�\��ы�m�u�U�b�dтў�cѝ�M�@�h���wҊ�^ҍҎҒҕҗ�[�X�JҠ�]�C�D�M�P�U�x�|�zׄ�u�`ӅӋӆӇ�J�Iӓӏӑ׌ӘәӖ�hӍӛӕ�v�M֎�nӠ�G�SӞՓ�K�A�S�O�L�E�C�b�X�u�{�R�w�p�V�\�g�a�~�x�t�v�g�r�E�CԇԟԊԑԜ�\�DԖԒ�QԍԏԎԃԄՊԓԔԌ՟Ԃ�p�]�_�Z�V�`�a�T�d�N�f�b�OՈ�TՌ�Z�xՎ�u�nՆ՘�lՔ�{�~ՏՁ�rՄ�x�\�Rՙ�e�G�C�o�]�^�@�I�X׋�J�O�V�B�i՛՚փו�q�x�{�r՞�t�k֔֙ֆ�vև�T�P�S׎�V�Hח�l�d׏�Y�rؐؑؓؒؕؔ؟�t���~؛�|؜؝ؚ�Hُ�A؞�E�v�S�B�N�F�L�J�Q�M�R�O�\ٗ�Z�V�D�U�T�E�Y�W�B�g�c�l�d�xـ�V�H�p�n�F�k�s�r�yهوٍَِّ٘�Iדٚٛ٠�A�M�X�w�sڅڎ�O�Sۄە�V�`�J�Eۋ�]�Q�x�Pۙ�W�U�bۘ�X�f�k�g�|܇܈܉܎܍ܐ�Dܗ݆ܛ�Z�M�V�_�S�T�Wܠ�F�]�U�p�Y�d�e�I�c�b�`�^�m�o�v݂݅�x݁�y݈�z�wݏݗ݋ݜݔ�\�@ݠݚ�A�H�O�o�q�p߅�|�_�w�^�~�\߀�@�M�h�`�B�t߃ޟ�E�m�x�d�fߊ߉�z�b�����w�]�u�����d�S�P�����i�B�y���j�w�u�����Y���b��Y��������Q�T�A��l�C��{�S��O�]�}�b��g�n�R�c�^��k�j耚J�x�u�^��[��^�o�Z��X�`�Q�����O���X��f�g����F�K��p�U�T��C�B�G��I�o�D��s�B�e�y�t��K�~�X�H��z����b�A��f��x��t��P�C�q��P�|�|�@�y��T���o�n���H�N�i��{�z���~�n�S�s�h�\����J�R�Z�u�|�H��N�e�^�W��K�_�a�d��N�F�\�v���U�V�I��i�O��}�|�I�J���@�R��}��D�X��V�U�t���n�k�����y��^��g�S�M��a�O�R�C���B����h�u��|���j��Z�D�G�C��O�d�s�n��L�T�V�W�Z�\�]���J�c��e�b�g�h�`���l�[�|�Y�}��G�y�w�u��b���A����]�����U�@��T���H�D�F�I�R�X�����A�H��]�����E�U�S�[�`�h�y�rׇ�Z�F�V�q�\�n�o�v�^�X�d�x�f�g�h�n�t�y�w����������B��D���C��@�A�B�I�H�i�R�a�c�M�}���W�U�l�_�j�h�e�f�w�}�����~�D�����h���A�E�L�^�Q�R�S�Z�\�`�_�d�h�j�j�w����}����h��q������T������D���A��E��F��G�L�I�N�H�K�R�Q�W�^�l���k�t��v�x�o�s�}�~�z������R�S�W�Z�Y��_�g�H�z����x�|�v��w�{�A�~��R�������Q�P�G��H��E�U�T�S�K�R���_�s�j�}�\��t�q�~�����E�K�L�J�t�y�x�W�|�u�~������������E�G�T�|�O�W�V�N�U�c�Q�T�q�^�w�n�b�j�f�`�d�q�o�r�~���\���~�����������������z�a�����N���O�E�H�K�A�F�T���L�Y�X���a�l�s�l�[���g�w�{�q�v�m�e�F�c�������������������B�L�M�����I�@�Z�X�[�V�s�h�k�g�B�F�u�S�Q�O�t�f�I�d�c�����R���{���o�|�z�x���r���v���������@���[���M�P�Z�N�]�Z�O���Y�^�o���g�A�l�i�k�����t���������X�\�B�F�g�_�O�V�W�^�Y�Q�s�W�p�w�����������D���I�L�X�U�z�����S�Z�s�t�o�w�x�{����B�O�R�W�X�Z�[�]�e�g�_�f�b�l�r�p�x�}���������I�u���b�e�S���Ӈ��L�\�I��犏��fǬ���K';
}

function Traditionalized(cc) {
	var str = '',
		ss = JTPYStr(),
		tt = FTPYStr();
	for (var i = 0; i < cc.length; i++) {
		if (cc.charCodeAt(i) > 10000 && ss.indexOf(cc.charAt(i)) != -1) str += tt.charAt(ss.indexOf(cc.charAt(i)));
		else str += cc.charAt(i);
	}
	return str;
}

function Simplized(cc) {
	var str = '',
		ss = JTPYStr(),
		tt = FTPYStr();
	for (var i = 0; i < cc.length; i++) {
		if (cc.charCodeAt(i) > 10000 && tt.indexOf(cc.charAt(i)) != -1) str += ss.charAt(tt.indexOf(cc.charAt(i)));
		else str += cc.charAt(i);
	}
	return str;
}

// HashMap
function HashMap() { 

	var size=0; 
	var entry=new Object(); 
	this.put=function(key,value)
	{ 
		if(!this.containsKey(key)){ 
		size++; 
		entry[key]=value; 
		} 
	} 

	this.get=function(key){ 
		return this.containsKey(key) ? entry[key] : null; 
	}

	this.remove=function(key){ 
		if(this.containsKey(key) && ( delete entry[key] )){ 
			size--; 
		}	 
	}	 

	/**�Ƿ����Key**/ 
	this.containsKey= function (key){ 
		return (key in entry); 
	} 

	/**�Ƿ����Value**/ 
	this.containsValue=function(value){ 
		for(var prop in entry) 
		{ 
			if(entry[prop]==value){ 
			return true; 
			} 
		} 
		return false; 
	} 

	/**���е�Value**/ 
		this.values=function(){ 
			var values=new Array(); 
			for(var prop in entry) 
			{ 
				values.push(entry[prop]); 
			} 
			return values; 
	} 

	/**���е� Key**/ 
	this.keys=function(){ 
		var keys=new Array(); 
		for(var prop in entry) 
		{ 
			keys.push(prop); 
		} 
		return keys; 
	}

	/**Map size**/ 
	this.size=function(){ 
		return size; 
	} 

	/**���Map**/ 
	this.clear=function(){ 
		size=0; 
		entry=new Object(); 
	} 
}

// md5
var hexcase = 0; /* hex output format. 0 - lowercase; 1 - uppercase */ 
var b64pad = ""; /* base-64 pad character. "=" for strict RFC compliance */ 
var chrsz = 8; /* bits per input character. 8 - ASCII; 16 - Unicode */

/* 
* These are the functions you'll usually want to call 
* They take string arguments and return either hex or base-64 encoded strings 
*/ 
function hex_md5(s){ return binl2hex(core_md5(str2binl(s), s.length * chrsz));} 
function b64_md5(s){ return binl2b64(core_md5(str2binl(s), s.length * chrsz));} 
function hex_hmac_md5(key, data) { return binl2hex(core_hmac_md5(key, data)); } 
function b64_hmac_md5(key, data) { return binl2b64(core_hmac_md5(key, data)); }

/* Backwards compatibility - same as hex_md5() */ 
function calcMD5(s){ return binl2hex(core_md5(str2binl(s), s.length * chrsz));}

/* 
* Perform a simple self-test to see if the VM is working 
*/ 
function md5_vm_test() 
{ 
return hex_md5("abc") == "900150983cd24fb0d6963f7d28e17f72"; 
}

/* 
* Calculate the MD5 of an array of little-endian words, and a bit length 
*/ 
function core_md5(x, len) 
{ 
/* append padding */ 
x[len >> 5] |= 0x80 << ((len) % 32); 
x[(((len + 64) >>> 9) << 4) + 14] = len;

var a = 1732584193; 
var b = -271733879; 
var c = -1732584194; 
var d = 271733878;

for(var i = 0; i < x.length; i += 16) 
{ 
var olda = a; 
var oldb = b; 
var oldc = c; 
var oldd = d;

a = md5_ff(a, b, c, d, x[i+ 0], 7 , -680876936); 
d = md5_ff(d, a, b, c, x[i+ 1], 12, -389564586); 
c = md5_ff(c, d, a, b, x[i+ 2], 17, 606105819); 
b = md5_ff(b, c, d, a, x[i+ 3], 22, -1044525330); 
a = md5_ff(a, b, c, d, x[i+ 4], 7 , -176418897); 
d = md5_ff(d, a, b, c, x[i+ 5], 12, 1200080426); 
c = md5_ff(c, d, a, b, x[i+ 6], 17, -1473231341); 
b = md5_ff(b, c, d, a, x[i+ 7], 22, -45705983); 
a = md5_ff(a, b, c, d, x[i+ 8], 7 , 1770035416); 
d = md5_ff(d, a, b, c, x[i+ 9], 12, -1958414417); 
c = md5_ff(c, d, a, b, x[i+10], 17, -42063); 
b = md5_ff(b, c, d, a, x[i+11], 22, -1990404162); 
a = md5_ff(a, b, c, d, x[i+12], 7 , 1804603682); 
d = md5_ff(d, a, b, c, x[i+13], 12, -40341101); 
c = md5_ff(c, d, a, b, x[i+14], 17, -1502002290); 
b = md5_ff(b, c, d, a, x[i+15], 22, 1236535329);

a = md5_gg(a, b, c, d, x[i+ 1], 5 , -165796510); 
d = md5_gg(d, a, b, c, x[i+ 6], 9 , -1069501632); 
c = md5_gg(c, d, a, b, x[i+11], 14, 643717713); 
b = md5_gg(b, c, d, a, x[i+ 0], 20, -373897302); 
a = md5_gg(a, b, c, d, x[i+ 5], 5 , -701558691); 
d = md5_gg(d, a, b, c, x[i+10], 9 , 38016083); 
c = md5_gg(c, d, a, b, x[i+15], 14, -660478335); 
b = md5_gg(b, c, d, a, x[i+ 4], 20, -405537848); 
a = md5_gg(a, b, c, d, x[i+ 9], 5 , 568446438); 
d = md5_gg(d, a, b, c, x[i+14], 9 , -1019803690); 
c = md5_gg(c, d, a, b, x[i+ 3], 14, -187363961); 
b = md5_gg(b, c, d, a, x[i+ 8], 20, 1163531501); 
a = md5_gg(a, b, c, d, x[i+13], 5 , -1444681467); 
d = md5_gg(d, a, b, c, x[i+ 2], 9 , -51403784); 
c = md5_gg(c, d, a, b, x[i+ 7], 14, 1735328473); 
b = md5_gg(b, c, d, a, x[i+12], 20, -1926607734);

a = md5_hh(a, b, c, d, x[i+ 5], 4 , -378558); 
d = md5_hh(d, a, b, c, x[i+ 8], 11, -2022574463); 
c = md5_hh(c, d, a, b, x[i+11], 16, 1839030562); 
b = md5_hh(b, c, d, a, x[i+14], 23, -35309556); 
a = md5_hh(a, b, c, d, x[i+ 1], 4 , -1530992060); 
d = md5_hh(d, a, b, c, x[i+ 4], 11, 1272893353); 
c = md5_hh(c, d, a, b, x[i+ 7], 16, -155497632); 
b = md5_hh(b, c, d, a, x[i+10], 23, -1094730640); 
a = md5_hh(a, b, c, d, x[i+13], 4 , 681279174); 
d = md5_hh(d, a, b, c, x[i+ 0], 11, -358537222); 
c = md5_hh(c, d, a, b, x[i+ 3], 16, -722521979); 
b = md5_hh(b, c, d, a, x[i+ 6], 23, 76029189); 
a = md5_hh(a, b, c, d, x[i+ 9], 4 , -640364487); 
d = md5_hh(d, a, b, c, x[i+12], 11, -421815835); 
c = md5_hh(c, d, a, b, x[i+15], 16, 530742520); 
b = md5_hh(b, c, d, a, x[i+ 2], 23, -995338651);

a = md5_ii(a, b, c, d, x[i+ 0], 6 , -198630844); 
d = md5_ii(d, a, b, c, x[i+ 7], 10, 1126891415); 
c = md5_ii(c, d, a, b, x[i+14], 15, -1416354905); 
b = md5_ii(b, c, d, a, x[i+ 5], 21, -57434055); 
a = md5_ii(a, b, c, d, x[i+12], 6 , 1700485571); 
d = md5_ii(d, a, b, c, x[i+ 3], 10, -1894986606); 
c = md5_ii(c, d, a, b, x[i+10], 15, -1051523); 
b = md5_ii(b, c, d, a, x[i+ 1], 21, -2054922799); 
a = md5_ii(a, b, c, d, x[i+ 8], 6 , 1873313359); 
d = md5_ii(d, a, b, c, x[i+15], 10, -30611744); 
c = md5_ii(c, d, a, b, x[i+ 6], 15, -1560198380); 
b = md5_ii(b, c, d, a, x[i+13], 21, 1309151649); 
a = md5_ii(a, b, c, d, x[i+ 4], 6 , -145523070); 
d = md5_ii(d, a, b, c, x[i+11], 10, -1120210379); 
c = md5_ii(c, d, a, b, x[i+ 2], 15, 718787259); 
b = md5_ii(b, c, d, a, x[i+ 9], 21, -343485551);

a = safe_add(a, olda); 
b = safe_add(b, oldb); 
c = safe_add(c, oldc); 
d = safe_add(d, oldd); 
} 
return Array(a, b, c, d);

}

/* 
* These functions implement the four basic operations the algorithm uses. 
*/ 
function md5_cmn(q, a, b, x, s, t) 
{ 
return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s),b); 
} 
function md5_ff(a, b, c, d, x, s, t) 
{ 
return md5_cmn((b & c) | ((~b) & d), a, b, x, s, t); 
} 
function md5_gg(a, b, c, d, x, s, t) 
{ 
return md5_cmn((b & d) | (c & (~d)), a, b, x, s, t); 
} 
function md5_hh(a, b, c, d, x, s, t) 
{ 
return md5_cmn(b ^ c ^ d, a, b, x, s, t); 
} 
function md5_ii(a, b, c, d, x, s, t) 
{ 
return md5_cmn(c ^ (b | (~d)), a, b, x, s, t); 
}

/* 
* Calculate the HMAC-MD5, of a key and some data 
*/ 
function core_hmac_md5(key, data) 
{ 
var bkey = str2binl(key); 
if(bkey.length > 16) bkey = core_md5(bkey, key.length * chrsz);

var ipad = Array(16), opad = Array(16); 
for(var i = 0; i < 16; i++) 
{ 
ipad[i] = bkey[i] ^ 0x36363636; 
opad[i] = bkey[i] ^ 0x5C5C5C5C; 
}

var hash = core_md5(ipad.concat(str2binl(data)), 512 + data.length * chrsz); 
return core_md5(opad.concat(hash), 512 + 128); 
}

/* 
* Add integers, wrapping at 2^32. This uses 16-bit operations internally 
* to work around bugs in some JS interpreters. 
*/ 
function safe_add(x, y) 
{ 
var lsw = (x & 0xFFFF) + (y & 0xFFFF); 
var msw = (x >> 16) + (y >> 16) + (lsw >> 16); 
return (msw << 16) | (lsw & 0xFFFF); 
}

/* 
* Bitwise rotate a 32-bit number to the left. 
*/ 
function bit_rol(num, cnt) 
{ 
return (num << cnt) | (num >>> (32 - cnt)); 
}

/* 
* Convert a string to an array of little-endian words 
* If chrsz is ASCII, characters >255 have their hi-byte silently ignored. 
*/ 
function str2binl(str) 
{ 
var bin = Array(); 
var mask = (1 << chrsz) - 1; 
for(var i = 0; i < str.length * chrsz; i += chrsz) 
bin[i>>5] |= (str.charCodeAt(i / chrsz) & mask) << (i%32); 
return bin; 
}

/* 
* Convert an array of little-endian words to a hex string. 
*/ 
function binl2hex(binarray) 
{ 
var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef"; 
var str = ""; 
for(var i = 0; i < binarray.length * 4; i++) 
{ 
str += hex_tab.charAt((binarray[i>>2] >> ((i%4)*8+4)) & 0xF) + 
hex_tab.charAt((binarray[i>>2] >> ((i%4)*8 )) & 0xF); 
} 
return str; 
}

/* 
* Convert an array of little-endian words to a base-64 string 
*/ 
function binl2b64(binarray) 
{ 
var tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"; 
var str = ""; 
for(var i = 0; i < binarray.length * 4; i += 3) 
{ 
var triplet = (((binarray[i >> 2] >> 8 * ( i %4)) & 0xFF) << 16) 
| (((binarray[i+1 >> 2] >> 8 * ((i+1)%4)) & 0xFF) << 8 ) 
| ((binarray[i+2 >> 2] >> 8 * ((i+2)%4)) & 0xFF); 
for(var j = 0; j < 4; j++) 
{ 
if(i * 8 + j * 6 > binarray.length * 32) str += b64pad; 
else str += tab.charAt((triplet >> 6*(3-j)) & 0x3F); 
} 
} 
return str; 
} 


//------------------------------------------------------------------------------------
//--------------------------------------���������������---------------------------------
//---------------------------������ʾ���ܶ��忪ʼ-----------------------------//
var toolbar = new Object();
toolbar.Function = new Object();
var hiddenTagName = "samp";
var elementFuncHashMap = new HashMap(); 

toolbar.hidestart = "<!--lsf20180515forhide start";
toolbar.hideend = "lsf20180515forhide end-->";

function elementContext() {
	this.thisContext 	= new Object();
	this.funcMouseOver 	= new function(){};
	this.funcMouseOut 	= new function(){};
	this.testValue 		= "what is your";
	this.element        = new Object();
}

function initTextTips() {
	var messageboxText = "";
	messageboxText += "<div class=\"disabilitiesLanguage\">";
        // ���ie6�������ڹ������ϵķ���
        messageboxText += "<iframe style=\"position:absolute;top:0;left:0;width:100%;height:100%;z-index:-1;filter:alpha(opacity=0);\"></iframe>";
	messageboxText += "<div class=\"LanguageMain\" id=\"language\">";
	messageboxText += "<ul class=\"font_titleBar\">";
	messageboxText += "<li><input type=\"button\" title=\"ת��������\" id=\"jhelper_btn01\" class=\"jhelper_btn01\" onclick=\"toolbar.Function.textTips.simpleModel()\"/></li>";
	messageboxText += "<li><input type=\"button\" title=\"ת��������\" class=\"jhelper_btn02\" onclick=\"toolbar.Function.textTips.raditionalModel()\"/></li>";
	messageboxText += "</ul>";
	messageboxText += "<ul class=\"LanguageSpell\">";
	messageboxText += "<li class=\"jhelper_btn01\" id=\"spell\"><input type=\"button\" title=\"��ʾƴ��\" onclick=\"toolbar.Function.textTips.pinyinControl()\"/></li>";
	messageboxText += "<li class=\"jhelper_btn02\"><input type=\"button\" title=\"�ر����ַŴ��Ķ���Ļ\" class=\"input\" onclick=\"toolbar.Function.textTips.mainMethod();\" onMouseDown=\"this.className='inputOn'\" onMouseUp=\"this.className=''\"/></li>";
	messageboxText += "</ul>";
	messageboxText += "</div>";
	messageboxText += "<div class=\"Languagetext\">";
	messageboxText += "<div class=\"LanguageTextMin\">";
	messageboxText += "<div class=\"LanguageTextContent\">";
	messageboxText += "<p><table><tr><td id=\"helper_messageBoxText\"></td></tr></table></p>";
	messageboxText += "</div>";
	messageboxText += "</div>";
	messageboxText += "</div>";
	messageboxText += "<div class=\"disabilitiesFooterBg\"></div>";
	messageboxText += "</div>";

	toolbar.Function.textTips = {
		showHTML: function() {
			if (ABTConfig.textTips.functionSwitch) {
				return "<input id=\"texttipsbutton\" type=\"button\" value=\"������ʾ\" title=\"������ʾ\" onclick=\"toolbar.Function.textTips.mainMethod()\" /><!--<input id=\"pinyinbutton\" type=\"button\" value=\"����ƴ������\" title=\"����ƴ������\"onclick=\"toolbar.Function.textTips.pinyinControl()\" />-->";
			} else {
				return "";
			}
		},
		cookieName: "textTips",
		cookieMethod: function() {
			if (ABTConfig.textTips.cookieSwitch && toolbar.cookie.getCookie(this.cookieName) == 1) {
				toolbar.Function.textTips.mainMethod();
			}
		},
		resetCookie: function() {
			toolbar.cookie.setCookie(this.cookieName, 0);
		},
		testTipsState: false,
		pinyinState: false,
		allTextNode: new Array(),
		isTextNode: function(element) {
			if (element.tagName == "IMG" || element.tagName == "INPUT" || element.tagName == "OBJECT" || element.tagName == "SELECT" || element.tagName == "H1" || element.tagName == "H2" || element.tagName == "H3" || element.tagName == "H4" || element.tagName == "H5" || element.tagName == "H6" || element.tagName == "A" || element.tagName == "li" || element.tagName == "SPAN"|| element.tagName=="a" || element.tagName=="input"|| element.tagName=="img") {
				return true;
			} else {
				return false;
			}
		},
		getTextNode: function(element) {
			var childNodes = element.childNodes;
			for (var i = 0; i < childNodes.length; i++) {
				var thisChild = childNodes[i];
				switch (thisChild.nodeType) {
					case 1:
						this.getTextNode(thisChild);
						break;
					case 3:
						if (this.trim(thisChild.nodeValue).length == 0) {
							break;
						}
						this.allTextNode.push(thisChild);
						break;
				}
				if (thisChild.nodeName == "IMG" || thisChild.nodeName == "INPUT" || thisChild.nodeName == "OBJECT" || thisChild.nodeName == "SELECT") {
					this.allTextNode.push(thisChild);
				}
			}
		},
		AddTag: function() {
			if (this.firstRun) {
				return;
			}
			for (var a = 0; a < this.allTextNode.length; a++) {
				var tagNode = document.createElement(hiddenTagName);
				if (this.allTextNode[a].nodeName == "IMG" || this.allTextNode

					[a].nodeName == "INPUT" || this.allTextNode[a].nodeName == "SELECT") {
					tagNode.setAttribute("class", "getmessage");
					var newNode = this.allTextNode[a].cloneNode(true);
					tagNode.appendChild(newNode);
				} else if (this.allTextNode[a].nodeName == "OBJECT" && this.allTextNode[a].parentNode.nodeName != "OBJECT") {
					tagNode.setAttribute("class", "getmessage");
					var newNode = this.allTextNode[a].cloneNode(true);
					tagNode.appendChild(newNode);
				} else {
					var newString = this.allTextNode[a].nodeValue;
					var reg = /[��������������]/;
					if (true){//reg.exec(newString) == null) {
                        tagNode.setAttribute("class", "getmessage");
                        if (this.allTextNode[a].parentNode.nodeName.toLowerCase() == "script")
                            tagNode.innerHTML = toolbar.hidestart + newString + toolbar.hideend;
                        else
                            tagNode.innerHTML = newString;
					} else {
                        tagNode.setAttribute("class", "getmainmessage");
                        tagNode.innerHTML = this.mySplit(newString, /[��������������]/);
					}
                }
                // && this.allTextNode[a].parentNode.nodeName.toLowerCase() != "script"
                if (this.allTextNode[a].parentNode) {
                    this.allTextNode[a].parentNode.insertBefore(tagNode, this.allTextNode[a]);
                }
			}
			for (var b = 0; b < this.allTextNode.length; b++) {
				if(this.allTextNode[b].parentNode != null) {
					this.allTextNode[b].parentNode.removeChild(this.allTextNode[b]);
				}
			}
			var allOption = $(mainBoxID).get(0).getElementsByTagName("option");
			for (var c = 0; c < allOption.length; c++) {
				if(allOption[c].firstChild != null) {
					var thisMessage = allOption[c].firstChild.cloneNode(true);
					allOption[c].innerHTML = "";
					allOption[c].appendChild(thisMessage);
				}
			}
			this.firstRun = true;

		},
		trim: function(str) {
			return str.replace(/(^\s*)|(\s*$)/g, "");
		},
		mySplit: function(str, reg) {
			var result, x = str,
				y, zzz = true;
			var stringArray = new Array();
			do {
				result = reg.exec(x);
				if (result != null) {
					var stringIndex = result.index;
					stringArray.push(x.substring(0, stringIndex + 1));
					x = x.substring(stringIndex + 1);
				} else {
					stringArray.push(x)
					zzz = false;
				}
			}
			while (zzz)
            var yy = "<" + hiddenTagName + "class=\"getmessage\">";
			for (var a = 0; a < stringArray.length; a++) {
				yy += (a < stringArray.length - 1) ? (stringArray[a] + "</"+hiddenTagName+"><"+hiddenTagName+" class=\"getmessage\">") :

				(stringArray[a]);
            }
            yy += "</" + hiddenTagName + ">";
            return yy;
		},
		pinyingArray: new Array(),
		TraditionalArray: new Array(),
		simplifiedArray: new Array(),
		makeMsgHTMLText: function(arrayText, arrayPinyin) {
			var htmlText = "";
			var CLOUM = 17;

			htmlText += "<table>";

			for (var k = 0; k <= arrayPinyin.length / CLOUM; k++) {
				htmlText += "<tr>";
				for (var i = 0; i + k * CLOUM < arrayPinyin.length && i < CLOUM; i++) {
					htmlText += "<td class=\"jhelper_pinyin\">";
					htmlText += arrayPinyin[i + k * CLOUM];
					htmlText += "</td>";
				}
				htmlText += "</tr>";

				htmlText += "<tr>";
				for (var i = 0; i + k * CLOUM < arrayText.length && i < CLOUM; i++) {
					htmlText += "<td>";
					htmlText += arrayText[i + k * CLOUM];
					htmlText += "</td>";
				}
				htmlText += "</tr>";
			}

			htmlText += "</table>";

			return htmlText;
		},
		getTextNoParam:function() {
			toolbar.Function.textTips.getText(this);
		},
		getText: function(element) {
			var ele = element;
			if (!document.getElementById("helper_messageBoxText") || ele == null || ele.firstChild == null) {
				return;
			}
			var messagebox = document.getElementById("helper_messageBoxText");
			var textMessage = "";
			if (ele.firstChild.nodeName == "IMG") {

				if (ele.parentNode.parentNode.nodeName == "A" || ele.parentNode.nodeName == "A") {
					textMessage = "ͼƬ���ӣ�" + getText(ele.firstChild);
				} else {
					textMessage = "ͼƬ��" + getText(ele.firstChild);
				}
			} else if (ele.firstChild.nodeName == "OBJECT") {
				textMessage = "ý�壺" + ele.firstChild.getAttribute("title");
			} else if (ele.firstChild.nodeName == "SELECT") {
				textMessage = "�����˵�";
			} else if (ele.firstChild.nodeName == "INPUT") {
				var inputType = ele.firstChild.getAttribute("type");
				switch (inputType) {
					case "button":
						textMessage = "������ť��" + ele.firstChild.getAttribute("value");
						break;
					case "image":
						textMessage = "ͼ�ΰ�ť��" + ele.firstChild.getAttribute("alt");
						break;
					case "submit":
						textMessage = "�ύ��ť��" + ele.firstChild.getAttribute("value");
						break;
					case "reset":
						textMessage = "���ð�ť��" + ele.firstChild.getAttribute("value");
						break;
					case "file":
						textMessage = "�ļ���" + ele.firstChild.getAttribute("title");
						break;
					case "password":
						textMessage = "������" + ele.firstChild.getAttribute("title");
						break;
					case "radio":
						textMessage = "��ѡ��" + ele.firstChild.getAttribute("title");
						break;
					case "checkbox":
						textMessage = "��ѡ��" + ele.firstChild.getAttribute("title");
						break;
					case "text":
						textMessage = "�ı���" + ele.firstChild.getAttribute("title");
						break;
				}
			} else if (ele.parentNode.parentNode.nodeName == "A" || ele.parentNode.nodeName == "A") {
				var thisContent;
				if (ele.parentNode.parentNode.nodeName == "A") {
					if (ele.parentNode.parentNode.getAttribute("title")) {
						thisContent = ele.parentNode.parentNode.getAttribute("title");
					} else {
						thisContent = ele.innerText || ele.textContent;
					}
				} else if (ele.parentNode.nodeName == "A") {
					if (ele.parentNode.getAttribute("title")) {
						thisContent = ele.parentNode.getAttribute("title");
					} else {
						thisContent = ele.innerText || ele.textContent;
					}
				}
				textMessage = "���ӣ�" + thisContent;
			} else if (ele.parentNode.nodeName == "H1" || ele.parentNode.nodeName == "H2" || ele.parentNode.nodeName == "H3" || ele.parentNode.nodeName == "H4" || ele.parentNode.nodeName == "H5" || ele.parentNode.nodeName == "H6") {
				var thisContent = ele.innerText || ele.textContent;
				textMessage = "���⣺" + thisContent;
			} else {
				//console.log("2:" + ele.innerHTML || ele.textContent);
				var thisContent = ele.innerText || ele.textContent;
				textMessage = "�ı���" + thisContent;
			}
			var messageboxWidth = messagebox.offsetWidth;
			var fontRatio = messageboxWidth / textMessage.length;
			//alert(messageboxWidth+"|"+textMessage.length+"|"+fontRatio);
			if (fontRatio < 30) {
				if (fontRatio > 18) {
					messagebox.style.fontSize = parseInt(fontRatio) + "px";
					messagebox.style.lineHeight = parseInt(fontRatio) + "px";
				}
				if (fontRatio < 10) {
					messagebox.style.fontSize = parseInt(fontRatio * 2) + "px";
					messagebox.style.lineHeight = parseInt(fontRatio * 2) + "px";
				}
			} else {
				messagebox.style.fontSize = "";
			}

			if (INSTANCE.pinYing == "1") {

				if (INSTANCE.isSimplifiedModel == "0") {
					toolbar.Function.textTips.pinyinText(textMessage);
					var traditionText = Traditionalized(textMessage);
					toolbar.Function.textTips.TraditionalArray = traditionText.split("");
					textMessage = toolbar.Function.textTips.makeMsgHTMLText(toolbar.Function.textTips.TraditionalArray, toolbar.Function.textTips.pinyingArray);

				} else {
					toolbar.Function.textTips.simplifiedArray = textMessage.split("");
					toolbar.Function.textTips.pinyinText(textMessage);
					textMessage = toolbar.Function.textTips.makeMsgHTMLText(toolbar.Function.textTips.simplifiedArray, toolbar.Function.textTips.pinyingArray);
				}

			} else {
				if (INSTANCE.isSimplifiedModel == "0") {
					textMessage = Traditionalized(textMessage);
				}
			}

			// ������Ϣ������
			messagebox.innerHTML = textMessage;
			textMessage = "";
			if (toolbar.Function.textTips.textbgState) {
				ele.style.backgroundColor = "#F00";
				ele.style.color = "#FFF";
			}
		},
		pinyinText: function(text) {
			var messayArray = text.split("");
			var newString = "";
			this.pinyingArray = new Array();
			for (var a = 0; a < messayArray.length; a++) {
				var testVar = "";
				if (pinyin[messayArray[a]]) {
					testVar = pinyin[messayArray[a]];
				} else {
					testVar = "&nbsp;";
				}
				if (messayArray[a] == " ") {
					messayArray[a] = "&nbsp;";
				}
				this.pinyingArray.push(testVar);
			}
			return newString;
		},
		getEvent: function() {
			var allSpan = $(mainBoxID).get(0).getElementsByTagName(hiddenTagName);
			for (var c = 0; c < allSpan.length; c++) {
				if (allSpan[c].getAttribute("class") == "getmessage") {
					allSpan[c].onmouseover = this.getTextNoParam;
					allSpan[c].onmouseout = this.clearTextbgNoParam;
				}
			}

			// ����iframe��ʽ
			var iframeNode = document.getElementById(JHelperConfig.mainBox).getElementsByTagName("iframe");
			if (!iframeNode) {
				return;
			}
			for (var i = 0; i < iframeNode.length; i++) {
				var iframeObject = iframeNode[i].contentWindow;
				this.addEventForIframe(iframeObject);
			}
		},
		addEventForIframe: function(iframeObject) {
				try {
					var iFrameAllNode = iframeObject.document.getElementsByTagName("body")[0].getElementsByTagName("*");
					for (var j = 0; j < iFrameAllNode.length; j++) {
						var element = iFrameAllNode[j];
						if(element.tagName == 'iframe' || element.tagName == 'IFRAME') {
							this.addEventForIframe(element.contentWindow);
						}else if (this.isTextNode(element)) {

							var value 			= new elementContext();
							value.thisContext 	= this;
							value.funcMouseOver = element.onmouseover;
							value.funcMouseOut 	= element.onmouseout;
							value.element 		= element;
							elementFuncHashMap.put(hex_md5(element.innerHTML),value);

							element.onmouseout = function() {

							    var context = elementFuncHashMap.get(hex_md5(this.innerHTML));
							    if (context && typeof(context.funcMouseOut) == 'function') {
							        context.funcMouseOut();
							    }
							    if(context) {
							    	context.thisContext.clearTextbg(this);
							    } else {
							    	//alert(hex_md5(this.innerHTML));	
							    }
							}

							element.onmouseover = function() {
							    var context = elementFuncHashMap.get(hex_md5(this.innerHTML));
							    if (context && typeof(context.funcMouseOver) == 'function') {
							        context.funcMouseOver();
							    }
							    if(context) {
							    	context.thisContext.getText(this);
							    } else {
							    	//alert(hex_md5(this.innerHTML));
							    }
							}

							//element.onmouseover = this.getText;
							//element.onmouseout = this.clearTextbg;
						}
					}
				} catch (e) {}
		},

		simpleModel: function() {
			INSTANCE.isSimplifiedModel = INSTANCE.isSimplifiedModel = "1";
		},
		raditionalModel: function() {
			INSTANCE.isSimplifiedModel = INSTANCE.isSimplifiedModel = "0";
		},
		pinyinControl: function() {
			INSTANCE.pinYing = INSTANCE.pinYing == "0" ? "1" : "0";
			//SetCookie("pinYing", INSTANCE.pinYing);
			/*
			this.pinyinState = this.pinyinState ? false : true;
			if (this.pinyinState) {
				document.getElementById("pinyinbuttonbox").firstChild.innerHTML = "�ر�ƴ������";
			} else {
				document.getElementById("pinyinbuttonbox").firstChild.innerHTML = "����ƴ������";
			}*/
		},
		firstRun: false,
		textbgState: false,
		textbg: function() {
			this.textbgState = this.textbgState ? false : true;
			document.getElementById("textbgbuttonbox").getElementsByTagName("a")[0].innerHTML =

			this.textbgState ? "�رձ�ǹ���" : "������ǹ���";
		},
		clearTextbgNoParam: function() {
			toolbar.Function.textTips.clearTextbg(this);
		},
		clearTextbg: function(element) {
			var ele = element || this;
			ele.style.backgroundColor = "";
			ele.style.color = "";
		},
		mainMethod: function() {
			//if(!ABTConfig.textTips.functionSwitch||getE.error){return;};
			if (!this.textGetState) {
				if ($("#gettextmessagebox").length > 0) {

					this.textGetState = true;
					document.body.style.paddingBottom = 160 + "px";

					$("#gettextmessagebox").show();
					foldToolBar();
					toggleMsgBoxBtn();
					$("#jhelper_btn01").get(0).focus();
					return;
				}
				var newMessageBox = document.createElement("div");
				newMessageBox.setAttribute("id", "gettextmessagebox");
				newMessageBox.innerHTML = messageboxText;
				document.body.insertBefore(newMessageBox, $(mainBoxID).get(0));
				document.body.style.paddingBottom = 160 + "px";
				document.body.style.width = "100%";
				document.body.style.float = "left";
				//document.getElementById("pinyinbuttonbox").firstChild.focus();
				this.getTextNode($(mainBoxID).get(0));

				this.AddTag();
				this.getEvent();
				this.textGetState = true;
				//bindPageJS();
				bindMessageBoxJS();
				foldToolBar();
				toggleMsgBoxBtn();
				$("#jhelper_btn01").get(0).focus();
			} else {
				$("#gettextmessagebox").hide();
				document.body.style.paddingBottom = 0 + "px";
				document.body.style.overflow = "";
				this.textGetState = false;
				toggleMsgBoxBtn();
				$("#screen_input").get(0).focus();
			}
			INSTANCE.textTips = this.textGetState ? "1" : "0";
			SetCookie("textTips", this.textGetState ? "1" : "0");
			//toolbar.cookie.setCookie(this.cookieName,this.textGetState?1:0);
		},
		getIframeTextNode: function() {
			// ����iframe��ʽ
			var iframeNode = document.getElementById(JHelperConfig.mainBox).getElementsByTagName("iframe");
			if (!iframeNode) {
				return;
			}
			for (var i = 0; i < iframeNode.length; i++) {
				var iframeObject = iframeNode[i].contentWindow;
				try {
					var iFrameAllNode = iframeObject.document.getElementsByTagName("body")[0];
					this.getTextNode(iFrameAllNode);
				} catch (e) {
				//alert(e);
				}
			}
		}
	}
}
//---------------------------������ʾ�������-----------------------------//

//---------------------------ҳ��js���忪ʼ-----------------------------//
var toolBarFoldFlag = 0;
var openMsgBoxFlag = 0;

function toggleMsgBoxBtn() {
	if (openMsgBoxFlag == 0) {
		openMsgBox();
	} else {
		closeMsgBox();
	}
}

function openMsgBox() {
	openMsgBoxFlag = 1;
	$("#screen_input").attr("title", "�ر����ַŴ��Ķ���Ļ");
	$("#screen").attr('class', 'jhelper_open');
	createNodeDiv("wcagnav", "��Ļ�����ѿ���");
}

function closeMsgBox() {
	openMsgBoxFlag = 0;
	$("#screen_input").attr("title", "�������ַŴ��Ķ���Ļ");
	$("#screen").attr('class', 'jhelper_close');
	createNodeDiv("wcagnav", "��Ļ�����ѹر�");
}

function bindPageJS() {
	// ��ҳ��Աȶ�Ч���ű�
	doorList('tab');
	doorList('language');
	doorList('txt');

	// �󶨸����߿���Ч���ű�
	$("#line").toggle(function() {
			$("#line_input").attr('title', '�رո�����');
			$(this).attr('class', 'jhelper_open');
		},
		function() {
			$("#line_input").attr('title', '�򿪸�����');
			$(this).attr('class', 'jhelper_close');
		});

	$("#spell").toggle(function() {
			$(this).attr('class', 'jhelper_open')
		},
		function() {
			$(this).attr('class', 'jhelper_close')
		});

	//$("#screen").click(toggleMsgBoxBtn);

	$("#txt").toggle(function() {
			txtName.innerHTML = "����"
			$(this).attr('class', 'jhelper_open')
			$("#txt_input").attr('title', 'ת��ͼ��ģʽ��ҳ')
		},
		function() {
			txtName.innerHTML = "ҳ��"
			$(this).attr('class', 'jhelper_close')
			$("#txt_input").attr('title', 'ת�����ı�ģʽ��ҳ')
		});

	$("#fold").click(function() {
		if (toolBarFoldFlag == 0) {
			foldToolBar();
		} else {
			unfoldToolBar();
		}
	});
}

// �۵�����������

function foldToolBar() {
	$("#fold").get(0).setAttribute("title", "չ��������");
	$(".disabilitiesNav").attr('class', 'disabilitiesNavFold');
	toolBarFoldFlag = 1;
	document.body.style.paddingTop = '0px'; //wcagNavDiv.get(0).offsetHeight + "px";
}
// �۵�����������

function unfoldToolBar() {
	$("#fold").get(0).setAttribute("title", "�۵�������");
	$(".disabilitiesNavFold").attr('class', 'disabilitiesNav');
	toolBarFoldFlag = 0;
	document.body.style.paddingTop = '34px';
}

// ��ʼ��������ʾ�����

function bindMessageBoxJS() {
	doorList('language');

	$("#spell").toggle(function() {
			$(this).attr('class', 'jhelper_open')
		},
		function() {
			$(this).attr('class', 'jhelper_close')
		});
}

function doorList(id) {
	var curentId = 0;
	$("#" + id + " .font_titleBar li:eq(0)").addClass("disabilitiesNow");
	$("#" + id + " .door:eq(0)").show();
	$("#" + id + " .font_titleBar li").click(function() {
		if ($(this).attr('class') == 'link') {
			return;
		}
		if (curentId != $(this).index()) {
			curentId = $(this).index();
			var curentDiv = $("#" + id + " div div.door").eq(curentId);
			var curentHeight = $(curentDiv).height();
			$("#" + id + " .font_titleBar li").removeClass("disabilitiesNow");
			$(this).addClass("disabilitiesNow");

		};
	});
}
//---------------------------ҳ��js�������-----------------------------//


function initJSHelperEvent() {
	addKeyListenerToIframe();
}
// ��ʼ������ģ��

function initJSHelper() {
	debugAlert("initJSHelper");
	declareConfig();
	mainBoxID = "#" + JHelperConfig.mainBox;
	// ��ʼ��
	initTextTips();
	initData();
	debugAlert(toolbar.Function.textTips);
	// �����¼�
	initKeyEventListener();
	// �ָ��ϴ�״̬
	setTimeout(restoreStatus, 1000);
}
//------------------------------------------------------------------------------------
//--------------------------------------��������ʼ����-----------------------------------

// ��ʼ������

function initData() {
	INSTANCE.openFlag = getCookie("openFlag");
	if (!INSTANCE.openFlag) {
		INSTANCE.openFlag = "0";
	}
	INSTANCE.textFlag = getCookie("textFlag");
	//if (!INSTANCE.textFlag) {
	INSTANCE.textFlag = "0";
	//}
	INSTANCE.zoomValue = parseInt(getCookie("zoomValue"));
	debugAlert("INSTANCE.zoomValue:" + INSTANCE.zoomValue);
	if (INSTANCE.zoomValue > 2 || INSTANCE.zoomValue <= 0 || isNaN(INSTANCE.zoomValue)) {
		INSTANCE.zoomValue = 1;
	}
	INSTANCE.fontValue = parseInt(getCookie("fontValue"));
	//if (INSTANCE.fontValue > 32 || INSTANCE.fontValue < 16 || isNaN(INSTANCE.fontValue)) {
	INSTANCE.fontValue = 16;
	//}
	INSTANCE.colorFlag = getCookie("colorFlag");
	if (!INSTANCE.colorFlag) {
		INSTANCE.colorFlag = "0";
	}
	INSTANCE.lineFlag = getCookie("lineFlag");
	if (!INSTANCE.lineFlag) {
		INSTANCE.lineFlag = "0";
	}
	INSTANCE.textTips = getCookie("textTips");
	if (!INSTANCE.textTips) {
		INSTANCE.textTips = "0";
	}

	INSTANCE.isSimplifiedModel = getCookie("isSimplifiedModel");
	if (!INSTANCE.isSimplifiedModel) {
		INSTANCE.isSimplifiedModel = "1";
	}
	INSTANCE.pinYing = getCookie("pinYing");
	if (!INSTANCE.pinYing) {
		INSTANCE.pinYing = "0";
	}
	INSTANCE.browser = browserFlag();
}

// �ָ����ϴε�״̬

function restoreStatus() {
    $.fn.extend({
        toggle: function (fn1, fn2) {
            $(this).bind("click", function () {
                if ($(this).attr("lsfAlreadyToggle") && $(this).attr("lsfAlreadyToggle") == "1") {
                    $(this).attr("lsfAlreadyToggle", "0");
                    if (fn2)
                        fn2.call(this);
                    else
                        $(this).show();
                }
                else {
                    $(this).attr("lsfAlreadyToggle", "1");
                    if (fn1)
                        fn1.call(this);
                    else
                        $(this).hide();
                }
            });
        }
    });
	//��������ʼ��	
	/*
	if (INSTANCE.textFlag == "1") {
		textFunction();
	}
	if (INSTANCE.zoomValue > 1) {
		pageFunction(INSTANCE.zoomValue);
	}
	if (INSTANCE.fontValue > 16) {
		fontFunction(INSTANCE.fontValue);
	}
	if (INSTANCE.colorFlag != "0") {
		asyDoSetColorFunction(INSTANCE.colorFlag);
	}
	if (INSTANCE.lineFlag == "1") {
		lineFunction();
	}*/
	if (INSTANCE.openFlag == "1" || (typeof(JHelperConfig.AutoOpen) != "undefined") && (JHelperConfig.AutoOpen == "1")) {
		openToolBar();
	}
	debugAlert("INSTANCE.openFlag:" + INSTANCE.openFlag);
}

// ����key�¼�

function initKeyEventListener() {
	// �¼�����
	document.onkeydown = function KeyDownEvent(e) {
		//��ݼ���ȡ
		var currkey = 0,
			e = e || event || window.event;
		currkey = e.keyCode || e.which || e.charCode;
		//��ݼ����̼���
		accessKeyboardListener(currkey, e);
		//���������̼���
		toolBarKeyDownEvent(currkey, e);
	}
}
/*
 * ���ƴ򿪣��رո���������
 */

function toggleToolBar() {
	if(!checkValid()) {
		return;
	}
	if (INSTANCE.openFlag == "0") {
		openToolBar();
		INSTANCE.openFlag = "1";
		SetCookie("openFlag", "1");
	} else {
		INSTANCE.openFlag = "0";
		SetCookie("openFlag", "0");
		closeToolBar();
		setTimeout(resetNavToolbar, 1000);
		//resetNavToolbar();
	}
}
function checkValid() {
	var host = document.domain;
	if(1) {
		return true;
		}
	else {
		return true;
	}
}
/*
 * �򿪸���������
 */

function openToolBar() {

	var wcagNavDiv = $("#wcagnav");
	if (wcagNavDiv.length == 0) {
		creatWcagNav();
		wcagNavDiv = $("#wcagnav");
	}

	wcagNavDiv.show(1000, function() {
		wcagNavDiv.get(0).style.display = "block";
		document.body.style.paddingTop = wcagNavDiv.get(0).offsetHeight + "px";
	});

	INSTANCE.openFlag == "1";
	SetCookie("openFlag", "1");


	if (toolbar.Function.textTips.textGetState == true) {
		$("#gettextmessagebox").show();
	}
	createNodeDiv("wcagnav", "�������ѿ���,�����밴ALT+1");
	//wcagNavDiv.style.display = "block";
	//document.body.style.paddingTop = wcagNavDiv.offsetHeight + "px";
}

/*
 * �رո���������
 */

function closeToolBar() {
	var wcagNavDiv = $("#wcagnav");
	wcagNavDiv.hide(1000, function() {
		wcagNavDiv.get(0).style.display = "none";
		document.body.style.paddingTop = wcagNavDiv.get(0).offsetHeight + "px";
	});

	$("#gettextmessagebox").hide();
	createNodeDiv("wcagnav", "�������ѹر�");
}

/*
 * ��������������
 */

function creatWcagNav() {

	var toolbarinnerText = getToolbarInnerText();

	//����������
	var navToolbarDiv = document.createElement("div");
	navToolbarDiv.setAttribute("id", "wcagnav");
	navToolbarDiv.style.display = "none";
	navToolbarDiv.innerHTML = toolbarinnerText;
	document.body.insertBefore(navToolbarDiv, document.body.firstChild);

	// ��ҳ��Ч���ű�
	bindPageJS();
}

function getToolbarInnerText() {

	var textHTML = "";
	// ��������
	textHTML += "<div class=\"disabilitiesNav\">";
        // ���ie6�������ڹ������ϵķ���
        textHTML += "<iframe style=\"position:absolute;top:0;left:0;width:100%;height:100%;z-index:-1;filter:alpha(opacity=0);\"></iframe>";
	textHTML += "<div class=\"disabilitiesMain\"  id=\"tab\">";
	textHTML += "<div class=\"disabilitiesContent\">";
	textHTML += "<ul class=\"disabilitiesN1\">";
	textHTML += "<span id=\"txtName\">ҳ��</span>";
	textHTML += "<li class=\"jhelper_btn01\"><input id=\"jhelper_zoom_in\" type=\"button\" title=\"�Ŵ�ҳ��\" onclick=\"openPageFunction(0);\" class=\"input\" onMouseDown=\"this.className='inputOn'\" onMouseUp=\"this.className=''\"/></li>";
	textHTML += "<li class=\"jhelper_btn02\"><input id=\"jhelper_zoom_out\" type=\"button\" title=\"��Сҳ��\" onclick=\"openPageFunction(1);\" class=\"input\" onMouseDown=\"this.className='inputOn'\" onMouseUp=\"this.className=''\"/></li>";
	textHTML += "</ul>";
	textHTML += "<ul class=\"disabilitiesN2 font_titleBar\">";
	textHTML += "<span>��ɫ</span>";
	textHTML += "<li class=\"jhelper_btn01\"><input type=\"button\" title=\"ҳ������ɫ\" onclick=\"asySetColorFunction('0');\"class=\"disabilitiesM1\"/><em class=\"disabilitiesB1\"></em></li>";
	textHTML += "<li class=\"jhelper_btn02\"><input type=\"button\" title=\"���׻�����ɫ\" onclick=\"asySetColorFunction('1');\"class=\"disabilitiesM2\"/><em class=\"disabilitiesB2\"></em></li>";
	textHTML += "<li class=\"jhelper_btn03\"><input type=\"button\" title=\"�Ƶ�������ɫ\" onclick=\"asySetColorFunction('2');\"class=\"disabilitiesM3\"/><em class=\"disabilitiesB3\"></em></li>";
	textHTML += "<li class=\"jhelper_btn04\"><input type=\"button\" title=\"�ڵ׻�����ɫ\" onclick=\"asySetColorFunction('3');\"class=\"disabilitiesM4\"/><em class=\"disabilitiesB4\"></em></li>";
	textHTML += "<li class=\"jhelper_btn05\"><input type=\"button\" title=\"�׵׺�����ɫ\" onclick=\"asySetColorFunction('4');\"class=\"disabilitiesM5\"/><em class=\"disabilitiesB5\"></em></li>";
	textHTML += "</ul>";
	textHTML += "<ul class=\"disabilitiesN3\">";
	textHTML += "<span>������</span>";
	textHTML += "<li id=\"line\"><input id='line_input' type=\"button\" title=\"�򿪸�����\" onclick=\"openLineFunction()\"/></li>";
	textHTML += "</ul>";
	textHTML += "<ul class=\"disabilitiesN4\">";
	textHTML += "<li class=\"jhelper_btn01\"><input type=\"button\" title=\"����ҳ��\" onclick=\"resetNavToolbar();\" class=\"input\" onMouseDown=\"this.className='inputOn'\" onMouseUp=\"this.className=''\"/></li>";
	textHTML += "<li class=\"jhelper_btn02\"><input type=\"button\" title=\"�۵�������\" class=\"input\" onMouseDown=\"this.className='inputOn'\" onMouseUp=\"this.className=''\" id=\"fold\"/></li>";
	textHTML += "</ul>";
	textHTML += "</div>";
	textHTML += "</div>";
	textHTML += "<div class=\"disabilitiesTopBg\"></div>";
	textHTML += "</div>";

	// �Ҳ�����
	textHTML += "<div class=\"disabilitiesRight\">";
	textHTML += "<ul>"
	textHTML += "<li id=\"screen\"><input id='screen_input' type=\"button\" class=\"jhelper_btn01\" title=\"�������ַŴ��Ķ���Ļ\" onclick=\"toolbar.Function.textTips.mainMethod();\"/></li>";
	textHTML += "<li id=\"txt\"><input id='txt_input' type=\"button\" class=\"jhelper_btn02\" title=\"ת�����ı�ģʽ��ҳ\" onclick=\"openTextFunction();\"/></li>";
	textHTML += "<li><input type=\"button\" class=\"jhelper_btn03\" title=\"�����ϰ�����������\" onclick=\"navToolbarHelp();\"/></li>";
	textHTML += "<li><input type=\"button\" class=\"jhelper_btn04\" title=\"�ر����ϰ�������\" onclick=\"toggleToolBar();\"/></li>";
	textHTML += "</ul>";
	textHTML += "</div>"

	return textHTML;
}

//---------------------------���ı�ͨ�����ܿ�ʼ------------------------//
//ִ�к���

function openTextFunction() {
	if (INSTANCE.textFlag == "0") {
		textFunction();
		// ȡ��ҳ��Ŵ�
		pageFunction(1);

		INSTANCE.textFlag = "1";
		SetCookie("textFlag", "1");

		$("#jhelper_zoom_in").get(0).setAttribute("title","�Ŵ�����");
		$("#jhelper_zoom_out").get(0).setAttribute("title","��С����");

		// ���öԱ�ɫ
		if (INSTANCE.colorFlag != "0") {
			asyDoSetColorFunction(INSTANCE.colorFlag);
		}
	} else {
		//navgationIframeBack();
		INSTANCE.textFlag = "0";
		SetCookie("textFlag", "0");
		resetNavToolbar();
		//window.location.href = window.location.href;
		//window.location.reload();
	}
}
//���ı�����ʵ��

function textFunction() {
	//navgationIframe();
	changeiFrame();
	changeImage();
	changeStyle();
	changeiZXFT();
}
//�滻�����ҳ����ʽ

function changeStyle() {
	//�滻��ʽ
	var linkStyle = document.getElementsByTagName("link");
	for (i = 0; i < linkStyle.length; i++) {
		if (linkStyle[i].getAttribute("href") != serverUrl + "jhelper_tool_style.css"
		&& linkStyle[i].getAttribute("href") != "/newlib/css/jhelper_no_clear.css") {
			linkStyle[i].setAttribute("href", textStyleCSS);
		}
	}
	//���ҳ����ʽ
	var allNode = document.getElementById(JHelperConfig.mainBox).getElementsByTagName("*");
	for (var j = 0; j < allNode.length; j++) {
		allNode[j].style.cssText = "";
	}
	for (var k = 0; k < allNode.length; k++) {
		allNode[k].style.height = "auto";
	}
}
//�������滻ҳ��ͼƬ

function changeImage() {
	var allImage = document.getElementById(JHelperConfig.mainBox).getElementsByTagName("img");
	var length = allImage.length;
	for (i = 0; i < allImage; i++) {
		var allImageAlt = allImage[i].getAttribute("alt");
		if (allImageAlt == "" || allImageAlt == null) {
			allImageAlt = allImage[i].getAttribute("title");
		}
		var newImageNode = document.createElement("span");
		newImageNode.innerHTML = allImageAlt;
		allImage[i].parentNode.insertBefore(newImageNode, allImage[i]);
	}
	while (allImage.length) {
		allImage[0].parentNode.removeChild(allImage[0]);
	}
}
//����ҳ���е�iframe

function changeiFrame() {
	var iframeNode = document.getElementById(JHelperConfig.mainBox).getElementsByTagName("iframe");
	if (!iframeNode) {
		return;
	}

	var length = iframeNode.length;
	for (var i = 0; i < length; i++) {
		var iframeObject = iframeNode[i].contentWindow;
		try {
			var iFrameHTML = iframeObject.document.body.innerHTML;
			var divForiFrame = document.createElement("div");
			divForiFrame.setAttribute("id", "iframeDiv_" + i);
			divForiFrame.innerHTML = iFrameHTML;
			iframeNode[i].parentNode.insertBefore(divForiFrame, iframeNode[i]);
		} catch (e) {}
	}
	while (iframeNode.length) {
		iframeNode[0].parentNode.removeChild(iframeNode[0]);
	}
}

//�����й��Ϻ��������߷�̸����

function changeiZXFT() {
	var ZXFT_ID = document.getElementById("interview_btn");
	if (!ZXFT_ID) {
		return;
	}
	ZXFT_ID.setAttribute("id", "interview_bt");
}
//---------------------------���ı�ͨ�����ܽ���------------------------//
//---------------------------ҳ�����Ź��ܿ�ʼ--------------------------//
//ִ�к���

function openPageFunction(flag) {

	// ����ģʽ�� ��Ϊ��������
	if (INSTANCE.textFlag == "1") {
		openFontFunction(flag);
		return;
	}

	if (flag == "0") {
		INSTANCE.zoomValue = INSTANCE.zoomValue + 0.2;
		if (INSTANCE.zoomValue > 2) {
			INSTANCE.zoomValue = 2;
		}
	} else {
		INSTANCE.zoomValue = INSTANCE.zoomValue - 0.2;
		if (INSTANCE.zoomValue < 1) {
			INSTANCE.zoomValue = 1;
		}
	}
	debugAlert("INSTANCE.zoomValue:" + INSTANCE.zoomValue);
	SetCookie("zoomValue", INSTANCE.zoomValue);
	pageFunction(INSTANCE.zoomValue);
}
//���Ź���ʵ��

var rabitPx = 1;
function pageFunction(value) {
	debugAlert("pageFunction 1");
	if(rabitPx == 1) {
	    rabitPx = 0;
	} else {
		rabitPx = 1;
	}

	//console.log("zoom scale:" + value);
	if (value == 1) {
		//window.location.href = window.location.href;
		//window.location.reload();
		//return;
	}
	if (INSTANCE.browser.safari || INSTANCE.browser.chrome) {
		$(mainBoxID).css({
			"-webkit-transform-origin": "top left",
			"-webkit-transform": "scale(" + value + ")",
			"padding":rabitPx +"px"
		});
		//document.getElementById(mainBox).style.cssText = "-webkit-transform-origin:top left;-webkit-transform:scale(" + value + ")";
	} else if (INSTANCE.browser.firefox) {
		$(mainBoxID).css({
			"-moz-transform-origin": "top left",
			"-moz-transform": "scale(" + value + ")",
			"padding":rabitPx +"px"
		});
		//document.getElementById(mainBox).style.cssText = "-moz-transform-origin:top left;-moz-transform:scale(" + value + ")";
	} else if (INSTANCE.browser.opera) {
		$(mainBoxID).css("-o-transform:scale(" + value + ")");
		//document.getElementById(mainBox).style.cssText = "-o-transform:scale(" + value + ")";
	} else {
		if (document.body.offsetWidth > document.getElementById(JHelperConfig.mainBox).offsetWidth * value) {
			document.getElementById(JHelperConfig.mainBox).style.cssText = "position:absolute;left:0%;margin:0px;";
			//document.getElementById(JHelperConfig.mainBox).style.marginLeft = 0 - Math.round(document.getElementById(JHelperConfig.mainBox).offsetWidth * value / 2) + "px";
			document.getElementById(JHelperConfig.mainBox).style.marginLeft = (document.body.offsetWidth - Math.round(document.getElementById(JHelperConfig.mainBox).offsetWidth * value)) / 2 + "px";
		} else {
			$(mainBoxID).css("position:absolute;left:0px;margin:0px;");
			document.getElementById(JHelperConfig.mainBox).style.cssText = "position:absolute;left:0px;margin:0px;";
		}
		//$(mainBoxID).css("room:" + value);
		document.getElementById(JHelperConfig.mainBox).style.zoom = value;
	}

	//console.log("zoom scale:" + value);
}
//---------------------------ҳ�����Ź��ܽ���--------------------------//
//---------------------------�������Ź��ܽ���----------------------------//

function openFontFunction(flag) {
	debugAlert("fontFunction 1");
	if (flag == "0") {
		INSTANCE.fontValue = parseInt(INSTANCE.fontValue) + 4;
		if (INSTANCE.fontValue > 32) {
			INSTANCE.fontValue = 32;
		}
	} else {
		INSTANCE.fontValue = parseInt(INSTANCE.fontValue) - 4;
		if (INSTANCE.fontValue < 16) {
			INSTANCE.fontValue = 16;
		}
	}
	SetCookie("fontValue", INSTANCE.fontValue);
	fontFunction(INSTANCE.fontValue);
}
//�������Ź���ʵ��

function fontFunction(sizeValue) {

	if (sizeValue == 16) {
		$(mainBoxID).css({
			"fontSize": "",
			"lineHeight": "",
			"height": ""
		});

		$("table").css({
			"fontSize": "",
			"lineHeight": "",
			"height": ""
		});

		// ����iframe��ʽ
		var iframeNode = document.getElementById(JHelperConfig.mainBox).getElementsByTagName("iframe");
		if (!iframeNode) {
			return;
		}
		for (var i = 0; i < iframeNode.length; i++) {
			var iframeObject = iframeNode[i].contentWindow;
			try {
				var iFrameAllNode = iframeObject.document.getElementsByTagName("body")[0].getElementsByTagName("*");
				iframeObject.document.getElementsByTagName("body")[0].style.fontSize = "";
				iframeObject.document.getElementsByTagName("body")[0].style.lineHeight = "";
				iframeObject.document.getElementsByTagName("body")[0].style.height = "";
				for (var j = 0; j < iFrameAllNode.length; j++) {
					iFrameAllNode[j].style.fontSize = "";
					iFrameAllNode[j].style.lineHeight = "";
					iFrameAllNode[j].style.height = "";
				}
			} catch (e) {}
		}

	} else {

		$("table").css({
			"fontSize": sizeValue + "px",
			"lineHeight": "1.8em", //(parseInt(sizeValue) + 2) + "px",
			"height": "auto"
		});

		$(mainBoxID).css({
			"fontSize": sizeValue + "px",
			"lineHeight": "1.8em", //(parseInt(sizeValue) + 2) + "px",
			"height": "auto"
		});

		// ����iframe��ʽ
		var iframeNode = document.getElementById(JHelperConfig.mainBox).getElementsByTagName("iframe");
		if (!iframeNode) {
			return;
		}
		for (var i = 0; i < iframeNode.length; i++) {
			var iframeObject = iframeNode[i].contentWindow;
			try {
				var iFrameAllNode = iframeObject.document.getElementsByTagName("body")[0].getElementsByTagName("*");
				iframeObject.document.getElementsByTagName("body")[0].style.fontSize = sizeValue + "px";
				iframeObject.document.getElementsByTagName("body")[0].style.lineHeight = (parseInt(sizeValue) + 2) + "px";
				iframeObject.document.getElementsByTagName("body")[0].style.height = "auto";
				for (var j = 0; j < iFrameAllNode.length; j++) {
					iFrameAllNode[j].style.fontSize = sizeValue + "px";
					iFrameAllNode[j].style.lineHeight = "1.8em", //(parseInt(sizeValue) + 2) + "px",
					iFrameAllNode[j].style.height = "auto";
				}
			} catch (e) {}
		}
	}
}
//---------------------------�������Ź��ܽ���----------------------------//

//---------------------------�Աȶȹ��ܿ�ʼ----------------------------//
//ִ�к���

function setColorFunction() {
	var mode = parseInt(INSTANCE.colorFlag);
	switch (mode) {
		case 0:
			changeColorStyle("", "", "");
			break;
		case 1:
			changeColorStyle("#0000ff", "none", "#ffff00");
			break;
		case 2:
			changeColorStyle("#fefecc", "none", "#0000ff");
			break;
		case 3:
			changeColorStyle("#000000", "none", "#ffff00");
			break;
		case 4:
			changeColorStyle("#ffffff", "none", "#000000");
			break;

		default:
			break;
	}
}

function asyDoSetColorFunction(mode) {
	INSTANCE.colorFlag = mode;
	SetCookie("colorFlag", mode);

	setTimeout(setColorFunction, 10);
}

function asySetColorFunction(mode) {
	if (INSTANCE.colorFlag === mode)
		return;

	asyDoSetColorFunction(mode);
}

function changeColorStyle(bgColor, bgImage, color) {
	$(mainBoxID).find("*:not(#wcagnav)").css({
		"backgroundColor": bgColor,
		"backgroundImage": bgImage,
		"color": color
	});


	// ����iframe��ʽ
	var iframeNode = document.getElementById(JHelperConfig.mainBox).getElementsByTagName("iframe");
	if (!iframeNode) {
		return;
	}
	for (var i = 0; i < iframeNode.length; i++) {
		var iframeObject = iframeNode[i].contentWindow;
		changeIframeColor(bgColor,bgImage,color,iframeObject);
		
		/*try {
			var iFrameAllNode = iframeObject.document.getElementsByTagName("body")[0].getElementsByTagName("*");
			iframeObject.document.getElementsByTagName("body")[0].style.backgroundColor = bgColor;
			iframeObject.document.getElementsByTagName("body")[0].style.backgroundImage = bgImage;
			iframeObject.document.getElementsByTagName("body")[0].style.color = color;
			for (var j = 0; j < iFrameAllNode.length; j++) {
				iFrameAllNode[j].style.backgroundColor = bgColor;
				iFrameAllNode[j].style.backgroundImage = bgImage;
				iFrameAllNode[j].style.color = color;
			}
		} catch (e) {
			//alert(e);
		}*/
	}
}

function changeIframeColor(bgColor, bgImage, color, iframeObject) {
	try {
			var iFrameAllNode = iframeObject.document.getElementsByTagName("body")[0].getElementsByTagName("*");
			iframeObject.document.getElementsByTagName("body")[0].style.backgroundColor = bgColor;
			iframeObject.document.getElementsByTagName("body")[0].style.backgroundImage = bgImage;
			iframeObject.document.getElementsByTagName("body")[0].style.color = color;
			for (var j = 0; j < iFrameAllNode.length; j++) {
				if(iFrameAllNode[j].tagName == 'iframe' || iFrameAllNode[j].tagName=='IFRAME') {
					changeIframeColor(bgColor,bgImage,color,iFrameAllNode[j].contentWindow);
				} else {
					iFrameAllNode[j].style.backgroundColor = bgColor;
					iFrameAllNode[j].style.backgroundImage = bgImage;
					iFrameAllNode[j].style.color = color;
				}
			}
		} catch (e) {
			//alert(e);
		}
}

function openColorFunction() {
	debugAlert("openColorFunction 1");
	if (INSTANCE.colorFlag == "0") {

		colorFunction();

		INSTANCE.colorFlag = "1";
		SetCookie("colorFlag", "1");

		debugAlert("open color function");

	} else {

		closeColorFunction();

		INSTANCE.colorFlag = "0";
		SetCookie("colorFlag", "0");

		debugAlert("close color function");
	}
}

function closeColorFunction() {
	debugAlert("closeColorFunction start");

	iframeClearColorFunction();
	$(mainBoxID).find("*:not(:#wcagnav)").css({
		"backgroundColor": "",
		"backgroundImage": "",
		"color": ""
	});
	debugAlert("closeColorFunction end");
}
//�߶Աȶȹ���ʵ��

function colorFunction() {

	debugAlert("colorFunction 1");

	iframeColorFunction();
	$(mainBoxID).find("*:not(:#wcagnav)").css({
		"backgroundColor": "#000",
		"backgroundImage": "none",
		"color": "#FFF"
	});
}

//iframe�Աȶȴ���

function iframeColorFunction() {
	var iframeNode = document.getElementsByTagName("iframe");
	if (!iframeNode) {
		return;
	}
	for (var i = 0; i < iframeNode.length; i++) {
		var iframeObject = iframeNode[i].contentWindow;
		try {
			var iFrameAllNode = iframeObject.document.getElementsByTagName("body")[0].getElementsByTagName("*");
			iframeObject.document.getElementsByTagName("body")[0].style.backgroundColor = "#000";
			iframeObject.document.getElementsByTagName("body")[0].style.backgroundImage = "none";
			iframeObject.document.getElementsByTagName("body")[0].style.color = "#FFF";
			for (j = 0; j < iFrameAllNode.length; j++) {
				iFrameAllNode[j].style.backgroundColor = "#000";
				iFrameAllNode[j].style.backgroundImage = "none";
				iFrameAllNode[j].style.color = "#FFF";
			}
		} catch (e) {}
	}
}

// iframe ȥ���߶Աȶ�

function iframeClearColorFunction() {
	var iframeNode = document.getElementById(JHelperConfig.mainBox).getElementsByTagName("iframe");
	if (!iframeNode) {
		return;
	}
	for (var i = 0; i < iframeNode.length; i++) {
		var iframeObject = iframeNode[i].contentWindow;
		try {
			var iFrameAllNode = iframeObject.document.getElementsByTagName("body")[0].getElementsByTagName("*");
			iframeObject.document.getElementsByTagName("body")[0].style.backgroundColor = "";
			iframeObject.document.getElementsByTagName("body")[0].style.backgroundImage = "";
			iframeObject.document.getElementsByTagName("body")[0].style.color = "";
			for (j = 0; j < iFrameAllNode.length; j++) {
				iFrameAllNode[j].style.backgroundColor = "";
				iFrameAllNode[j].style.backgroundImage = "";
				iFrameAllNode[j].style.color = "";
			}
		} catch (e) {}
	}
}
//---------------------------�Աȶȹ��ܽ���----------------------------//

//---------------------------�����߹��ܿ�ʼ---------------------------//
//������ִ�к���

function openLineFunction() {
	debugAlert("openLineFunction 1 :" + INSTANCE.lineFlag);
	if (INSTANCE.lineFlag == "0") {
		INSTANCE.lineFlag = "1";
		lineFunction();

		//SetCookie("lineFlag", "1");
	} else {

		document.getElementById('lineX').style.display = 'none';
		document.getElementById('lineY').style.display = 'none';
		document.onmousemove = "";

		INSTANCE.lineFlag = "0";
		//SetCookie("lineFlag", "0");
	}
}
//�����߹���ʵ�֣��������ƶ�����:ҳ�����2�����������ߣ�������ˮƽ�ʹ�ֱ������У��ҳ���ı���

function lineFunction() {
	debugAlert("lineFunction 1");
	//��ʼ��������
	var lineDivHTML = "<div id=\"lineX\" style=\"border-top:5px red solid;position:absolute;width:100%;height:4px;left:0px;top:0px;font-size:0px;line-height:0px;z-index:99999;\"></div>";
	lineDivHTML = lineDivHTML + "<div id=\"lineY\" style=\"border-left:5px red solid;position:absolute;width:4px;height:100%;top:0px;font-size:0px;line-height:0px;z-index:99998;\"></div>";

	var lineDiv = document.getElementById("lineDiv");
	if (!lineDiv) {
		lineDiv = document.createElement("div");
		lineDiv.setAttribute("id", "lineDiv");
		lineDiv.setAttribute("style", "width:100%;height:0px;line-height:0px;font-size:0px;top:0px;left:0px;");
		lineDiv.innerHTML = lineDivHTML;
		document.body.insertBefore(lineDiv, document.body.firstChild);
	}

	document.getElementById('lineX').style.display = 'block';
	document.getElementById('lineY').style.display = 'block';
	debugAlert("onmousemove");
	document.onmousemove = mouseLineMove;
	//$("html").bind("mousemove", mouseLineMove);
	//$("iframe").bind("mousemove", mouseLineMove);
	setIframeOnMouseMoveEevent();
}

function setIframeOnMouseMoveEevent()
{
	var iframeNode = document.getElementById(JHelperConfig.mainBox).getElementsByTagName("iframe");
	if (!iframeNode) {
		return;
	}
	for (var i = 0; i < iframeNode.length; i++) {
		//alert("count:"+iframeNode.length + "/" + i);
		var iframeObject = iframeNode[i].contentWindow;
		bindOnMouseEvent(iframeObject);
	}
} 
function bindOnMouseEvent(iframeObject)
{
	try {
		iframeObject.document.onmousemove = mouseIframeLineMove;
		var iFrameAllNode = iframeObject.document.getElementsByTagName("body")[0].getElementsByTagName("*");
		for (var j = 0; j < iFrameAllNode.length;j++ ) {
			if(iFrameAllNode[j].tagName == 'iframe' || iFrameAllNode[j].tagName=='IFRAME') {
				//alert(iFrameAllNode[j].tagName +" " + j + " count:" + iFrameAllNode.length);
				var innerIframeObject = iFrameAllNode[j].contentWindow;
				bindOnMouseEvent(innerIframeObject);
			}
		}
	} catch (e) {}
}

//��ǰ���λ���ж�
var browserToolBarHeight = 0;
function mouseLineMove(e) {
	//console.log(e.screenX + "  Y:" + e.screenY);
	e = e || event || window.event;
	var lineValueX = e.pageX;
	var lineValueY = e.pageY;

	if (!lineValueX && !lineValueY) {
		lineValueX = e.clientX;
		lineValueY = e.clientY + (document.documentElement.scrollTop || document.body.scrollTop);
	}

	document.getElementById('lineX').style.top = lineValueY + 5 + "px";
	document.getElementById('lineY').style.height = document.documentElement.scrollHeight + "px";
	document.getElementById('lineX').style.width = document.documentElement.scrollWidth + "px";
	document.getElementById('lineY').style.left = lineValueX + 5 + "px";
	
	browserToolBarHeight = e.screenY - e.clientY;
	//console.log("browserToolBarHeight:" + browserToolBarHeight);
}
function mouseIframeLineMove(e) {
	e = e || event || window.event;
	var lineValueX = e.screenX;
	var lineValueY = e.screenY - browserToolBarHeight + (document.documentElement.scrollTop || document.body.scrollTop);;

	document.getElementById('lineX').style.top = lineValueY + 5 + "px";
	document.getElementById('lineY').style.height = document.documentElement.scrollHeight + "px";
	document.getElementById('lineX').style.width = document.documentElement.scrollWidth + "px";
	document.getElementById('lineY').style.left = lineValueX + 5 + "px";
}
//---------------------------�����߹��ܽ���---------------------------//
//---------------------------���鹦�ܿ�ʼ---------------------------//

function navToolbarHelp() {
	window.open(JHelperConfig.wzaHelp);
}
//---------------------------���鹦�ܽ���---------------------------//
//---------------------------���ù��ܿ�ʼ-----------------------------//

function resetNavToolbar() {
	delCookie("textFlag");
	delCookie("zoomValue");
	delCookie("fontValue");
	delCookie("colorFlag");
	delCookie("lineFlag");
	window.location.href = window.location.href;
	window.location.reload();
}
//---------------------------���ù��ܽ���-----------------------------//
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
//��������������

function toolBarKeyDownEvent(sKeycode, e) {
	if (sKeycode == 74 && e.altKey && !e.shiftKey && !e.ctrlKey) {
		//Alt+J:����������
		toggleToolBar();
	} if (sKeycode == 49 && e.altKey && !e.shiftKey && !e.ctrlKey) {
		//Alt+1:�򿪰���
		navToolbarHelp();
	} else if (sKeycode == 74 && e.altKey && e.shiftKey && !e.ctrlKey) {
		//Alt+Shift+J:���ı�����
		openTextFunction();
	}
}


//----------------------------------------------------------------------
//���ϰ���ݼ�JS
//Version��V0.01
//Author��action
//Date��2011-12-16
//----------------------------------------------------------------------

//���̼�
//����� 1
var NumOneKey = '49';
//����� 2
var NumTwoKey = '50';
//����� 3
var NumThreeKey = '51';
//����� 4
var NumFourKey = '52';
//����� 5
var NumFiveKey = '53';
//����� 6
var NumSixKey = '54';
//��ĸ�� z
var GroupTagKey = '90';

//����  ID
//���ϰ�����˵��ID//�������������ӿڣ��Ѷ�λ�����ϰ�����
//var AccessHelp = JHelperConfig.AccessHelp;//'accesshelp';
var AccessHelpTitle = "�Ѷ�λ�����ϰ�����";

//��������ID//�������������ӿڣ��Ѷ�λ����վ����
//var MainNavigation = JHelperConfig.MainNavigation;//'nav';
var MainNavigationTitle = "�Ѷ�λ����վ����";

//�й��Ϻ�����������//�������������ӿڣ�����ת����վ����������
//var HeaderGuide = JHelperConfig.HeaderGuide;//'headerGuideNav';
var HeaderGuideTitle = "����ת����վ����������";

//��Ҫ������ID//�������������ӿڣ�����ת����Ҫ������
//var MainContent = JHelperConfig.MainContent;//'mainbox';
var MainContentTitle = "����ת����Ҫ������";

//��վ��ͼ��ID//�������������ӿڣ�����ת����վ��ͼ
//var SiteMap = JHelperConfig.SiteMap;//'copyright';
var SiteMapTitle = "����ת����վ��ͼ��";

//������ID//�������������ӿڣ�����ת����������
//var SearchForm = JHelperConfig.SearchForm;//'searchbox';
var SearchFormTitle = "����ת����������";

//ͷ��������ID//�������������ӿڣ�����ת��ͷ����������
//var HeadContent = JHelperConfig.HeadContent;//'header';
var HeadContentTitle = "����ת��ͷ����������";

//�ײ�������ID//�������������ӿڣ�����ת���ײ���������
//var BottomContent = JHelperConfig.BottomContent;//'copyright';
var BottomContentTitle = "����ת���ײ���������";

//��ҳ������ID//�������������ӿڣ�����ת��ҳ��������
//var LeftContent = JHelperConfig.LeftContent;//'leftbox';
var LeftContentTitle = "����ת��ҳ��������";

//��ҳ�м���ID//�������������ӿڣ�����ת���м�ṹ����
//var MiddleContent = JHelperConfig.MiddleContent;//'leftbox';
var MiddleContentTitle = "����ת���м�ṹ����";

//��ҳ������ID//�������������ӿڣ�����ת����ҳ��������
//var RightContent = JHelperConfig.RightContent;//'rightbox';
var RightContentTitle = "����ת����ҳ��������";

//��Ŀ�������
//��Ŀ������ H2 �� H3 �� H4
var GroupTagNameH2 = 'H2';
var GroupTagNameH3 = 'H3';
var GroupTagNameH4 = 'H4';
//��Ŀ�����������ʼ��Ϊ-1
var GroupCount = -1;
//˳���棩����
var ForwardFlag = false;
var BackwardFlag = false;

//��ݼ�ִ�к���

function accessKeyboardListener(currkey, e) {
	var browser = browserFlag();
	//����������ж�
	/*--------------------------------------------------------�ȵ���ת��ʼ--------------------------------------------------------*/
	if (String(navigator.platform).indexOf("Win") != -1) {
		//windows����ϵͳ
		if ((e.altKey && !e.shiftKey && !e.ctrlKey) || (!e.altKey && !e.shiftKey && e.ctrlKey)) {
			if (currkey == NumOneKey) {
				//alt+1: ��λ�����ϰ�����˵������ê�㣬
				document.getElementById(JHelperConfig.AccessHelp).focus();
			} else if (currkey == NumTwoKey) {
				//alt+2: ��λ����վ����������
				createNodeDiv(JHelperConfig.MainNavigation, JHelperConfig.MainNavigationTitle);
			} else if (currkey == NumThreeKey) {
				//alt+3: ��λ����վ������������
				createNodeDiv(JHelperConfig.HeaderGuide, JHelperConfig.HeaderGuideTitle);
			} else if (currkey == NumFourKey) {
				//alt+4: ��λ����Ҫ��������
				createNodeDiv(JHelperConfig.MainContent, JHelperConfig.MainContentTitle);
			} else if (currkey == NumFiveKey) {
				//alt+5: ��λ����վ��ͼ���ӣ�
				createNodeDiv(JHelperConfig.SiteMap, JHelperConfig.SiteMapTitle);
				//document.getElementById(SiteMap).focus();
			} else if (currkey == NumSixKey) {
				//alt+6: ��λ��ҳ����Ҫ������
				createNodeDiv(JHelperConfig.SearchForm, JHelperConfig.SearchFormTitle);
			}
		}
	} else if (String(navigator.platform).indexOf("Mac") != -1) {
		//Mac����ϵͳ
		if (!e.altKey && !e.shiftKey && e.ctrlKey) {
			if (currkey == NumOneKey) {
				//alt+1: ��λ�����ϰ�����˵������ê�㣬
				document.getElementById(JHelperConfig.AccessHelp).focus();
			} else if (currkey == NumTwoKey) {
				//alt+2: ��λ����վ����������
				createNodeDiv(JHelperConfig.MainNavigation, JHelperConfig.MainNavigationTitle);
			} else if (currkey == NumThreeKey) {
				//alt+3: ��λ����վ������������
				createNodeDiv(JHelperConfig.HeaderGuide, JHelperConfig.HeaderGuideTitle);
			} else if (currkey == NumFourKey) {
				//alt+4: ��λ����Ҫ��������
				createNodeDiv(JHelperConfig.MainContent, JHelperConfig.MainContentTitle);
			} else if (currkey == NumFiveKey) {
				//alt+5: ��λ����վ��ͼ���ӣ�
				createNodeDiv(JHelperConfig.SiteMap, JHelperConfig.SiteMapTitle);
				//document.getElementById(SiteMap).focus();
			} else if (currkey == NumSixKey) {
				//alt+6: ��λ��ҳ����Ҫ������
				createNodeDiv(JHelperConfig.SearchForm, JHelperConfig.SearchFormTitle);
			}
		}
	}
	/*--------------------------------------------------------�ȵ���ת����-------------------------------------------------------*/
	/*------------------------------------------------------������Ŀ��ת��ʼ-----------------------------------------------------*/
	if (currkey == GroupTagKey) {
		if ((!e.altKey && !e.shiftKey && e.ctrlKey) || (e.altKey && !e.shiftKey && !e.ctrlKey)) {
			groupSkip(0);
			//������Ŀ��ת��ݼ���ctrl+Z
		} else if ((!e.altKey && e.shiftKey && e.ctrlKey) || (e.altKey && e.shiftKey && !e.ctrlKey)) {
			groupSkip(1);
			//������Ŀ������ת��ݼ���ctrl+shift+z
		}
	}
	/*--------------------------------------------------------������Ŀ��ת����----------------------------------------------------*/
	/*----------------------------------------------------------������ת��ʼ------------------------------------------------------*/
	if (e.altKey && e.shiftKey && !e.ctrlKey) {
		if (currkey == NumOneKey) {
			//alt+shift+1����ת��ͷ����
			createNodeDiv(JHelperConfig.HeadContent, JHelperConfig.HeadContentTitle);
		} else if (currkey == NumTwoKey) {
			//alt+shift+4: ��ת��������
			createNodeDiv(JHelperConfig.LeftContent, JHelperConfig.LeftContentTitle);
		} else if (currkey == NumThreeKey) {
			//alt+shift+3: ��ת���м�����
			createNodeDiv(JHelperConfig.MiddleContent, JHelperConfig.MiddleContentTitle);
		} else if (currkey == NumFourKey) {
			//alt+shift+5: ��ת��������
			createNodeDiv(JHelperConfig.RightContent, JHelperConfig.RightContentTitle);
		} else if (currkey == NumFiveKey) {
			//alt+shift+2: ��ת���ײ���
			createNodeDiv(JHelperConfig.BottomContent, JHelperConfig.BottomContentTitle);
		}
	}
	/*----------------------------------------------------------������ת����------------------------------------------------------*/
}

//��Ŀ������ת

function groupSkip(skipFlag, GroupTagName) {
	var allSkipNode = new Array();
	var j = 0;
	var allNode = document.getElementsByTagName("*");
	for (i = 0; i < allNode.length; i++) {
		var newNodeName = allNode[i].nodeName;
		if (newNodeName == JHelperConfig.GroupTagNameH2 || newNodeName == JHelperConfig.GroupTagNameH3 || newNodeName == JHelperConfig.GroupTagNameH4) {
			allSkipNode[j] = i;
			j++;
		}
	}
	//��ȡ��Ŀ������ת��ǩ�ĸ���
	var NumGroupTagID = allSkipNode.length
	if (NumGroupTagID == 0) {
		return;
	}
	//û����Ŀ�����ǩ����
	if (skipFlag == 0) {
		//������Ŀ������ת
		ForwardFlag = true;
		if (BackwardFlag) {
			BackwardFlag = false;
		}
		this.GroupCount++;
		if (this.GroupCount > NumGroupTagID - 1) {
			this.GroupCount = 0;
		}
	} else if (skipFlag == 1) {
		//������Ŀ������ת
		BackwardFlag = true;
		if (ForwardFlag) {
			ForwardFlag = false;
		}
		this.GroupCount--;
		if (this.GroupCount < 0) {
			this.GroupCount = NumGroupTagID - 1;
		}
	}
	var mainDiv = allNode[allSkipNode[GroupCount]];
	var titleText = mainDiv.innerText || mainDiv.textContent;
	var title = titleText + "";
	if (mainDiv.nodeName == JHelperConfig.GroupTagNameH2) {
		title = titleText + "";
	}
	createNode(mainDiv, title);
}

//������ڵ㣺----------------------------------

function createNodeDiv(divID, title) {
	var mainDiv = document.getElementById(divID);
	//����Ŀ¼������תID���鿴Iframe���Ƿ���
	if (!mainDiv) {
		mainDiv = iframeSearch(divID);
		if (!mainDiv) {
			return;
		}
	}
	createNode(mainDiv, title);
}
//����ת�����һ���ӽڵ�ǰ����----------------

function createNode(mainDiv, title) {
	var newNode = document.createElement("div");
	newNode.style.cssText = "width:0px;height:0px;overflow:hidden;";
	newNode.innerHTML = "<a href=\"javascript:\" title=\"" + title + "\" onblur=\"deleteNodeDiv(this)\">" + title + "</a>";
	mainDiv.parentNode.insertBefore(newNode, mainDiv);
	newNode.firstChild.focus();
}

//ɾ����ڵ�----------------------------------

function deleteNodeDiv(node) {
	var browser = browserFlag();
	if (browser.ie) {
		node.parentNode.removeNode(true);
	} else {
		node.parentNode.parentNode.removeChild(node.parentNode);
	}
}
//����Iframe�п�ݼ�ID

function iframeSearch(divID) {
	var iframeNode = document.body.getElementsByTagName("iframe");
	if (!iframeNode) {
		return;
	}
	for (var i = 0; i < iframeNode.length; i++) {
		try {
			var newDivID = iframeNode[i].contentWindow.document.getElementById("divID");
		} catch (e) {}
	}
	return newDivID;
}

//��iframe�����Ӽ������ø�ҳ���������
function addKeyListenerToIframe(iframeObject)
{
	var iframeNode = document.body.getElementsByTagName("iframe");
	if(!iframeNode){return;}	
	for(var i=0;i<iframeNode.length;i++){
		var iframeObject = iframeNode[i].contentWindow;
		bindKeyDownEvent(iframeObject);
	}
}

function bindKeyDownEvent(iframeObject)
{
	try {
		iframeObject.document.onkeydown = KeyDownEvent;
		var iFrameAllNode = iframeObject.document.getElementsByTagName("body")[0].getElementsByTagName("*");
		for (var j = 0; j < iFrameAllNode.length;j++ ) {
			if(iFrameAllNode[j].tagName == 'iframe' || iFrameAllNode[j].tagName=='IFRAME') {
				var innerIframeObject = iFrameAllNode[j].contentWindow;
				bindKeyDownEvent(innerIframeObject);
			}
		}
	} catch (e) {}
}
function KeyDownEvent(e) {
	//��ݼ���ȡ
	var currkey = 0,
	e = e || event || window.event;
	currkey = e.keyCode || e.which || e.charCode;
	//��ݼ����̼���
	top.accessKeyboardListener(currkey, e);
	//���������̼���
	top.toolBarKeyDownEvent(currkey, e);
}
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////	//////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// ȫ�ֶ���
var INSTANCE = new Object();
//���������ݺ���
var mainBoxID; // = JHelperConfig.mainBox;
//���ı���ʽ
var textStyleCSS = serverUrl + "jhelper_style.css";

//------------------------------------------------------------------------------------
//--------------------------------------��������ʼ------------------------------------

//declareConfig();
// ȫ�����
//$(document).ready(initJSHelper());
initJSHelper();

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////