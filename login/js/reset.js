//验证码倒计时
var yanzheng = document.getElementById("yanzheng");
var time = 60; // 定义剩下的秒数
yanzheng.addEventListener('click', function() {
	yanzheng.disabled = true;
	var timer = setInterval(function() {
		if (time == 0) {
			// 清除定时器和复原按钮
			clearInterval(timer);
			yanzheng.disabled = false;
			yanzheng.value = '获取验证码';
		} else {
			yanzheng.value = '重新发送' + time + '秒';
			time--;
		}
	}, 1000);

})
