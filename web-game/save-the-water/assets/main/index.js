System.register("chunks:///_virtual/BaseObject.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Define.ts', './LevelDefine.ts'], function (exports) {
  var _inheritsLoose, _createClass, cclegacy, _decorator, Collider2D, Vec2, Component, MapSize, CellSize, ObjectType;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Collider2D = module.Collider2D;
      Vec2 = module.Vec2;
      Component = module.Component;
    }, function (module) {
      MapSize = module.MapSize;
      CellSize = module.CellSize;
    }, function (module) {
      ObjectType = module.ObjectType;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "bc9f7Ex2W1E/oQl+8n8c9X3", "BaseObject", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var BaseObject = exports('BaseObject', (_dec = ccclass('BaseObject'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BaseObject, _Component);

        function BaseObject() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.objectType = ObjectType["null"];
          _this._mapPosition = new Vec2();
          return _this;
        }

        var _proto = BaseObject.prototype;

        _proto.start = function start() {
          var collider = this.node.getComponent(Collider2D);

          if (collider) {
            collider.tag = this.objectType;
          }
        } //PUBLIC
        ;

        _proto.pause = function pause() {//override to use
        };

        _proto.resume = function resume() {//override to use
        } //PRIVATE
        ;

        _createClass(BaseObject, [{
          key: "mapPosition",
          get: function get() {
            return this._mapPosition;
          },
          set: function set(value) {
            this._mapPosition.x = value.x;
            this._mapPosition.y = value.y; //

            var pos = this.node.getPosition();
            pos.x = (this._mapPosition.x - (MapSize.width - 1) / 2) * CellSize;
            pos.y = -(this._mapPosition.y - (MapSize.height - 1) / 2) * CellSize;
            this.node.setPosition(pos);
          }
        }]);

        return BaseObject;
      }(Component)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ButtonAnswer.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Label, Button, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Label = module.Label;
      Button = module.Button;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;

      cclegacy._RF.push({}, "36ba1NWDM9KEq6kDGrZOYtx", "ButtonAnswer", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var ButtonAnswer = exports('ButtonAnswer', (_dec = ccclass('ButtonAnswer'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ButtonAnswer, _Component);

        function ButtonAnswer() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "spriteCorrect", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "spriteWrong", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "labelAns", _descriptor3, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = ButtonAnswer.prototype; //#region Defaults

        _proto.start = function start() {};

        _proto.update = function update(deltaTime) {} //#endregion
        //#region Utils
        ;

        _proto.resetButton = function resetButton(ans) {
          this.node.off(Button.EventType.CLICK);
          this.spriteCorrect.active = false;
          this.spriteWrong.active = false;
          this.labelAns.string = ans;
          this.node.active = true;
        };

        _proto.showCorrect = function showCorrect() {
          this.spriteCorrect.active = true;
        };

        _proto.showWrong = function showWrong() {
          this.spriteWrong.active = true;
        } //#endregion
        ;

        return ButtonAnswer;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "spriteCorrect", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "spriteWrong", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "labelAns", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Character.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Sprite, Label, Vec3, tween, Color, resources, SpriteFrame, UITransform, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Sprite = module.Sprite;
      Label = module.Label;
      Vec3 = module.Vec3;
      tween = module.tween;
      Color = module.Color;
      resources = module.resources;
      SpriteFrame = module.SpriteFrame;
      UITransform = module.UITransform;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;

      cclegacy._RF.push({}, "7219b4qSrVF5Ixs0WlixDs7", "Character", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var Character = exports('Character', (_dec = ccclass('Character'), _dec2 = property(Sprite), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Sprite), _dec7 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Character, _Component);

        function Character() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "spriteChar", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "labelCharName", _descriptor2, _assertThisInitialized(_this));

          _this.originalHp = 0;
          _this.hp = 0;

          _initializerDefineProperty(_this, "labelHp", _descriptor3, _assertThisInitialized(_this));

          _this.originalAtk = 0;
          _this.atk = 0;

          _initializerDefineProperty(_this, "labelAtk", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "spriteHit", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "labelHitDmg", _descriptor6, _assertThisInitialized(_this));

          _this.dirMultiplier = -1;
          return _this;
        }

        var _proto = Character.prototype; //#region Default

        _proto.start = function start() {};

        _proto.update = function update(deltaTime) {} //#endregion
        //#region Utils
        ;

        _proto.updateDisplay = function updateDisplay() {
          this.labelHp.string = this.hp.toString();
          this.labelAtk.string = this.atk.toString();
        };

        _proto.animateAttack = function animateAttack(target, quizManager, cb) {
          var _this2 = this;

          this.node.setSiblingIndex(1);
          var oldPos = this.node.getPosition();
          var newPos = this.node.getPosition().add(new Vec3(this.dirMultiplier * 300, 0, 0));
          tween(this.node).to(0.6, {
            position: newPos
          }, {
            easing: "backIn"
          }).call(function () {
            target.takeDamage(_this2.atk);
          }).to(0.8, {
            position: oldPos
          }).delay(1.6).call(function () {
            cb.apply(quizManager);
          }).start();
        };

        _proto.takeDamage = function takeDamage(dmg) {
          this.hp -= dmg;
          this.updateDisplay();
          this.spriteHit.node.position = this.node.getPosition();
          this.labelHitDmg.string = '-' + dmg.toString();
          var oldPos = this.node.getPosition();
          var newPos = this.node.getPosition().add(new Vec3(-this.dirMultiplier * 20, 0, 0));
          tween(this.node).to(0.2, {
            position: newPos
          }, {
            easing: "backOut"
          }).to(0.2, {
            position: oldPos
          }).start();
          var sprite = this.spriteHit;
          var col = new Color(255, 255, 255, 255);
          sprite.color = col;
          tween(col).delay(0.5).to(1, {
            r: 255,
            g: 255,
            b: 255,
            a: 0
          }, {
            onUpdate: function onUpdate(tar) {
              sprite.color = tar;
            }
          }).start();
        };

        _proto.resetStats = function resetStats() {
          this.hp = this.originalHp;
          this.atk = this.originalAtk;
          this.updateDisplay();
        };

        _proto.setCharSprite = function setCharSprite(lvl) {
          var _this3 = this;

          var path = "sprites/Boss_Lv" + lvl.toString() + "/spriteFrame";
          resources.load(path, SpriteFrame, function (err, spriteFrame) {
            switch (lvl) {
              case 0:
                _this3.spriteChar.getComponent(UITransform).setContentSize(205, 262);

                break;

              case 1:
                _this3.spriteChar.getComponent(UITransform).setContentSize(567, 250);

                break;

              case 2:
                _this3.spriteChar.getComponent(UITransform).setContentSize(250, 248);

                break;
            } // this.spriteChar.getComponent(UITransform).setContentSize(spriteFrame.width / 4, spriteFrame.height / 4);


            _this3.spriteChar.spriteFrame = spriteFrame;
          });
        };

        _proto.setUpChar = function setUpChar(name, hp, atk) {
          this.labelCharName.string = name;
          this.originalHp = hp;
          this.originalAtk = atk;
        } //#endregion
        ;

        return Character;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "spriteChar", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "labelCharName", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "labelHp", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "labelAtk", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "spriteHit", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "labelHitDmg", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/debug-view-runtime-control.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Color, Canvas, UITransform, instantiate, Label, RichText, Toggle, Button, director, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Color = module.Color;
      Canvas = module.Canvas;
      UITransform = module.UITransform;
      instantiate = module.instantiate;
      Label = module.Label;
      RichText = module.RichText;
      Toggle = module.Toggle;
      Button = module.Button;
      director = module.director;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;

      cclegacy._RF.push({}, "b2bd1+njXxJxaFY3ymm06WU", "debug-view-runtime-control", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var DebugViewRuntimeControl = exports('DebugViewRuntimeControl', (_dec = ccclass('internal.DebugViewRuntimeControl'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(DebugViewRuntimeControl, _Component);

        function DebugViewRuntimeControl() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "compositeModeToggle", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "singleModeToggle", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "EnableAllCompositeModeButton", _descriptor3, _assertThisInitialized(_this));

          _this._single = 0;
          _this.strSingle = ['No Single Debug', 'Vertex Color', 'Vertex Normal', 'Vertex Tangent', 'World Position', 'Vertex Mirror', 'Face Side', 'UV0', 'UV1', 'UV Lightmap', 'Project Depth', 'Linear Depth', 'Fragment Normal', 'Fragment Tangent', 'Fragment Binormal', 'Base Color', 'Diffuse Color', 'Specular Color', 'Transparency', 'Metallic', 'Roughness', 'Specular Intensity', 'IOR', 'Direct Diffuse', 'Direct Specular', 'Direct All', 'Env Diffuse', 'Env Specular', 'Env All', 'Emissive', 'Light Map', 'Shadow', 'AO', 'Fresnel', 'Direct Transmit Diffuse', 'Direct Transmit Specular', 'Env Transmit Diffuse', 'Env Transmit Specular', 'Transmit All', 'Direct Internal Specular', 'Env Internal Specular', 'Internal All', 'Fog'];
          _this.strComposite = ['Direct Diffuse', 'Direct Specular', 'Env Diffuse', 'Env Specular', 'Emissive', 'Light Map', 'Shadow', 'AO', 'Normal Map', 'Fog', 'Tone Mapping', 'Gamma Correction', 'Fresnel', 'Transmit Diffuse', 'Transmit Specular', 'Internal Specular', 'TT'];
          _this.strMisc = ['CSM Layer Coloration', 'Lighting With Albedo'];
          _this.compositeModeToggleList = [];
          _this.singleModeToggleList = [];
          _this.miscModeToggleList = [];
          _this.textComponentList = [];
          _this.labelComponentList = [];
          _this.textContentList = [];
          _this.hideButtonLabel = void 0;
          _this._currentColorIndex = 0;
          _this.strColor = ['<color=#ffffff>', '<color=#000000>', '<color=#ff0000>', '<color=#00ff00>', '<color=#0000ff>'];
          _this.color = [Color.WHITE, Color.BLACK, Color.RED, Color.GREEN, Color.BLUE];
          return _this;
        }

        var _proto = DebugViewRuntimeControl.prototype;

        _proto.start = function start() {
          // get canvas resolution
          var canvas = this.node.parent.getComponent(Canvas);

          if (!canvas) {
            console.error('debug-view-runtime-control should be child of Canvas');
            return;
          }

          var uiTransform = this.node.parent.getComponent(UITransform);
          var halfScreenWidth = uiTransform.width * 0.5;
          var halfScreenHeight = uiTransform.height * 0.5;
          var x = -halfScreenWidth + halfScreenWidth * 0.1,
              y = halfScreenHeight - halfScreenHeight * 0.1;
          var width = 200,
              height = 20; // new nodes

          var miscNode = this.node.getChildByName('MiscMode');
          var buttonNode = instantiate(miscNode);
          buttonNode.parent = this.node;
          buttonNode.name = 'Buttons';
          var titleNode = instantiate(miscNode);
          titleNode.parent = this.node;
          titleNode.name = 'Titles'; // title

          for (var i = 0; i < 2; i++) {
            var newLabel = instantiate(this.EnableAllCompositeModeButton.getChildByName('Label'));
            newLabel.setPosition(x + (i > 0 ? 50 + width * 2 : 150), y, 0.0);
            newLabel.setScale(0.75, 0.75, 0.75);
            newLabel.parent = titleNode;

            var _labelComponent = newLabel.getComponent(Label);

            _labelComponent.string = i ? '----------Composite Mode----------' : '----------Single Mode----------';
            _labelComponent.color = Color.WHITE;
            _labelComponent.overflow = 0;
            this.labelComponentList[this.labelComponentList.length] = _labelComponent;
          }

          y -= height; // single

          var currentRow = 0;

          for (var _i = 0; _i < this.strSingle.length; _i++, currentRow++) {
            if (_i === this.strSingle.length >> 1) {
              x += width;
              currentRow = 0;
            }

            var newNode = _i ? instantiate(this.singleModeToggle) : this.singleModeToggle;
            newNode.setPosition(x, y - height * currentRow, 0.0);
            newNode.setScale(0.5, 0.5, 0.5);
            newNode.parent = this.singleModeToggle.parent;
            var textComponent = newNode.getComponentInChildren(RichText);
            textComponent.string = this.strSingle[_i];
            this.textComponentList[this.textComponentList.length] = textComponent;
            this.textContentList[this.textContentList.length] = textComponent.string;
            newNode.on(Toggle.EventType.TOGGLE, this.toggleSingleMode, this);
            this.singleModeToggleList[_i] = newNode;
          }

          x += width; // buttons

          this.EnableAllCompositeModeButton.setPosition(x + 15, y, 0.0);
          this.EnableAllCompositeModeButton.setScale(0.5, 0.5, 0.5);
          this.EnableAllCompositeModeButton.on(Button.EventType.CLICK, this.enableAllCompositeMode, this);
          this.EnableAllCompositeModeButton.parent = buttonNode;
          var labelComponent = this.EnableAllCompositeModeButton.getComponentInChildren(Label);
          this.labelComponentList[this.labelComponentList.length] = labelComponent;
          var changeColorButton = instantiate(this.EnableAllCompositeModeButton);
          changeColorButton.setPosition(x + 90, y, 0.0);
          changeColorButton.setScale(0.5, 0.5, 0.5);
          changeColorButton.on(Button.EventType.CLICK, this.changeTextColor, this);
          changeColorButton.parent = buttonNode;
          labelComponent = changeColorButton.getComponentInChildren(Label);
          labelComponent.string = 'TextColor';
          this.labelComponentList[this.labelComponentList.length] = labelComponent;
          var HideButton = instantiate(this.EnableAllCompositeModeButton);
          HideButton.setPosition(x + 200, y, 0.0);
          HideButton.setScale(0.5, 0.5, 0.5);
          HideButton.on(Button.EventType.CLICK, this.hideUI, this);
          HideButton.parent = this.node.parent;
          labelComponent = HideButton.getComponentInChildren(Label);
          labelComponent.string = 'Hide UI';
          this.labelComponentList[this.labelComponentList.length] = labelComponent;
          this.hideButtonLabel = labelComponent; // misc

          y -= 40;

          for (var _i2 = 0; _i2 < this.strMisc.length; _i2++) {
            var _newNode = instantiate(this.compositeModeToggle);

            _newNode.setPosition(x, y - height * _i2, 0.0);

            _newNode.setScale(0.5, 0.5, 0.5);

            _newNode.parent = miscNode;

            var _textComponent = _newNode.getComponentInChildren(RichText);

            _textComponent.string = this.strMisc[_i2];
            this.textComponentList[this.textComponentList.length] = _textComponent;
            this.textContentList[this.textContentList.length] = _textComponent.string;

            var toggleComponent = _newNode.getComponent(Toggle);

            toggleComponent.isChecked = _i2 ? true : false;

            _newNode.on(Toggle.EventType.TOGGLE, _i2 ? this.toggleLightingWithAlbedo : this.toggleCSMColoration, this);

            this.miscModeToggleList[_i2] = _newNode;
          } // composite


          y -= 150;

          for (var _i3 = 0; _i3 < this.strComposite.length; _i3++) {
            var _newNode2 = _i3 ? instantiate(this.compositeModeToggle) : this.compositeModeToggle;

            _newNode2.setPosition(x, y - height * _i3, 0.0);

            _newNode2.setScale(0.5, 0.5, 0.5);

            _newNode2.parent = this.compositeModeToggle.parent;

            var _textComponent2 = _newNode2.getComponentInChildren(RichText);

            _textComponent2.string = this.strComposite[_i3];
            this.textComponentList[this.textComponentList.length] = _textComponent2;
            this.textContentList[this.textContentList.length] = _textComponent2.string;

            _newNode2.on(Toggle.EventType.TOGGLE, this.toggleCompositeMode, this);

            this.compositeModeToggleList[_i3] = _newNode2;
          }
        };

        _proto.isTextMatched = function isTextMatched(textUI, textDescription) {
          var tempText = new String(textUI);
          var findIndex = tempText.search('>');

          if (findIndex === -1) {
            return textUI === textDescription;
          } else {
            tempText = tempText.substr(findIndex + 1);
            tempText = tempText.substr(0, tempText.search('<'));
            return tempText === textDescription;
          }
        };

        _proto.toggleSingleMode = function toggleSingleMode(toggle) {
          var debugView = director.root.debugView;
          var textComponent = toggle.getComponentInChildren(RichText);

          for (var i = 0; i < this.strSingle.length; i++) {
            if (this.isTextMatched(textComponent.string, this.strSingle[i])) {
              debugView.singleMode = i;
            }
          }
        };

        _proto.toggleCompositeMode = function toggleCompositeMode(toggle) {
          var debugView = director.root.debugView;
          var textComponent = toggle.getComponentInChildren(RichText);

          for (var i = 0; i < this.strComposite.length; i++) {
            if (this.isTextMatched(textComponent.string, this.strComposite[i])) {
              debugView.enableCompositeMode(i, toggle.isChecked);
            }
          }
        };

        _proto.toggleLightingWithAlbedo = function toggleLightingWithAlbedo(toggle) {
          var debugView = director.root.debugView;
          debugView.lightingWithAlbedo = toggle.isChecked;
        };

        _proto.toggleCSMColoration = function toggleCSMColoration(toggle) {
          var debugView = director.root.debugView;
          debugView.csmLayerColoration = toggle.isChecked;
        };

        _proto.enableAllCompositeMode = function enableAllCompositeMode(button) {
          var debugView = director.root.debugView;
          debugView.enableAllCompositeMode(true);

          for (var i = 0; i < this.compositeModeToggleList.length; i++) {
            var _toggleComponent = this.compositeModeToggleList[i].getComponent(Toggle);

            _toggleComponent.isChecked = true;
          }

          var toggleComponent = this.miscModeToggleList[0].getComponent(Toggle);
          toggleComponent.isChecked = false;
          debugView.csmLayerColoration = false;
          toggleComponent = this.miscModeToggleList[1].getComponent(Toggle);
          toggleComponent.isChecked = true;
          debugView.lightingWithAlbedo = true;
        };

        _proto.hideUI = function hideUI(button) {
          var titleNode = this.node.getChildByName('Titles');
          var activeValue = !titleNode.active;
          this.singleModeToggleList[0].parent.active = activeValue;
          this.miscModeToggleList[0].parent.active = activeValue;
          this.compositeModeToggleList[0].parent.active = activeValue;
          this.EnableAllCompositeModeButton.parent.active = activeValue;
          titleNode.active = activeValue;
          this.hideButtonLabel.string = activeValue ? 'Hide UI' : 'Show UI';
        };

        _proto.changeTextColor = function changeTextColor(button) {
          this._currentColorIndex++;

          if (this._currentColorIndex >= this.strColor.length) {
            this._currentColorIndex = 0;
          }

          for (var i = 0; i < this.textComponentList.length; i++) {
            this.textComponentList[i].string = this.strColor[this._currentColorIndex] + this.textContentList[i] + '</color>';
          }

          for (var _i4 = 0; _i4 < this.labelComponentList.length; _i4++) {
            this.labelComponentList[_i4].color = this.color[this._currentColorIndex];
          }
        };

        _proto.onLoad = function onLoad() {};

        _proto.update = function update(deltaTime) {};

        return DebugViewRuntimeControl;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "compositeModeToggle", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "singleModeToggle", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "EnableAllCompositeModeButton", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Define.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "b2c5cmvK61FxYM97QaI6Yms", "Define", undefined);

      var CellSize = exports('CellSize', 32);
      var Direction = exports('Direction', /*#__PURE__*/function (Direction) {
        Direction["Null"] = "null";
        Direction["Up"] = "up";
        Direction["Down"] = "down";
        Direction["Left"] = "left";
        Direction["Right"] = "right";
        return Direction;
      }({}));
      var PlayerSpeed = exports('PlayerSpeed', 5); //cell/s

      var MapSize = exports('MapSize', {
        width: 29,
        height: 21
      });

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Enemy.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseObject.ts', './LevelDefine.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Tween, Vec2, tween, BaseObject, ObjectType;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Tween = module.Tween;
      Vec2 = module.Vec2;
      tween = module.tween;
    }, function (module) {
      BaseObject = module.BaseObject;
    }, function (module) {
      ObjectType = module.ObjectType;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "83d59kCmXpPdbXAUvz2ttBo", "Enemy", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;

      var State = /*#__PURE__*/function (State) {
        State[State["Null"] = 0] = "Null";
        State[State["Inactive"] = 1] = "Inactive";
        State[State["Start"] = 2] = "Start";
        State[State["Moving"] = 3] = "Moving";
        State[State["Pausing"] = 4] = "Pausing";
        return State;
      }(State || {});

      var Enemy = exports('Enemy', (_dec = ccclass('Enemy'), _dec(_class = /*#__PURE__*/function (_BaseObject) {
        _inheritsLoose(Enemy, _BaseObject);

        function Enemy() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _BaseObject.call.apply(_BaseObject, [this].concat(args)) || this;
          _this.objectType = ObjectType.enemy;
          _this.path = [];
          _this.speed = 1;
          _this.pathIndex = 0;
          _this.state = State.Inactive;
          _this.resumeState = State.Inactive;
          return _this;
        }

        var _proto = Enemy.prototype;

        _proto.start = function start() {
          _BaseObject.prototype.start.call(this);
        };

        _proto.setState = function setState(value) {
          var _this$path,
              _this2 = this; //end old state


          switch (this.state) {
            case State.Moving:
              Tween.stopAllByTarget(this.mapPosition);
              break;
          } //start new state


          this.state = value;

          switch (this.state) {
            case State.Start:
              break;

            case State.Moving:
              if (((_this$path = this.path) == null ? void 0 : _this$path.length) <= 0) break;
              var target = this.path[this.pathIndex % this.path.length];

              if (Vec2.equals(this.mapPosition, target)) {
                this.pathIndex++;
                this.setState(State.Moving);
                break;
              }

              var length = Vec2.distance(this.mapPosition, target);
              var duration = length / this.speed;
              tween(this.mapPosition).to(duration, target, {
                onUpdate: function onUpdate(target) {
                  switch (_this2.state) {
                    case State.Moving:
                      _this2.mapPosition = target;
                      break;
                  }
                },
                onComplete: function onComplete() {
                  switch (_this2.state) {
                    case State.Moving:
                      _this2.pathIndex++;

                      _this2.setState(State.Moving);

                      break;
                  }
                }
              }).start();
              break;
          }
        };

        _proto.update = function update(dt) {
          switch (this.state) {
            case State.Start:
              {
                this.setState(State.Moving);
              }
              break;
          }
        } //OVERRIDE
        ;

        _proto.pause = function pause() {
          if (this.state !== State.Pausing) this.resumeState = this.state;

          switch (this.state) {
            case State.Moving:
              Tween.stopAllByTarget(this.mapPosition);
              this.state = State.Pausing;
              break;

            default:
              this.state = State.Pausing;
              break;
          }
        };

        _proto.resume = function resume() {
          switch (this.resumeState) {
            case State.Moving:
              this.setState(this.resumeState);
              break;

            default:
              this.state = this.resumeState;
              break;
          }
        } //PUBLIC 
        ;

        _proto.setupInfo = function setupInfo(speed, path) {
          this.speed = speed != null ? speed : 1;
          this.path = path;
          this.pathIndex = 0;

          if (path != null && path[0]) {
            this.mapPosition = path[0];
          }
        };

        _proto.setStateStart = function setStateStart() {
          this.setState(State.Start);
        } //PRIVATE
        ;

        return Enemy;
      }(BaseObject)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/EventManager.ts", ['cc'], function (exports) {
  var cclegacy, EventTarget;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      EventTarget = module.EventTarget;
    }],
    execute: function () {
      cclegacy._RF.push({}, "3d9bfiEvQtLYIWOdyact5bC", "EventManager", undefined);

      var eventManager = exports('eventManager', new EventTarget());
      var EventName = exports('EventName', /*#__PURE__*/function (EventName) {
        EventName[EventName["onWaterDropChange"] = 0] = "onWaterDropChange";
        EventName[EventName["onPlayerMaxHealthChange"] = 1] = "onPlayerMaxHealthChange";
        EventName[EventName["onPlayerCurrentHealthChange"] = 2] = "onPlayerCurrentHealthChange";
        EventName[EventName["onKnowledgePieceMaxChange"] = 3] = "onKnowledgePieceMaxChange";
        EventName[EventName["onKnowledgePieceChange"] = 4] = "onKnowledgePieceChange";
        EventName[EventName["onMazeGameWin"] = 5] = "onMazeGameWin";
        EventName[EventName["onMazeGameLose"] = 6] = "onMazeGameLose";
        return EventName;
      }({}));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/home.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './UserProfile.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, director, clamp, Component, userProfile;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      director = module.director;
      clamp = module.clamp;
      Component = module.Component;
    }, function (module) {
      userProfile = module.userProfile;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "1c7c2Up1MFIiYxpW0poHpCv", "home", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var home = exports('home', (_dec = ccclass('home'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(home, _Component);

        function home() {
          return _Component.apply(this, arguments) || this;
        }

        var _proto = home.prototype;

        _proto.start = function start() {
          console.log('ver 0.0.4');
          director.preloadScene('mazeGame');
          director.preloadScene('quizGame');
        };

        _proto.update = function update(deltaTime) {} //PUBLIC
        ;

        _proto.onPlayMazeGame = function onPlayMazeGame() {
          console.log('onPlayMazeGame');
          director.loadScene('mazeGame');
        };

        _proto.onPlayQuizGame = function onPlayQuizGame() {
          console.log('onPlayQuizGame');
          director.loadScene('quizGame');
        };

        _proto.onPlayLevel = function onPlayLevel(e, param) {
          // console.log('onPlayLevel', e, param);
          var level = clamp(parseInt(param), 0, 5);
          console.log('onPlayLevel', level);

          if (level % 2 == 0) {
            userProfile.currentLevel = level;
            director.loadScene('mazeGame');
          } else {
            userProfile.currentLevel = level;
            director.loadScene('quizGame');
          }
        };

        return home;
      }(Component)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/KnowledgePiece.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseObject.ts', './LevelDefine.ts', './UserProfile.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, BaseObject, ObjectType, userProfile;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      BaseObject = module.BaseObject;
    }, function (module) {
      ObjectType = module.ObjectType;
    }, function (module) {
      userProfile = module.userProfile;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "a627bjv4Z1Fd4JDY15Q3it5", "KnowledgePiece", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var KnowledgePiece = exports('KnowledgePiece', (_dec = ccclass('KnowledgePiece'), _dec(_class = /*#__PURE__*/function (_BaseObject) {
        _inheritsLoose(KnowledgePiece, _BaseObject);

        function KnowledgePiece() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _BaseObject.call.apply(_BaseObject, [this].concat(args)) || this;
          _this.objectType = ObjectType.knowledgePiece;
          return _this;
        }

        var _proto = KnowledgePiece.prototype;

        _proto.onEnable = function onEnable() {
          userProfile.mazeGameSection.knowledgePiecesMax++;
        };

        _proto.start = function start() {
          _BaseObject.prototype.start.call(this);
        };

        return KnowledgePiece;
      }(BaseObject)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LevelControl.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './LevelDefine.ts', './BaseObject.ts', './Player.ts', './Enemy.ts', './UserProfile.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, Node, Vec2, instantiate, Component, ObjectType, level1, level2, level3, levelEnemy1, levelEnemy2, levelEnemy3, levelInfo1, levelInfo2, levelInfo3, BaseObject, Player, Enemy, userProfile;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Prefab = module.Prefab;
      Node = module.Node;
      Vec2 = module.Vec2;
      instantiate = module.instantiate;
      Component = module.Component;
    }, function (module) {
      ObjectType = module.ObjectType;
      level1 = module.level1;
      level2 = module.level2;
      level3 = module.level3;
      levelEnemy1 = module.levelEnemy1;
      levelEnemy2 = module.levelEnemy2;
      levelEnemy3 = module.levelEnemy3;
      levelInfo1 = module.levelInfo1;
      levelInfo2 = module.levelInfo2;
      levelInfo3 = module.levelInfo3;
    }, function (module) {
      BaseObject = module.BaseObject;
    }, function (module) {
      Player = module.Player;
    }, function (module) {
      Enemy = module.Enemy;
    }, function (module) {
      userProfile = module.userProfile;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;

      cclegacy._RF.push({}, "da723LRIeRIjaxa0uGMHHu+", "LevelControl", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var arrLevelDefine = [level1, level1, level2, level2, level3, level3];
      var arrLevelEnemy = [levelEnemy1, levelEnemy1, levelEnemy2, levelEnemy2, levelEnemy3, levelEnemy3];
      var arrLevelInfo = [levelInfo1, levelInfo1, levelInfo2, levelInfo2, levelInfo3, levelInfo3];
      var LevelControl = exports('LevelControl', (_dec = ccclass('LevelControl'), _dec2 = property(Prefab), _dec3 = property(Prefab), _dec4 = property(Prefab), _dec5 = property(Prefab), _dec6 = property(Player), _dec7 = property(Node), _dec8 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(LevelControl, _Component);

        function LevelControl() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "platformPrefab", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "waterDropPrefab", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "knowledgePiecePrefab", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "enemyPrefab", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "player", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "mapContainer", _descriptor6, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "world", _descriptor7, _assertThisInitialized(_this));

          _this.objects = [];
          return _this;
        }

        var _proto = LevelControl.prototype; //PUBLIC

        _proto.inactiveAllObjects = function inactiveAllObjects() {
          this.objects.forEach(function (platform) {
            platform.node.active = false;
          });
        };

        _proto.initMap = function initMap() {
          var _this2 = this;

          var levelDefine = arrLevelDefine[userProfile.currentLevel];
          this.player.setCurrentMap(levelDefine);
          levelDefine.forEach(function (row, rowIndex) {
            row.forEach(function (objectType, colIndex) {
              var mapPosition = new Vec2(colIndex, rowIndex); //check to add platform
              // switch (objectType) {
              //     case ObjectType.null:
              //         break;
              //     default:
              //         {
              //             const obj = this.getObject(ObjectType.platform, this.platformPrefab, this.objects, this.mapContainer);
              //             obj.mapPosition = mapPosition;
              //         }
              //         break;
              // }
              //check to add object

              switch (objectType) {
                case ObjectType.player:
                  _this2.player.setRootPosition(mapPosition);

                  break;

                case ObjectType.waterDrop:
                  {
                    var obj = _this2.getObject(ObjectType.waterDrop, _this2.waterDropPrefab, _this2.objects, _this2.world);

                    obj.mapPosition = mapPosition;
                  }
                  break;

                case ObjectType.knowledgePiece:
                  {
                    var _obj = _this2.getObject(ObjectType.knowledgePiece, _this2.knowledgePiecePrefab, _this2.objects, _this2.world);

                    _obj.mapPosition = mapPosition;
                  }
                  break;
              }
            });
          });
        };

        _proto.initEnemys = function initEnemys() {
          var _this3 = this;

          var enemiesDefine = arrLevelEnemy[userProfile.currentLevel];
          enemiesDefine.forEach(function (info) {
            var objectType = info.objectType,
                path = info.path,
                speed = info.speed;

            var obj = _this3.getObject(objectType, _this3.enemyPrefab, _this3.objects, _this3.world);

            var enemy = obj.getComponent(Enemy);

            if (enemy) {
              enemy.setupInfo(speed, path);
              enemy.setStateStart();
            }
          });
        };

        _proto.initLevelInfo = function initLevelInfo() {
          var levelInfo = arrLevelInfo[userProfile.currentLevel];
          userProfile.mazeGameSection.playerMaxHealth = levelInfo.playerMaxHealth;
          userProfile.mazeGameSection.playerCurrentHealth = levelInfo.playerMaxHealth;
        };

        _proto.pause = function pause() {
          this.objects.forEach(function (obj) {
            obj.pause();
          });
        };

        _proto.resume = function resume() {
          this.objects.forEach(function (obj) {
            obj.resume();
          });
        } //PRIVATE
        ;

        _proto.getObject = function getObject(objectType, objectPrefab, arr, parent) {
          var _object;

          var object = arr.find(function (object) {
            return (object == null ? void 0 : object.objectType) === objectType && (object == null ? void 0 : object.node.active) === false;
          });

          if (!object) {
            object = instantiate(objectPrefab).getComponent(BaseObject);
            parent.addChild(object.node);
            arr.push(object);
          }

          if ((_object = object) != null && _object.node) object.node.active = true;
          return object;
        };

        return LevelControl;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "platformPrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "waterDropPrefab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "knowledgePiecePrefab", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "enemyPrefab", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "player", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "mapContainer", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "world", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LevelDefine.ts", ['cc'], function (exports) {
  var cclegacy, Vec2;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Vec2 = module.Vec2;
    }],
    execute: function () {
      cclegacy._RF.push({}, "1ee61hf3GBPe72gKywcpYan", "LevelDefine", undefined);

      var ObjectType = exports('ObjectType', /*#__PURE__*/function (ObjectType) {
        ObjectType[ObjectType["null"] = 0] = "null";
        ObjectType[ObjectType["platform"] = 1] = "platform";
        ObjectType[ObjectType["waterDrop"] = 2] = "waterDrop";
        ObjectType[ObjectType["knowledgePiece"] = 3] = "knowledgePiece";
        ObjectType[ObjectType["player"] = 9] = "player";
        ObjectType[ObjectType["enemy"] = 10] = "enemy";
        return ObjectType;
      }({}));
      var level1 = exports('level1', [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1, 1, 1, 0, 2, 1, 2, 1, 2, 1, 0, 0, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 1, 0], [0, 1, 2, 1, 1, 1, 3, 1, 1, 1, 0, 0, 0, 0, 2, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0], [1, 2, 0, 0, 0, 1, 1, 1, 0, 2, 0, 0, 0, 0, 1, 0, 0, 2, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1], [0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 2, 1, 2, 0, 0, 1, 2, 1, 2, 1, 1, 3, 1, 1, 1, 2, 0], [0, 2, 1, 2, 1, 2, 1, 2, 1, 2, 0, 2, 0, 0, 1, 0, 0, 2, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0], [0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 2, 0, 0, 1, 0, 2, 0, 0, 0, 1, 0, 0, 0, 2, 0], [0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 1, 0, 0, 0, 1, 0, 0, 2, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 2, 0, 0, 0, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 0, 0, 0, 2, 0], [0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 1, 0, 0, 0, 1, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 2, 1, 2, 0, 2, 0, 0, 1, 2, 1, 2, 1, 2, 1, 2, 1, 1, 2, 0], [0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 1, 0, 1, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 2, 1, 2, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0], [0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 2, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 3, 1, 1, 2, 1, 2, 0, 0, 0, 0, 2, 0], [0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 9, 0, 2, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0], [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 0, 0, 2, 0, 0, 0, 0, 1, 2, 1, 2, 1, 2, 1], [0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]);
      var level2 = exports('level2', [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 0], [0, 2, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0], [1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 2, 0, 2, 1, 2, 0, 0, 2, 0, 0, 0, 1, 1], [0, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 1, 3, 1, 1, 2, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 2, 0], [0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 0, 2, 0, 2, 0, 2, 1, 2, 1, 2, 1, 2, 1, 0], [0, 0, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0], [0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 2, 1, 2, 1, 2, 1, 2, 0, 2, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0], [0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 2, 1, 2, 1, 3, 1, 2, 1, 2, 0], [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0], [0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0], [0, 0, 0, 0, 0, 0, 0, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 0], [0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 2, 1, 2, 1, 2, 0, 9, 0, 2, 1, 2, 1, 0, 1, 0, 0, 2, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 2, 0, 2, 0, 0, 1, 2, 1, 2, 0], [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 2, 1, 2, 1, 2, 0, 0, 1, 2, 1, 0, 0, 0, 0, 0, 1, 0], [0, 2, 1, 2, 1, 2, 1, 1, 1, 3, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0], [1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 1], [0, 2, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 2, 0], [0, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]);
      var level3 = exports('level3', [[0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 0], [0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 1, 0, 0, 2, 0], [1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 2, 1, 2, 0, 0, 0, 0, 1, 0, 0, 0, 1, 2, 1, 2, 1, 2, 1, 1], [0, 2, 1, 2, 1, 2, 1, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0], [0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 2, 1, 2, 1, 2, 1, 2, 1, 0, 1, 2, 1, 0, 0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 2, 0], [0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 2, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0], [0, 0, 0, 0, 0, 0, 0, 2, 1, 2, 1, 2, 0, 0, 1, 0, 0, 0, 0, 2, 1, 2, 1, 1, 3, 1, 1, 2, 0], [0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 1, 0, 0, 2, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0], [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 2, 0, 1, 1, 1, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 2, 0], [0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 1, 2, 1, 3, 1, 2, 1, 2, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 2, 0, 1, 1, 1, 0, 0, 0, 2, 1, 2, 1, 2, 1, 2, 1, 2, 0], [0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 2, 0, 0, 9, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0], [0, 2, 1, 2, 1, 2, 1, 1, 3, 1, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 3, 1, 2, 1, 2, 1, 2, 0], [1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 1], [0, 2, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0], [0, 1, 2, 1, 2, 1, 2, 1, 2, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 0], [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0]]);
      var levelEnemy1 = exports('levelEnemy1', [{
        objectType: ObjectType.enemy,
        speed: 2,
        path: [new Vec2(7, 5), new Vec2(1, 5), new Vec2(1, 2), new Vec2(9, 2), new Vec2(9, 6), new Vec2(10, 6), new Vec2(10, 10), new Vec2(7, 10)]
      }, {
        objectType: ObjectType.enemy,
        speed: 2,
        path: [new Vec2(14, 17), new Vec2(14, 14), new Vec2(22, 14), new Vec2(22, 19), new Vec2(4, 19), new Vec2(4, 17)]
      }, {
        objectType: ObjectType.enemy,
        speed: 2,
        path: [new Vec2(19, 6), new Vec2(19, 4), new Vec2(17, 4), new Vec2(17, 8), new Vec2(14, 8), new Vec2(14, 19), new Vec2(22, 19), new Vec2(22, 17), new Vec2(27, 17), new Vec2(27, 1), new Vec2(23, 1), new Vec2(23, 8), new Vec2(19, 8)]
      }]);
      var levelEnemy2 = exports('levelEnemy2', [{
        objectType: ObjectType.enemy,
        speed: 3,
        path: [new Vec2(12, 4), new Vec2(1, 4), new Vec2(1, 1), new Vec2(23, 1), new Vec2(23, 5), new Vec2(20, 5), new Vec2(20, 3), new Vec2(18, 3), new Vec2(18, 8), new Vec2(27, 8), new Vec2(27, 11), new Vec2(14, 11), new Vec2(14, 7), new Vec2(12, 7)]
      }, {
        objectType: ObjectType.enemy,
        speed: 3,
        path: [new Vec2(12, 16), new Vec2(1, 16), new Vec2(1, 19), new Vec2(27, 19), new Vec2(27, 17), new Vec2(16, 17), new Vec2(16, 15), new Vec2(12, 15)]
      }, {
        objectType: ObjectType.enemy,
        speed: 3,
        path: [new Vec2(23, 1), new Vec2(16, 1), new Vec2(16, 7), new Vec2(12, 7), new Vec2(12, 11), new Vec2(7, 11), new Vec2(7, 13), new Vec2(12, 13), new Vec2(12, 15), new Vec2(16, 15), new Vec2(16, 13), new Vec2(19, 13), new Vec2(19, 15), new Vec2(21, 15), new Vec2(21, 11), new Vec2(27, 11), new Vec2(27, 1)]
      }]);
      var levelEnemy3 = exports('levelEnemy3', [{
        objectType: ObjectType.enemy,
        speed: 3,
        path: [new Vec2(7, 4), new Vec2(7, 8), new Vec2(9, 8), new Vec2(9, 3), new Vec2(12, 3), new Vec2(12, 1), new Vec2(1, 1), new Vec2(1, 4)]
      }, {
        objectType: ObjectType.enemy,
        speed: 3,
        path: [new Vec2(16, 17), new Vec2(16, 16), new Vec2(1, 16), new Vec2(1, 19), new Vec2(16, 19)]
      }, {
        objectType: ObjectType.enemy,
        speed: 3,
        path: [new Vec2(27, 11), new Vec2(27, 3), new Vec2(21, 3), new Vec2(21, 5), new Vec2(19, 5), new Vec2(19, 12), new Vec2(21, 12), new Vec2(21, 15), new Vec2(22, 15), new Vec2(22, 16), new Vec2(24, 16), new Vec2(24, 19), new Vec2(16, 19), new Vec2(16, 16), new Vec2(16, 19), new Vec2(24, 19), new Vec2(24, 16), new Vec2(22, 16), new Vec2(22, 15), new Vec2(21, 15), new Vec2(21, 12), new Vec2(19, 12), new Vec2(19, 5), new Vec2(21, 5), new Vec2(21, 3), new Vec2(27, 3)]
      }, {
        objectType: ObjectType.enemy,
        speed: 3,
        path: [new Vec2(14, 5), new Vec2(14, 11), new Vec2(11, 11), new Vec2(11, 13), new Vec2(8, 13), new Vec2(8, 8), new Vec2(9, 8), new Vec2(9, 3), new Vec2(12, 3), new Vec2(12, 1), new Vec2(17, 1), new Vec2(17, 5)]
      }]);
      var levelInfo1 = exports('levelInfo1', {
        playerMaxHealth: 3
      });
      var levelInfo2 = exports('levelInfo2', {
        playerMaxHealth: 4
      });
      var levelInfo3 = exports('levelInfo3', {
        playerMaxHealth: 5
      });

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/main", ['./debug-view-runtime-control.ts', './EventManager.ts', './UserProfile.ts', './home.ts', './BaseObject.ts', './Define.ts', './Enemy.ts', './KnowledgePiece.ts', './LevelControl.ts', './LevelDefine.ts', './Platform.ts', './Player.ts', './StatsBoard.ts', './TileMapControl.ts', './WaterDrop.ts', './mazeGame.ts', './ButtonAnswer.ts', './Character.ts', './MainCharacter.ts', './Popup.ts', './PopupWin.ts', './QuizDefine.ts', './QuizManager.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/MainCharacter.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Character.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Character;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
    }, function (module) {
      Character = module.Character;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;

      cclegacy._RF.push({}, "575731Wne1K7pFhx7SlLcjo", "MainCharacter", undefined);

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

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/mazeGame.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './LevelControl.ts', './Player.ts', './UserProfile.ts', './EventManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, director, PhysicsSystem2D, EPhysics2DDrawFlags, Component, LevelControl, Player, userProfile, eventManager, EventName;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      director = module.director;
      PhysicsSystem2D = module.PhysicsSystem2D;
      EPhysics2DDrawFlags = module.EPhysics2DDrawFlags;
      Component = module.Component;
    }, function (module) {
      LevelControl = module.LevelControl;
    }, function (module) {
      Player = module.Player;
    }, function (module) {
      userProfile = module.userProfile;
    }, function (module) {
      eventManager = module.eventManager;
      EventName = module.EventName;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;

      cclegacy._RF.push({}, "69024ABHwpF159GAbOeWB9v", "mazeGame", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;

      var State = /*#__PURE__*/function (State) {
        State[State["Null"] = 0] = "Null";
        State[State["Start"] = 1] = "Start";
        State[State["Playing"] = 2] = "Playing";
        State[State["Win"] = 3] = "Win";
        State[State["Lose"] = 4] = "Lose";
        State[State["Pausing"] = 5] = "Pausing";
        return State;
      }(State || {});

      var mazeGame = exports('mazeGame', (_dec = ccclass('mazeGame'), _dec2 = property({
        type: LevelControl
      }), _dec3 = property(Player), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(mazeGame, _Component);

        function mazeGame() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "levelControl", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "player", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "exitConfirmPopup", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "winPopup", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "losePopup", _descriptor5, _assertThisInitialized(_this));

          _this.state = State.Null;
          _this.resumeState = State.Null;
          return _this;
        }

        var _proto = mazeGame.prototype;

        _proto.onEnable = function onEnable() {
          eventManager.on(EventName.onMazeGameWin, this.onWin, this);
          eventManager.on(EventName.onMazeGameLose, this.onLose, this);
        };

        _proto.onDisable = function onDisable() {
          eventManager.off(EventName.onMazeGameWin, this.onWin, this);
          eventManager.off(EventName.onMazeGameLose, this.onLose, this);
        };

        _proto.start = function start() {
          // this.showColliderDebug();
          this.setState(State.Start);
        };

        _proto.setState = function setState(value) {
          //end old state
          switch (this.state) {
            case State.Win:
              this.winPopup.active = false;
              break;

            case State.Lose:
              this.losePopup.active = false;
              break;
          } //start new state


          this.state = value;

          switch (this.state) {
            case State.Start:
              userProfile.mazeGameSection.reset(); //call first

              this.levelControl.inactiveAllObjects();
              this.levelControl.initMap();
              this.levelControl.initEnemys();
              this.levelControl.initLevelInfo();
              this.player.setStateStart();
              break;

            case State.Playing:
              this.player.setStatePlaying();
              break;

            case State.Win:
              this.winPopup.active = true;
              this.levelControl.pause();
              this.player.pause();
              break;

            case State.Lose:
              this.losePopup.active = true;
              this.levelControl.pause();
              this.player.pause();
              break;
          }
        };

        _proto.update = function update(dt) {
          switch (this.state) {
            case State.Start:
              {
                this.setState(State.Playing);
              }
              break;
          }
        } //PUBLIC
        ;

        _proto.onClickButtonExit = function onClickButtonExit() {
          this.exitConfirmPopup.active = true;
          this.pause();
        };

        _proto.onClickCancleExitGame = function onClickCancleExitGame() {
          this.exitConfirmPopup.active = false;
          this.resume();
        };

        _proto.onClickOkExitGame = function onClickOkExitGame() {
          director.loadScene('home');
        };

        _proto.onClickGameWinMenuButton = function onClickGameWinMenuButton() {
          switch (this.state) {
            case State.Win:
              director.loadScene('home');
              break;
          }
        };

        _proto.onClickGameLoseMenuButton = function onClickGameLoseMenuButton() {
          switch (this.state) {
            case State.Lose:
              director.loadScene('home');
              break;
          }
        };

        _proto.onClickGameLoseReplayButton = function onClickGameLoseReplayButton() {
          switch (this.state) {
            case State.Lose:
              this.setState(State.Start);
              break;
          }
        } //PRIVATE
        ;

        _proto.showColliderDebug = function showColliderDebug() {
          PhysicsSystem2D.instance.enable = true;
          PhysicsSystem2D.instance.debugDrawFlags = EPhysics2DDrawFlags.Aabb | EPhysics2DDrawFlags.Pair | EPhysics2DDrawFlags.CenterOfMass | EPhysics2DDrawFlags.Joint | EPhysics2DDrawFlags.Shape;
        };

        _proto.pause = function pause() {
          if (this.state !== State.Pausing) this.resumeState = this.state;
          this.levelControl.pause();
          this.player.pause();
          this.state = State.Pausing;
        };

        _proto.resume = function resume() {
          this.levelControl.resume();
          this.player.resume();
          this.state = this.resumeState;
        };

        _proto.onWin = function onWin() {
          switch (this.state) {
            case State.Playing:
              this.setState(State.Win);
              break;
          }
        };

        _proto.onLose = function onLose() {
          switch (this.state) {
            case State.Playing:
              this.setState(State.Lose);
              break;
          }
        };

        return mazeGame;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "levelControl", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "player", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "exitConfirmPopup", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "winPopup", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "losePopup", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Platform.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseObject.ts', './Define.ts', './LevelDefine.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, UITransform, BaseObject, CellSize, ObjectType;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      UITransform = module.UITransform;
    }, function (module) {
      BaseObject = module.BaseObject;
    }, function (module) {
      CellSize = module.CellSize;
    }, function (module) {
      ObjectType = module.ObjectType;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "4e119K0k/FGYK1M5dIqDq3m", "Platform", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var Platform = exports('Platform', (_dec = ccclass('Platform'), _dec(_class = /*#__PURE__*/function (_BaseObject) {
        _inheritsLoose(Platform, _BaseObject);

        function Platform() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _BaseObject.call.apply(_BaseObject, [this].concat(args)) || this;
          _this.objectType = ObjectType.platform;
          return _this;
        }

        var _proto = Platform.prototype;

        _proto.start = function start() {
          var uiTransform = this.node.getComponent(UITransform);
          uiTransform.setContentSize(CellSize, CellSize);
        };

        _proto.update = function update(deltaTime) {};

        return Platform;
      }(BaseObject)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Player.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseObject.ts', './Define.ts', './LevelDefine.ts', './UserProfile.ts', './EventManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Collider2D, Vec2, Contact2DType, input, Input, Tween, tween, KeyCode, BaseObject, Direction, MapSize, PlayerSpeed, ObjectType, userProfile, eventManager, EventName;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Collider2D = module.Collider2D;
      Vec2 = module.Vec2;
      Contact2DType = module.Contact2DType;
      input = module.input;
      Input = module.Input;
      Tween = module.Tween;
      tween = module.tween;
      KeyCode = module.KeyCode;
    }, function (module) {
      BaseObject = module.BaseObject;
    }, function (module) {
      Direction = module.Direction;
      MapSize = module.MapSize;
      PlayerSpeed = module.PlayerSpeed;
    }, function (module) {
      ObjectType = module.ObjectType;
    }, function (module) {
      userProfile = module.userProfile;
    }, function (module) {
      eventManager = module.eventManager;
      EventName = module.EventName;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;

      cclegacy._RF.push({}, "2721eh2xclCgrLV/J4WuHqH", "Player", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;

      var State = /*#__PURE__*/function (State) {
        State[State["Null"] = 0] = "Null";
        State[State["Inactive"] = 1] = "Inactive";
        State[State["Start"] = 2] = "Start";
        State[State["Idle"] = 3] = "Idle";
        State[State["Moving"] = 4] = "Moving";
        State[State["Death"] = 5] = "Death";
        State[State["Pausing"] = 6] = "Pausing";
        return State;
      }(State || {});

      var Player = exports('Player', (_dec = ccclass('Player'), _dec2 = property(Collider2D), _dec(_class = (_class2 = /*#__PURE__*/function (_BaseObject) {
        _inheritsLoose(Player, _BaseObject);

        function Player() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _BaseObject.call.apply(_BaseObject, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "collider", _descriptor, _assertThisInitialized(_this));

          _this.objectType = ObjectType.player;
          _this.state = State.Inactive;
          _this.resumeState = State.Inactive;
          _this.currentMap = [];
          _this.isTouchDown = false;
          _this.moveDirection = Direction.Null;
          _this.nextDirection = [];
          _this.rootPosition = new Vec2();
          _this.isMovingDone = false;
          _this.isDeathDone = false;

          _this.calcTarget = function (map, currentPos, direction) {
            var _map;

            var target = new Vec2(Math.round(currentPos.x), Math.round(currentPos.y));

            switch (direction) {
              case Direction.Up:
                target.y -= 1;
                break;

              case Direction.Down:
                target.y += 1;
                break;

              case Direction.Left:
                target.x -= 1;
                break;

              case Direction.Right:
                target.x += 1;
                break;
            }

            switch (map == null || (_map = map[target.y % MapSize.height]) == null ? void 0 : _map[target.x % MapSize.width]) {
              case ObjectType["null"]:
                return null;

              default:
                return target;
            }
          };

          return _this;
        }

        var _proto = Player.prototype;

        _proto.start = function start() {};

        _proto.onEnable = function onEnable() {
          this.collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
          input.on(Input.EventType.TOUCH_START, this.onTouchStart, this);
          input.on(Input.EventType.TOUCH_END, this.onTouchEnd, this);
          input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
        };

        _proto.onDisable = function onDisable() {
          this.collider.off(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
          input.off(Input.EventType.TOUCH_START, this.onTouchStart, this);
          input.off(Input.EventType.TOUCH_END, this.onTouchEnd, this);
          input.off(Input.EventType.KEY_DOWN, this.onKeyDown, this);
        };

        _proto.setState = function setState(value) {
          var _this2 = this; //end old state


          switch (this.state) {
            case State.Moving:
              Tween.stopAllByTarget(this.mapPosition);
              break;
          } //start new state


          this.state = value;

          switch (this.state) {
            case State.Inactive:
              Tween.stopAllByTarget(this.mapPosition);
              break;

            case State.Start:
              this.isTouchDown = false;
              break;

            case State.Idle:
              this.moveDirection = Direction.Null;
              break;

            case State.Moving:
              {
                var target; //check to use next direction

                if (this.nextDirection.length > 0) {
                  var direction = this.nextDirection.shift();
                  target = this.calcTarget(this.currentMap, this.mapPosition, direction);

                  if (target) {
                    this.moveDirection = direction;
                    this.nextDirection = [];
                  }
                } //check to use current direction


                if (!target) {
                  target = this.calcTarget(this.currentMap, this.mapPosition, this.moveDirection);
                }

                if (!target) {
                  this.setState(State.Idle);
                  break;
                } // //check to move vertical or horizontal
                // if (
                //     (this.moveDirection == Direction.Left
                //         || this.moveDirection == Direction.Right)
                //     && this.mapPosition.y != target.y
                // ) {
                //     target.x = this.mapPosition.x;
                // }
                // else if (
                //     (this.moveDirection == Direction.Up
                //         || this.moveDirection == Direction.Down)
                //     && this.mapPosition.x != target.x
                // ) {
                //     target.y = this.mapPosition.y;
                // }
                //


                this.isMovingDone = false;
                var distance = Vec2.distance(this.mapPosition, target);
                var duration = distance / PlayerSpeed;
                Tween.stopAllByTarget(this.mapPosition);
                tween(this.mapPosition).to(duration, target, {
                  onUpdate: function onUpdate(target) {
                    switch (_this2.state) {
                      case State.Moving:
                        var x = target.x,
                            y = target.y; //check x

                        if (x < -0.5) x = (x + MapSize.width) % MapSize.width;else if (x > MapSize.width - 0.5) x = (x - MapSize.width) % MapSize.width; //check y

                        if (y < -0.5) y = (y + MapSize.height) % MapSize.height;else if (y > MapSize.height - 0.5) y = (y - MapSize.height) % MapSize.height; //

                        _this2.mapPosition = new Vec2(x, y);
                        break;
                    }
                  },
                  onComplete: function onComplete() {
                    switch (_this2.state) {
                      case State.Moving:
                        _this2.isMovingDone = true;
                        break;
                    }
                  }
                }).start();
              }
              break;

            case State.Death:
              userProfile.mazeGameSection.playerCurrentHealth--;
              this.isDeathDone = false;
              setTimeout(function () {
                _this2.isDeathDone = true;
              }, 1000);
              break;
          }
        };

        _proto.update = function update(dt) {
          switch (this.state) {
            case State.Moving:
              if (this.isMovingDone) {
                this.setState(State.Moving);
              }

              break;

            case State.Death:
              if (this.isDeathDone) {
                if (userProfile.mazeGameSection.playerCurrentHealth > 0) {
                  this.mapPosition = this.rootPosition;
                  this.setState(State.Idle);
                }
              }

              break;
          }
        } //OVERRIDE
        ;

        _proto.pause = function pause() {
          if (this.state !== State.Pausing) this.resumeState = this.state;

          switch (this.state) {
            case State.Moving:
              Tween.stopAllByTarget(this.mapPosition);
              this.state = State.Pausing;
              break;

            default:
              this.state = State.Pausing;
              break;
          }
        };

        _proto.resume = function resume() {
          switch (this.resumeState) {
            case State.Moving:
              this.setState(this.resumeState);
              break;

            default:
              this.state = this.resumeState;
              break;
          }
        };

        _proto.setRootPosition = function setRootPosition(rootPosition) {
          Vec2.copy(this.rootPosition, rootPosition);
          this.mapPosition = this.rootPosition;
        } //PUBLIC
        ;

        _proto.setStateStart = function setStateStart() {
          this.setState(State.Start);
        };

        _proto.setStatePlaying = function setStatePlaying() {
          this.setState(State.Idle);
        };

        _proto.setCurrentMap = function setCurrentMap(currentMap) {
          this.currentMap = currentMap;
        } //PRIVATE
        ;

        _proto.onTouchStart = function onTouchStart(e) {
          // console.log(e);
          this.isTouchDown = true;
        };

        _proto.onTouchEnd = function onTouchEnd(e) {
          // console.log(e);
          switch (this.state) {
            case State.Idle:
            case State.Moving:
              if (!this.isTouchDown) return;
              this.isTouchDown = false;
              var inputOffset = Vec2.subtract(new Vec2(), e.getLocation(), e.getStartLocation());
              var direction = this.calcMoveDirection(inputOffset);
              this.checkDirectionToMove(direction);
              break;
          }
        };

        _proto.onKeyDown = function onKeyDown(e) {
          switch (this.state) {
            case State.Idle:
            case State.Moving:
              var direction;

              switch (e == null ? void 0 : e.keyCode) {
                case KeyCode.ARROW_UP:
                  direction = Direction.Up;
                  break;

                case KeyCode.ARROW_DOWN:
                  direction = Direction.Down;
                  break;

                case KeyCode.ARROW_LEFT:
                  direction = Direction.Left;
                  break;

                case KeyCode.ARROW_RIGHT:
                  direction = Direction.Right;
                  break;
              }

              if (!direction) break;
              this.checkDirectionToMove(direction);
              break;
          }
        };

        _proto.checkDirectionToMove = function checkDirectionToMove(direction) {
          var target = this.calcTarget(this.currentMap, this.mapPosition, direction);

          if (target) {
            this.moveDirection = direction;
            this.nextDirection = [];
            this.setState(State.Moving);
          } else {
            this.nextDirection = [direction, direction, direction];
          }
        };

        _proto.calcMoveDirection = function calcMoveDirection(inputOffset) {
          var x = inputOffset.x,
              y = inputOffset.y;

          if (Math.abs(x) >= Math.abs(y)) {
            return x > 0 ? Direction.Right : Direction.Left;
          } else {
            return y > 0 ? Direction.Up : Direction.Down;
          }
        };

        _proto.onBeginContact = function onBeginContact(selfCollider, otherCollider, contact) {
          // console.log(selfCollider, otherCollider, contact);
          // console.log(otherCollider.tag);
          switch (this.state) {
            case State.Idle:
            case State.Moving:
              switch (otherCollider == null ? void 0 : otherCollider.tag) {
                case ObjectType.waterDrop:
                  setTimeout(function () {
                    otherCollider.node.active = false;
                    userProfile.waterDrops++;
                  }, 1);
                  break;

                case ObjectType.knowledgePiece:
                  setTimeout(function () {
                    otherCollider.node.active = false;
                    userProfile.mazeGameSection.knowledgePieces++; //check win game

                    if (userProfile.mazeGameSection.knowledgePieces >= userProfile.mazeGameSection.knowledgePiecesMax) {
                      eventManager.emit(EventName.onMazeGameWin);
                    }
                  }, 1);
                  break;

                case ObjectType.enemy:
                  this.setState(State.Death); //check lose game

                  if (userProfile.mazeGameSection.playerCurrentHealth <= 0) {
                    eventManager.emit(EventName.onMazeGameLose);
                  }

                  break;
              }

              break;
          }
        };

        return Player;
      }(BaseObject), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "collider", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Popup.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Node, Button, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Node = module.Node;
      Button = module.Button;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;

      cclegacy._RF.push({}, "6d6f4KmEZxLcavSC5KU977w", "Popup", undefined);

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

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PopupWin.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Button, Node, director, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Button = module.Button;
      Node = module.Node;
      director = module.director;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;

      cclegacy._RF.push({}, "7473cQYhLpKe7idbtkiX9rh", "PopupWin", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var PopupWin = exports('PopupWin', (_dec = ccclass('PopupWin'), _dec2 = property(Button), _dec3 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PopupWin, _Component);

        function PopupWin() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "buttonNext", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "winScreen", _descriptor2, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = PopupWin.prototype; //#region Defaults

        _proto.onEnable = function onEnable() {
          this.winScreen.active = false;
          this.buttonNext.node.active = true;
          this.buttonNext.node.on(Button.EventType.CLICK, this.nextStep, this);
        };

        _proto.onDisable = function onDisable() {
          this.buttonNext.node.off(Button.EventType.CLICK, this.nextStep, this);
        } //#endregion    
        //#region Utils
        ;

        _proto.show = function show() {
          this.winScreen.active = false;
          this.buttonNext.node.active = true;
          this.node.active = true;
        };

        _proto.nextStep = function nextStep() {
          var _this2 = this;

          if (!this.winScreen.active) {
            this.buttonNext.node.active = false;
            this.winScreen.active = true;
            this.scheduleOnce(function () {
              return _this2.buttonNext.node.active = true;
            }, 3);
            return;
          }

          director.loadScene('home');
        } //#endregion
        ;

        return PopupWin;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "buttonNext", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "winScreen", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/QuizDefine.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "3892eJBEUxImI0Ib6oIXCbi", "QuizDefine", undefined); //Level infos


      var quizLvl = exports('quizLvl', [{
        mcName: "Water Drop",
        hp: 10,
        atk: 2,
        enemyName: "First Monster",
        enemyHp: 20,
        enemyAtk: 2
      }, {
        mcName: "Water Drop",
        hp: 12,
        atk: 3,
        enemyName: "Second Monster",
        enemyHp: 30,
        enemyAtk: 4
      }, {
        mcName: "Water Drop",
        hp: 16,
        atk: 3,
        enemyName: "Third Monster",
        enemyHp: 30,
        enemyAtk: 6
      }]); //Quiz

      var questionTime = exports('questionTime', 30); //Boosters

      var skipCost = exports('skipCost', 30);
      var skipUses = exports('skipUses', 1);
      var skimCost = exports('skimCost', 50);
      var skimUses = exports('skimUses', 1);
      var shieldCost = exports('shieldCost', 80);
      var shieldUses = exports('shieldUses', 2); //Storage

      var dropsKey = exports('dropsKey', 'drops');
      var lvlKey = exports('lvlKey', 'quizLvl');

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/QuizManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Character.ts', './MainCharacter.ts', './Popup.ts', './QuizDefine.ts', './ButtonAnswer.ts', './PopupWin.ts', './UserProfile.ts'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, _inheritsLoose, _assertThisInitialized, cclegacy, js, _decorator, CCString, CCInteger, Sprite, Label, Button, Node, input, Input, resources, JsonAsset, randomRangeInt, director, SpriteFrame, KeyCode, sys, Component, Character, MainCharacter, Popup, shieldCost, skimCost, skipCost, quizLvl, shieldUses, skimUses, skipUses, questionTime, ButtonAnswer, PopupWin, userProfile;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
      _inheritsLoose = module.inheritsLoose;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      js = module.js;
      _decorator = module._decorator;
      CCString = module.CCString;
      CCInteger = module.CCInteger;
      Sprite = module.Sprite;
      Label = module.Label;
      Button = module.Button;
      Node = module.Node;
      input = module.input;
      Input = module.Input;
      resources = module.resources;
      JsonAsset = module.JsonAsset;
      randomRangeInt = module.randomRangeInt;
      director = module.director;
      SpriteFrame = module.SpriteFrame;
      KeyCode = module.KeyCode;
      sys = module.sys;
      Component = module.Component;
    }, function (module) {
      Character = module.Character;
    }, function (module) {
      MainCharacter = module.MainCharacter;
    }, function (module) {
      Popup = module.Popup;
    }, function (module) {
      shieldCost = module.shieldCost;
      skimCost = module.skimCost;
      skipCost = module.skipCost;
      quizLvl = module.quizLvl;
      shieldUses = module.shieldUses;
      skimUses = module.skimUses;
      skipUses = module.skipUses;
      questionTime = module.questionTime;
    }, function (module) {
      ButtonAnswer = module.ButtonAnswer;
    }, function (module) {
      PopupWin = module.PopupWin;
    }, function (module) {
      userProfile = module.userProfile;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _class4, _class5, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20;

      cclegacy._RF.push({}, "805e23xK/5Fe5IFkpKG8r32", "QuizManager", undefined);

      var array = js.array;
      var ccclass = _decorator.ccclass,
          property = _decorator.property;

      var GameState = /*#__PURE__*/function (GameState) {
        GameState[GameState["INIT"] = 0] = "INIT";
        GameState[GameState["RESET"] = 1] = "RESET";
        GameState[GameState["PLAYING"] = 2] = "PLAYING";
        GameState[GameState["END"] = 3] = "END";
        return GameState;
      }(GameState || {});

      var QuizItem = exports('QuizItem', (_dec = ccclass('QuizItem'), _dec2 = property([CCString]), _dec(_class = (_class2 = function QuizItem(lastAnsIdx, question, answers) {
        if (lastAnsIdx === void 0) {
          lastAnsIdx = -1;
        }

        if (question === void 0) {
          question = "";
        }

        if (answers === void 0) {
          answers = [];
        }

        _initializerDefineProperty(this, "used", _descriptor, this);

        _initializerDefineProperty(this, "question", _descriptor2, this);

        _initializerDefineProperty(this, "lastAnsIdx", _descriptor3, this);

        _initializerDefineProperty(this, "answers", _descriptor4, this);

        this.lastAnsIdx = lastAnsIdx;
        this.question = question;
        this.answers = answers;
      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "used", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "question", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "";
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "lastAnsIdx", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "answers", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));
      var QuizManager = exports('QuizManager', (_dec3 = ccclass('QuizManager'), _dec4 = property(CCInteger), _dec5 = property(MainCharacter), _dec6 = property(Character), _dec7 = property(Sprite), _dec8 = property(Label), _dec9 = property(Button), _dec10 = property(Button), _dec11 = property(Button), _dec12 = property(Button), _dec13 = property(Label), _dec14 = property(Label), _dec15 = property([Node]), _dec16 = property([QuizItem]), _dec17 = property(Popup), _dec18 = property(PopupWin), _dec19 = property(Node), _dec3(_class4 = (_class5 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(QuizManager, _Component);

        function QuizManager() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "level", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "mainChar", _descriptor6, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "enemy", _descriptor7, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "spriteBG", _descriptor8, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "labelDrops", _descriptor9, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "buttonBack", _descriptor10, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "buttonSkip", _descriptor11, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "buttonSkimAns", _descriptor12, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "buttonShield", _descriptor13, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "labelTime", _descriptor14, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "labelQuestion", _descriptor15, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "buttonNodes", _descriptor16, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "questions", _descriptor17, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "popup", _descriptor18, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "popupWin", _descriptor19, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "overlay", _descriptor20, _assertThisInitialized(_this));

          _this.shuffledIndexes = void 0;
          _this.btnAnsCorrect = void 0;
          _this.usedCount = 0;
          _this.timeLeft = 0;
          _this.currentDrops = 0;
          _this.skipsUsed = 0;
          _this.skimsUsed = 0;
          _this.shieldUsed = 0;
          return _this;
        }

        var _proto = QuizManager.prototype; //#region Default

        _proto.onLoad = function onLoad() {
          input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
        };

        _proto.onEnable = function onEnable() {
          this.buttonShield.node.on(Button.EventType.CLICK, this.activateShield, this);
          this.buttonSkip.node.on(Button.EventType.CLICK, this.skipQuiz, this);
          this.buttonSkimAns.node.on(Button.EventType.CLICK, this.skimAnswers, this);
          this.buttonBack.node.on(Button.EventType.CLICK, this.showPopupBack, this);
        };

        _proto.onDisable = function onDisable() {
          this.buttonShield.node.off(Button.EventType.CLICK, this.activateShield, this);
          this.buttonSkip.node.off(Button.EventType.CLICK, this.skipQuiz, this);
          this.buttonSkimAns.node.off(Button.EventType.CLICK, this.skimAnswers, this);
          this.buttonBack.node.off(Button.EventType.CLICK, this.showPopupBack, this);
        };

        _proto.start = function start() {
          this.setCurState(GameState.INIT);
        };

        _proto.update = function update(deltaTime) {} //#endregion
        //#region State
        ;

        _proto.setCurState = function setCurState(value) {
          switch (value) {
            case GameState.INIT:
              this.init();
              break;

            case GameState.RESET:
              this.resetGame();

            case GameState.PLAYING:
              this.showNextQuiz();
              break;

            case GameState.END:
              if (this.mainChar.hp <= 0) this.showPopupLose();else this.endGameWin();
              break;
          }
        } //#endregion
        //#region Utils
        ;

        _proto.init = function init() {
          this.popup.quizManager = this;
          this.shuffledIndexes = Array.from(Array(this.buttonNodes.length).keys());
          this.buttonShield.getComponentInChildren(Label).string = shieldCost.toString();
          this.buttonSkimAns.getComponentInChildren(Label).string = skimCost.toString();
          this.buttonSkip.getComponentInChildren(Label).string = skipCost.toString();

          switch (userProfile.currentLevel) {
            case 3:
              this.level = 1;
              break;

            case 5:
              this.level = 2;
              break;

            default:
            case 1:
              this.level = 0;
              break;
          }

          this.setUpLevel();
        };

        _proto.setUpLevel = function setUpLevel() {
          var _this2 = this;

          var _quizLvl$this$level = quizLvl[this.level],
              mcName = _quizLvl$this$level.mcName,
              hp = _quizLvl$this$level.hp,
              atk = _quizLvl$this$level.atk,
              enemyName = _quizLvl$this$level.enemyName,
              enemyHp = _quizLvl$this$level.enemyHp,
              enemyAtk = _quizLvl$this$level.enemyAtk;
          this.mainChar.setUpChar(mcName, hp, atk);
          this.enemy.setUpChar(enemyName, enemyHp, enemyAtk);
          this.enemy.setCharSprite(this.level);
          this.loadBG();
          resources.load("JSON/questions", JsonAsset, function (err, jsonAsset) {
            for (var i = 0; i < jsonAsset.json.length; i++) {
              var q = jsonAsset.json[i];

              if (q['level'] != _this2.level) {
                continue;
              }

              var quiz = new QuizItem(q['lastAnsIdx'], q['question'], [q['ans0'], q['ans1'], q['ans2'], q['ans3']]);

              _this2.questions.push(quiz);
            }

            _this2.resetGame();
          });
        };

        _proto.resetGame = function resetGame() {
          this.currentDrops = userProfile.waterDrops;
          if (!this.currentDrops) this.currentDrops = 0;
          this.updateDropsDisplay();
          this.mainChar.resetStats();
          this.enemy.resetStats();
          this.usedCount = 0;
          this.questions.forEach(function (q) {
            q.used = false;
          });
          this.skipsUsed = 0;
          this.skimsUsed = 0;
          this.shieldUsed = 0;
          this.setCurState(GameState.PLAYING);
        };

        _proto.showNextQuiz = function showNextQuiz() {
          var _this3 = this;

          var quizItem = this.getRandomQuestion();
          quizItem.used = true;
          this.usedCount++;
          this.labelQuestion.string = quizItem.question;
          this.randomizeAnsOrder(quizItem.lastAnsIdx);
          var i = 0;
          this.buttonNodes.forEach(function (n) {
            var idx = _this3.shuffledIndexes[i];
            if (idx == 0) _this3.btnAnsCorrect = n.getComponent(ButtonAnswer);
            n.getComponent(ButtonAnswer).resetButton(quizItem.answers[idx]);
            n.on(Button.EventType.CLICK, function () {
              _this3.onAnswerSelected(n.getComponent(ButtonAnswer), idx);
            }, _this3);
            i++;
          });
          this.mainChar.toggleShield(false);
          this.buttonShield.interactable = this.currentDrops > shieldCost && this.shieldUsed < shieldUses;
          this.overlay.active = false;
          this.startCountdown();
        };

        _proto.randomizeAnsOrder = function randomizeAnsOrder(lastAnsIdx) {
          this.shuffledIndexes.sort(function () {
            return Math.random() - 0.5;
          });
          if (lastAnsIdx == -1) return;

          for (var i = 0; i < this.shuffledIndexes.length; i++) {
            if (this.shuffledIndexes[i] == lastAnsIdx) {
              this.shuffledIndexes.splice(i, 1);
              this.shuffledIndexes.push(lastAnsIdx);
              return;
            }
          }
        };

        _proto.getRandomQuestion = function getRandomQuestion() {
          var idx = -1;

          do {
            idx = randomRangeInt(0, this.questions.length);
          } while (this.questions[idx].used == true && this.usedCount < this.questions.length);

          return this.questions[idx];
        };

        _proto.onAnswerSelected = function onAnswerSelected(btn, idx) {
          if (this.timeLeft <= 0) {
            // console.log("xdd blocked");
            return;
          }

          this.overlay.active = true;
          this.unscheduleAllCallbacks();

          if (idx == 0) {
            btn.showCorrect();
            this.mainChar.animateAttack(this.enemy, this, this.checkEndGame);
          } else {
            btn.showWrong();
            this.btnAnsCorrect.showCorrect();
            this.enemy.animateAttack(this.mainChar, this, this.checkEndGame);
          }
        };

        _proto.checkEndGame = function checkEndGame() {
          if (this.mainChar.hp <= 0 || this.enemy.hp <= 0) {
            this.setCurState(GameState.END);
            this.unscheduleAllCallbacks();
            return;
          }

          this.scheduleOnce(this.showNextQuiz, 1);
        };

        _proto.restartGame = function restartGame() {
          this.setCurState(GameState.RESET);
        };

        _proto.endGameWin = function endGameWin() {
          userProfile.waterDrops = this.currentDrops; // sys.localStorage.setItem(dropsKey, this.currentDrops);

          this.showPopupWin();
        };

        _proto.backToMap = function backToMap() {
          director.loadScene('home');
        };

        _proto.loadBG = function loadBG() {
          var _this4 = this;

          var path = "sprites/Background_" + this.level.toString() + "/spriteFrame";
          resources.load(path, SpriteFrame, function (err, spriteFrame) {
            _this4.spriteBG.spriteFrame = spriteFrame;
          });
        } //#endregion
        //#region Boosters
        ;

        _proto.activateShield = function activateShield() {
          if (this.currentDrops < shieldCost || this.shieldUsed >= shieldUses) return;
          this.shieldUsed++;
          this.currentDrops -= shieldCost;
          this.updateDropsDisplay();
          this.buttonShield.interactable = false;
          this.mainChar.toggleShield(true);
        };

        _proto.skimAnswers = function skimAnswers() {
          if (this.currentDrops < skimCost || this.skimsUsed >= skimUses) return;
          this.skimsUsed++;
          this.currentDrops -= skimCost;
          this.updateDropsDisplay();
          this.buttonSkimAns.interactable = false;
          var count = 0;

          for (var i = 0; i < this.buttonNodes.length; i++) {
            if (count > 1) return;

            if (this.shuffledIndexes[i] != 0) {
              this.buttonNodes[i].active = false;
              count++;
            }
          }
        };

        _proto.skipQuiz = function skipQuiz() {
          if (this.currentDrops < skipCost || this.skipsUsed >= skipUses) return;
          this.skipsUsed++;
          this.currentDrops -= skipCost;
          this.updateDropsDisplay();
          this.showNextQuiz();
        } //#endregion
        //#region Countdown
        ;

        _proto.startCountdown = function startCountdown() {
          this.timeLeft = questionTime;
          this.labelTime.string = this.timeLeft.toString();
          this.schedule(this.reduceTime, 1, questionTime - 1);
        };

        _proto.reduceTime = function reduceTime() {
          this.timeLeft -= 1;
          this.labelTime.string = this.timeLeft.toString();

          if (this.timeLeft <= 0) {
            // console.log("out of time");
            this.overlay.active = true;
            this.btnAnsCorrect.showCorrect();
            this.enemy.animateAttack(this.mainChar, this, this.checkEndGame);
          }
        } //#endregion
        //#region Popup
        ;

        _proto.showPopupLose = function showPopupLose() {
          this.popup.showPopupLose("Replay", "Back to menu", this.restartGame, this.backToMap);
        };

        _proto.showPopupBack = function showPopupBack() {
          this.popup.showPopupBack("Back to menu?", "No", "Yes", null, this.backToMap);
        };

        _proto.showPopupWin = function showPopupWin() {
          this.popupWin.show();
        } //#endregion
        //#region Water drops
        ;

        _proto.updateDropsDisplay = function updateDropsDisplay() {
          this.labelDrops.string = this.currentDrops.toString();
          this.buttonSkip.interactable = this.currentDrops > skipCost && this.skipsUsed < skipUses;
          this.buttonSkimAns.interactable = this.currentDrops > skimCost && this.skimsUsed < skimUses;
          this.buttonShield.interactable = this.currentDrops > shieldCost && this.shieldUsed < shieldUses;
        };

        _proto.onKeyDown = function onKeyDown(event) {
          switch (event.keyCode) {
            case KeyCode.KEY_A:
              this.cheatDrops(81);
              break;

            case KeyCode.KEY_B:
              this.cheatDrops(0);
              break;

            case KeyCode.KEY_D:
              sys.localStorage.clear();
              break;
          }
        };

        _proto.cheatDrops = function cheatDrops(val) {
          this.currentDrops = val;
          this.updateDropsDisplay();
        } //#endregion
        ;

        return QuizManager;
      }(Component), (_descriptor5 = _applyDecoratedDescriptor(_class5.prototype, "level", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class5.prototype, "mainChar", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class5.prototype, "enemy", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class5.prototype, "spriteBG", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class5.prototype, "labelDrops", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor10 = _applyDecoratedDescriptor(_class5.prototype, "buttonBack", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor11 = _applyDecoratedDescriptor(_class5.prototype, "buttonSkip", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor12 = _applyDecoratedDescriptor(_class5.prototype, "buttonSkimAns", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor13 = _applyDecoratedDescriptor(_class5.prototype, "buttonShield", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor14 = _applyDecoratedDescriptor(_class5.prototype, "labelTime", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor15 = _applyDecoratedDescriptor(_class5.prototype, "labelQuestion", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor16 = _applyDecoratedDescriptor(_class5.prototype, "buttonNodes", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class5.prototype, "questions", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class5.prototype, "popup", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor19 = _applyDecoratedDescriptor(_class5.prototype, "popupWin", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor20 = _applyDecoratedDescriptor(_class5.prototype, "overlay", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class5)) || _class4));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/StatsBoard.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './UserProfile.ts', './EventManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Node, Sprite, UIOpacity, Component, userProfile, eventManager, EventName;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Node = module.Node;
      Sprite = module.Sprite;
      UIOpacity = module.UIOpacity;
      Component = module.Component;
    }, function (module) {
      userProfile = module.userProfile;
    }, function (module) {
      eventManager = module.eventManager;
      EventName = module.EventName;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;

      cclegacy._RF.push({}, "27e96+kZ9ZFH4C89KySTlCu", "StatsBoard", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var StatsBoard = exports('StatsBoard', (_dec = ccclass('StatsBoard'), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(StatsBoard, _Component);

        function StatsBoard() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "waterDropslabel", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "knowledgePieceLabel", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "playerHealthContainer", _descriptor3, _assertThisInitialized(_this));

          _this.knowledgePiecesMax = 0;
          _this.knowledfePieces = 0;
          return _this;
        }

        var _proto = StatsBoard.prototype;

        _proto.onEnable = function onEnable() {
          eventManager.on(EventName.onWaterDropChange, this.updateWaterDrops, this);
          eventManager.on(EventName.onPlayerMaxHealthChange, this.updatePlayerMaxHealth, this);
          eventManager.on(EventName.onPlayerCurrentHealthChange, this.updatePlayerCurrentHealth, this);
          eventManager.on(EventName.onKnowledgePieceMaxChange, this.updateKnowledgePieceMax, this);
          eventManager.on(EventName.onKnowledgePieceChange, this.updateKnowledgePiece, this);
        };

        _proto.onDisable = function onDisable() {
          eventManager.off(EventName.onWaterDropChange, this.updateWaterDrops, this);
          eventManager.off(EventName.onPlayerMaxHealthChange, this.updatePlayerMaxHealth, this);
          eventManager.off(EventName.onPlayerCurrentHealthChange, this.updatePlayerCurrentHealth, this);
          eventManager.off(EventName.onKnowledgePieceMaxChange, this.updateKnowledgePieceMax, this);
          eventManager.off(EventName.onKnowledgePieceChange, this.updateKnowledgePiece, this);
        } //PUBLIC
        //PRIVATE
        ;

        _proto.updateWaterDrops = function updateWaterDrops() {
          this.waterDropslabel.string = "" + userProfile.waterDrops;
        };

        _proto.updatePlayerMaxHealth = function updatePlayerMaxHealth() {
          this.playerHealthContainer.children.forEach(function (child, index) {
            child.active = index < userProfile.mazeGameSection.playerMaxHealth;
          });
        };

        _proto.updatePlayerCurrentHealth = function updatePlayerCurrentHealth() {
          this.playerHealthContainer.children.forEach(function (child, index) {
            var isActive = index < userProfile.mazeGameSection.playerCurrentHealth;
            var sprite = child.getComponent(Sprite);

            if (sprite) {
              sprite.grayscale = !isActive;
            }

            var uiOpacity = child.getComponent(UIOpacity);

            if (uiOpacity) {
              uiOpacity.opacity = isActive ? 255 : 150;
            }
          });
        };

        _proto.updateKnowledgePieceMax = function updateKnowledgePieceMax() {
          this.updateKnowledgePiece();
        };

        _proto.updateKnowledgePiece = function updateKnowledgePiece() {
          this.knowledgePieceLabel.string = userProfile.mazeGameSection.knowledgePieces + "/" + userProfile.mazeGameSection.knowledgePiecesMax;
        };

        return StatsBoard;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "waterDropslabel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "knowledgePieceLabel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "playerHealthContainer", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TileMapControl.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Define.ts', './UserProfile.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, TiledMap, TiledMapAsset, Component, CellSize, userProfile;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      TiledMap = module.TiledMap;
      TiledMapAsset = module.TiledMapAsset;
      Component = module.Component;
    }, function (module) {
      CellSize = module.CellSize;
    }, function (module) {
      userProfile = module.userProfile;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;

      cclegacy._RF.push({}, "bd8eb055nZJzqOTRqtLY9lB", "TileMapControl", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var TileMapControl = exports('TileMapControl', (_dec = ccclass('TileMapControl'), _dec2 = property(TiledMap), _dec3 = property([TiledMapAsset]), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(TileMapControl, _Component);

        function TileMapControl() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "tileMap", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "tileMapAssets", _descriptor2, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = TileMapControl.prototype;

        _proto.start = function start() {
          //
          var scale = CellSize / 64;
          this.node.scale.set(scale, scale, scale); //

          this.tileMap.tmxAsset = this.tileMapAssets[userProfile.currentLevel];
        };

        return TileMapControl;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "tileMap", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "tileMapAssets", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UserProfile.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './EventManager.ts'], function (exports) {
  var _createClass, cclegacy, eventManager, EventName;

  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      eventManager = module.eventManager;
      EventName = module.EventName;
    }],
    execute: function () {
      cclegacy._RF.push({}, "08a12TJUDVL9LtZ6ftBNf7p", "UserProfile", undefined);

      var UserProfile = /*#__PURE__*/function () {
        function UserProfile() {
          this.maxLevel = 0;
          this.currentLevel = 0;
          this.mazeGameSection = new MazeGameSection();
          this._waterDrops = 0;
        }

        _createClass(UserProfile, [{
          key: "waterDrops",
          get: function get() {
            return this._waterDrops;
          },
          set: function set(value) {
            this._waterDrops = Math.max(value, 0);
            eventManager.emit(EventName.onWaterDropChange);
          }
        }]);

        return UserProfile;
      }();

      var MazeGameSection = /*#__PURE__*/function () {
        function MazeGameSection() {
          this._playerMaxHealth = 0;
          this._playerCurrentHealth = 0;
          this._knowledgePiecesMax = 0;
          this._knowledgePieces = 0;
        }

        var _proto = MazeGameSection.prototype;

        _proto.reset = function reset() {
          this.playerMaxHealth = 0;
          this.playerCurrentHealth = 0;
          this.knowledgePiecesMax = 0;
          this.knowledgePieces = 0;
        };

        _createClass(MazeGameSection, [{
          key: "playerMaxHealth",
          get: function get() {
            return this._playerMaxHealth;
          },
          set: function set(value) {
            this._playerMaxHealth = Math.max(value, 0);
            eventManager.emit(EventName.onPlayerMaxHealthChange);
          }
        }, {
          key: "playerCurrentHealth",
          get: function get() {
            return this._playerCurrentHealth;
          },
          set: function set(value) {
            this._playerCurrentHealth = Math.max(value, 0);
            eventManager.emit(EventName.onPlayerCurrentHealthChange);
          }
        }, {
          key: "knowledgePiecesMax",
          get: function get() {
            return this._knowledgePiecesMax;
          },
          set: function set(value) {
            this._knowledgePiecesMax = Math.max(value, 0);
            eventManager.emit(EventName.onKnowledgePieceMaxChange);
          }
        }, {
          key: "knowledgePieces",
          get: function get() {
            return this._knowledgePieces;
          },
          set: function set(value) {
            this._knowledgePieces = Math.max(value, 0);
            eventManager.emit(EventName.onKnowledgePieceChange);
          }
        }]);

        return MazeGameSection;
      }();

      var userProfile = exports('userProfile', new UserProfile());

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/WaterDrop.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseObject.ts', './LevelDefine.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, BaseObject, ObjectType;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      BaseObject = module.BaseObject;
    }, function (module) {
      ObjectType = module.ObjectType;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "c1edcZnd7VLLqN7DqExGf/K", "WaterDrop", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var WaterDrop = exports('WaterDrop', (_dec = ccclass('WaterDrop'), _dec(_class = /*#__PURE__*/function (_BaseObject) {
        _inheritsLoose(WaterDrop, _BaseObject);

        function WaterDrop() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _BaseObject.call.apply(_BaseObject, [this].concat(args)) || this;
          _this.objectType = ObjectType.waterDrop;
          return _this;
        }

        var _proto = WaterDrop.prototype;

        _proto.start = function start() {
          _BaseObject.prototype.start.call(this);
        };

        _proto.update = function update(deltaTime) {};

        return WaterDrop;
      }(BaseObject)) || _class));

      cclegacy._RF.pop();
    }
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