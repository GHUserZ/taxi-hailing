//触发点击事件
mui(".tab-wrapper").on("tap", "li", tabStyle);
mui('.taxi-ride').on('tap', '.taxi-ride-num', personNum);
mui('.taxi-ride').on('tap', '.taxi-ride-person', phoneDialog);
//mui('.location').on('tap', '#startLocation', showMap);
//mui('.location').on('tap', '#endLocation', showMap);
mui('.cancelBox').on('tap', '.cancel', hideMap);
$('body').delegate('#startLocation','touchend',function(){
	showMap('startLocation');
});
$('body').delegate('#endLocation','touchend',function(){
	showMap('endLocation');
});
//tab样式
function tabStyle() {
	$(this).addClass('link-active').siblings().removeClass('link-active');
	var type = $(this).attr('data-type');
}
//换乘车人联系方式
function phoneDialog(){
	var btnArray = ['确定'];
	mui.prompt('请输入换乘车主联系方式', '请输入手机号', ' ', btnArray, function(e) {
		if(e.index == 1) {
			document.getElementById("phone").innerText = e.value
		}
	});
	document.querySelector('.mui-popup-input input').type = 'number';
}
//乘车人数
function personNum() {
	var picker = new mui.PopPicker();
	var data = [{
		value: '1',
		text: '1位'
	}, {
		value: '2',
		text: '2位'
	}, {
		value: '3',
		text: '3位'
	}, {
		value: '4',
		text: '4位'
	}];
	var personNum = document.getElementById('ccrs');
	picker.setData(data);
	picker.show(function(selectItems) {
		personNum.innerHTML = selectItems[0].text;
	});
}

//显示地图
function showMap(el){
	$('.mapBox').css({'left':0})
	setTimeout(function() {
		windowMapBusiness.autoComplete('inputAddress',el);
		windowMapBusiness.initMap('allmap', '深圳');
	}, 300);
}

function hideMap(){
	$('.mapBox').css({'left':'100%'});
}

$('.selectBox').on('change',function(){
	var address = $('.selectBox option:selected').text();
	windowMapBusiness.autoComplete('inputAddress');
})
