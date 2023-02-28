var manager = manager();
var eye = document.getElementById('eye');
var pwd = document.getElementById('pwd');
var flag = 0;
eye.onclick = function() {
	if (flag == 0) {
		pwd.type = 'text';
		eye.src = 'img/open.png';
		flag = 1; // 赋值操作
	} else {
		pwd.type = 'password';
		eye.src = 'img/close.png';
		flag = 0;
	}
}
$("#phone").focus(function() {
	$(this).parent().addClass("current");
})
$("#phone").blur(function() {
	$(this).parent().removeClass("current");
	if (this.value == "") {
		$("#wrong1").show();
		$(this).parent().css("margin-bottom", "0px").addClass("wrong");
	} else if (!(/^1[3458]\d{9}$/.test(this.value))) {
		$("#wrong1").html("手机号码格式错误");
		$("#wrong1").show();
		$(this).parent().css("margin-bottom", "0px").addClass("wrong");
	} else {
		$("#wrong1").hide();
		$(this).parent().css("margin-bottom", "30px").removeClass("wrong");
	}
})
$("#captcha").focus(function() {
	$(this).parent().addClass("current");
})
$("#captcha").blur(function() {
	$(this).parent().removeClass("current");
	if (this.value == "") {
		$("#wrong2").show();
		$(this).parent().css("margin-bottom", "0px").addClass("wrong");
	} else if (!(/^\d{6}$/.test(this.value))) {
		$("#wrong2").html("验证码格式错误(6个数字组成)");
		$("#wrong2").show();
		$(this).parent().css("margin-bottom", "0px").addClass("wrong");
	} else {
		$("#wrong2").hide();
		$(this).parent().css("margin-bottom", "30px").removeClass("wrong");
	}
})
$("#pwd").focus(function() {
	$(this).parent().addClass("current");
})
$("#pwd").blur(function() {
	$(this).parent().removeClass("current");
	if (this.value == "") {
		$("#wrong3").show();
		$(this).parent().css("margin-bottom", "0px").addClass("wrong");
	} else if (!(/^\w{4,16}$/.test(this.value))) {
		$("#wrong3").html("密码由4-16位字符组成");
		$("#wrong3").show();
		$(this).parent().css("margin-bottom", "0px").addClass("wrong");
	} else {
		$("#wrong3").hide();
		$(this).parent().css("margin-bottom", "30px").removeClass("wrong");
	}
})

function check() {
	var istrue = (/^\w{4,16}$/.test($("#pwd").val())) && (/^1[3458]\d{9}$/.test($("#phone").val()));
	if (istrue) {
		$(window).attr("location", "../index.html");
	}
}
$("#login-button").bind("click", check)
