(function(){
	//得到画布
	var canvas = document.getElementsByTagName("canvas")[0];
	//得到上下文
	var ctx = canvas.getContext("2d");
	//设置画布的大小
	canvas.width = document.documentElement.clientWidth;
	canvas.height = document.documentElement.clientHeight;

	//窗口改变时设置尺寸大小
	window.onresize = function(){
		canvas.width = document.documentElement.clientWidth;
		canvas.height = document.documentElement.clientHeight;
	}

	//小球类
	function Ball(){
		//小球的圆心坐标
		this.x = _.random(0,canvas.width);
		this.y =_.random(0,canvas.height);
		//小球的半径
		this.r = 2;
		//小球的颜色
		this.color = "skyblue";
		//随机的运动步长
		this.dx = _.random(-1,1);
		this.dy = _.random(-1,1);
		//将自己加入到数组
		ballArr.push(this);
		//自己在数组中的下标值
		this.index = ballArr.length -1;
	}
	//更新
	Ball.prototype.update=function(){
		//改变小球的圆心坐标
		this.x += this.dx;
		this.y += this.dy;
		//判断
		if (this.x < this.r || this.x > canvas.width- this.r) {
			this.dx = -this.dx;
		} ;
		if (this.y < this.r || this.y > canvas.height- this.r) {
			this.dy = -this.dy;
		} ;
	}
	//渲染
	Ball.prototype.render=function(){
		//绘制小球
		ctx.beginPath();
		//透明度
		ctx.globalAlpha = 0.5;
		ctx.arc(this.x, this.y, this.r,0,Math.PI*2,false);
		ctx.closePath();
		ctx.fillStyle = this.color;
		ctx.fill();
		//划线,只链接比自己大的求,就从this.index开始,不然会重复划线
		for (var i = this.index; i < ballArr.length; i++) {
			//判断离自己在150范围内的才划线
			if (Math.abs(this.x - ballArr[i].x)<150 && Math.abs(this.y - ballArr[i].y)<150) {
				ctx.beginPath();
				//透明度根据距离的远近来设置
				ctx.globalAlpha = 10 / Math.sqrt(Math.pow(this.x - ballArr[i].x , 2) + Math.pow(this.y - ballArr[i].y , 2));
				ctx.moveTo(this.x, this.y);
				ctx.lineTo(ballArr[i].x, ballArr[i].y);
				ctx.closePath();
				ctx.strokeStyle = "grey";
				ctx.stroke();
			};

		};
	}
	//建立数组,放小球
	var ballArr = [];
	//new50个小球
	for (var i = 0; i < 100; i++) {
		new Ball();
	};
	//主循环,每帧都跟新和渲染
	setInterval(function(){
		ctx.clearRect(0, 0 , canvas.width, canvas.height);
		_.each(ballArr,function(data){
			data.update();
			data.render();
		});

	}, 20);
})()