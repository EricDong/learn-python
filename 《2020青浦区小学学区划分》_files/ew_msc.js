/*!
 * TTS JavaScript Library
 * http://www.wdit.com.cn
 *
 * Copyright (c) 2015 - 2016 WDIT Ltd
 *
 * Author: Thundax Li
 * Version: 1.1.0
 * Date: 9 Apr 2016
 */
(function () {
    "use strike";

    var msc_gender = 4;
    var regurlnumber = (/(\d)\.htm/i).exec(location.href);
    if (regurlnumber && (regurlnumber[1] % 2) == 0) {
        msc_gender = 0;
    }
    if (window.addEventListener) {
        window.addEventListener("load", msc_core, false);
    } else if (window.attachEvent) {
        window.attachEvent("onload", msc_core);
    }

    function isIE9Less() {
        return navigator.appName == "Microsoft Internet Explorer" && parseInt(navigator.appVersion.split(";")[1].replace(/[ ]/g, "").replace("MSIE", "")) < 10
    }

    var createAjax = function () {
        var xhr = null;

        if (window.XMLHttpRequest) {
            xhr = new XMLHttpRequest();
        } else {
            xhr = new ActiveXObject("Microsoft.XMLHTTP");
        }
        return xhr;
    };


    var ajax = function (conf) {
        // 初始化
        //type参数,可选
        var type = conf.type;
        //url参数，必填
        var url = conf.url;
        //data参数可选，只有在post请求时需要
        var data = conf.data;
        //datatype参数可选
        var dataType = conf.dataType;
        //回调函数可选
        var success = conf.success;
        var error = conf.error;
        var isTimeout = false;
        var timer = setTimeout(function () {
            isTimeout = true;
            xhr.abort();
        }, conf.timeout || 15000);
        if (type == null) {
            //type参数可选，默认为get
            type = "get";
        }
        if (dataType == null) {
            //dataType参数可选，默认为text
            dataType = "text";
        }
        // 创建ajax引擎对象
        var xhr = createAjax();
        // 打开
        xhr.open(type, url, true);
        // 发送
        if (type == "GET" || type == "get") {
            xhr.send(null);
        } else if (type == "POST" || type == "post") {
            xhr.setRequestHeader("content-type",
                "application/x-www-form-urlencoded");
            xhr.send(data);
        }
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (isTimeout) {
                    conf.error && conf.error();
                    return;
                }
                clearTimeout(timer);
                if (xhr.status == 200) {
                    if (dataType == "text" || dataType == "TEXT") {
                        if (success != null) {
                            //普通文本
                            success(xhr.responseText);
                        }
                    } else if (dataType == "xml" || dataType == "XML") {
                        if (success != null) {
                            //接收xml文档
                            success(xhr.responseXML);
                        }
                    } else if (dataType == "json" || dataType == "JSON") {
                        if (success != null) {
                            //将json字符串转换为js对象
                            success(eval("(" + xhr.responseText + ")"));
                        }
                    }
                } else {
                    error();
                }

            }
        };

    };

    var hexcase = 0;
    var b64pad = "";

    function hex_md5(s) {
        return rstr2hex(rstr_md5(str2rstr_utf8(s)));
    }

    function b64_md5(s) {
        return rstr2b64(rstr_md5(str2rstr_utf8(s)));
    }

    function any_md5(s, e) {
        return rstr2any(rstr_md5(str2rstr_utf8(s)), e);
    }

    function hex_hmac_md5(k, d) {
        return rstr2hex(rstr_hmac_md5(str2rstr_utf8(k), str2rstr_utf8(d)));
    }

    function b64_hmac_md5(k, d) {
        return rstr2b64(rstr_hmac_md5(str2rstr_utf8(k), str2rstr_utf8(d)));
    }

    function any_hmac_md5(k, d, e) {
        return rstr2any(rstr_hmac_md5(str2rstr_utf8(k), str2rstr_utf8(d)), e);
    }

    function md5_vm_test() {
        return hex_md5("abc").toLowerCase() == "900150983cd24fb0d6963f7d28e17f72";
    }

    function rstr_md5(s) {
        return binl2rstr(binl_md5(rstr2binl(s), s.length * 8));
    }

    function rstr_hmac_md5(key, data) {
        var bkey = rstr2binl(key);
        if (bkey.length > 16) {
            bkey = binl_md5(bkey, key.length * 8);
        }
        var ipad = Array(16), opad = Array(16);
        for (var i = 0; i < 16; i++) {
            ipad[i] = bkey[i] ^ 909522486;
            opad[i] = bkey[i] ^ 1549556828;
        }
        var hash = binl_md5(ipad.concat(rstr2binl(data)), 512 + data.length * 8);
        return binl2rstr(binl_md5(opad.concat(hash), 512 + 128));
    }

    function rstr2hex(input) {
        try {
            hexcase;
        } catch (e) {
            hexcase = 0;
        }
        var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
        var output = "";
        var x;
        for (var i = 0; i < input.length; i++) {
            x = input.charCodeAt(i);
            output += hex_tab.charAt((x >>> 4) & 15) + hex_tab.charAt(x & 15);
        }
        return output;
    }

    function rstr2b64(input) {
        try {
            b64pad;
        } catch (e) {
            b64pad = "";
        }
        var tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        var output = "";
        var len = input.length;
        for (var i = 0; i < len; i += 3) {
            var triplet = (input.charCodeAt(i) << 16) | (i + 1 < len ? input.charCodeAt(i + 1) << 8 : 0) | (i + 2 < len ? input.charCodeAt(i + 2) : 0);
            for (var j = 0; j < 4; j++) {
                if (i * 8 + j * 6 > input.length * 8) {
                    output += b64pad;
                } else {
                    output += tab.charAt((triplet >>> 6 * (3 - j)) & 63);
                }
            }
        }
        return output;
    }

    function rstr2any(input, encoding) {
        var divisor = encoding.length;
        var i, j, q, x, quotient;
        var dividend = Array(Math.ceil(input.length / 2));
        for (i = 0; i < dividend.length; i++) {
            dividend[i] = (input.charCodeAt(i * 2) << 8) | input.charCodeAt(i * 2 + 1);
        }
        var full_length = Math.ceil(input.length * 8 / (Math.log(encoding.length) / Math.log(2)));
        var remainders = Array(full_length);
        for (j = 0; j < full_length; j++) {
            quotient = Array();
            x = 0;
            for (i = 0; i < dividend.length; i++) {
                x = (x << 16) + dividend[i];
                q = Math.floor(x / divisor);
                x -= q * divisor;
                if (quotient.length > 0 || q > 0) {
                    quotient[quotient.length] = q;
                }
            }
            remainders[j] = x;
            dividend = quotient;
        }
        var output = "";
        for (i = remainders.length - 1; i >= 0; i--) {
            output += encoding.charAt(remainders[i]);
        }
        return output;
    }

    function str2rstr_utf8(input) {
        var output = "";
        var i = -1;
        var x, y;
        while (++i < input.length) {
            x = input.charCodeAt(i);
            y = i + 1 < input.length ? input.charCodeAt(i + 1) : 0;
            if (55296 <= x && x <= 56319 && 56320 <= y && y <= 57343) {
                x = 65536 + ((x & 1023) << 10) + (y & 1023);
                i++;
            }
            if (x <= 127) {
                output += String.fromCharCode(x);
            } else {
                if (x <= 2047) {
                    output += String.fromCharCode(192 | ((x >>> 6) & 31), 128 | (x & 63));
                } else {
                    if (x <= 65535) {
                        output += String.fromCharCode(224 | ((x >>> 12) & 15), 128 | ((x >>> 6) & 63), 128 | (x & 63));
                    } else {
                        if (x <= 2097151) {
                            output += String.fromCharCode(240 | ((x >>> 18) & 7), 128 | ((x >>> 12) & 63), 128 | ((x >>> 6) & 63), 128 | (x & 63));
                        }
                    }
                }
            }
        }
        return output;
    }

    function str2rstr_utf16le(input) {
        var output = "";
        for (var i = 0; i < input.length; i++) {
            output += String.fromCharCode(input.charCodeAt(i) & 255, (input.charCodeAt(i) >>> 8) & 255);
        }
        return output;
    }

    function str2rstr_utf16be(input) {
        var output = "";
        for (var i = 0; i < input.length; i++) {
            output += String.fromCharCode((input.charCodeAt(i) >>> 8) & 255, input.charCodeAt(i) & 255);
        }
        return output;
    }

    function rstr2binl(input) {
        var output = Array(input.length >> 2);
        for (var i = 0; i < output.length; i++) {
            output[i] = 0;
        }
        for (var i = 0; i < input.length * 8; i += 8) {
            output[i >> 5] |= (input.charCodeAt(i / 8) & 255) << (i % 32);
        }
        return output;
    }

    function binl2rstr(input) {
        var output = "";
        for (var i = 0; i < input.length * 32; i += 8) {
            output += String.fromCharCode((input[i >> 5] >>> (i % 32)) & 255);
        }
        return output;
    }

    function binl_md5(x, len) {
        x[len >> 5] |= 128 << ((len) % 32);
        x[(((len + 64) >>> 9) << 4) + 14] = len;
        var a = 1732584193;
        var b = -271733879;
        var c = -1732584194;
        var d = 271733878;
        for (var i = 0; i < x.length; i += 16) {
            var olda = a;
            var oldb = b;
            var oldc = c;
            var oldd = d;
            a = md5_ff(a, b, c, d, x[i + 0], 7, -680876936);
            d = md5_ff(d, a, b, c, x[i + 1], 12, -389564586);
            c = md5_ff(c, d, a, b, x[i + 2], 17, 606105819);
            b = md5_ff(b, c, d, a, x[i + 3], 22, -1044525330);
            a = md5_ff(a, b, c, d, x[i + 4], 7, -176418897);
            d = md5_ff(d, a, b, c, x[i + 5], 12, 1200080426);
            c = md5_ff(c, d, a, b, x[i + 6], 17, -1473231341);
            b = md5_ff(b, c, d, a, x[i + 7], 22, -45705983);
            a = md5_ff(a, b, c, d, x[i + 8], 7, 1770035416);
            d = md5_ff(d, a, b, c, x[i + 9], 12, -1958414417);
            c = md5_ff(c, d, a, b, x[i + 10], 17, -42063);
            b = md5_ff(b, c, d, a, x[i + 11], 22, -1990404162);
            a = md5_ff(a, b, c, d, x[i + 12], 7, 1804603682);
            d = md5_ff(d, a, b, c, x[i + 13], 12, -40341101);
            c = md5_ff(c, d, a, b, x[i + 14], 17, -1502002290);
            b = md5_ff(b, c, d, a, x[i + 15], 22, 1236535329);
            a = md5_gg(a, b, c, d, x[i + 1], 5, -165796510);
            d = md5_gg(d, a, b, c, x[i + 6], 9, -1069501632);
            c = md5_gg(c, d, a, b, x[i + 11], 14, 643717713);
            b = md5_gg(b, c, d, a, x[i + 0], 20, -373897302);
            a = md5_gg(a, b, c, d, x[i + 5], 5, -701558691);
            d = md5_gg(d, a, b, c, x[i + 10], 9, 38016083);
            c = md5_gg(c, d, a, b, x[i + 15], 14, -660478335);
            b = md5_gg(b, c, d, a, x[i + 4], 20, -405537848);
            a = md5_gg(a, b, c, d, x[i + 9], 5, 568446438);
            d = md5_gg(d, a, b, c, x[i + 14], 9, -1019803690);
            c = md5_gg(c, d, a, b, x[i + 3], 14, -187363961);
            b = md5_gg(b, c, d, a, x[i + 8], 20, 1163531501);
            a = md5_gg(a, b, c, d, x[i + 13], 5, -1444681467);
            d = md5_gg(d, a, b, c, x[i + 2], 9, -51403784);
            c = md5_gg(c, d, a, b, x[i + 7], 14, 1735328473);
            b = md5_gg(b, c, d, a, x[i + 12], 20, -1926607734);
            a = md5_hh(a, b, c, d, x[i + 5], 4, -378558);
            d = md5_hh(d, a, b, c, x[i + 8], 11, -2022574463);
            c = md5_hh(c, d, a, b, x[i + 11], 16, 1839030562);
            b = md5_hh(b, c, d, a, x[i + 14], 23, -35309556);
            a = md5_hh(a, b, c, d, x[i + 1], 4, -1530992060);
            d = md5_hh(d, a, b, c, x[i + 4], 11, 1272893353);
            c = md5_hh(c, d, a, b, x[i + 7], 16, -155497632);
            b = md5_hh(b, c, d, a, x[i + 10], 23, -1094730640);
            a = md5_hh(a, b, c, d, x[i + 13], 4, 681279174);
            d = md5_hh(d, a, b, c, x[i + 0], 11, -358537222);
            c = md5_hh(c, d, a, b, x[i + 3], 16, -722521979);
            b = md5_hh(b, c, d, a, x[i + 6], 23, 76029189);
            a = md5_hh(a, b, c, d, x[i + 9], 4, -640364487);
            d = md5_hh(d, a, b, c, x[i + 12], 11, -421815835);
            c = md5_hh(c, d, a, b, x[i + 15], 16, 530742520);
            b = md5_hh(b, c, d, a, x[i + 2], 23, -995338651);
            a = md5_ii(a, b, c, d, x[i + 0], 6, -198630844);
            d = md5_ii(d, a, b, c, x[i + 7], 10, 1126891415);
            c = md5_ii(c, d, a, b, x[i + 14], 15, -1416354905);
            b = md5_ii(b, c, d, a, x[i + 5], 21, -57434055);
            a = md5_ii(a, b, c, d, x[i + 12], 6, 1700485571);
            d = md5_ii(d, a, b, c, x[i + 3], 10, -1894986606);
            c = md5_ii(c, d, a, b, x[i + 10], 15, -1051523);
            b = md5_ii(b, c, d, a, x[i + 1], 21, -2054922799);
            a = md5_ii(a, b, c, d, x[i + 8], 6, 1873313359);
            d = md5_ii(d, a, b, c, x[i + 15], 10, -30611744);
            c = md5_ii(c, d, a, b, x[i + 6], 15, -1560198380);
            b = md5_ii(b, c, d, a, x[i + 13], 21, 1309151649);
            a = md5_ii(a, b, c, d, x[i + 4], 6, -145523070);
            d = md5_ii(d, a, b, c, x[i + 11], 10, -1120210379);
            c = md5_ii(c, d, a, b, x[i + 2], 15, 718787259);
            b = md5_ii(b, c, d, a, x[i + 9], 21, -343485551);
            a = safe_add(a, olda);
            b = safe_add(b, oldb);
            c = safe_add(c, oldc);
            d = safe_add(d, oldd);
        }
        return Array(a, b, c, d);
    }

    function md5_cmn(q, a, b, x, s, t) {
        return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s), b);
    }

    function md5_ff(a, b, c, d, x, s, t) {
        return md5_cmn((b & c) | ((~b) & d), a, b, x, s, t);
    }

    function md5_gg(a, b, c, d, x, s, t) {
        return md5_cmn((b & d) | (c & (~d)), a, b, x, s, t);
    }

    function md5_hh(a, b, c, d, x, s, t) {
        return md5_cmn(b ^ c ^ d, a, b, x, s, t);
    }

    function md5_ii(a, b, c, d, x, s, t) {
        return md5_cmn(c ^ (b | (~d)), a, b, x, s, t);
    }

    function safe_add(x, y) {
        var lsw = (x & 65535) + (y & 65535);
        var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
        return (msw << 16) | (lsw & 65535);
    }

    function bit_rol(num, cnt) {
        return (num << cnt) | (num >>> (32 - cnt));
    }

    function toUnicode(data) {
        if (data == '') return "";
        var str = '';
        for (var i = 0; i < data.length; i++) {
            str += "\\u" + parseInt(data[i].charCodeAt(0), 10).toString(16);
        }
        return str;
    }


    var CURRENT_DOMAIN = document.domain;

    //样式大小
    function msc_core() {
        try {


            var iframeElement = "";
            var frmbody = '';

            var DEFAULT_PLAYER_URL = "";
            var SERVICE_BASE_URL = "";
            var protocol = document.location.protocol;


            if (CURRENT_DOMAIN.indexOf("shmedia.tech") > -1 || CURRENT_DOMAIN.indexOf("www.shmedia.tech") > -1) {

                SERVICE_BASE_URL = "https://realvoice.ewdcloud.com:7443/tts/msc/voice";
                DEFAULT_PLAYER_URL = "https://voice.ewdcloud.com/jPlayerRong.html";

                iframeElement = '<iframe id="f1" name="f1" frameborder="0" style="position: absolute;width: 80px;display: block;right: 0;top: -16px;" marginwidth="0" scrolling="no" height="20px" width="100%" src=""></iframe>';
                if (document.getElementById("ivs_player") == undefined || document.getElementById("ivs_player") == null) {
                    var temp = document.getElementById("ivs_title").innerHTML;
                    document.getElementById("ivs_title").innerHTML = temp + "<br/>" + iframeElement;
                } else {
                    document.getElementById("ivs_player").innerHTML = document.getElementById("ivs_player").innerHTML + iframeElement;
                }

                frmbody = frmbody + '<body style="padding:0 auto auto 0;margin:0 auto auto 0;"><form id="mscform" action="" method="post" accept-charset="utf-8">';
                frmbody = frmbody + '<input id="url" type="text" style="display:none" name="url"/>';
                frmbody = frmbody + '<input id="audioFilename" type="text" style="display:none" name="audioFilename"/>';
                frmbody = frmbody + '<input id="title" type="text" style="display:none" name="title"/>';
                frmbody = frmbody + '<input id="rong" type="text" style="display:none" name="rong" value="1"/>';
                frmbody = frmbody + '<input id="content" type="text" style="display:none" name="content"/>';
                frmbody = frmbody + '</form></body>';

            } else {

                if (protocol == "https:") {
                    SERVICE_BASE_URL = "https://realvoice.ewdcloud.com:7443/tts/msc/voice";
                    DEFAULT_PLAYER_URL = "https://voice.ewdcloud.com/jPlayer.html";
                } else {
                    SERVICE_BASE_URL = "http://realvoice.ewdcloud.com:7043/tts/msc/voice";
                    DEFAULT_PLAYER_URL = "http://voice.ewdcloud.com/jPlayer.html";
                }

                iframeElement = '<iframe id="f1" name="f1" frameborder="0" style="padding:0 auto auto 0;" marginwidth="0" scrolling="no" height="80px" width="100%" src=""></iframe>';

                if (document.getElementById("ivs_player") == undefined || document.getElementById("ivs_player") == null) {
                    var temp = document.getElementById("ivs_title").innerHTML;
                    document.getElementById("ivs_title").innerHTML = temp + "<br/>" + iframeElement;
                } else {
                    document.getElementById("ivs_player").innerHTML = document.getElementById("ivs_player").innerHTML + iframeElement;
                }

                frmbody = frmbody + '<body style="padding:0 auto auto 0;margin:0 auto auto 0;"><form id="mscform" action="" method="post" accept-charset="utf-8">';
                frmbody = frmbody + '<input id="url" type="text" style="display:none" name="url"/>';
                frmbody = frmbody + '<input id="audioFilename" type="text" style="display:none" name="audioFilename"/>';
                frmbody = frmbody + '<input id="title" type="text" style="display:none" name="title"/>';
                frmbody = frmbody + '<input id="content" type="text" style="display:none" name="content"/>';
                frmbody = frmbody + '</form></body>';
            }

            var frm;

            frm = window.frames["f1"];
            frm.document.write(frmbody);


            var title = document.getElementById("ivs_title").innerHTML.replace(/<script[^>]*>(.|\n)*?<\/script>/ig, "").replace(/<style[^>]*>(.|\n)*?<\/style>/ig, "").replace(/<!--.*?-->/ig, "").replace(/&nbsp;/ig, "").replace(/<[^>]*>/ig, "").replace(/(^\s*)|(\s*$)/g, "").replace(/[\r\n]/g, "");
            var content = document.getElementById("ivs_content").innerHTML.replace(/<script[^>]*>(.|\n)*?<\/script>/ig, "").replace(/<style[^>]*>(.|\n)*?<\/style>/ig, "").replace(/<!--.*?-->/ig, "").replace(/<[^>]*>/ig, "").replace(/&nbsp;/ig, "").replace(/(^\s*)|(\s*$)/g, "").replace(/[\r\n]/g, "");
            var url = document.location.href;
            if (content.length > 5000) {
                content = content.substr(0, 5000);
            }


	        if (url.indexOf('www.shqp.gov.cn') > -1) {
                url = url.replace('https:', "http:");
            }

            var filename = hex_md5(toUnicode(url + title + content));
            if (isIE9Less()) {
                frm.document.getElementById("url").value = url;
                frm.document.getElementById("title").value = title;
                frm.document.getElementById("content").value = content;
                frm.document.getElementById("audioFilename").value = filename;
                frm.document.getElementById("mscform").action = SERVICE_BASE_URL + "/speak";
                frm.document.getElementById("mscform").submit();
            } else {


                ajax({
                    "url": SERVICE_BASE_URL + '/exists?rand=' + Math.random() + "&filename=" + filename + "&url=" + url,
                    "dataType": "json",
                    "method": "post",
                    "success": function (res) {
                        if (!res) {
                            return;
                        }
                        var frm = window.frames["f1"];
                        frm.document.getElementById("url").value = url;
                        if (!res.exists) {
                            frm.document.getElementById("title").value = title;
                            frm.document.getElementById("content").value = content;
                        } else {
                            frm.document.getElementById("audioFilename").value = filename;
                        }
                        frm.document.getElementById("mscform").action = SERVICE_BASE_URL + "/speak";
                        frm.document.getElementById("mscform").submit();
                    },
                    "error": function () {
                        frm.document.location.href = DEFAULT_PLAYER_URL;
                    }
                });
            }
        } catch (e) {

        }
    }


})();
