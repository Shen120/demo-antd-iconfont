(function(window){var svgSprite='<svg><symbol id="anticon-bad-android" viewBox="0 0 1024 1024"><path d="M645.537877 184.984085 702.769346 69.937862c1.691525-3.3984 0.308015-7.52437-3.090385-9.212826-3.3984-1.691525-7.52437-0.306992-9.214872 3.092431L633.317555 178.695868c-36.586267-17.695011-77.618798-27.632337-120.978329-27.632337-40.151465 0-78.3126 8.513908-112.791879 23.824615L344.293929 63.817468c-1.691525-3.400446-5.816472-4.783956-9.214872-3.092431-3.397377 1.689479-4.780887 5.814426-3.090385 9.212826l55.140855 110.842481c-87.729064 44.290739-148.856259 133.659139-152.992463 237.70789l556.406372 0C786.532075 317.629127 728.969055 230.569306 645.537877 184.984085zM388.013663 366.119515c-25.638937 0-46.422286-20.784372-46.422286-46.422286s20.783349-46.422286 46.422286-46.422286c25.637913 0 46.423309 20.784372 46.423309 46.422286S413.651576 366.119515 388.013663 366.119515zM630.812501 366.119515c-25.638937 0-46.421262-20.784372-46.421262-46.422286s20.783349-46.422286 46.421262-46.422286 46.423309 20.784372 46.423309 46.422286S656.451438 366.119515 630.812501 366.119515z"  ></path><path d="M234.137063 465.257419l0 310.005496 87.052658 108.426455 75.880201 0 0 67.898413c0 14.32424 11.610432 25.934672 25.933649 25.934672 14.322194 0 25.932626-11.610432 25.932626-25.934672L448.936197 883.689371l126.71089 0 0 68.51342c0 14.322194 11.612479 25.932626 25.934672 25.932626s25.931602-11.610432 25.931602-25.932626L627.513362 883.689371l75.978439 0 87.051635-108.426455L790.543436 465.257419 234.137063 465.257419z"  ></path><path d="M206.641849 707.512882c0 20.591991-16.694217 37.287231-37.287231 37.287231l0 0c-20.594037 0-37.287231-16.694217-37.287231-37.287231L132.067386 483.790518c0-20.593014 16.693194-37.287231 37.287231-37.287231l0 0c20.591991 0 37.287231 16.694217 37.287231 37.287231L206.641849 707.512882z"  ></path><path d="M892.099413 707.512882c0 20.591991-16.693194 37.287231-37.286208 37.287231l0 0c-20.591991 0-37.287231-16.694217-37.287231-37.287231L817.525973 483.790518c0-20.593014 16.695241-37.287231 37.287231-37.287231l0 0c20.591991 0 37.286208 16.694217 37.286208 37.287231L892.099413 707.512882z"  ></path></symbol><symbol id="anticon-bad-apple" viewBox="0 0 1024 1024"><path d="M672.156118 26.634614c0 0-97.394191 42.103934-129.779785 84.172051-32.587186 42.330084-30.277584 157.432589-30.277584 157.432589s70.770833-50.448996 110.279662-103.911628C661.888264 110.864994 672.156118 26.634614 672.156118 26.634614z"  ></path><path d="M722.288912 583.500451c0-96.093569 71.464635-175.484733 164.142407-187.952696-5.942339-12.942777-12.805654-24.600281-20.521383-34.803667-23.414269-30.965246-60.111053-67.883063-104.808044-79.621409-110.851691-29.109991-162.109098 29.53978-236.33973 31.573089-74.233702-2.032286-125.490086-60.683081-236.341776-31.573089-44.695968 11.737322-81.394798 48.65514-104.808044 79.621409-47.318702 62.581314-63.260789 178.922019-23.494087 321.305867C207.622176 852.141864 326.069869 954.583001 378.890888 954.583001c51.869345 0 102.19145-24.245194 145.871275-25.119097 43.678802 0.873903 93.999884 25.119097 145.869229 25.119097 43.509956 0 131.541919-69.520353 187.780781-189.091636C779.737322 742.381018 722.288912 669.654646 722.288912 583.500451z"  ></path></symbol><symbol id="anticon-bad-windows" viewBox="0 0 1024 1024"><path d="M490.30028 478.518444 895.34841 473.79998 895.34841 127.795595 490.30028 175.253466Z"  ></path><path d="M432.784332 479.18871 432.784332 181.991937 128.650567 217.625506 128.650567 482.732419Z"  ></path><path d="M490.30028 545.481556 490.30028 848.745511 895.34841 896.202359 895.34841 550.197974Z"  ></path><path d="M432.784332 544.81129 128.650567 541.268604 128.650567 806.372447 432.784332 842.006016Z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)