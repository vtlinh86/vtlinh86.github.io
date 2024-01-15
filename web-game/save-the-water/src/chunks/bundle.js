System.register([], function(_export, _context) { return { execute: function () {
System.register("chunks:///_virtual/MainCharacter2.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Character.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _decorator, Node, Character;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      _decorator = module._decorator;
      Node = module.Node;
    }, function (module) {
      Character = module.Character;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var MainCharacter = exports('MainCharacter', (_dec = ccclass('MainCharacter'), _dec2 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Character) {
        _inheritsLoose(MainCharacter, _Character);

        function MainCharacter() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Character.call.apply(_Character, [this].concat(args)) || this;
          _this.dirMultiplier = 1;

          _initializerDefineProperty(_this, "shieldNode", _descriptor, _assertThisInitialized(_this));

          _this.hasShield = void 0;
          return _this;
        }

        var _proto = MainCharacter.prototype; //#region Utils

        _proto.toggleShield = function toggleShield(isOn) {
          this.hasShield = isOn;
          this.shieldNode.active = isOn;
        };

        _proto.takeDamage = function takeDamage(dmg) {
          if (this.hasShield) {
            this.toggleShield(false);
            return;
          }

          _Character.prototype.takeDamage.call(this, dmg);
        };

        _proto.resetStats = function resetStats() {
          _Character.prototype.resetStats.call(this);

          this.toggleShield(false);
        } //#endregion
        ;

        return MainCharacter;
      }(Character), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "shieldNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _class2)) || _class));
    }
  };
});

System.register("chunks:///_virtual/Popup2.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _decorator, Label, Node, Button, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      _decorator = module._decorator;
      Label = module.Label;
      Node = module.Node;
      Button = module.Button;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var Popup = exports('Popup', (_dec = ccclass('Popup'), _dec2 = property(Label), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Button), _dec6 = property(Button), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Popup, _Component);

        function Popup() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "labelContent", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "backContainer", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "loseContainer", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "buttonLeft", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "buttonRight", _descriptor5, _assertThisInitialized(_this));

          _this.leftCb = void 0;
          _this.rightCb = void 0;
          _this.quizManager = void 0;
          return _this;
        }

        var _proto = Popup.prototype; //#region Default

        _proto.start = function start() {};

        _proto.onEnable = function onEnable() {
          var _this$buttonLeft, _this$buttonRight;

          (_this$buttonLeft = this.buttonLeft) == null ? void 0 : _this$buttonLeft.node.on(Button.EventType.CLICK, this.onButtonLeft, this);
          (_this$buttonRight = this.buttonRight) == null ? void 0 : _this$buttonRight.node.on(Button.EventType.CLICK, this.onButtonRight, this);
        };

        _proto.onDisable = function onDisable() {
          var _this$buttonLeft2, _this$buttonRight2;

          (_this$buttonLeft2 = this.buttonLeft) == null ? void 0 : _this$buttonLeft2.node.off(Button.EventType.CLICK, this.onButtonLeft, this);
          (_this$buttonRight2 = this.buttonRight) == null ? void 0 : _this$buttonRight2.node.off(Button.EventType.CLICK, this.onButtonRight, this);
        };

        _proto.update = function update(deltaTime) {} //#endregion
        //#region Utils
        ;

        _proto.showPopupBack = function showPopupBack(txtContent, txtLeft, txtRight, lCb, rCb) {
          this.labelContent.string = txtContent;
          this.buttonLeft.getComponentInChildren(Label).string = txtLeft;
          this.buttonRight.getComponentInChildren(Label).string = txtRight;
          this.leftCb = lCb;
          this.rightCb = rCb;
          this.node.active = true;
          this.backContainer.active = true;
          this.loseContainer.active = false;
        };

        _proto.showPopupLose = function showPopupLose(txtLeft, txtRight, lCb, rCb) {
          this.buttonLeft.getComponentInChildren(Label).string = txtLeft;
          this.buttonRight.getComponentInChildren(Label).string = txtRight;
          this.leftCb = lCb;
          this.rightCb = rCb;
          this.node.active = true;
          this.backContainer.active = false;
          this.loseContainer.active = true;
        };

        _proto.hidePopup = function hidePopup() {
          this.node.active = false;
        };

        _proto.onButtonLeft = function onButtonLeft() {
          var _this$leftCb;

          (_this$leftCb = this.leftCb) == null ? void 0 : _this$leftCb.apply(this.quizManager);
          this.hidePopup();
        };

        _proto.onButtonRight = function onButtonRight() {
          var _this$rightCb;

          (_this$rightCb = this.rightCb) == null ? void 0 : _this$rightCb.apply(this.quizManager);
          this.hidePopup();
        } //#endregion
        ;

        return Popup;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "labelContent", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "backContainer", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "loseContainer", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "buttonLeft", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "buttonRight", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
    }
  };
});

System.register("chunks:///_virtual/rollupPluginModLoBabelHelpers.js", [], function (exports) {
  return {
    execute: function () {
      exports({
        applyDecoratedDescriptor: _applyDecoratedDescriptor,
        assertThisInitialized: _assertThisInitialized,
        createClass: _createClass,
        inheritsLoose: _inheritsLoose,
        initializerDefineProperty: _initializerDefineProperty,
        setPrototypeOf: _setPrototypeOf,
        toPrimitive: _toPrimitive,
        toPropertyKey: _toPropertyKey
      });

      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
        }
      }

      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        Object.defineProperty(Constructor, "prototype", {
          writable: false
        });
        return Constructor;
      }

      function _inheritsLoose(subClass, superClass) {
        subClass.prototype = Object.create(superClass.prototype);
        subClass.prototype.constructor = subClass;

        _setPrototypeOf(subClass, superClass);
      }

      function _setPrototypeOf(o, p) {
        _setPrototypeOf = exports('setPrototypeOf', Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
          o.__proto__ = p;
          return o;
        });
        return _setPrototypeOf(o, p);
      }

      function _assertThisInitialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return self;
      }

      function _toPrimitive(input, hint) {
        if (typeof input !== "object" || input === null) return input;
        var prim = input[Symbol.toPrimitive];

        if (prim !== undefined) {
          var res = prim.call(input, hint || "default");
          if (typeof res !== "object") return res;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }

        return (hint === "string" ? String : Number)(input);
      }

      function _toPropertyKey(arg) {
        var key = _toPrimitive(arg, "string");

        return typeof key === "symbol" ? key : String(key);
      }

      function _initializerDefineProperty(target, property, descriptor, context) {
        if (!descriptor) return;
        Object.defineProperty(target, property, {
          enumerable: descriptor.enumerable,
          configurable: descriptor.configurable,
          writable: descriptor.writable,
          value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
        });
      }

      function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
        var desc = {};
        Object.keys(descriptor).forEach(function (key) {
          desc[key] = descriptor[key];
        });
        desc.enumerable = !!desc.enumerable;
        desc.configurable = !!desc.configurable;

        if ('value' in desc || desc.initializer) {
          desc.writable = true;
        }

        desc = decorators.slice().reverse().reduce(function (desc, decorator) {
          return decorator(target, property, desc) || desc;
        }, desc);

        if (context && desc.initializer !== void 0) {
          desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
          desc.initializer = undefined;
        }

        if (desc.initializer === void 0) {
          Object.defineProperty(target, property, desc);
          desc = null;
        }

        return desc;
      }
    }
  };
});

} }; });