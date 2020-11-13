/*朗读验证码*/
function playvoice() {
    var code = $("#xxgkYZMCode").val();
    var voiceid = document.getElementById('player_yzm');
    voiceid.innerHTML = "<embed id='sound_play' name='sound_play' src='/swf/sound_play.swf?"
            + (new Date().getTime()) +
            "'  FlashVars='isPlay=1&url=http://www.wsjsw.gov.cn:8080/voicecode/viocecode.aspx&code="
            + code +
            "' width='0' height='0' allowScriptAccess='always' type='application/x-shockwave-flash' /></embed>";
    $("#yanzhengma").focus();
}
//朗读登陆框的验证码 
function playLoginVoice() {
    var code = $("#checkYZMCode").val();
    var voiceid = document.getElementById('player_yzm');
    voiceid.innerHTML = "<embed id='sound_play' name='sound_play' src='/swf/sound_play.swf?"
            + (new Date().getTime()) +
            "'  FlashVars='isPlay=1&url=http://www.wsjsw.gov.cn:8080/voicecode/viocecode.aspx&code="
            + code +
            "' width='0' height='0' allowScriptAccess='always' type='application/x-shockwave-flash' /></embed>";
    $("#yzm").focus();
}