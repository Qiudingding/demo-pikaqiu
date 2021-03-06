!function(){
	var duration = 50
	function writeCode(prefix, code, fn){
		let container = document.querySelector('#code')
		let styleTag = document.querySelector('#styleTag')
		let n = 0
		let id
		id = setTimeout(function run() {
			n += 1
			container.innerHTML = code.substring(0,n)
			styleTag.innerHTML = code.substring(0,n)
			container.scrollTop = container.scrollHeight
			if(n < code.length){ 
				id = setTimeout(run, duration)
				}else{
					fn && fn.call()
			}
		},duration)
	}
	let code = `
/*
 * 首先，需要准备皮卡丘的皮
 */
.preview{
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(254, 220, 6);
}
.wrapper{
  width: 100%;
  height: 165px;
  position: relative;
}
/*
 * 接下来，画皮卡丘的鼻子
 */
.nose{
  width:0;
  height: 0;
  border-style: solid;
  border-width: 12px;
  border-color: black transparent transparent;
  border-radius: 11px;
  position: absolute;
  left: 50%;
  top: 28px;
  margin-left: -12px; 
}
/*
 * 接下来，画皮卡丘的眼睛
 */
.eye{
  width: 49px;
  height: 49px;
  background: #2E2E2E;
  position: absolute;
  border-radius: 50%;
  border: 2px solid #000000;
}
/*
 * 眼珠子
 */
.eye::before{
  content: '';
  display: block;
  width: 24px;
  height: 24px;
  background: white;
  position: absolute;
  border-radius: 50%;
  left: 7px;
  top: -1px;
  border: 2px solid #000;
}
/*
 * 左眼在左边（废话）
 */
.eye.left{
  right: 50%;
  margin-right: 90px;
}
/*
 * 右眼在右边（废话）
 */
.eye.right{
  left: 50%;
  margin-left: 90px;
}
/*
 * 然后，画皮卡丘的脸
 */
.face{
  width: 68px;
  height: 68px;
  background: #FC0D1C;
  border-radius: 50%;
  border: 2px solid black;
  position: absolute;
  top: 85px;
}
/*
 * 将脸放到正确的位置
 */
.face.left{
  right: 50%;
  margin-right: 116px;
}
.face.right{
  left: 50%;
  margin-left: 116px;
}
/*
 * 上嘴唇
 */
.upperLip{
  height: 25px;
  width: 80px;
  border: 2px solid black;
  position: absolute;
  top: 48px;
  background: rgb(254, 220, 6);
}
.upperLip.left{
  right: 50%;
  border-bottom-left-radius: 40px 25px;
  border-top: none;
  border-right: none;
  transform: rotate(-20deg);
}
.upperLip.right{
  left: 50%;
  border-bottom-right-radius: 40px 25px;
  border-top: none;
  border-left: none;
  transform: rotate(20deg);
}
/*
 * 下嘴唇
 */
.lowerLip-wrapper{
  position: absolute;
  bottom: 0;
  left: 50%;
  margin-left: -150px;
  height: 110px;
  width: 300px;
  overflow: hidden;
}
.lowerLip{
  width: 300px;
  height: 3500px;
  background: #990513;
  border-radius: 200px/2000px;
  border: 2px solid black;
  position: absolute;
  bottom: 0;
  overflow: hidden;
}
/*
 * 小舌头
 */
.lowerLip::after{
  content: '';
  position: absolute;
  bottom: -20px;
  width: 100px;
  height: 100px;
  background: #FC4A62;
  left: 50%;
  margin-left: -50px;
  border-radius: 50px;
}
/*
 * 好了，这只皮卡丘送给你
 */
 `
	writeCode('', code)

	$('.actions').on('click', 'button', function(e){
		let $button = $(e.currentTarget)
		let speed = $button.attr('data-speed')
		$button.addClass('active')
			.siblings( '.active').removeClass('active')
		switch(speed){
			case 'slow':
				duration = 50
				break
			case 'normal':
				duration = 30
				break
			case 'fast':
			duration = 10
			break
		}
	})
}.call()

function rbf(){
 var audio = document.getElementById('audio'); 
 audio.currentTime = 0;
}
function bf(){
 var audio = document.getElementById('audio');             
  if(audio.paused){                 
      audio.play();//audio.play();// 这个就是播放  
  }else{
   audio.pause();// 这个就是暂停
  }
 } 