"use strict";function resize(){w=canvas.width=window.innerWidth,h=canvas.height=window.innerHeight}function animate(){context.clearRect(0,0,w,h),t+=.1;for(var e=0;e<1e4;e++){var a=.05+Math.sin(2e-5*t)/Math.PI*.2,n=Math.min(w,h)*(Math.cos((t+e)*a)/Math.PI*1.5),i=Math.sin(e)*n+canvas.width/2,c=Math.cos(e)*n+canvas.height/2;context.fillStyle="rgba(0,255,255,0.5)",context.fillRect(i,c,1.5,1.5)}setTimeout(animate,16)}var w,h,canvas=document.getElementById("canvas2"),context=canvas.getContext("2d"),t=0;context.globalCompositeOperation="lighter",window.addEventListener("resize",resize,!1),resize(),animate();