(function(){

	// 定义进出场动画数组
	window.enter = [];
	window.exit = [];

	enter[0] = function(){
		// title的进场
		$('.page0 .title h3').show().velocity({
			'translateY' : -200,
			'opacity' : 0
		},0).delay(500).velocity('reverse',{
			'duration':1000,
			'easing':[0.68, -0.55, 0.265, 1.55 ]
		});

		// 小球的运动
		$('.page0 .line .circle').velocity({
			'translateY' : 300,
			'opacity' : 0
		},0).delay(300).velocity('reverse',{
			'duration':1200,
			'easing':'ease-in-out',
			// 回掉函数
			complete : function(){
				$(this).css({
					"animation": "Beat 0.8s ease-in-out -0.4s infinite alternate"
				});
				$('.pic').fadeIn().css({
					'animation':'down 1s ease-in-out -0.1s infinite alternate'
				})
			}
		});

		// 左边线条的进场
		$('.L_Line').velocity({
			'translateX' : 1000,
			'opacity' : 0
		},0).delay(300).velocity('reverse',{
			'duration':1200,
			'easing':[0.71, 0.01, 0.71, 0.99]
		});
		// 右边线条的进场
		$('.R_Line').velocity({
			'translateX' : -1000,
			'opacity' : 0
		},0).delay(300).velocity('reverse',{
			'duration':1200,
			'easing':[0.71, 0.01, 0.71, 0.99]
		});

		console.log('0进')
	};


	exit[0] = function(){
		// title的出场
		$('.page0 .title h3').velocity({
			'translateY' : 200,
			'opacity' : 0
		},1000).velocity({
			'translateY' : 0,
			'opacity' : 1
		},0);

		// 小球的退场
		$('.page0 .line .circle').velocity({
			"animation" : 'none',
			'translateY' : 300,
			'opacity' : 0
		},1000).velocity({
				'translateY' : 0,
				'translateX' : 0,
				'opacity' : 1
			},0)

		// 左边线条的出场
		$('.L_Line').velocity({
			'translateY' : 300,
			'translateX' : 400,
			'opacity' : 0
		},1000).velocity({
			'translateY' : 0,
			'translateX' : 0,
			'opacity' : 1
		},0);
		// 右边线条的出场
		$('.R_Line').velocity({
			'translateY' : 300,
			'translateX' : -400,
			'opacity' : 0
		},1000).velocity({
			'translateY' : 0,
			'translateX' : 0,
			'opacity' : 1
		},0);

		// 下箭头
		$('.pic').fadeOut(800);
		console.log('0出')
	}

	enter[1] = function(){
		// title进场
		$('.page1 .title h3').velocity({
			'translateY' : -120,
			'opacity' : 0
		},0).delay(600).velocity('reverse',{
			'duration' : 900,
			'easing':[0.71, 0.01, 0.71, 0.99]
		});
		

		// 内容进场
		$('.int:even').velocity({
			'translateX' : -200,
			'opacity' : 0
		},0).each(function(i){
			$(this).delay(300*(i+1)).velocity('reverse',{
				'duration':700,
				'easing':[0.39, 0.575, 0.565, 1],
				complete:function(){
				$(this).find('span').fadeIn()
			}})
		})
		$('.int:odd').velocity({
			'translateX' : 200,
			'opacity' : 0
		},0).each(function(i){
			$(this).delay(200+300*(i+1)).velocity('reverse',{
				'duration':700,
				'easing':[0.39, 0.575, 0.565, 1],
				complete:function(){
				$(this).find('span').fadeIn();
			}})
		})
		console.log('1进')
	}

	exit[1] = function(){
		// title出场
		$('.page1 .title h3').velocity({
			'translateY' : -200,
			'opacity' : 0
		},1000).velocity({
			'translateY' : 0,
			'translateX' : 0,
			'opacity' : 1
		});
		// 内容出场
		$('.int:even').each(function(i){
			$(this).find('span').fadeOut(300*(i+1));
			$(this).delay(300*i).velocity({
			'translateX' : -200,
			'opacity' : 0
		},800,function(){
				$(this).velocity({
					'translateX' : 0,
					'opacity' : 1
				},0)
			})
		})
		$('.int:odd').each(function(i){
			$(this).find('span').fadeOut(250+300*(i+1));
			$(this).delay(250+300*i).velocity({
			'translateX' : 200,
			'opacity' : 0
		},800,function(){
				$(this).velocity({
					'translateX' : 0,
					'opacity' : 1
				},0)
			})
		})
		
		
		console.log('1出')
	}


	enter[2] = function(){
		// title进场
		$('.page2 .title h3').velocity({
			'translateX' : 500,
			'opacity' : 0
		},0).velocity('reverse',{
			'duration' : 1400,
			'easing':[0.71, 0.01, 0.71, 0.99]
		});
		

		// 作品进场
		$('.project li').velocity({
			'translateY' : 400,
			'opacity' : 0
		},0).each(function(i){
			$(this).fadeIn().velocity('reverse',{
				'duration' : 700 + (50*i)
			})
		})

		console.log('2进')
	}

	exit[2] = function(){
		// title出场
		$('.page2 .title h3').velocity({
			'translateY' : -80,
			'opacity' : 0
		},1000).velocity({
			'translateY' :0,
			'opacity' : 1
		});
		
		// 作品出场
		$('.project li').each(function(i){
			if (i < 4) {
				$(this).velocity({
					'translateX' : -500,
					'opacity' : 0
				},800).velocity({
					'translateX' : 0,
					'opacity' : 1
				},0)
			} else{
				$(this).velocity({
					'translateX' : 500,
					'opacity' : 0
				},800).velocity({
					'translateX' : 0,
					'opacity' : 1
				},0)
			};
		})

		console.log('2出')
	}


	enter[3] = function(){
		console.log('3进')
	}


	exit[3] = function(){
		console.log('3出')
	}

	enter[4] = function(){
		console.log('4进')
	}
	
	exit[4] = function(){
		console.log('4出')
	}


	enter[5] = function(){
		// title进场
		$('.page5 .title h3').velocity({
			'translateX' : 500,
			'opacity' : 0
		},0).velocity('reverse',{
			'duration' : 1400,
			'easing':[0.68, -0.55, 0.265, 1.55 ]
		});
		// 内容进场
		$('.contact .top li').velocity({
			'translateY' : 400,
			'rotateZ' : 1000,
			'opacity' : 0
		},0).velocity('reverse',{
			'duration' : 1200,
			'delay' : 300,
			'easing':[0.785, 0.135, 0.15, 0.86]
		})



		console.log('5进')
	}

	exit[5] = function(){
		// title出场
		$('.page5 .title h3').velocity({
			'translateY' : -120,
			'opacity' : 0
		},1000,[0.785, 0.135, 0.15, 0.86]).velocity({
			'translateY' :0,
			'opacity' : 1
		});

		// 内容出场
		$('.contact .top li').velocity({
			'translateY' : -200,
			'opacity' : 0
		},1000,[0.785, 0.135, 0.15, 0.86],function(){
			$(this).velocity({
				'translateY' : 0,
				'opacity' : 1
			})
		})

		console.log('5出')
	}

	
})()