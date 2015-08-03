;(function(global) {
    var services = {
        'douban': 'http://shuo.douban.com/!service/share?name={{title}}&href={{url}}&image={{pic}}',
        'kaixin': 'http://www.kaixin001.com/repaste/bshare.php?rtitle={{title}}&rurl={{url}}',
        'netease': 'http://t.163.com/article/user/checkLogin.do?info={{title}}',
        'qq_t': 'http://v.t.qq.com/share/share.php?title={{title}}&url={{url}}&pic={{pic}}',
        'qq_zone': 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?title={{title}}&url={{url}}&pics={{pic}}',
        'renren': 'http://share.renren.com/share/buttonshare.do?title={{title}}&link={{url}}',
        'sina': 'http://v.t.sina.com.cn/share/share.php?title={{title}}&url={{url}}&pic={{pic}}',
        'twitter': 'https://twitter.com/intent/tweet?text={{title}}&url={{url}}',
        'sohu': 'http://t.sohu.com/third/post.jsp?title={{title}}&url={{url}}&content=utf-8',
        'facebook': 'https://www.facebook.com/sharer/sharer.php?t={{title}}&p[images][0]={{pic}}&u={{url}}',
        'twitter': 'https://twitter.com/intent/tweet?text={{title}}&url={{url}}&image={{pic}}',
        'weibo': 'http://service.weibo.com/share/share.php?title={{title}}&url={{url}}&pic={{pic}}'
    };

    function parser(serviceId, option) {
        var service = services[serviceId];

        // Should specify serviceId
        if (!service) {
            throw new Error('No Service "' + serviceId + '" Configuration');
        }

        // if (serviceId == 'twitter' || serviceId == 'facebook') {
        //     var meta = getMeta(serviceId);
        //     meta.setAttribute('content', option['pic'])
        // }

        var url =  service.replace(/{{(.*?)}}/g, function(a, m) {
            return option[m] ?
                encodeURIComponent(option[m]) : '';
        });

        openWindow(url, option);
    }

    // function getMeta(serviceId) {
    //     var metaName = serviceId + ':image:src';
    //     var meta = document.getElementsByTagName('meta')[metaName];
    //     if (!meta) {
    //         meta = document.createElement('meta')
    //         meta.setAttribute('name', metaName)
    //         document.head.appendChild(meta)
    //     }
    //     return meta;

    // }

    function openWindow(url, option) {
        var name      =    option['title'];
        var iWidth    =    600;
        var iHeight   =    500;
        var iTop      =    (window.screen.availHeight - 30 - iHeight) / 2;
        var iLeft     =    (window.screen.availWidth - 10 - iWidth) / 2;

        window.open(url, name, 'height=' + iHeight + ',,innerHeight=' + iHeight + ',width=' + iWidth + ',innerWidth=' + iWidth + ',top=' + iTop + ',left=' + iLeft + ',status=no,toolbar=no,menubar=no,location=no,resizable=no,scrollbars=0,titlebar=no');
    }

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = parser;
    }

    if (global.Share) {
        global.Share.parser = parser;
    }
})(this);
