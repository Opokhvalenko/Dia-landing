var e=document.getElementById("button-vision"),s=document.getElementById("header-button");e.addEventListener("click",function(){document.getElementById("message").scrollIntoView({behavior:"smooth"})}),s.addEventListener("click",function(){document.getElementById("work").scrollIntoView({behavior:"smooth"})});var t=document.getElementById("arrow-left"),d=document.getElementById("arrow-right"),l=document.getElementById("slides");function i(e){var s=l.className;switch(!0){case s.includes(1)&&"right"===e:l.classList.remove("slider__slides--1-slide"),l.classList.add("slider__slides--2-slide");break;case s.includes(2)&&"right"===e:l.classList.remove("slider__slides--2-slide"),l.classList.add("slider__slides--3-slide");break;case s.includes(2)&&"left"===e:l.classList.remove("slider__slides--2-slide"),l.classList.add("slider__slides--1-slide");break;case s.includes(3)&&"left"===e:l.classList.remove("slider__slides--3-slide"),l.classList.add("slider__slides--2-slide")}}t.addEventListener("click",function(){return i("left")}),d.addEventListener("click",function(){return i("right")}),document.getElementById("burgerButton").addEventListener("click",function(){document.getElementsByTagName("body")[0].style.overflow="hidden"});for(var n=document.getElementsByClassName("closeButton"),c=0;c<n.length;c++)!function(e){n[e].addEventListener("click",function(){document.getElementsByTagName("body")[0].style.overflow="auto"})}(c);
//# sourceMappingURL=index.b75228db.js.map