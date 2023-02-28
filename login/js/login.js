var manager = manager();
console.log(manager);
// 显示密码
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
//验证表单
$("#account").focus(function() {
	$(this).parent().addClass("current");

})
$("#account").blur(function() {
	$(this).parent().removeClass("current");
	if (this.value == "") {
		$("#wrong1").show();
		$(this).parent().css("margin-bottom", "0px").addClass("wrong");
	} else {
		console.log($(this).val());
		for (var i = 0; i < manager.length; i++) {
			console.log(manager[i].amount);
			if ($(this).val() == manager[i].amount) {
				$("#wrong1").hide();
				$(this).parent().css("margin-bottom", "30px").removeClass("wrong");
				break;
			} else {
				$("#wrong1").html("未找到该用户，请先注册");
				$("#wrong1").show();
				$(this).parent().css("margin-bottom", "0px").addClass("wrong");
			}
		}
	}
})
$("#pwd").focus(function() {
	$(this).parent().addClass("current");
})
$("#pwd").blur(function() {
	$(this).parent().removeClass("current");
	if (this.value == "") {
		$("#wrong2").show();
		$(this).parent().css("margin-bottom", "0px").addClass("wrong");
	} else {
		check();
	}
})

$("#login-button").click(function() {
	var flag = $("#check").is(':checked');
	var istrue = check();
	if (flag == false) {
		$("#alert").fadeIn(1);
		var t = setTimeout(function() {
			$("#alert").hide();
		}, 2000)
	} else {
		if (istrue == true) {
			$(window).attr("location", "../index.html");
		}
	}

})

function check() {
	var password = null;
	var flag = null;
	for (var i = 0; i < manager.length; i++) {
		if ($("#account").val() == manager[i].amount) {
			password = manager[i].password;
			break;
		} else {
			$("#wrong2").html("输入的密码错误");
			$("#wrong2").show();
			$("#pwd").parent().css("margin-bottom", "0px").addClass("wrong");
			flag = false;
		}
	}
	if ($("#pwd").val() == password) {
		$("#wrong2").hide();
		$("#pwd").parent().css("margin-bottom", "30px").removeClass("wrong");
		flag = true;
	}
	return flag;
}
