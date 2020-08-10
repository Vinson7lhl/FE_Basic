/**
 * 根据屏幕大小更改html标签字体大小
        设备宽= root_px * rem_num
        root_px = 设备宽/设计稿宽
 */
var baseNum;
var docEl = document.documentElement,
	resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
	recalc = function () {
		// docEl.style.fontSize = 10 * (docEl.clientWidth / 375) + 'px';
		docEl.style.fontSize = 10 * (docEl.clientWidth / 1920) + 'px';
	};
window.addEventListener(resizeEvt, recalc, false);
document.addEventListener('DOMContentLoaded', recalc, false);

var html_dom = document.getElementsByTagName('html')[0]
var button_dom = document.getElementsByClassName('fullScreen')[0]
html_dom.mozRequestFullScreen()
button_dom.onclick = function () {
	if (html_dom.requestFullscreen) {
		html_dom.requestFullscreen();
	} else if (html_dom.mozRequestFullScreen) {
		html_dom.mozRequestFullScreen();
	} else if (html_dom.webkitRequestFullscreen) {
		html_dom.webkitRequestFullscreen();
	} else if (html_dom.msRequestFullscreen) {
		html_dom.msRequestFullscreen();
	}
}
/**
 * @description 将数字转化为以逗号分割的序列
 * @param {number} num 数字
 */
function numFormat (num) {
	var res = num.toString().replace(/\d+/, function (n) { // 先提取整数部分
		return n.replace(/(\d)(?=(\d{3})+$)/g, function ($1) {
			return $1 + ",";
		});
	})
	return res;
}