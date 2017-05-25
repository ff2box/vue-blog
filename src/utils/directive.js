import $$ from './index.js';
let obj = {};


obj.install = Vue=>{
	/**
	 * 图片自动适配
	 */
	Vue.directive('autoSize', {
		bind(el){
			var src = el.src;
			var img = new Image();
			img.src = el.src;
			img.onload = function(e){
				var w = e.path[0].width;
				var h = e.path[0].height;
				if(w > h){
					el.style.height = '100%';
					el.style.width = 'initial';
				}else{
					el.style.height = 'initial';
					el.style.width = '100%';
				}
			}
		},
		update(){
		},
		unbind(){

		}
	});

	/**
	 * 右边侧栏滚动
	 */
	
	Vue.directive('sidebarScroll', {
		bind(el){
			
		},
		inserted(el){
			var _body = document.body;
			var _pNode = el.parentNode;
			// return
			el.slideBar = ()=>{
				//滚动的极限距离
				// console.log(_pNode.offsetHeight)
				var h = parseInt(_pNode.offsetHeight) - parseInt(el.offsetHeight)-20;
				var mainOffsetTop = parseInt(_pNode.offseTop);
				var mainHeight = parseInt(_pNode.offsetHeight);
				var slideBarHeight =  parseInt(el.offsetHeight) - 40 ;
				var slideBarIntOffsetTop = parseInt(el.offsetTop);		
				var slideFunc = function() {
		            var	scrollTop = parseInt(_body.scrollTop);
		            var slideBarOffsetTop = parseInt(el.offsetTop);
		            var slideBarTop  = parseInt(el.style.top) || 0;

		            //如果侧边栏和主体只差小于侧边栏的原始offsetTop就不滚动
		            if(parseInt(h)<slideBarIntOffsetTop){
		            	return false;
		            }
					var aniDistant=Math.min( ( Math.max( ( -mainOffsetTop, ( scrollTop - slideBarOffsetTop + slideBarTop)))), (mainHeight - slideBarHeight ) );
		            // console.log(-mainOffsetTop+' '+(scrollTop - slideBarOffsetTop + slideBarTop)+' '+scrollTop+' '+slideBarOffsetTop+' '+slideBarTop)                                                                                                                                                                                                                                                                                                                                                                                   
					if (aniDistant > h) {
						aniDistant = h
					};
		            // console.log(parseInt($(document).scrollTop()))
		            // console.log(_body.scrollTop, slideBarIntOffsetTop)
					if (parseInt(_body.scrollTop) > slideBarIntOffsetTop ) {
						$$.moveStart(el, {'top':aniDistant});
					} else {
						$$.moveStart(el, {'top':10});
					}
				}
				window.addEventListener('scroll', slideFunc);
				document.addEventListener('resize', slideFunc);
			}
			setTimeout(()=>{
				el.slideBar()
			}, 500)
			
		},
		update(el){
			setTimeout(()=>{
				el.slideBar()
			}, 500)
		},
		unbind(){

		}
		
	})
}

export default obj;
