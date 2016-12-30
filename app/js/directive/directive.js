/**
 * Created by Tiasen on 2016/12/28.
 */
angular.module('ts')
    .directive('btnMove',function($timeout){
        return {
            restrict:'A',
            replace:false,
            link:function(scope,ele,attrs){
               console.log(attrs);
                var isDown = false;
                var isShow = false;
                var screenWid = document.body.clientWidth || document.documentElement.clientWidth;
                var wid = ele[0].clientWidth;
                var hid = ele[0].clientHeight;
                var top = ele[0].offsetTop;
                var left = ele[0].offsetLeft;
                var screenHeight = document.body.clientHeight || document.documentElement.clientHeight;
                var x,y;

                console.log(screenHeight)


                console.log(screenWid)

                ele[0].addEventListener('mousedown',function(event){
                    console.log('down');
                    console.log(event);
                    isDown = true;
                    isShow = attrs.isshow;
                    console.log(isShow)
                    console.log('e--'+event.x +"...."+event.y );
                    console.log('f--'+left +"...."+top );
                    x = event.x - left;
                    y = event.y - top;
					console.log(x +',,,'+ y)
                });
                document.addEventListener('mousemove',function(event){
//                  console.log(event.clientX)
                    if(isDown){
//                      console.log(isShow);
//                      var left = ele[0].offsetLeft;
//                      var top = ele[0].offsetTop;
                        console.log(event.clientX+x)
                        var X;
                        if(isShow == 'true'){
                            X = event.clientX-x <= 200+x ? 0 : (event.clientX + wid-x >= screenWid ? screenWid - x : event.clientX-200 +x)

                        }else{
                            X = event.clientX-x <= x ? 0 : (event.clientX >= screenWid ? screenWid - wid : event.clientX )
                        }
                        var Y = event.clientY <= 0 ? 0 :(event.clientY > screenHeight ? screenHeight-hid : event.clientY);
//                      console.log(X);
//                      console.log(Y);

                        ele.css({
                            'top':Y-y + 'px',
                            'left':X+ 'px'
                        });
                    }

                });
                document.addEventListener('mouseup',function(){
                    console.log('up');
                    isDown = false;
                })
            }
        }

    });