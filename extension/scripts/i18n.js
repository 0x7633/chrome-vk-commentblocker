document.addEventListener("DOMContentLoaded",function(){var e,t,n,o,m;for(n=document.querySelectorAll("[data-i18n]"),t=o=0,m=n.length;m>=0?m>o:o>m;t=m>=0?++o:--o)(e=n[t].dataset.i18n)&&(n[t].innerHTML=chrome.i18n.getMessage(e))});