document.addEventListener("DOMContentLoaded",function(){var e,t,n,o;t=document.getElementById("goToOption"),e=document.getElementById("addExceptionPopup"),o="",n="",t.addEventListener("click",function(){window.open(chrome.extension.getURL("options.html"))}),chrome.tabs.query({currentWindow:!0,active:!0},function(t){var i;t[0].url.indexOf("://vk.com/")>-1?(i=new URL(t[0].url),n=t[0].title,o=i.pathname):e.disabled=!0}),e.addEventListener("click",function(){var e;e={title:n,url:o},localStorage.vkCommentBlockerTemp=JSON.stringify(e),window.open(chrome.extension.getURL("options.html"))})});