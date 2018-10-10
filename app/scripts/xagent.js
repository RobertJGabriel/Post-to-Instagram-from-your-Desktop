'use strict';

(function () {
    var USERAGENT = 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Mobile Safari/537.36';
    var VENDOR = '';
    var PLATFORM = 'Windows';

    var defProp = function defProp(prop, value) {
        Object.defineProperty(window.navigator, prop, {
            get: function get() {
                return value;
            }
        });
    };

    defProp('userAgent', USERAGENT);
    defProp('appVersion', USERAGENT);
    defProp('vendor', VENDOR);
    defProp('platform', PLATFORM);
})();