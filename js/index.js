$(function() {
	//购物车功能实现
	//节流阀
	var flag = true;
	//鼠标进入时间
	$(".cart").hover(function() {
		if (flag) {
			//关闭节流阀
			flag = false;
			$(".cart-list").slideDown("fast", function() {
				//打开节流阀
				flag = true;
			});
		}
	},function(){
		if (flag) {
			flag = false;
			$(".cart-list").slideUp("fast", function() {
				flag = true;
			});
		}
	});
	

	// 下载App
	var flag1 = true;
	//鼠标进入时间
	$(".download-box").hover(function() {
		if (flag1) {
			//关闭节流阀
			flag1 = false;
			$(".download").slideDown("fast", function() {
				//打开节流阀
				flag1 = true;
			});
		}
	},function(){
		if (flag1) {
			flag1 = false;
			$(".download").slideUp("fast", function() {
				flag1 = true;
			});
		}
	});

	// 搜索框点击事件
	$("#input").focus(function() {
		$("#input").css("cssText", "border-color:#ff6800!important").next().css("cssText",
			"border-color:#ff6800!important");
		$(".search-list").css("display", "block");
	});
	$("#input").blur(function() {
		$("#input").css("cssText", "border-color:#e0e0e0!important").next().css("cssText",
			"border-color:#e0e0e0!important");
		$(".search-list").css("display", "none");
	});

	//导航下拉框
	//小米手机的数据
	var Xiaomilist = [{
			img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4ef3713521fb9d7f114aa8bb152e220d.png?thumb=1&w=240&h=165&f=webp&q=90",
			name: "Xiaomi Civi 2",
			price: "2399元起"
		},
		{
			img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/581f3a690e6803add02e4c9fde98cb78.png?thumb=1&w=240&h=165&f=webp&q=90",
			name: "Xiaomi MIX Fold 2",
			price: "8999元起"
		},
		{
			img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d7a15df55e98e4163390096ed05b1ef5.png?thumb=1&w=240&h=165&f=webp&q=90",
			name: "Xiaomi 12S Ultra",
			price: "5999元起"
		},
		{
			img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b01bb7ee0f8c9865c11eeb2c483015e2.png?thumb=1&w=240&h=165&f=webp&q=90",
			name: "Xiaomi 12S Pro",
			price: "4399元起"
		},
		{
			img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e1f5a30b6e9e29c7f4ad6ed26023f4de.png?thumb=1&w=240&h=165&f=webp&q=90",
			name: "Xiaomi 12S",
			price: "3699元起"
		},
		{
			img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a811f07a4e13510b23ada8e2eca473ae.png?thumb=1&w=240&h=165&f=webp&q=90",
			name: "Xiaomi 12 Pro 天玑版",
			price: "2999元起"
		}
	];
	//红米手机的数据
	var Redmilist = [{
			img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/570184de014d26516f4c334f7132878a.png?thumb=1&w=240&h=165&f=webp&q=90",
			name: "Redmi Note 12 5G",
			price: "1199元起"
		},
		{
			img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/93e23b29e03f62164c5494a31dbbed25.png?thumb=1&w=240&h=165&f=webp&q=90",
			name: "Redmi Note 12 Pro",
			price: "1699元起"
		},
		{
			img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/86122140712f0f645e42934d07d262a8.png?thumb=1&w=240&h=165&f=webp&q=90",
			name: "Redmi Note 12 Pro+",
			price: "2099元起"
		},
		{
			img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ee06a9131e93619c75c49b88c740203b.png?thumb=1&w=240&h=165&f=webp&q=90",
			name: "Redmi K50 至尊版",
			price: "2799元起"
		},
		{
			img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1e1f915167554e99916273b5269da1b5.png?thumb=1&w=240&h=165&f=webp&q=90",
			name: "Redmi Note 11T Pro+",
			price: "1899元起"
		},
		{
			img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f11d7da9517953d11e02d0b459003f19.png?thumb=1&w=240&h=165&f=webp&q=90",
			name: "Redmi Note 11T Pro",
			price: "1569元起"
		}
	];;
	//电视的数据
	var TVlist = [{
			img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6511d77270e94146c0b1f96b66d8cc58.png?thumb=1&w=240&h=165&f=webp&q=90",
			name: "Redmi智能电视X55 2022",
			price: "2099元起"
		},
		{
			img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6511d77270e94146c0b1f96b66d8cc58.png?thumb=1&w=240&h=165&f=webp&q=90",
			name: "Redmi智能电视X65 2022",
			price: "2699元起"
		},
		{
			img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8871821795310769c1d3896c99b12381.png?thumb=1&w=240&h=165&f=webp&q=90",
			name: "小米电视6 65” OLED",
			price: "6699元起"
		},
		{
			img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0a1ae5341d2dae66cd42566c60d2d666.png?thumb=1&w=240&h=165&f=webp&q=90",
			name: "小米电视 大师 77” OLED",
			price: "17999元起"
		},
		{
			img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/932b583c6eccd8aabfa0771f8a854940.jpg?thumb=1&w=240&h=165&f=webp&q=90",
			name: "小米透明电视",
			price: "49999元起"
		},
		{
			img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ea3390a20547c7298a258528e4aa69ad.png?thumb=1&w=240&h=165&f=webp&q=90",
			name: "小米电视 大师 65英寸OLED",
			price: "8999元起"
		}
	];;
	//笔记本的数据
	var notebooklist = [{
			img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/55c17a67fff345d161ae55b9fb0d6f6a.png?thumb=1&w=240&h=165&f=webp&q=90",
			name: "Xiaomi Book Air 13",
			price: "5999元起"
		},
		{
			img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c86a7877e4ed76f50e204875e7372428.png?thumb=1&w=240&h=165&f=webp&q=90",
			name: "Redmi G 游戏本 锐龙版 R5",
			price: "6299元起"
		},
		{
			img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c86a7877e4ed76f50e204875e7372428.png?thumb=1&w=240&h=165&f=webp&q=90",
			name: "Redmi G Pro 游戏本 2022",
			price: "8999元起"
		},
		{
			img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c86a7877e4ed76f50e204875e7372428.png?thumb=1&w=240&h=165&f=webp&q=90",
			name: "Redmi G 游戏本 锐龙版 R7",
			price: "8799元起"
		},
		{
			img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c926842a23c7316b17792e075be9d055.png?thumb=1&w=240&h=165&f=webp&q=90",
			name: "Xiaomi Book Pro 14 锐龙版",
			price: "6399元起"
		},
		{
			img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c86a7877e4ed76f50e204875e7372428.png?thumb=1&w=240&h=165&f=webp&q=90",
			name: "Redmi G 游戏本 2022",
			price: "7499元起"
		}
	];;
	//平板的数据
	var flatlist = [{
			img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a887139f3995c4cac2a167e014ffd91e.jpg?thumb=1&w=240&h=165&f=webp&q=90",
			name: "Redmi Pad",
			price: "1299元起"
		},
		{
			img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1ba211a988be47d7ae5a1a448ecf0b67.jpeg?thumb=1&w=240&h=165&f=webp&q=90",
			name: "小米平板5 Pro 12.4",
			price: "2999元起"
		},
		{
			img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/33de34a4caf2834a1828dc51203dc922.png?thumb=1&w=240&h=165&f=webp&q=90",
			name: "小米平板5",
			price: "1999元起"
		},
		{
			img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/03892b203a6413bcd8ef3f92d77df79c.gif?thumb=1&w=240&h=165&f=webp&q=90",
			name: "小米平板5 Pro 5G",
			price: "3349元起"
		},
		{
			img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/aad55902a2cc64bf0306b004adb14ef7.png?thumb=1&w=240&h=165&f=webp&q=90",
			name: "小米平板5 Pro",
			price: "2499元起"
		}
	];;
	//家电的数据
	var houselist = [{
			img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/80416c1c7040aabbafa527a6ea652948.png?thumb=1&w=240&h=165&f=webp&q=90",
			name: "小米空调 1.5匹新1级能效",
			price: "1999元起"
		},
		{
			img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/950767dbf6e63b853d39d413e97685a8.png?thumb=1&w=240&h=165&f=webp&q=90",
			name: "新风空调 立式3匹",
			price: "6999元起"
		},
		{
			img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/65df9e92c06dcd148de5f0eb13e16ea2.png?thumb=1&w=240&h=165&f=webp&q=90",
			name: "米家扫地机器人",
			price: "999元起"
		}
	];;
	//路由器的数据
	var Routerlist = [{
			img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c1465737a8a6ac8772560dce2ef0a39f.png?thumb=1&w=240&h=165&f=webp&q=90",
			name: "Redmi 电竞路由器 AX5400",
			price: "549元起"
		},
		{
			img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2a759fa795d749f0538cfd2a15890027.png?thumb=1&w=240&h=165&f=webp&q=90",
			name: "小米路由器AX6000",
			price: "549元起"
		},
		{
			img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2815a0a208be362cba673aae9a1f9c93.png?thumb=1&w=240&h=165&f=webp&q=90",
			name: "小米路由器",
			price: "1299元起"
		},
		{
			img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2f88d17e29314286967eeb88bf86cdfc.png?thumb=1&w=240&h=165&f=webp&q=90",
			name: "Xiaomi HomeWIFI 三频 路由器",
			price: "1499元起"
		},
		{
			img: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/026a28fc18eff2cfa4d26a799a2da9cc.jpg?thumb=1&w=240&h=165",
			name: "小米路由器4A 千兆版",
			price: "129元起"
		},
		{
			img: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2ddc6a2789c5f5ff78fa4ca1402417c8.png?thumb=1&w=240&h=165",
			name: "查看全部",
			price: "小米路由器"
		}
	];;


	for (var i = 0; i < 7; i++) {
		var flag = true;
		//鼠标进入事件
		$(".nav-bar li a").eq(i).mouseenter(function() {
			var index = this.getAttribute("index");

			if (index == 0) {
				var list = Xiaomilist;
				var length = 6;
			} else if (index == 1) {
				var list = Redmilist;
				var length = 6;
			} else if (index == 2) {
				var list = TVlist;
				var length = 6;
			} else if (index == 3) {
				var list = notebooklist;
				var length = 6;
			} else if (index == 4) {
				var list = flatlist;
				var length = 5;
			} else if (index == 5) {
				var list = houselist;
				var length = 3;
			} else if (index == 6) {
				var list = Routerlist;
				var length = 6;
			}
			// console.log(i);
			// console.log(list);

			if (flag) {
				//关闭节流阀
				flag = false;
				var navlist = document.getElementById("wrap");
				var child = navlist.firstChild;
				while (child) {
					navlist.removeChild(child);
					child = navlist.firstChild;
				}

				for (var j = 0; j < length; j++) {
					var obj = document.createElement("a");
					obj.className = "item-nav-list";
					var name = document.createElement("div");
					name.innerHTML = list[j].name;
					name.className = "name"
					var price = document.createElement("div");
					price.innerHTML = list[j].price;
					price.className = "price";
					var img = document.createElement("img");
					img.src = list[j].img;
					obj.appendChild(img);
					obj.appendChild(name);
					obj.appendChild(price);
					navlist.appendChild(obj);
				}
				$(".nav-bar-list").slideDown("fast", function() {
					//打开节流阀
					flag = true;
				});
			}
		});

	}

	$(".nav-bar").mouseleave(function() {
		if (flag) {
			flag = false;
			$(".nav-bar-list").slideUp("fast", function() {
				flag = true;
			});
		}
	});
	$("#seven").mouseenter(function() {
		if (flag) {
			flag = false;
			$(".nav-bar-list").slideUp("fast", function() {
				flag = true;
			});
		}
	});

	// banner部分 
	$(".slide li").mouseenter(function() {
		var index = this.getAttribute("index");
		slidelist = document.querySelector(".slide-list");
		var slideitem = document.querySelector(".slide-item");
		var length = 24;

		if (index == 0) {
			slideitem.children[0].children[0].src =
				"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/930ddc941c1e6c81042406440e88ac45.png?thumb=1&w=60&h=60&f=webp&q=90";
			slideitem.children[0].children[1].innerHTML = "Xiaomi Civi 2";
			slidelist.style.width = "992px";
			length = 24;
		} else if (index == 1) {
			slideitem.children[0].children[0].src =
				"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b656495821144d92bd932d91eedcf659.png?thumb=1&w=60&h=60&f=webp&q=90";
			slideitem.children[0].children[1].innerHTML = "Redmi X65 2022款";
			slidelist.style.width = "992px";
			length = 24;
		} else if (index == 2) {
			slideitem.children[0].children[0].src =
				"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e997ed31cd5199ec0a24eeb48a37b1e7.jpg?thumb=1&w=60&h=60";
			slideitem.children[0].children[1].innerHTML = "空气净化器";
			slidelist.style.width = "992px";
			length = 24;
		} else if (index == 3) {
			slideitem.children[0].children[0].src =
				"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c7640eb8b71e25f211ee2eac916f868b.png?thumb=1&w=60&h=60&f=webp&q=90";
			slideitem.children[0].children[1].innerHTML = "Redmi G 游戏本";
			slidelist.style.width = "992px";
			length = 24;
		} else if (index == 4) {
			slideitem.children[0].children[0].src =
				"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab4a67cfa9b5c4839b83c342d6a9a469.png?thumb=1&w=60&h=60&f=webp&q=90";
			slideitem.children[0].children[1].innerHTML = "小米手环7 Pro";
			slidelist.style.width = "992px";
			length = 24;
		} else if (index == 5) {
			slideitem.children[0].children[0].src =
				"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/fcd7c59e12a2e7bb21487b7fddde0957.png?thumb=1&w=60&h=60&f=webp&q=90";
			slideitem.children[0].children[1].innerHTML = "Redmi Buds 4 Pro";
			slidelist.style.width = "992px";
			length = 24;
		} else if (index == 6) {
			slideitem.children[0].children[0].src =
				"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/58f1de816bc4cb6d1ce34b5211844933.jpg?thumb=1&w=60&h=60&f=webp&q=90";
			slideitem.children[0].children[1].innerHTML = "米家mini筋膜枪";
			slidelist.style.width = "744px";
			length = 18;
		} else if (index == 7) {
			slideitem.children[0].children[0].src =
				"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/77aa97808ebf4965cf823fd2199433ec.jpg?thumb=1&w=60&h=60&f=webp&q=90";
			slideitem.children[0].children[1].innerHTML = "收纳袋";
			slidelist.style.width = "744px";
			length = 18;
		} else if (index == 8) {
			slideitem.children[0].children[0].src =
				"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/4fb7885d49255b93f7245aa53501294c.jpg?thumb=1&w=60&h=60";
			slideitem.children[0].children[1].innerHTML = "智能门锁";
			slidelist.style.width = "496px";
			length = 12;
		} else if (index == 9) {
			slideitem.children[0].children[0].src =
				"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/6ce8ff4bc1e6ded2d40c53b2aa83b98c.jpg?thumb=1&w=60&h=60";
			slideitem.children[0].children[1].innerHTML = "平板配件";
			slidelist.style.width = "496px";
			length = 12;
		}

		var slide = slideitem.parentElement;
		var child = slide.firstChild;
		while (child) {
			slide.removeChild(child);
			child = slide.firstChild;
		}
		// 滑动门item
		for (var i = 0; i < length; i++) {
			var slideitem2 = slideitem.cloneNode(true);
			slide.appendChild(slideitem2);
		}
		$(".slide-list").show();
	});
	$(".slide").mouseleave(function() {
		$(".slide-list").hide();
	});


	// 手机部分的js
	var phoneitems = document.querySelector(".items");
	var parentphone = document.querySelector(".home-box-right").children[0];
	for (var i = 0; i < 7; i++) {
		var phoneitems2 = phoneitems.cloneNode(true);
		parentphone.appendChild(phoneitems2);
	};


	//智能穿戴
	var titleitem = document.querySelectorAll(".title-right-item");
	
	var headphone=document.getElementById("items2");
	var parentswatch=headphone.parentElement;
	var lastitems=document.getElementById("last-items");
	var last1=document.getElementById("last1");
	var last2=document.getElementById("last2");
	var introduce=document.getElementById("introuce");
	
	console.log(parentswatch);
	for(var i=0;i< 6;i++){
		parentswatch.insertBefore(headphone.cloneNode(true),headphone);
	}
	
	for (var i = 0; i < 2; i++) {
		titleitem[i].addEventListener("mouseenter", function() {
			var swatchindex=this.getAttribute("index");
			if(swatchindex==1){
				lastitems.insertBefore(last1,last2);
				introduce.innerHTML="耳机";
				for(var i=0;i<7;i++){
					parentswatch.children[i].children[0].children[0].src="https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202204211422_ce41ed00fe7fb79df35101222880121d.png?thumb=1&w=300&h=300&f=webp&q=90";
					parentswatch.children[i].children[0].children[1].innerHTML="Xiaomi Buds 3 Pro";
					parentswatch.children[i].children[0].children[2].innerHTML="40dB自适应降噪 | 空间音频 | HiFi级音质，纯净动听";
					parentswatch.children[i].children[0].children[3].innerHTML="499元起<del>699元</del>";
				}
			}else if(swatchindex==2){
				lastitems.removeChild(last1);
				introduce.innerHTML="穿戴";
				for(var i=0;i<7;i++){
					parentswatch.children[i].children[0].children[0].src="https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202204211419_626e47d8843927a9b719b9360d2b78dd.png?thumb=1&w=300&h=300&f=webp&q=90";
					parentswatch.children[i].children[0].children[1].innerHTML="Xiaomi Watch Color 2";
					parentswatch.children[i].children[0].children[2].innerHTML="60HZ高刷高清视网膜屏幕 | 心率监测 | 睡眠监测";
					parentswatch.children[i].children[0].children[3].innerHTML="699元起<del>999元</del>";
				}
			}
			console.log();
			for (var j = 0; j < 2; j++){
				titleitem[j].className="title-right-item";
			};
			this.className="title-right-item selected";
		})
	}
	
	
	//info图片定时变换
	var lastinfo=document.getElementById("last-info");
	var infoindex=0;
	var infoimg=["img/info5.png","img/info6.png"];
	var time1=setInterval(function(){
		infoindex++;
		if(infoindex>=infoimg.length){
			infoindex=0;
		}
		lastinfo.src=infoimg[infoindex];
	},1000);
});
