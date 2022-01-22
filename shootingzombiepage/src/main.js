function isTouchDevice() {
  return 'ontouchstart' in window || navigator.maxTouchPoints;
};

function isMobileDevice()
{
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

function detectLanguages()
{
    return (window.navigator.userLanguage || window.navigator.language || "en-US").split("-");
}

var initKeyboard = function ()
{
    $(window).on("keydown keyup keypress", function (e) {
        $(".creative-view")[0].contentWindow.postMessage(JSON.stringify({
            type: "KeyboardEvent",
            data: {
                type: e.type,
                which: e.which,
                key: e.key,
                keyCode: e.keyCode
            }
        }), "*");
    });
};

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function acceptCookie()
{
    setCookie("acceptCookie","true",365);
    $(".cookie-notices").fadeOut();
}

function checkAcceptCookie()
{
    if(getCookie("acceptCookie"))
    {
        $(".cookie-notices").remove();
    }
}

var main = function ()
{
    checkAcceptCookie();
    var iframe_link = $("meta[name=iframe_link]").attr("content");
    
    if (isMobileDevice())
    {
        $(".center-container").addClass("mobile").appendTo($("body"));
    } else
    {
        $(".center-container").removeClass("mobile");
    }

    var lg = detectLanguages();
    var lang = lg[0];
    var country = lg[1];
    var args = {
        platform: "browser",
        anonymous: window.userid || "n/a",
        ipCountry: country,
        language: lang
    };

	if(isMobileDevice())
	{
		// window.location = "https://game-portal.gameloft.com/2093/sites/wwdits/" + iframe_link;
		// window.location = iframe_link;

        $(".center-container").width("100%");
        $(".center-container").height("100%");
	}


    $(".creative-view").attr("src", iframe_link);
    $(".creative-view").focus();
    initKeyboard();

};
$(document).ready(main);

