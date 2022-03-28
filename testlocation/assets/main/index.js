System.register("chunks:///_virtual/GameMgr.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, _decorator, Component;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "33fd9KcK9FD+rxCBZuNnWYu", "GameMgr", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var GameMgr = exports('GameMgr', (_dec = ccclass('GameMgr'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GameMgr, _Component);

        function GameMgr() {
          return _Component.apply(this, arguments) || this;
        }

        var _proto = GameMgr.prototype;

        _proto.revokePermission = function revokePermission() {
          navigator.permissions.query({
            name: 'geolocation'
          }).then(function (result) {
            console.log("RESULT_T: ", result.state);
          });
        };

        _proto.start = function start() {
          console.log("Version: 3");
          this.revokePermission();
          var options = {
            enableHighAccuracy: true,
            maximumAge: 30000,
            timeout: 27000
          }; // [3]

          var watchID = navigator.geolocation.watchPosition(this.success.bind(this), this.error.bind(this), options);
        };

        _proto.success = function success(position) {
          this.doSomething(position.coords.latitude, position.coords.longitude);
        };

        _proto.error = function error() {
          alert('Sorry, no position available.');
        };

        _proto.doSomething = function doSomething(a, b) {
          console.log("position: ", a, b);
        };

        return GameMgr;
      }(Component)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/main", ['./GameMgr.ts'], function () {
  'use strict';

  return {
    setters: [null],
    execute: function () {}
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});
//# sourceMappingURL=index.js.map