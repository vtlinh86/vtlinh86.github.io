System.register("chunks:///_virtual/FlowMgr.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './GameDefine.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _defineProperty, cclegacy, _decorator, Node, resources, Prefab, instantiate, Component, RESOURCES_PATH;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      resources = module.resources;
      Prefab = module.Prefab;
      instantiate = module.instantiate;
      Component = module.Component;
    }, function (module) {
      RESOURCES_PATH = module.RESOURCES_PATH;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _temp;

      cclegacy._RF.push({}, "2f2c6HtS5BLiKJ44FHDam2M", "FlowMgr", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var STATE;

      (function (STATE) {
        STATE[STATE["NULL"] = 0] = "NULL";
        STATE[STATE["INIT"] = 1] = "INIT";
        STATE[STATE["PLAY_GAME"] = 2] = "PLAY_GAME";
      })(STATE || (STATE = {}));

      var FlowMgr = exports('FlowMgr', (_dec = ccclass('FlowMgr'), _dec2 = property(Node), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(FlowMgr, _Component);

        function FlowMgr() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "mGameContainer", _descriptor, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "mState", void 0);

          return _this;
        }

        var _proto = FlowMgr.prototype;

        _proto.start = function start() {
          this.SetState(STATE.INIT);
        };

        _proto.SetState = function SetState(value) {
          var _this2 = this;

          this.mState = value;

          switch (this.mState) {
            case STATE.INIT:
              break;

            case STATE.PLAY_GAME:
              resources.load(RESOURCES_PATH.PREFAB_GAME_MGR, Prefab, function (err, prefab) {
                if (prefab) {
                  var gameMgr = instantiate(prefab);
                  gameMgr.parent = _this2.mGameContainer;
                }
              });
              break;
          }
        };

        _proto.update = function update(dt) {
          switch (this.mState) {
            case STATE.INIT:
              {
                this.SetState(STATE.PLAY_GAME);
              }
              break;

            case STATE.PLAY_GAME:
              break;
          }
        };

        return FlowMgr;
      }(Component), _temp), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "mGameContainer", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Item.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './GameDefine.ts', './GameMgr.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _defineProperty, _createClass, cclegacy, _decorator, SpriteFrame, Sprite, UITransform, UIOpacity, Vec2, Node, Vec3, tween, Tween, Component, FALL_DOWN_1_ROW_DURATION, FALL_DOWN_SCALE_DURATION, MAP_SIZE, SWIPE_OFFSET_MIN, MATCH_ANIMATION_DURATION, SWAP_DURATION, GameMgr;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _defineProperty = module.defineProperty;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      SpriteFrame = module.SpriteFrame;
      Sprite = module.Sprite;
      UITransform = module.UITransform;
      UIOpacity = module.UIOpacity;
      Vec2 = module.Vec2;
      Node = module.Node;
      Vec3 = module.Vec3;
      tween = module.tween;
      Tween = module.Tween;
      Component = module.Component;
    }, function (module) {
      FALL_DOWN_1_ROW_DURATION = module.FALL_DOWN_1_ROW_DURATION;
      FALL_DOWN_SCALE_DURATION = module.FALL_DOWN_SCALE_DURATION;
      MAP_SIZE = module.MAP_SIZE;
      SWIPE_OFFSET_MIN = module.SWIPE_OFFSET_MIN;
      MATCH_ANIMATION_DURATION = module.MATCH_ANIMATION_DURATION;
      SWAP_DURATION = module.SWAP_DURATION;
    }, function (module) {
      GameMgr = module.GameMgr;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _temp;

      cclegacy._RF.push({}, "36c59uAUWBETLRc2rlMiGvI", "Item", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var STATE;

      (function (STATE) {
        STATE[STATE["NULL"] = 0] = "NULL";
        STATE[STATE["INIT"] = 1] = "INIT";
        STATE[STATE["APPEAR"] = 2] = "APPEAR";
        STATE[STATE["READY"] = 3] = "READY";
        STATE[STATE["SWAP"] = 4] = "SWAP";
        STATE[STATE["MATCH"] = 5] = "MATCH";
        STATE[STATE["FALL_DOWN"] = 6] = "FALL_DOWN";
        STATE[STATE["INACTIVE"] = 7] = "INACTIVE";
      })(STATE || (STATE = {}));

      var EFFECT;

      (function (EFFECT) {
        EFFECT[EFFECT["HINT"] = 1] = "HINT";
        EFFECT[EFFECT["VER"] = 2] = "VER";
        EFFECT[EFFECT["HOR"] = 4] = "HOR";
      })(EFFECT || (EFFECT = {}));

      var Item = exports('Item', (_dec = ccclass('Item'), _dec2 = property({
        type: [SpriteFrame]
      }), _dec3 = property({
        type: [SpriteFrame]
      }), _dec4 = property({
        type: [SpriteFrame]
      }), _dec5 = property(Sprite), _dec6 = property(UITransform), _dec7 = property(Sprite), _dec8 = property(UIOpacity), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Item, _Component);

        function Item() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "mArrSpriteFrame", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "mArrSpriteFrameHor", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "mArrSpriteFrameVer", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "mSprite", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "mSpriteUITransform", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "mSpriteHint", _descriptor6, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "mSpriteHintOpacity", _descriptor7, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "mState", void 0);

          _defineProperty(_assertThisInitialized(_this), "mType", void 0);

          _defineProperty(_assertThisInitialized(_this), "mMapPos", Vec2.ZERO.clone());

          _defineProperty(_assertThisInitialized(_this), "mMapPosTarget", Vec2.ZERO.clone());

          _defineProperty(_assertThisInitialized(_this), "mTouchStartPos", void 0);

          _defineProperty(_assertThisInitialized(_this), "mIsScaleUp", void 0);

          _defineProperty(_assertThisInitialized(_this), "mFallDownRow", void 0);

          _defineProperty(_assertThisInitialized(_this), "mAppearDelay", void 0);

          _defineProperty(_assertThisInitialized(_this), "mAppearDuration", void 0);

          _defineProperty(_assertThisInitialized(_this), "mEffect", void 0);

          return _this;
        }

        var _proto = Item.prototype;

        _proto.onLoad = function onLoad() {
          this.node.on(Node.EventType.TOUCH_START, this.OnTouchStart, this);
          this.node.on(Node.EventType.TOUCH_END, this.OnTouchEnd, this);
          this.node.on(Node.EventType.TOUCH_CANCEL, this.OnTouchEnd, this);
        };

        _proto.onEnable = function onEnable() {};

        _proto.onDisable = function onDisable() {};

        _proto.start = function start() {};

        _proto.SetState = function SetState(value) {
          var _this2 = this; //END OLD STATE


          switch (this.mState) {
            case STATE.APPEAR:
            case STATE.SWAP:
            case STATE.FALL_DOWN:
              //set new map pos before STATE.SWAP end
              this.SetMapPosition(this.mMapPosTarget);
              break;
          } //START NEW STATE


          this.mState = value;

          switch (this.mState) {
            case STATE.INIT:
              this.RemoveAllEffect();
              this.mSprite.node.setScale(Vec3.ONE);
              break;

            case STATE.APPEAR:
              {
                this.SetAppearAnimation(this.mAppearDelay, this.mAppearDuration); //

                setTimeout(function () {
                  _this2.SetState(STATE.READY);
                }, (this.mAppearDelay + this.mAppearDuration) * 1000);
              }
              break;

            case STATE.READY:
              break;

            case STATE.SWAP:
              {
                var duration = SWAP_DURATION;
                this.SetSwapAnimation(duration); //

                setTimeout(function () {
                  switch (_this2.mState) {
                    case STATE.SWAP:
                      _this2.SetState(STATE.READY);

                      break;
                  }
                }, duration * 1000);
              }
              break;

            case STATE.MATCH:
              {
                var _duration = MATCH_ANIMATION_DURATION;
                this.SetMatchAnimation(_duration); //

                this.RemoveEffect(EFFECT.HINT);
                setTimeout(function () {
                  switch (_this2.mState) {
                    case STATE.MATCH:
                      _this2.SetState(STATE.INACTIVE);

                      break;
                  }
                }, _duration * 1000);
              }
              break;

            case STATE.FALL_DOWN:
              {
                this.mMapPosTarget.x = this.mMapPos.x;
                this.mMapPosTarget.y = this.mMapPos.y - this.mFallDownRow;

                var _duration2 = this.mFallDownRow * FALL_DOWN_1_ROW_DURATION + FALL_DOWN_SCALE_DURATION;

                this.SetFallDownAnimation(_duration2); //

                setTimeout(function () {
                  switch (_this2.mState) {
                    case STATE.FALL_DOWN:
                      _this2.SetState(STATE.READY);

                      break;
                  }
                }, _duration2 * 1000);
              }
              break;

            case STATE.INACTIVE:
              {
                GameMgr.Instance.UpdateMap(null, this.mMapPos, this.mMapPos);
              }
              break;
          }
        };

        _proto.AddEffect = function AddEffect(value) {
          this.mEffect |= value;

          switch (value) {
            case EFFECT.HINT:
              this.mSpriteHint.node.active = true;
              this.mSpriteHintOpacity.opacity = 0;
              tween(this.mSpriteHintOpacity).to(0.5, {
                opacity: 255
              }).to(0.5, {
                opacity: 0
              }).union().repeatForever().start();
              break;

            case EFFECT.VER:
              break;

            case EFFECT.HOR:
              break;
          }
        };

        _proto.RemoveEffect = function RemoveEffect(value) {
          this.mEffect = this.mEffect | value - value;

          switch (value) {
            case EFFECT.HINT:
              this.mSpriteHint.node.active = false;
              Tween.stopAllByTarget(this.mSpriteHintOpacity);
              break;

            case EFFECT.VER:
              break;

            case EFFECT.HOR:
              break;
          }
        };

        _proto.update = function update(dt) {
          switch (this.mState) {
            case STATE.INIT:
              {
                this.SetState(STATE.APPEAR);
              }
              break;

            case STATE.APPEAR:
              break;

            case STATE.READY:
              break;

            case STATE.SWAP:
              break;

            case STATE.MATCH:
              break;

            case STATE.FALL_DOWN:
              break;

            case STATE.INACTIVE:
              break;
          }
        } //PUBLIC FUNCTION
        ;

        _proto.SetStateInit = function SetStateInit(type, mapPos, appearDelay, appearDuration) {
          this.Type = type;
          this.mMapPosTarget = mapPos.clone();
          this.mAppearDelay = appearDelay;
          this.mAppearDuration = appearDuration;
          this.SetMapPosition(new Vec2(mapPos.x, MAP_SIZE.ROW)); //

          this.SetState(STATE.INIT);
        };

        _proto.IsStateReady = function IsStateReady() {
          return this.mState == STATE.READY;
        };

        _proto.IsStateInactive = function IsStateInactive() {
          return this.mState == STATE.INACTIVE;
        };

        _proto.Swap = function Swap(mapPosTarget, isScaleUp) {
          switch (this.mState) {
            case STATE.READY:
              this.mMapPosTarget = mapPosTarget.clone();
              this.mIsScaleUp = isScaleUp; //

              this.SetState(STATE.SWAP);
              break;
          }
        };

        _proto.SetStateMatch = function SetStateMatch() {
          switch (this.mState) {
            case STATE.READY:
              this.SetState(STATE.MATCH);
              break;
          }
        };

        _proto.SetStateFallDown = function SetStateFallDown(fallDownRow) {
          if (fallDownRow > 0) {
            switch (this.mState) {
              case STATE.READY:
                this.mFallDownRow = fallDownRow; //

                this.SetState(STATE.FALL_DOWN);
                break;
            }
          }
        };

        _proto.SetEffectHint = function SetEffectHint(value) {
          value ? this.AddEffect(EFFECT.HINT) : this.RemoveEffect(EFFECT.HINT);
        };

        _proto.SetMapPosition = function SetMapPosition(mapPos) {
          var oldMapPos = this.mMapPos.clone();
          this.mMapPos = mapPos.clone();
          this.UpdateNodePosition(this.mMapPos);
          console.log(this.mMapPos);
          GameMgr.Instance.UpdateMap(this, this.mMapPos, oldMapPos);
        }
        /**
         * Calculate node position from map position
         */
        ;

        _proto.UpdateNodePosition = function UpdateNodePosition(mapPos) {
          this.node.setPosition(this.ConvertMapPosToGamePos(mapPos));
        };

        _proto.ConvertMapPosToGamePos = function ConvertMapPosToGamePos(mapPos) {
          return new Vec3((mapPos.x - (MAP_SIZE.COL - 1) * 0.5) * MAP_SIZE.COL_OFFSET, (mapPos.y - (MAP_SIZE.ROW - 1) * 0.5) * MAP_SIZE.ROW_OFFSET);
        };

        _proto.OnTouchStart = function OnTouchStart(event) {
          console.log("Item - OnTouchStart");
          console.log(this.mMapPos);

          switch (this.mState) {
            case STATE.READY:
              // console.log(event);
              // console.log(event.touch);
              // console.log(event.getLocation());
              // console.log(event.getUILocation());
              this.mTouchStartPos = event.getLocation();
              tween(this.mSprite.node).to(0.1, {
                scale: new Vec3(0.9, 0.9, 0.9)
              }, {
                easing: "quadOut"
              }).to(0.3, {
                scale: new Vec3(1, 1, 1)
              }, {
                easing: "elasticOut"
              }).start();
              break;
          }
        };

        _proto.OnTouchEnd = function OnTouchEnd(event) {
          console.log("Item - OnTouchEnd");

          switch (this.mState) {
            case STATE.READY:
              var touchEndPos = event.getLocation();
              var swipeVec2 = new Vec2();
              Vec2.subtract(swipeVec2, touchEndPos, this.mTouchStartPos); // console.log(swipeVec2, touchEndPos, this.mTouchStartPos);
              // console.log("length: " + swipeVec2.length());
              // console.log("angle: " + Vec2.angle(this.mTouchStartPos, touchEndPos)/Math.PI*180);
              // console.log("angle:" + (Math.atan2(swipeVec2.y, swipeVec2.x)/Math.PI*180));

              if (swipeVec2.length() >= SWIPE_OFFSET_MIN) {
                var swapTarget = this.GetSwapTarget(swipeVec2);
                console.log(swapTarget);
                GameMgr.Instance.SwapItems(this.mMapPos, swapTarget);
              }

              break;
          }
        };

        _proto.GetSwapTarget = function GetSwapTarget(swipeVec2) {
          var angle = Math.atan2(swipeVec2.y, swipeVec2.x) / Math.PI * 180;
          var mapPosTarget;

          if (Math.abs(angle - 0) <= 45) {
            mapPosTarget = new Vec2(this.mMapPos.x + 1, this.mMapPos.y);
          } else if (Math.abs(angle - 90) <= 45) {
            mapPosTarget = new Vec2(this.mMapPos.x, this.mMapPos.y + 1);
          } else if (Math.abs(angle - -90) <= 45) {
            mapPosTarget = new Vec2(this.mMapPos.x, this.mMapPos.y - 1);
          } else {
            mapPosTarget = new Vec2(this.mMapPos.x - 1, this.mMapPos.y);
          }

          return mapPosTarget;
        };

        _proto.SetSwapAnimation = function SetSwapAnimation(duration) {
          tween(this.node).to(duration, {
            position: this.ConvertMapPosToGamePos(this.mMapPosTarget)
          }).start();
          var scale = Vec3.ONE.clone().multiplyScalar(this.mIsScaleUp ? 1.2 : 0.6);
          tween(this.mSprite.node).to(0.5 * duration, {
            scale: scale
          }, {
            easing: "sineOut"
          }).to(0.5 * duration, {
            scale: Vec3.ONE
          }, {
            easing: "sineIn"
          }).start();
        };

        _proto.SetMatchAnimation = function SetMatchAnimation(duration) {
          tween(this.mSprite.node).to(duration, {
            scale: Vec3.ZERO
          }).start();
        };

        _proto.SetFallDownAnimation = function SetFallDownAnimation(duration) {
          var _this3 = this;

          tween(this.node).to(duration - FALL_DOWN_SCALE_DURATION, {
            position: this.ConvertMapPosToGamePos(this.mMapPosTarget)
          }, {
            easing: "quadIn"
          }).call(function () {
            _this3.SetSpritePunch(FALL_DOWN_SCALE_DURATION);
          }).start();
        };

        _proto.SetAppearAnimation = function SetAppearAnimation(delay, duration) {
          var _this4 = this;

          tween(this.node).delay(delay).to(duration - FALL_DOWN_SCALE_DURATION, {
            position: this.ConvertMapPosToGamePos(this.mMapPosTarget)
          }, {
            easing: "quadIn"
          }).call(function () {
            _this4.SetSpritePunch(FALL_DOWN_SCALE_DURATION);
          }).start();
          this.mSprite.node.setScale(Vec3.ZERO);
          tween(this.mSprite.node).delay(delay).to(FALL_DOWN_1_ROW_DURATION, {
            scale: Vec3.ONE
          }).start();
        };

        _proto.SetSpritePunch = function SetSpritePunch(duration) {
          var t1 = 0.3;
          var t2 = 1 - t1;
          var scaleY = 0.8;
          var offsetY = 0.5 * (1 - scaleY) * this.mSpriteUITransform.height;
          tween(this.mSprite.node).to(t1 * duration, {
            scale: new Vec3(1, scaleY, 1)
          }, {
            easing: "sineIn"
          }).to(t2 * duration, {
            scale: new Vec3(1, 1, 1)
          }, {
            easing: "backOut"
          }).start();
          tween(this.mSprite.node).by(t1 * duration, {
            position: new Vec3(0, -offsetY, 0)
          }, {
            easing: "sineIn"
          }).by(t2 * duration, {
            position: new Vec3(0, offsetY, 0)
          }, {
            easing: "backOut"
          }).start();
        };

        _proto.RemoveAllEffect = function RemoveAllEffect() {
          console.log("RemoveAllEffect");
          this.RemoveEffect(EFFECT.HINT);
          this.RemoveEffect(EFFECT.VER);
          this.RemoveEffect(EFFECT.HOR);
        };

        _createClass(Item, [{
          key: "Type",
          get: function get() {
            return this.mType;
          } //PRIVATE
          ,
          set: function set(value) {
            this.mType = value;
            this.mSprite.spriteFrame = this.mArrSpriteFrame[this.mType];
          }
        }]);

        return Item;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "mArrSpriteFrame", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "mArrSpriteFrameHor", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "mArrSpriteFrameVer", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "mSprite", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "mSpriteUITransform", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "mSpriteHint", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "mSpriteHintOpacity", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameMgr.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './GameDefine.ts', './GameUtilites.ts', './Match3Algorithm.ts', './Item.ts'], function (exports) {
  'use strict';

  var _defineProperty, _applyDecoratedDescriptor, _inheritsLoose, _createClass, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Prefab, Vec2, instantiate, Component, MAP_SIZE, NUMBER_OF_ITEM_TYPES, FALL_DOWN_1_ROW_DURATION, FALL_DOWN_SCALE_DURATION, GameUtilites, Match3Algorithm, Item;

  return {
    setters: [function (module) {
      _defineProperty = module.defineProperty;
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Prefab = module.Prefab;
      Vec2 = module.Vec2;
      instantiate = module.instantiate;
      Component = module.Component;
    }, function (module) {
      MAP_SIZE = module.MAP_SIZE;
      NUMBER_OF_ITEM_TYPES = module.NUMBER_OF_ITEM_TYPES;
      FALL_DOWN_1_ROW_DURATION = module.FALL_DOWN_1_ROW_DURATION;
      FALL_DOWN_SCALE_DURATION = module.FALL_DOWN_SCALE_DURATION;
    }, function (module) {
      GameUtilites = module.GameUtilites;
    }, function (module) {
      Match3Algorithm = module.Match3Algorithm;
    }, function (module) {
      Item = module.Item;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _class3, _temp;

      cclegacy._RF.push({}, "61b3bdCTWJF+5iY93JINKlb", "GameMgr", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var STATE;

      (function (STATE) {
        STATE[STATE["NULL"] = 0] = "NULL";
        STATE[STATE["INIT"] = 1] = "INIT";
        STATE[STATE["CREATE_NEW_GAME"] = 2] = "CREATE_NEW_GAME";
        STATE[STATE["CHECK_ALL_ITEMS_READY"] = 3] = "CHECK_ALL_ITEMS_READY";
        STATE[STATE["READY"] = 4] = "READY";
        STATE[STATE["SWAP_ITEMS"] = 5] = "SWAP_ITEMS";
        STATE[STATE["UNDO_SWAP_ITEMS"] = 6] = "UNDO_SWAP_ITEMS";
        STATE[STATE["CHECK_MATCH_3_AFTER_SWAP_ITEM"] = 7] = "CHECK_MATCH_3_AFTER_SWAP_ITEM";
        STATE[STATE["CHECK_MATCH_3_AFTER_SPAWN_ITEM"] = 8] = "CHECK_MATCH_3_AFTER_SPAWN_ITEM";
        STATE[STATE["MATCH_3"] = 9] = "MATCH_3";
        STATE[STATE["ITEMS_FALL_DOWN"] = 10] = "ITEMS_FALL_DOWN";
        STATE[STATE["SPAWN_ITEM"] = 11] = "SPAWN_ITEM";
      })(STATE || (STATE = {}));

      var GameMgr = exports('GameMgr', (_dec = ccclass('GameMgr'), _dec2 = property(Node), _dec3 = property(Prefab), _dec(_class = (_class2 = (_temp = _class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GameMgr, _Component);

        function GameMgr() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "mItemsContainer", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "mPrefabItem", _descriptor2, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "mState", void 0);

          _defineProperty(_assertThisInitialized(_this), "mMapItem", void 0);

          _defineProperty(_assertThisInitialized(_this), "mArrItem", []);

          _defineProperty(_assertThisInitialized(_this), "mSwapInfo", void 0);

          _defineProperty(_assertThisInitialized(_this), "mAllResult", void 0);

          _defineProperty(_assertThisInitialized(_this), "mArrSpawnItemMapPos", void 0);

          return _this;
        }

        var _proto = GameMgr.prototype;

        _proto.onLoad = function onLoad() {
          GameMgr.mInstance = this;
        };

        _proto.start = function start() {
          this.SetState(STATE.INIT);
        };

        _proto.SetState = function SetState(value) {
          var _this2 = this;

          this.mState = value;

          switch (this.mState) {
            case STATE.INIT:
              // this.node.setScale(Vec3.ONE.clone().multiplyScalar(0.5));
              break;

            case STATE.CREATE_NEW_GAME:
              this.CreateNewMap();
              break;

            case STATE.CHECK_ALL_ITEMS_READY:
              break;

            case STATE.READY:
              this.Hint();
              break;

            case STATE.SWAP_ITEMS:
              //xắp xếp thứ tự vẽ 2 item
              this.mSwapInfo.item2.node.setSiblingIndex(0);
              this.mSwapInfo.item1.node.setSiblingIndex(1); //

              this.mSwapInfo.item1.Swap(this.mSwapInfo.mapPosTarget1, true);
              this.mSwapInfo.item2.Swap(this.mSwapInfo.mapPosTarget2, false);
              break;

            case STATE.UNDO_SWAP_ITEMS:
              //xắp xếp thứ tự vẽ 2 item
              this.mSwapInfo.item1.node.setSiblingIndex(0);
              this.mSwapInfo.item2.node.setSiblingIndex(1); //

              this.mSwapInfo.item1.Swap(this.mSwapInfo.mapPosTarget2, false);
              this.mSwapInfo.item2.Swap(this.mSwapInfo.mapPosTarget1, true);
              break;

            case STATE.CHECK_MATCH_3_AFTER_SWAP_ITEM:
              break;

            case STATE.CHECK_MATCH_3_AFTER_SPAWN_ITEM:
              break;

            case STATE.MATCH_3:
              this.mAllResult.forEach(function (result) {
                if (result.ver) {
                  result.ver.forEach(function (pos) {
                    try {
                      _this2.mMapItem[pos.x][pos.y].SetStateMatch();
                    } catch (error) {}
                  });
                }

                if (result.hor) {
                  result.hor.forEach(function (pos) {
                    try {
                      _this2.mMapItem[pos.x][pos.y].SetStateMatch();
                    } catch (error) {}
                  });
                }
              });
              break;

            case STATE.ITEMS_FALL_DOWN:
              for (var x = 0; x < MAP_SIZE.COL; x++) {
                var fallDownRow = 0;

                for (var y = 0; y < MAP_SIZE.ROW; y++) {
                  var item = this.mMapItem[x][y];

                  if (item) {
                    item.SetStateFallDown(fallDownRow);
                  } else {
                    fallDownRow++;
                  }
                }
              }

              break;

            case STATE.SPAWN_ITEM:
              // for (let x = 0; x < MAP_SIZE.COL; x++)
              // {
              //     let minRow = null;
              //     for (let y = 0; y < MAP_SIZE.ROW; y++)
              //     {
              //         if (!this.mMapItem[x][y])
              //         {
              //             if (!minRow) { minRow = y; }
              //             let item = this.GetItem();
              //             item.SetStateInit(
              //                 GameUtilites.RandomInt(0, NUMBER_OF_ITEM_TYPES),
              //                 new Vec2(x, y),
              //                 (y - minRow) * FALL_DOWN_1_ROW_DURATION,
              //                 (MAP_SIZE.ROW - y) * FALL_DOWN_1_ROW_DURATION + FALL_DOWN_SCALE_DURATION
              //             );
              //         }
              //     }
              // }
              var mapType = Match3Algorithm.Instance.SpawnItem(this.GetMapType(this.mMapItem), MAP_SIZE.COL, MAP_SIZE.ROW, NUMBER_OF_ITEM_TYPES);

              for (var _x = 0; _x < MAP_SIZE.COL; _x++) {
                var minRow = null;

                for (var _y = 0; _y < MAP_SIZE.ROW; _y++) {
                  if (!this.mMapItem[_x][_y]) {
                    if (!minRow) {
                      minRow = _y;
                    }

                    var _item = this.GetItem();

                    _item.SetStateInit(mapType[_x][_y], new Vec2(_x, _y), (_y - minRow) * FALL_DOWN_1_ROW_DURATION, (MAP_SIZE.ROW - _y) * FALL_DOWN_1_ROW_DURATION + FALL_DOWN_SCALE_DURATION);
                  }
                }
              }

              break;
          }
        };

        _proto.update = function update(_dt) {
          switch (this.mState) {
            case STATE.INIT:
              {
                this.SetState(STATE.CREATE_NEW_GAME);
              }
              break;

            case STATE.CREATE_NEW_GAME:
              {
                this.SetState(STATE.CHECK_ALL_ITEMS_READY);
              }
              break;

            case STATE.CHECK_ALL_ITEMS_READY:
              if (this.IsAllItemsReady()) {
                this.SetState(STATE.READY);
              }

              break;

            case STATE.READY:
              break;

            case STATE.SWAP_ITEMS:
              if (this.mSwapInfo.item1.IsStateReady() && this.mSwapInfo.item2.IsStateReady()) {
                this.SetState(STATE.CHECK_MATCH_3_AFTER_SWAP_ITEM);
              }

              break;

            case STATE.UNDO_SWAP_ITEMS:
              if (this.mSwapInfo.item1.IsStateReady() && this.mSwapInfo.item2.IsStateReady()) {
                this.SetState(STATE.CHECK_ALL_ITEMS_READY);
              }

              break;

            case STATE.CHECK_MATCH_3_AFTER_SWAP_ITEM:
              this.mAllResult = Match3Algorithm.Instance.GetArrResultAtArrPos(this.GetMapType(this.mMapItem), [this.mSwapInfo.mapPosTarget1, this.mSwapInfo.mapPosTarget2]);

              if (Match3Algorithm.Instance.IsMatch3(this.mAllResult)) {
                this.SetState(STATE.MATCH_3);
              } else {
                this.SetState(STATE.UNDO_SWAP_ITEMS);
              }

              break;

            case STATE.CHECK_MATCH_3_AFTER_SPAWN_ITEM:
              this.mAllResult = Match3Algorithm.Instance.GetArrResultAtArrPos(this.GetMapType(this.mMapItem), this.mArrSpawnItemMapPos);

              if (Match3Algorithm.Instance.IsMatch3(this.mAllResult)) {
                this.SetState(STATE.MATCH_3);
              } else {
                this.SetState(STATE.CHECK_ALL_ITEMS_READY);
              }

              break;

            case STATE.MATCH_3:
              if (this.IsMatch3Finish()) {
                this.SetState(STATE.ITEMS_FALL_DOWN);
              }

              break;

            case STATE.ITEMS_FALL_DOWN:
              if (this.IsMatch3Finish()) {
                this.SetState(STATE.SPAWN_ITEM);
              }

              break;

            case STATE.SPAWN_ITEM:
              if (this.IsAllItemsReady()) {
                this.SetState(STATE.CHECK_MATCH_3_AFTER_SPAWN_ITEM);
              }

              break;
          }
        } //PUBLIC FUNCTION
        ;

        _proto.SwapItems = function SwapItems(mapPos, swapTarget) {
          switch (this.mState) {
            case STATE.READY:
              this.mSwapInfo = this.GetSwapInfo(mapPos, swapTarget);

              if (this.mSwapInfo.item1 && this.mSwapInfo.item2) {
                this.SetState(STATE.SWAP_ITEMS);
              }

              break;
          }
        } //
        ;

        _proto.UpdateMap = function UpdateMap(item, newMapPos, oldMapPos) {
          if (GameUtilites.IsPosInMap(oldMapPos, MAP_SIZE.COL, MAP_SIZE.ROW)) {
            try {
              var oldItem = this.mMapItem[oldMapPos.x][oldMapPos.y];

              if (oldItem.node.uuid == item.node.uuid) {
                this.mMapItem[oldMapPos.x][oldMapPos.y] = null;
              }
            } catch (error) {}
          }

          if (GameUtilites.IsPosInMap(newMapPos, MAP_SIZE.COL, MAP_SIZE.ROW)) {
            this.mMapItem[newMapPos.x][newMapPos.y] = item;
          }
        } //PRIVATE FUNCTION
        ;

        _proto.CreateNewMap = function CreateNewMap() {
          console.log("CreateNewMap"); //create map with all element is null

          this.mMapItem = Array(MAP_SIZE.COL).fill(null).map(function () {
            return Array(MAP_SIZE.ROW).fill(null);
          }); //

          var mapType = Match3Algorithm.Instance.GenerateNewMap(MAP_SIZE.COL, MAP_SIZE.ROW, NUMBER_OF_ITEM_TYPES);
          this.mArrSpawnItemMapPos = [];
          var minRow = 0;

          for (var x = 0; x < MAP_SIZE.COL; x++) {
            for (var y = 0; y < MAP_SIZE.ROW; y++) {
              this.mArrSpawnItemMapPos.push(new Vec2(x, y));
              var item = this.GetItem();
              item.SetStateInit(mapType[x][y], new Vec2(x, y), (y - minRow) * FALL_DOWN_1_ROW_DURATION, (MAP_SIZE.ROW - y) * FALL_DOWN_1_ROW_DURATION + FALL_DOWN_SCALE_DURATION);
            }
          } //---------


          console.log(this.mMapItem);
          console.log(this.mArrItem);
          console.log(this.mArrItem.map(function (e) {
            return e.node.uuid;
          }));
        };

        _proto.GetItem = function GetItem() {
          //find item in mArrItem
          for (var i = 0; i < this.mArrItem.length; i++) {
            if (this.mArrItem[i].IsStateInactive()) {
              return this.mArrItem[i];
            }
          } //if dont have item, create new item


          var itemNode = instantiate(this.mPrefabItem);
          itemNode.parent = this.mItemsContainer;
          var item = itemNode.getComponent(Item);
          this.mArrItem.push(item);
          return item;
        } //check mọi item trên map ready
        //return true khi mọi item khác null và ready
        ;

        _proto.IsAllItemsReady = function IsAllItemsReady() {
          for (var x = 0; x < MAP_SIZE.COL; x++) {
            for (var y = 0; y < MAP_SIZE.ROW; y++) {
              var item = this.mMapItem[x][y];

              if (item == null || !item.IsStateReady()) {
                return false;
              }
            }
          }

          return true;
        } //return true khi mọi item có thể null, nhưng khác null thì phải ready
        ;

        _proto.IsMatch3Finish = function IsMatch3Finish() {
          for (var x = 0; x < MAP_SIZE.COL; x++) {
            for (var y = 0; y < MAP_SIZE.ROW; y++) {
              var item = this.mMapItem[x][y];

              if (item != null && !item.IsStateReady()) {
                return false;
              }
            }
          }

          return true;
        };

        _proto.GetSwapInfo = function GetSwapInfo(mapPos, swapTarget) {
          var item1 = null;
          var item2 = null;

          try {
            item1 = this.mMapItem[mapPos.x][mapPos.y];
            item2 = this.mMapItem[swapTarget.x][swapTarget.y];
          } catch (error) {}

          var result = {
            item1: item1,
            item2: item2,
            mapPosTarget1: swapTarget.clone(),
            mapPosTarget2: mapPos.clone()
          };
          console.log("GetSwapInfo");
          console.log(result);
          return result;
        };

        _proto.GetMapType = function GetMapType(mapItem) {
          var mapType;
          mapType = mapItem.map(function (arrItem) {
            return arrItem.map(function (item) {
              return item == null ? null : item.Type;
            });
          });
          return mapType;
        };

        _proto.Hint = function Hint() {
          var _this3 = this;

          var hint = Match3Algorithm.Instance.GetHint(this.GetMapType(this.mMapItem), MAP_SIZE.COL, MAP_SIZE.ROW);

          if (hint) {
            this.RemoveHintAllItem();
            hint.forEach(function (pos) {
              _this3.mMapItem[pos.x][pos.y].SetEffectHint(true);
            });
          }
        };

        _proto.RemoveHintAllItem = function RemoveHintAllItem() {
          this.mMapItem.forEach(function (arrItem) {
            if (arrItem) {
              arrItem.forEach(function (item) {
                if (item) {
                  item.SetEffectHint(false);
                }
              });
            }
          });
        };

        _createClass(GameMgr, null, [{
          key: "Instance",
          get: function get() {
            return this.mInstance;
          } //------------------

        }]);

        return GameMgr;
      }(Component), _defineProperty(_class3, "mInstance", void 0), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "mItemsContainer", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "mPrefabItem", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Match3Algorithm.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './GameUtilites.ts'], function (exports) {
  'use strict';

  var _defineProperty, _createClass, cclegacy, _decorator, Vec2, GameUtilites;

  return {
    setters: [function (module) {
      _defineProperty = module.defineProperty;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Vec2 = module.Vec2;
    }, function (module) {
      GameUtilites = module.GameUtilites;
    }],
    execute: function () {
      var _dec, _class, _class2, _temp;

      cclegacy._RF.push({}, "d26e38+Fb5FPLXj5LexPRhl", "Match3Algorithm", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var Match3Algorithm = exports('Match3Algorithm', (_dec = ccclass('Match3Algorithm'), _dec(_class = (_temp = _class2 = /*#__PURE__*/function () {
        function Match3Algorithm() {
          _defineProperty(this, "ARR_PATTERN_MATCH_3_CHANCE", [[new Vec2(0, 0), new Vec2(1, 0), new Vec2(3, 0)], //xx x
          [new Vec2(0, 0), new Vec2(2, 0), new Vec2(3, 0)], //x xx
          [new Vec2(0, 0), new Vec2(0, 1), new Vec2(0, 3)], //xx x theo chieu doc
          [new Vec2(0, 0), new Vec2(0, 2), new Vec2(0, 3)], //x xx theo chieu doc
          [new Vec2(0, 0), new Vec2(1, 0), new Vec2(2, -1)], [new Vec2(0, 0), new Vec2(0, 1), new Vec2(1, 2)], [new Vec2(0, 0), new Vec2(-1, 0), new Vec2(-2, 1)], [new Vec2(0, 0), new Vec2(0, -1), new Vec2(-1, -2)], [new Vec2(0, 0), new Vec2(1, 0), new Vec2(2, 1)], [new Vec2(0, 0), new Vec2(0, 1), new Vec2(-1, 2)], [new Vec2(0, 0), new Vec2(-1, 0), new Vec2(-2, -1)], [new Vec2(0, 0), new Vec2(0, -1), new Vec2(1, -2)], [new Vec2(0, 0), new Vec2(1, 1), new Vec2(2, 0)], [new Vec2(0, 0), new Vec2(-1, 1), new Vec2(0, 2)], [new Vec2(0, 0), new Vec2(-1, -1), new Vec2(-2, 0)], [new Vec2(0, 0), new Vec2(1, -1), new Vec2(0, -2)]]);
        }

        var _proto = Match3Algorithm.prototype; //PUBLIC FUNCTION

        _proto.GenerateNewMap = function GenerateNewMap(col, row, numberOfType) {
          var _this = this; //tạo map trống


          var map = Array(col).fill(null).map(function () {
            return Array(row).fill(null);
          }); //=================================================================================================

          {
            var _loop = function _loop(a) {
              var isPosOk = true;
              var xRoot = GameUtilites.RandomInt(0, col);
              var yRoot = GameUtilites.RandomInt(0, row);

              var patternMatch3Chance = _this.ARR_PATTERN_MATCH_3_CHANCE[GameUtilites.RandomInt(0, _this.ARR_PATTERN_MATCH_3_CHANCE.length)];

              var arrPos = patternMatch3Chance.map(function (pos) {
                return new Vec2(xRoot + pos.x, yRoot + pos.y);
              });

              for (var i = 0; i < arrPos.length; i++) {
                var x = arrPos[i].x;
                var y = arrPos[i].y;

                if (x < 0 || x >= col || y < 0 || y >= row || map[x][y] != null) {
                  isPosOk = false;
                  break;
                }
              }

              if (isPosOk) {
                var type = GameUtilites.RandomInt(0, numberOfType);
                arrPos.forEach(function (element) {
                  map[element.x][element.y] = type;
                });

                var arrResult = _this.GetArrResultAtArrPos(map, arrPos);

                var isMatch3 = _this.IsMatch3(arrResult); //nếu những vị trị mới này tạo ra match 3 
                //=> ko hợp lệ 
                //=> set lại giá trị những vị trí đó là null


                if (isMatch3) {
                  arrPos.forEach(function (element) {
                    map[element.x][element.y] = null;
                  });
                }
              }
            };

            for (var a = 0; a < 1000; a++) {
              _loop(a);
            }
          } //lấp đầy những ô còn lại ===========================================================================

          {
            for (var x = 0; x < col; x++) {
              for (var y = 0; y < row; y++) {
                if (map[x][y] != null) {
                  continue;
                }

                var count = 1000;
                var pos = new Vec2(x, y);
                var isMatch3 = void 0;

                do {
                  count--;
                  var type = GameUtilites.RandomInt(0, numberOfType);
                  map[x][y] = type;
                  var arrResult = this.GetArrResultAtArrPos(map, [pos]);
                  isMatch3 = this.IsMatch3(arrResult);
                } while (isMatch3 && count >= 0);

                if (count < 0) {
                  alert("GenerateNewMap: Fail");
                  return this.GenerateNewMap(col, row, numberOfType);
                }
              }
            }
          } //=======================================================================================================

          console.log("map");
          console.log(map);
          return map;
        }
        /**
         * 
        */
        ;

        _proto.IsMatch3 = function IsMatch3(arrResult) {
          var result = false;
          arrResult.forEach(function (element) {
            if (element.ver || element.hor) {
              result = true;
            }
          });
          return result;
        }
        /**
         * lấy match 3 result tại nhiều điểm trên map
         */
        ;

        _proto.GetArrResultAtArrPos = function GetArrResultAtArrPos(map, arrPos) {
          var _this2 = this;

          var arrResult = [];
          arrPos.forEach(function (pos) {
            arrResult.push(_this2.GetResultAtPos(map, pos));
          });
          return arrResult;
        }
        /**
         * 
         */
        ;

        _proto.SpawnItem = function SpawnItem(map, col, row, numberOfType) {
          console.log("SpawnItem"); //lưu những position để spawn item

          var arrSpawnPos = [];
          map.forEach(function (c, cIndex) {
            c.forEach(function (value, rIndex) {
              if (value == null) {
                arrSpawnPos.push(new Vec2(cIndex, rIndex));
              }
            });
          }); //==============================================================

          var isMatch3;
          var arrMatch3Chance;

          do {
            //random type những ô cần spawn item
            arrSpawnPos.forEach(function (pos) {
              map[pos.x][pos.y] = GameUtilites.RandomInt(0, numberOfType);
            }); //check match3

            var arrResult = this.GetArrResultAtArrPos(map, arrSpawnPos);
            isMatch3 = this.IsMatch3(arrResult); //check match3Chance

            arrMatch3Chance = this.GetArrMatch3Chance(map, col, row);
          } //nếu có match3 hoặc match3Chance thì dừng lặp
          while (!(isMatch3 || arrMatch3Chance.length > 0)); //====================================================================


          console.log(map);
          console.log(map);
          console.log(arrSpawnPos);
          return map;
        } //
        ;

        _proto.GetHint = function GetHint(map, col, row) {
          var arrMatch3Chance = this.GetArrMatch3Chance(map, col, row);
          return arrMatch3Chance.length > 0 ? arrMatch3Chance[GameUtilites.RandomInt(0, arrMatch3Chance.length)] // arrMatch3Chance[0]
          : null;
        } //PRIVATE FUNCTION

        /**
         * lấy match 3 result tại 1 điểm trên map
         * nếu không đủ 3 item liên tiếp thì trả về null
         */
        ;

        _proto.GetResultAtPos = function GetResultAtPos(map, pos) {
          var x = pos.x;
          var y = pos.y;
          var mainType = map[x][y];

          if (mainType == null || mainType < 0) {
            return {
              ver: null,
              hor: null
            };
          } //check chiều dọc ==============================================================


          x = pos.x;
          y = pos.y;
          var arrVer = [];
          arrVer.push(new Vec2(x, y)); //phía trên

          x = pos.x;
          y = pos.y;

          try {
            while (mainType == map[x][++y]) {
              arrVer.push(new Vec2(x, y));
            }
          } catch (error) {} //phía dưới


          x = pos.x;
          y = pos.y;

          try {
            while (mainType == map[x][--y]) {
              arrVer.push(new Vec2(x, y));
            }
          } catch (error) {} //check chiều ngang ===============================================================================


          x = pos.x;
          y = pos.y;
          var arrHor = [];
          arrHor.push(new Vec2(x, y)); //bên phải

          x = pos.x;
          y = pos.y;

          try {
            while (mainType == map[++x][y]) {
              arrHor.push(new Vec2(x, y));
            }
          } catch (error) {} //bên trái


          x = pos.x;
          y = pos.y;

          try {
            while (mainType == map[--x][y]) {
              arrHor.push(new Vec2(x, y));
            }
          } catch (error) {} //====================================================================================


          var result = {
            ver: arrVer.length >= 3 ? arrVer : null,
            hor: arrHor.length >= 3 ? arrHor : null
          };
          return result;
        }
        /**
         * duyệt từng vị trí mới tổ hợp match3Chance
         */
        ;

        _proto.GetArrMatch3Chance = function GetArrMatch3Chance(map, col, row) {
          var _this3 = this;

          var result = [];

          var _loop2 = function _loop2(x) {
            var _loop3 = function _loop3(y) {
              _this3.ARR_PATTERN_MATCH_3_CHANCE.forEach(function (arrOffset) {
                var arrPos = arrOffset.map(function (offset) {
                  return new Vec2(x + offset.x, y + offset.y);
                });
                var arrType = arrPos.map(function (pos) {
                  try {
                    return map[pos.x][pos.y];
                  } catch (error) {
                    return null;
                  }
                });
                var isSameType = arrType.filter(function (a) {
                  return a == arrType[0];
                }).length == arrType.length;

                if (arrType != null && isSameType) {
                  result.push(arrPos);
                }
              });
            };

            for (var y = 0; y < row; y++) {
              _loop3(y);
            }
          };

          for (var x = 0; x < col; x++) {
            _loop2(x);
          }

          return result;
        };

        _createClass(Match3Algorithm, null, [{
          key: "Instance",
          get: function get() {
            if (!this.mInstance) {
              this.mInstance = new Match3Algorithm();
            }

            return this.mInstance;
          } //------------

        }]);

        return Match3Algorithm;
      }(), _defineProperty(_class2, "mInstance", null), _temp)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameDefine.ts", ['cc'], function (exports) {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports({
        MAP_SIZE: void 0,
        RESOURCES_PATH: void 0
      });

      cclegacy._RF.push({}, "d794dgBe7tKjI91/pHGUY21", "GameDefine", undefined);

      var RESOURCES_PATH;

      (function (RESOURCES_PATH) {
        RESOURCES_PATH["PREFAB_GAME_MGR"] = "prefabs/GameMgr";
      })(RESOURCES_PATH || (RESOURCES_PATH = exports('RESOURCES_PATH', {})));

      var MAP_SIZE;

      (function (MAP_SIZE) {
        MAP_SIZE[MAP_SIZE["ROW"] = 10] = "ROW";
        MAP_SIZE[MAP_SIZE["COL"] = 5] = "COL";
        MAP_SIZE[MAP_SIZE["ROW_OFFSET"] = 130] = "ROW_OFFSET";
        MAP_SIZE[MAP_SIZE["COL_OFFSET"] = 130] = "COL_OFFSET";
      })(MAP_SIZE || (MAP_SIZE = exports('MAP_SIZE', {})));

      var NUMBER_OF_ITEM_TYPES = exports('NUMBER_OF_ITEM_TYPES', 6);
      var SWIPE_OFFSET_MIN = exports('SWIPE_OFFSET_MIN', 30); //vuốt hơn khoảng cách này mới tính là vuốt

      var SWAP_DURATION = exports('SWAP_DURATION', 0.2); //thời gian swap item

      var MATCH_ANIMATION_DURATION = exports('MATCH_ANIMATION_DURATION', 0.2);
      var FALL_DOWN_1_ROW_DURATION = exports('FALL_DOWN_1_ROW_DURATION', 0.05);
      var FALL_DOWN_SCALE_DURATION = exports('FALL_DOWN_SCALE_DURATION', 0.2);
      var MATCH_LENGTH_4 = exports('MATCH_LENGTH_4', 4);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/EventMgr.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _defineProperty, _createClass, cclegacy, _decorator, EventTarget;

  return {
    setters: [function (module) {
      _defineProperty = module.defineProperty;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      EventTarget = module.EventTarget;
    }],
    execute: function () {
      exports('EVENT_NAME', void 0);

      var _dec, _class, _class2, _temp;

      cclegacy._RF.push({}, "e9f7c4ortBM2bLV0biXREMr", "EventMgr", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var GAME_EVENT = exports('GAME_EVENT', "GAME_EVENT");
      var EVENT_NAME;

      (function (EVENT_NAME) {})(EVENT_NAME || (EVENT_NAME = exports('EVENT_NAME', {})));

      var EventMgr = exports('EventMgr', (_dec = ccclass('EventMgr'), _dec(_class = (_temp = _class2 = /*#__PURE__*/function () {
        function EventMgr() {}

        _createClass(EventMgr, null, [{
          key: "Instance",
          get: function get() {
            return this.mInstance;
          }
        }]);

        return EventMgr;
      }(), _defineProperty(_class2, "mInstance", new EventTarget()), _temp)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameUtilites.ts", ['cc'], function (exports) {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "ef074qNTqJL75vNMrdzU6nl", "GameUtilites", undefined);

      var GameUtilites = exports('GameUtilites', /*#__PURE__*/function () {
        function GameUtilites() {} //PUBLIC FUNCTION


        GameUtilites.RandomInt = function RandomInt(a, b) {
          return Math.floor(a + (b - a) * Math.random());
        };

        GameUtilites.IsPosInMap = function IsPosInMap(pos, col, row) {
          return pos.x >= 0 && pos.x < col && pos.y >= 0 && pos.y < row;
        };

        return GameUtilites;
      }());

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/main", ['./GameDefine.ts', './FlowMgr.ts', './GameUtilites.ts', './Match3Algorithm.ts', './GameMgr.ts', './Item.ts', './EventMgr.ts'], function () {
  'use strict';

  return {
    setters: [null, null, null, null, null, null, null],
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