System.register("chunks:///_virtual/AudioMgr.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _createClass, cclegacy, _decorator, AudioClip, resources, Node, director, AudioSource;

  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      AudioClip = module.AudioClip;
      resources = module.resources;
      Node = module.Node;
      director = module.director;
      AudioSource = module.AudioSource;
    }],
    execute: function () {
      cclegacy._RF.push({}, "e26872y7ypKPpXQXu0mfb2z", "AudioMgr", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var AudioDefine = exports('AudioDefine', {
        menuBGM: 'sfx/Menu_BGM_1',
        mazeCollectWaterDrop: 'sfx/Maze_CollectWaterDrop',
        mazeCollectKnowledgePiece: 'sfx/Maze_CollectKnowledgePiece_1',
        mazeHitMonster: 'sfx/Maze_HitMonster',
        mazeBGM: 'sfx/Maze_BGM_1',
        losePopupSfx: 'sfx/lose_popup_sfx',
        winTheGame: 'sfx/WinTheGame',
        tapButton: 'sfx/TapButton',
        tapBack: 'sfx/TapBack',
        quizBGM: 'sfx/Quiz_BGM_2',
        quizStart: 'sfx/Quiz_StartGame',
        quizSkim: 'sfx/Quiz_UsingBooster_50-50',
        quizSkip: 'sfx/Quiz_UsingBooster_Change',
        quizShield: 'sfx/Quiz_UsingBooster_50-50',
        quizEnemyHit: 'sfx/Monster_Hit',
        quizMCHit: 'sfx/User_Hit',
        quizCorrectAns: 'sfx/CorrectAnswer_2',
        quizWrongAns: 'sfx/WrongAnswer_1'
      });
      var AudioMgr = exports('AudioMgr', /*#__PURE__*/function () {
        function AudioMgr() {
          this._audioSource = void 0; //@en create a node as audioMgr
          //@zh 创建一个节点作为 audioMgr

          var audioMgr = new Node();
          audioMgr.name = '__audioMgr__'; //@en add to the scene.
          //@zh 添加节点到场景

          director.getScene().addChild(audioMgr); //@en make it as a persistent node, so it won't be destroied when scene change.
          //@zh 标记为常驻节点，这样场景切换的时候就不会被销毁了

          director.addPersistRootNode(audioMgr); //@en add AudioSource componrnt to play audios.
          //@zh 添加 AudioSource 组件，用于播放音频。

          this._audioSource = audioMgr.addComponent(AudioSource);
        }

        var _proto = AudioMgr.prototype;
        /**
         * @en
         * play short audio, such as strikes,explosions
         * @zh
         * 播放短音频,比如 打击音效，爆炸音效等
         * @param sound clip or url for the audio
         * @param volume 
         */

        _proto.playOneShot = function playOneShot(sound, volume) {
          var _this = this;

          if (volume === void 0) {
            volume = 1.0;
          }

          if (sound instanceof AudioClip) {
            this._audioSource.playOneShot(sound, volume);
          } else {
            resources.load(sound, function (err, clip) {
              if (err) {
                console.log(err);
              } else {
                _this._audioSource.playOneShot(clip, volume);
              }
            });
          }
        }
        /**
         * @en
         * play long audio, such as the bg music
         * @zh
         * 播放长音频，比如 背景音乐
         * @param sound clip or url for the sound
         * @param volume 
         */
        ;

        _proto.play = function play(sound, volume) {
          var _this2 = this;

          if (volume === void 0) {
            volume = 0.5;
          }

          if (sound instanceof AudioClip) {
            this._audioSource.clip = sound;

            this._audioSource.play();

            this.audioSource.volume = volume;
          } else {
            resources.load(sound, function (err, clip) {
              if (err) {
                console.log(err);
              } else {
                _this2._audioSource.clip = clip;

                _this2._audioSource.play();

                _this2.audioSource.volume = volume;
              }
            });
          }
        }
        /**
         * stop the audio play
         */
        ;

        _proto.stop = function stop() {
          this._audioSource.stop();

          this._audioSource.clip = null;
        }
        /**
         * pause the audio play
         */
        ;

        _proto.pause = function pause() {
          this._audioSource.pause();
        }
        /**
         * resume the audio play
         */
        ;

        _proto.resume = function resume() {
          this._audioSource.play();
        };

        _createClass(AudioMgr, [{
          key: "audioSource",
          get: function get() {
            return this._audioSource;
          }
        }], [{
          key: "inst",
          get: function get() {
            if (this._inst == null) {
              this._inst = new AudioMgr();
            }

            return this._inst;
          }
        }]);

        return AudioMgr;
      }());
      AudioMgr._inst = void 0;

      cclegacy._RF.pop();
    }
  };
});

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

System.register("chunks:///_virtual/Character.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AudioMgr.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Sprite, Label, Vec3, tween, Color, resources, SpriteFrame, UITransform, Component, AudioMgr, AudioDefine;

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
    }, function (module) {
      AudioMgr = module.AudioMgr;
      AudioDefine = module.AudioDefine;
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
            _this2.playHitAudio();

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

        _proto.playHitAudio = function playHitAudio() {
          AudioMgr.inst.playOneShot(AudioDefine.quizEnemyHit);
        };

        _proto.resetStats = function resetStats() {
          this.hp = this.originalHp;
          this.atk = this.originalAtk;
          this.updateDisplay();
        };

        _proto.setCharSprite = function setCharSprite(lvl) {
          var _this3 = this;

          var path = "sprites/quizGame/Card_Boss_lv" + lvl.toString() + "/spriteFrame";
          resources.load(path, SpriteFrame, function (err, spriteFrame) {
            switch (lvl) {
              case 0:
                _this3.spriteChar.getComponent(UITransform).setContentSize(843 / 2.9, 1002 / 2.9);

                break;

              case 1:
                _this3.spriteChar.node.position = _this3.spriteChar.node.getPosition().add3f(7, 0, 0);

                _this3.spriteChar.getComponent(UITransform).setContentSize(881 / 2.9, 1003 / 2.9);

                break;

              case 2:
                _this3.spriteChar.getComponent(UITransform).setContentSize(843 / 2.9, 1002 / 2.9);

                break;
            }

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
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, SpriteFrame, Sprite, Tween, Vec2, tween, clamp, BaseObject, ObjectType;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      SpriteFrame = module.SpriteFrame;
      Sprite = module.Sprite;
      Tween = module.Tween;
      Vec2 = module.Vec2;
      tween = module.tween;
      clamp = module.clamp;
    }, function (module) {
      BaseObject = module.BaseObject;
    }, function (module) {
      ObjectType = module.ObjectType;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;

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

      var Enemy = exports('Enemy', (_dec = ccclass('Enemy'), _dec2 = property({
        type: [SpriteFrame]
      }), _dec3 = property(Sprite), _dec(_class = (_class2 = /*#__PURE__*/function (_BaseObject) {
        _inheritsLoose(Enemy, _BaseObject);

        function Enemy() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _BaseObject.call.apply(_BaseObject, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "spriteFrames", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "sprite", _descriptor2, _assertThisInitialized(_this));

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

        _proto.setupInfo = function setupInfo(index, speed, path) {
          this.sprite.spriteFrame = this.spriteFrames[clamp(index, 0, this.spriteFrames.length - 1)];
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
      }(BaseObject), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "spriteFrames", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "sprite", [_dec3], {
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
        EventName[EventName["onMazeGameLose"] = 5] = "onMazeGameLose";
        EventName[EventName["onShowHandOnLevel"] = 6] = "onShowHandOnLevel";
        EventName[EventName["onShowKnowledgePopup"] = 7] = "onShowKnowledgePopup";
        return EventName;
      }({}));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/home.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './UserProfile.ts', './Story.ts', './AudioMgr.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, clamp, director, Component, userProfile, Story, State, AudioMgr, AudioDefine;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      clamp = module.clamp;
      director = module.director;
      Component = module.Component;
    }, function (module) {
      userProfile = module.userProfile;
    }, function (module) {
      Story = module.Story;
      State = module.State;
    }, function (module) {
      AudioMgr = module.AudioMgr;
      AudioDefine = module.AudioDefine;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;

      cclegacy._RF.push({}, "1c7c2Up1MFIiYxpW0poHpCv", "home", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var home = exports('home', (_dec = ccclass('home'), _dec2 = property(Story), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(home, _Component);

        function home() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "story", _descriptor, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = home.prototype;

        _proto.onEnable = function onEnable() {
          AudioMgr.inst.play(AudioDefine.menuBGM);
        };

        _proto.onDisable = function onDisable() {
          AudioMgr.inst.stop();
        };

        _proto.start = function start() {
          this.checkToShowStory();
        };

        _proto.update = function update(deltaTime) {} //PUBLIC
        ;

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
        } //PRIVATE
        ;

        _proto.checkToShowStory = function checkToShowStory() {
          switch (userProfile.maxLevel) {
            case 0:
              if (!userProfile.storyCompleteStatus.scene1) this.story.startScene1();else this.story.setStateInactive();
              break;

            case 1:
              if (!userProfile.storyCompleteStatus.scene3) this.story.startScene3();else this.story.setStateInactive();
              break;

            case 2:
              if (!userProfile.storyCompleteStatus.scene5) this.story.startScene(State.Scene_5_14A);else this.story.setStateInactive();
              break;

            case 3:
              if (!userProfile.storyCompleteStatus.scene6) this.story.startScene(State.Scene_6_15A);else this.story.setStateInactive();
              break;

            case 4:
              if (!userProfile.storyCompleteStatus.scene8) this.story.startScene(State.Scene_8_17A);else this.story.setStateInactive();
              break;

            case 5:
              if (!userProfile.storyCompleteStatus.scene9) this.story.startScene(State.Scene_9_18A);else if (userProfile.storyCompleteStatus.scene10) this.story.startScene(State.Scene_11_20A);else this.story.setStateInactive();
              break;

            default:
              this.story.setStateInactive();
              break;
          }
        };

        return home;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "story", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _class2)) || _class));

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
          _this.content = '';
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

System.register("chunks:///_virtual/LevelButton.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './UserProfile.ts', './EventManager.ts', './AudioMgr.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Button, Label, Node, Sprite, Color, director, Component, userProfile, eventManager, EventName, AudioMgr, AudioDefine;

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
      Label = module.Label;
      Node = module.Node;
      Sprite = module.Sprite;
      Color = module.Color;
      director = module.director;
      Component = module.Component;
    }, function (module) {
      userProfile = module.userProfile;
    }, function (module) {
      eventManager = module.eventManager;
      EventName = module.EventName;
    }, function (module) {
      AudioMgr = module.AudioMgr;
      AudioDefine = module.AudioDefine;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8;

      cclegacy._RF.push({}, "3181f4A1VlPiYxEo1dg+WJA", "LevelButton", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var LevelButton = exports('LevelButton', (_dec = ccclass('LevelButton'), _dec2 = property(Number), _dec3 = property(Boolean), _dec4 = property(Button), _dec5 = property(Label), _dec6 = property(Node), _dec7 = property(Sprite), _dec8 = property(Node), _dec9 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(LevelButton, _Component);

        function LevelButton() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "level", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "isHaveBoss", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "button", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "labelLevel", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "completeIcon", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "bossIcon", _descriptor6, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "bossQuetionMark", _descriptor7, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "hand", _descriptor8, _assertThisInitialized(_this));

          _this.showHandCallback = void 0;
          return _this;
        }

        var _proto = LevelButton.prototype;

        _proto.onEnable = function onEnable() {
          eventManager.on(EventName.onShowHandOnLevel, this.showHand, this);
          this.button.node.on(Button.EventType.CLICK, this.onClick, this);
        };

        _proto.onDisable = function onDisable() {
          eventManager.off(EventName.onShowHandOnLevel, this.showHand, this);
          this.button.node.off(Button.EventType.CLICK, this.onClick, this);
        };

        _proto.start = function start() {
          this.labelLevel.string = "" + (this.level + 1);
          this.completeIcon.active = this.level < userProfile.maxLevel;
          this.button.interactable = this.level <= userProfile.maxLevel;
          this.bossIcon.node.active = this.isHaveBoss;
          this.bossIcon.color = this.level <= userProfile.maxLevel ? new Color(255, 255, 255, 255) : new Color(0, 0, 0, 255);
          this.bossQuetionMark.active = !(this.level <= userProfile.maxLevel);
          this.hand.active = false;
        };

        _proto.update = function update(deltaTime) {} //PRIVATE
        ;

        _proto.showHand = function showHand(params) {
          this.hand.active = this.level === userProfile.maxLevel;

          if (this.hand.active) {
            this.showHandCallback = params;
          }
        };

        _proto.onClick = function onClick() {
          if (this.level !== userProfile.maxLevel) return; //

          AudioMgr.inst.playOneShot(AudioDefine.tapButton);

          if (this.hand.active) {
            var _this$showHandCallbac;

            (_this$showHandCallbac = this.showHandCallback) == null ? void 0 : _this$showHandCallbac.call(this);
          } //


          var level = this.level;
          console.log('onPlayLevel', level);
          userProfile.currentLevel = level;

          if (level % 2 == 0) {
            director.loadScene('mazeGame');
          } else {
            director.loadScene('quizGame');
          }
        };

        return LevelButton;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "level", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "isHaveBoss", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "button", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "labelLevel", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "completeIcon", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "bossIcon", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "bossQuetionMark", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "hand", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LevelControl.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './LevelDefine.ts', './BaseObject.ts', './Player.ts', './Enemy.ts', './UserProfile.ts', './KnowledgePiece.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, Node, Vec2, instantiate, Component, ObjectType, levelInfo1, levelInfo2, levelInfo3, level1, level2, level3, levelEnemy1, levelEnemy2, levelEnemy3, BaseObject, Player, Enemy, userProfile, KnowledgePiece;

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
      levelInfo1 = module.levelInfo1;
      levelInfo2 = module.levelInfo2;
      levelInfo3 = module.levelInfo3;
      level1 = module.level1;
      level2 = module.level2;
      level3 = module.level3;
      levelEnemy1 = module.levelEnemy1;
      levelEnemy2 = module.levelEnemy2;
      levelEnemy3 = module.levelEnemy3;
    }, function (module) {
      BaseObject = module.BaseObject;
    }, function (module) {
      Player = module.Player;
    }, function (module) {
      Enemy = module.Enemy;
    }, function (module) {
      userProfile = module.userProfile;
    }, function (module) {
      KnowledgePiece = module.KnowledgePiece;
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

        var _proto = LevelControl.prototype;

        _proto.update = function update(dt) {
          this.sortObject();
        } //PUBLIC
        ;

        _proto.inactiveAllObjects = function inactiveAllObjects() {
          this.objects.forEach(function (platform) {
            platform.node.active = false;
          });
        };

        _proto.initMap = function initMap() {
          var _arrLevelInfo$userPro,
              _arrLevelInfo$userPro2,
              _this2 = this;

          var knowledgePieceContents = (_arrLevelInfo$userPro = (_arrLevelInfo$userPro2 = arrLevelInfo[userProfile.currentLevel]) == null ? void 0 : _arrLevelInfo$userPro2.knowledgePieceContents) != null ? _arrLevelInfo$userPro : [];
          var knowledgePieceContentIndex = 0;
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

                    var knowledgePiece = _obj.getComponent(KnowledgePiece);

                    if (knowledgePiece) {
                      var _knowledgePieceConten;

                      knowledgePiece.content = (_knowledgePieceConten = knowledgePieceContents == null ? void 0 : knowledgePieceContents[knowledgePieceContentIndex++]) != null ? _knowledgePieceConten : '';
                    }
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
                speed = info.speed,
                index = info.index;

            var obj = _this3.getObject(objectType, _this3.enemyPrefab, _this3.objects, _this3.world);

            var enemy = obj.getComponent(Enemy);

            if (enemy) {
              enemy.setupInfo(index, speed, path);
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

        _proto.sortObject = function sortObject() {
          this.world.children.sort(function (a, b) {
            var _a$position = a.position,
                ax = _a$position.x,
                ay = _a$position.y;
            var _b$position = b.position,
                bx = _b$position.x,
                by = _b$position.y;
            return ay === by ? ax - bx : by - ay;
          });
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
        index: 0,
        path: [new Vec2(7, 5), new Vec2(1, 5), new Vec2(1, 2), new Vec2(9, 2), new Vec2(9, 6), new Vec2(10, 6), new Vec2(10, 10), new Vec2(7, 10)]
      }, {
        objectType: ObjectType.enemy,
        speed: 2,
        index: 1,
        path: [new Vec2(14, 17), new Vec2(14, 14), new Vec2(22, 14), new Vec2(22, 19), new Vec2(4, 19), new Vec2(4, 17)]
      }, {
        objectType: ObjectType.enemy,
        speed: 2,
        index: 2,
        path: [new Vec2(19, 6), new Vec2(19, 4), new Vec2(17, 4), new Vec2(17, 8), new Vec2(14, 8), new Vec2(14, 19), new Vec2(22, 19), new Vec2(22, 17), new Vec2(27, 17), new Vec2(27, 1), new Vec2(23, 1), new Vec2(23, 8), new Vec2(19, 8)]
      }]);
      var levelEnemy2 = exports('levelEnemy2', [{
        objectType: ObjectType.enemy,
        speed: 3,
        index: 0,
        path: [new Vec2(12, 4), new Vec2(1, 4), new Vec2(1, 1), new Vec2(23, 1), new Vec2(23, 5), new Vec2(20, 5), new Vec2(20, 3), new Vec2(18, 3), new Vec2(18, 8), new Vec2(27, 8), new Vec2(27, 11), new Vec2(14, 11), new Vec2(14, 7), new Vec2(12, 7)]
      }, {
        objectType: ObjectType.enemy,
        speed: 3,
        index: 1,
        path: [new Vec2(12, 16), new Vec2(1, 16), new Vec2(1, 19), new Vec2(27, 19), new Vec2(27, 17), new Vec2(16, 17), new Vec2(16, 15), new Vec2(12, 15)]
      }, {
        objectType: ObjectType.enemy,
        speed: 3,
        index: 2,
        path: [new Vec2(23, 1), new Vec2(16, 1), new Vec2(16, 7), new Vec2(12, 7), new Vec2(12, 11), new Vec2(7, 11), new Vec2(7, 13), new Vec2(12, 13), new Vec2(12, 15), new Vec2(16, 15), new Vec2(16, 13), new Vec2(19, 13), new Vec2(19, 15), new Vec2(21, 15), new Vec2(21, 11), new Vec2(27, 11), new Vec2(27, 1)]
      }]);
      var levelEnemy3 = exports('levelEnemy3', [{
        objectType: ObjectType.enemy,
        speed: 3,
        index: 0,
        path: [new Vec2(7, 4), new Vec2(7, 8), new Vec2(9, 8), new Vec2(9, 3), new Vec2(12, 3), new Vec2(12, 1), new Vec2(1, 1), new Vec2(1, 4)]
      }, {
        objectType: ObjectType.enemy,
        speed: 3,
        index: 1,
        path: [new Vec2(16, 17), new Vec2(16, 16), new Vec2(1, 16), new Vec2(1, 19), new Vec2(16, 19)]
      }, {
        objectType: ObjectType.enemy,
        speed: 3,
        index: 2,
        path: [new Vec2(27, 11), new Vec2(27, 3), new Vec2(21, 3), new Vec2(21, 5), new Vec2(19, 5), new Vec2(19, 12), new Vec2(21, 12), new Vec2(21, 15), new Vec2(22, 15), new Vec2(22, 16), new Vec2(24, 16), new Vec2(24, 19), new Vec2(16, 19), new Vec2(16, 16), new Vec2(16, 19), new Vec2(24, 19), new Vec2(24, 16), new Vec2(22, 16), new Vec2(22, 15), new Vec2(21, 15), new Vec2(21, 12), new Vec2(19, 12), new Vec2(19, 5), new Vec2(21, 5), new Vec2(21, 3), new Vec2(27, 3)]
      }, {
        objectType: ObjectType.enemy,
        speed: 3,
        index: 3,
        path: [new Vec2(14, 5), new Vec2(14, 11), new Vec2(11, 11), new Vec2(11, 13), new Vec2(8, 13), new Vec2(8, 8), new Vec2(9, 8), new Vec2(9, 3), new Vec2(12, 3), new Vec2(12, 1), new Vec2(17, 1), new Vec2(17, 5)]
      }]);
      var levelInfo1 = exports('levelInfo1', {
        playerMaxHealth: 3,
        knowledgePieceContents: ["1 l\xEDt n\u01B0\u1EDBc \u0111\xE1 nh\u1EB9 h\u01A1n 1 l\xEDt n\u01B0\u1EDBc \nth\xF4ng th\u01B0\u1EDDng. N\u01B0\u1EDBc \u0111\xF3ng b\u0103ng \n<color=#ff0000>nh\u1EB9 h\u01A1n n\u01B0\u1EDBc 9%</color>, \u0111i\u1EC1u n\xE0y gi\u1EA3i \nth\xEDch t\u1EA1i sao b\u0103ng l\u1EA1i n\u1ED5i tr\xEAn m\u1EB7t \nn\u01B0\u1EDBc.", "Tr\xEAn Th\u1EBF gi\u1EDBi, m\u1ED7i ng\xE0y c\xF3 <color=#ff0000>2 tri\u1EC7u</color> \nt\u1EA5n n\u01B0\u1EDBc th\u1EA3i v\xE0 c\xE1c ch\u1EA5t th\u1EA3i kh\xE1c \n\u0111\u1ED5 v\xE0o ngu\u1ED3n n\u01B0\u1EDBc, v\xE0 c\u1EE9 9 ng\u01B0\u1EDDi \nth\xEC c\xF3 1 ng\u01B0\u1EDDi s\u1EED d\u1EE5ng n\u01B0\u1EDBc u\u1ED1ng \nt\u1EEB c\xE1c ngu\u1ED3n kh\xF4ng h\u1EE3p v\u1EC7 sinh \nv\xE0 kh\xF4ng an to\xE0n.", "N\u01B0\u1EDBc n\xF3ng c\xF3 th\u1EC3 \u0111\xF3ng b\u0103ng\nnhanh h\u01A1n n\u01B0\u1EDBc l\u1EA1nh trong m\u1ED9t\ns\u1ED1 \u0111i\u1EC1u ki\u1EC7n (th\u01B0\u1EDDng \u0111\u01B0\u1EE3c g\u1ECDi l\xE0\nhi\u1EC7u \u1EE9ng Mpemba). Hi\u1EC7u \u1EE9ng \nMpemba \u0111\u01B0\u1EE3c \u0111\u1EB7t theo t\xEAn c\u1EE7a\nnh\xE0 khoa h\u1ECDc ng\u01B0\u1EDDi Tanzania, \n\xF4ng quan s\xE1t th\u1EA5y m\u1ED9t ch\u1EA5t l\u1ECFng \n(th\u01B0\u1EDDng l\xE0 n\u01B0\u1EDBc) c\xF3 nhi\u1EC7t \u0111\u1ED9 cao \nc\xF3 th\u1EC3 \u0111\xF3ng b\u0103ng nhanh h\u01A1n \nch\u1EA5t l\u1ECFng c\xF3 nhi\u1EC7t \u0111\u1ED9 th\u1EA5p, \ntrong c\xF9ng \u0111i\u1EC1u ki\u1EC7n gi\u1ED1ng nhau."]
      });
      var levelInfo2 = exports('levelInfo2', {
        playerMaxHealth: 3,
        knowledgePieceContents: ["V\u1EC7 sinh tay k\u1ECBp th\u1EDDi ng\u0103n ng\u1EEBa t\u1EDBi \n<color=#ff0000>50%</color> c\xE1c b\u1EC7nh nhi\u1EC5m tr\xF9ng c\xF3 th\u1EC3 \ntr\xE1nh \u0111\u01B0\u1EE3c trong qu\xE1 tr\xECnh cung \nc\u1EA5p d\u1ECBch v\u1EE5 ch\u0103m s\xF3c s\u1EE9c kh\u1ECFe, \nbao g\u1ED3m c\u1EA3 nh\u1EEFng b\u1EC7nh \u1EA3nh \nh\u01B0\u1EDFng \u0111\u1EBFn l\u1EF1c l\u01B0\u1EE3ng lao \u0111\u1ED9ng \ny t\u1EBF. (WHO/UNICEF, 2021) ", "Theo Li\xEAn H\u1EE3p Qu\u1ED1c, \u1EDF m\u1ED9t s\u1ED1 \nn\u01B0\u1EDBc k\xE9m ph\xE1t tri\u1EC3n <color=#ff0000>95%</color> l\u01B0\u1EE3ng \nn\u01B0\u1EDBc th\u1EA3i tr\u1EF1c ti\u1EBFp ra m\xF4i tr\u01B0\u1EDDng \nkh\xF4ng qua x\u1EED l\xFD.", "N\u01B0\u1EDBc, v\u1EC7 sinh v\xE0 v\u1EC7 sinh kh\xF4ng \nan to\xE0n l\xE0 nguy\xEAn nh\xE2n g\xE2y ra c\xE1i \nch\u1EBFt c\u1EE7a kho\u1EA3ng <color=#ff0000>1.000</color> tr\u1EBB em d\u01B0\u1EDBi \n5 tu\u1ED5i m\u1ED7i ng\xE0y. (UNICEF, 2023)"]
      });
      var levelInfo3 = exports('levelInfo3', {
        playerMaxHealth: 3,
        knowledgePieceContents: ["Hi\u1EC7n t\u1EA1i, h\u01A1n <color=#ff0000>80 qu\u1ED1c gia</color> (chi\u1EBFm \nkho\u1EA3ng <color=#ff0000>40% d\xE2n s\u1ED1 th\u1EBF gi\u1EDBi</color>) \n\u0111ang \u0111\u1ED1i m\u1EB7t v\u1EDBi t\xECnh tr\u1EA1ng thi\u1EBFu \nn\u01B0\u1EDBc nghi\xEAm tr\u1ECDng.", "M\u1EF1c n\u01B0\u1EDBc bi\u1EC3n t\u1EA1i Vi\u1EC7t Nam trong \ngiai \u0111o\u1EA1n 1993 - 2018 <color=#ff0000>t\u0103ng trung \nb\xECnh 4,1 mm/n\u0103m.</color>", "Hi\u1EC7n c\u1EE9 3 ng\u01B0\u1EDDi th\xEC s\u1EBD c\xF3 1 ng\u01B0\u1EDDi \ns\u1ED1ng trong t\xECnh tr\u1EA1ng thi\u1EBFu n\u01B0\u1EDBc.", "D\xE2y chuy\u1EC1n c\xF4ng ngh\u1EC7 thu\u1ED9c d\u1EF1 \xE1n \n<color=#ff0000>NEWater (Singapore)</color> c\xF3 th\u1EC3 l\u1ECDc \nn\u01B0\u1EDBc \xF4 nhi\u1EC5m th\xE0nh n\u01B0\u1EDBc u\u1ED1ng \ntr\u1EF1c ti\u1EBFp."]
      });

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/main", ['./debug-view-runtime-control.ts', './AudioMgr.ts', './EventManager.ts', './UserProfile.ts', './LevelButton.ts', './home.ts', './BaseObject.ts', './Define.ts', './Enemy.ts', './KnowledgePiece.ts', './LevelControl.ts', './LevelDefine.ts', './Platform.ts', './Player.ts', './StatsBoard.ts', './TileMapControl.ts', './WaterDrop.ts', './mazeGame.ts', './ButtonAnswer.ts', './Character.ts', './MainCharacter.ts', './Popup.ts', './QuizDefine.ts', './QuizManager.ts', './ShieldEffect.ts', './start.ts', './QuizStory.ts', './Story.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/MainCharacter.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Character.ts', './AudioMgr.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Character, AudioMgr, AudioDefine;

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
    }, function (module) {
      AudioMgr = module.AudioMgr;
      AudioDefine = module.AudioDefine;
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

        _proto.playHitAudio = function playHitAudio() {
          AudioMgr.inst.playOneShot(AudioDefine.quizMCHit);
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

System.register("chunks:///_virtual/mazeGame.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './LevelControl.ts', './Player.ts', './UserProfile.ts', './EventManager.ts', './Story.ts', './AudioMgr.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, RichText, director, PhysicsSystem2D, EPhysics2DDrawFlags, Component, LevelControl, Player, userProfile, eventManager, EventName, Story, AudioMgr, AudioDefine;

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
      RichText = module.RichText;
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
    }, function (module) {
      Story = module.Story;
    }, function (module) {
      AudioMgr = module.AudioMgr;
      AudioDefine = module.AudioDefine;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8;

      cclegacy._RF.push({}, "69024ABHwpF159GAbOeWB9v", "mazeGame", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;

      var State = /*#__PURE__*/function (State) {
        State[State["Null"] = 0] = "Null";
        State[State["Start"] = 1] = "Start";
        State[State["StoryScene2"] = 2] = "StoryScene2";
        State[State["Playing"] = 3] = "Playing";
        State[State["Win"] = 4] = "Win";
        State[State["Lose"] = 5] = "Lose";
        State[State["Pausing"] = 6] = "Pausing";
        return State;
      }(State || {});

      var mazeGame = exports('mazeGame', (_dec = ccclass('mazeGame'), _dec2 = property({
        type: LevelControl
      }), _dec3 = property(Player), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(RichText), _dec9 = property(Story), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
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

          _initializerDefineProperty(_this, "knowledgePiecePopup", _descriptor6, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "knowledgePieceContent", _descriptor7, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "story", _descriptor8, _assertThisInitialized(_this));

          _this.state = State.Null;
          _this.resumeState = State.Null;
          return _this;
        }

        var _proto = mazeGame.prototype;

        _proto.onEnable = function onEnable() {
          eventManager.on(EventName.onMazeGameLose, this.onLose, this);
          eventManager.on(EventName.onShowKnowledgePopup, this.onShowKnowledgePopup, this);
        };

        _proto.onDisable = function onDisable() {
          eventManager.off(EventName.onMazeGameLose, this.onLose, this);
          eventManager.off(EventName.onShowKnowledgePopup, this.onShowKnowledgePopup, this);
          AudioMgr.inst.stop();
        };

        _proto.start = function start() {
          // this.showColliderDebug();
          this.story.setStateInactive(); //

          this.setState(State.Start);
        };

        _proto.setState = function setState(value) {
          var _this2 = this; //end old state


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
              this.winPopup.active = false;
              this.losePopup.active = false;
              this.knowledgePiecePopup.active = false;
              AudioMgr.inst.play(AudioDefine.mazeBGM);
              break;

            case State.StoryScene2:
              this.story.startScene2();
              break;

            case State.Playing:
              this.player.setStatePlaying();
              break;

            case State.Win:
              userProfile.maxLevel = Math.max(userProfile.currentLevel + 1, userProfile.maxLevel);
              this.winPopup.active = true;
              this.levelControl.pause();
              this.player.pause();
              AudioMgr.inst.stop();
              AudioMgr.inst.playOneShot(AudioDefine.winTheGame);
              setTimeout(function () {
                _this2.onClickGameWinMenuButton();
              }, 3000);
              break;

            case State.Lose:
              this.losePopup.active = true;
              this.levelControl.pause();
              this.player.pause();
              AudioMgr.inst.stop();
              AudioMgr.inst.playOneShot(AudioDefine.losePopupSfx);
              break;
          }
        };

        _proto.update = function update(dt) {
          switch (this.state) {
            case State.Start:
              {
                if (!userProfile.storyCompleteStatus.scene2 && userProfile.currentLevel === 0) {
                  this.setState(State.StoryScene2);
                } else {
                  this.setState(State.Playing);
                }
              }
              break;

            case State.StoryScene2:
              if (userProfile.storyCompleteStatus.scene2) {
                this.setState(State.Playing);
              }

              break;
          }
        } //PUBLIC
        ;

        _proto.onClickButtonExit = function onClickButtonExit() {
          AudioMgr.inst.playOneShot(AudioDefine.tapButton);
          this.exitConfirmPopup.active = true;
          this.pause();
        };

        _proto.onClickCancleExitGame = function onClickCancleExitGame() {
          AudioMgr.inst.playOneShot(AudioDefine.tapButton);
          this.exitConfirmPopup.active = false;
          this.resume();
        };

        _proto.onClickOkExitGame = function onClickOkExitGame() {
          AudioMgr.inst.playOneShot(AudioDefine.tapButton);
          director.loadScene('home');
        };

        _proto.onClickGameWinMenuButton = function onClickGameWinMenuButton() {
          switch (this.state) {
            case State.Win:
              AudioMgr.inst.playOneShot(AudioDefine.tapButton);
              director.loadScene('home');
              break;
          }
        };

        _proto.onClickGameLoseMenuButton = function onClickGameLoseMenuButton() {
          switch (this.state) {
            case State.Lose:
              AudioMgr.inst.playOneShot(AudioDefine.tapButton);
              director.loadScene('home');
              break;
          }
        };

        _proto.onClickGameLoseReplayButton = function onClickGameLoseReplayButton() {
          switch (this.state) {
            case State.Lose:
              AudioMgr.inst.playOneShot(AudioDefine.tapButton);
              this.setState(State.Start);
              break;
          }
        } //call by cta button in knowledge piece popup
        ;

        _proto.onHideKnowledgePopup = function onHideKnowledgePopup() {
          AudioMgr.inst.playOneShot(AudioDefine.tapButton);
          this.resume();
          this.knowledgePiecePopup.active = false; //check win game

          if (userProfile.mazeGameSection.knowledgePieces >= userProfile.mazeGameSection.knowledgePiecesMax) {
            this.onWin();
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

        _proto.onShowKnowledgePopup = function onShowKnowledgePopup(content) {
          // console.log(content);
          this.pause();
          this.knowledgePiecePopup.active = true;
          this.knowledgePieceContent.string = content;
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
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "knowledgePiecePopup", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "knowledgePieceContent", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "story", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
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

System.register("chunks:///_virtual/Player.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseObject.ts', './Define.ts', './LevelDefine.ts', './UserProfile.ts', './EventManager.ts', './KnowledgePiece.ts', './AudioMgr.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Collider2D, Animation, Vec2, Contact2DType, input, Input, Tween, tween, KeyCode, BaseObject, Direction, MapSize, PlayerSpeed, ObjectType, userProfile, eventManager, EventName, KnowledgePiece, AudioMgr, AudioDefine;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Collider2D = module.Collider2D;
      Animation = module.Animation;
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
    }, function (module) {
      KnowledgePiece = module.KnowledgePiece;
    }, function (module) {
      AudioMgr = module.AudioMgr;
      AudioDefine = module.AudioDefine;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;

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

      var AnimationName = /*#__PURE__*/function (AnimationName) {
        AnimationName["undefine"] = "";
        AnimationName["idle"] = "mcIdle";
        AnimationName["move"] = "mcRun";
        AnimationName["death"] = "mcDeath";
        return AnimationName;
      }(AnimationName || {});

      var Player = exports('Player', (_dec = ccclass('Player'), _dec2 = property(Collider2D), _dec3 = property(Animation), _dec(_class = (_class2 = /*#__PURE__*/function (_BaseObject) {
        _inheritsLoose(Player, _BaseObject);

        function Player() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _BaseObject.call.apply(_BaseObject, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "collider", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "animation", _descriptor2, _assertThisInitialized(_this));

          _this.objectType = ObjectType.player;
          _this.state = State.Inactive;
          _this.resumeState = State.Inactive;
          _this.currentMap = [];
          _this.isTouchDown = false;
          _this._moveDirection = Direction.Null;
          _this.nextDirection = [];
          _this.rootPosition = new Vec2();
          _this.isMovingDone = false;
          _this.isDeathDone = false;
          _this.currentAnimationName = AnimationName.undefine;

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
              this.currentAnimationName = AnimationName.undefine;
              break;

            case State.Idle:
              this.setAnimation(AnimationName.idle);
              this.moveDirection = Direction.Null;
              break;

            case State.Moving:
              {
                this.setAnimation(AnimationName.move);
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
              this.setAnimation(AnimationName.death);
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
          var _this3 = this; // console.log(selfCollider, otherCollider, contact);
          // console.log(otherCollider.tag);


          switch (this.state) {
            case State.Idle:
            case State.Moving:
              switch (otherCollider == null ? void 0 : otherCollider.tag) {
                case ObjectType.waterDrop:
                  setTimeout(function () {
                    otherCollider.node.active = false;
                    userProfile.waterDrops++;
                    AudioMgr.inst.playOneShot(AudioDefine.mazeCollectWaterDrop);
                  }, 1);
                  break;

                case ObjectType.knowledgePiece:
                  setTimeout(function () {
                    var _otherCollider$node;

                    otherCollider.node.active = false;
                    userProfile.mazeGameSection.knowledgePieces++;

                    _this3.setState(State.Idle);

                    AudioMgr.inst.playOneShot(AudioDefine.mazeCollectKnowledgePiece); //show knowledge popup

                    eventManager.emit(EventName.onShowKnowledgePopup, otherCollider == null || (_otherCollider$node = otherCollider.node) == null || (_otherCollider$node = _otherCollider$node.getComponent(KnowledgePiece)) == null ? void 0 : _otherCollider$node.content);
                  }, 1);
                  break;

                case ObjectType.enemy:
                  this.setState(State.Death);
                  AudioMgr.inst.playOneShot(AudioDefine.mazeHitMonster); //check lose game

                  if (userProfile.mazeGameSection.playerCurrentHealth <= 0) {
                    eventManager.emit(EventName.onMazeGameLose);
                  }

                  break;
              }

              break;
          }
        };

        _proto.setAnimation = function setAnimation(name) {
          if (this.currentAnimationName === name) return;
          this.currentAnimationName = name;
          this.animation.play(name);
        };

        _createClass(Player, [{
          key: "moveDirection",
          get: function get() {
            return this._moveDirection;
          },
          set: function set(value) {
            this._moveDirection = value;

            switch (value) {
              case Direction.Left:
                this.animation.node.setScale(-1, 1);
                break;

              case Direction.Right:
                this.animation.node.setScale(1, 1);
                break;
            }
          }
        }]);

        return Player;
      }(BaseObject), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "collider", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "animation", [_dec3], {
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

System.register("chunks:///_virtual/Popup.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './UserProfile.ts', './AudioMgr.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Button, Sprite, RichText, SpriteFrame, Label, director, Component, userProfile, AudioMgr, AudioDefine;

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
      Button = module.Button;
      Sprite = module.Sprite;
      RichText = module.RichText;
      SpriteFrame = module.SpriteFrame;
      Label = module.Label;
      director = module.director;
      Component = module.Component;
    }, function (module) {
      userProfile = module.userProfile;
    }, function (module) {
      AudioMgr = module.AudioMgr;
      AudioDefine = module.AudioDefine;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11;

      cclegacy._RF.push({}, "6d6f4KmEZxLcavSC5KU977w", "Popup", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var rankTexts = ["Xếp hạng: <color=#00ff00>Tập Sự</color>", "Xếp hạng: <color=#0000ff>Siêu Sao</color>", "Xếp hạng: <color=#ff00ff>Anh Hùng</color>"];
      var Popup = exports('Popup', (_dec = ccclass('Popup'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Button), _dec8 = property(Button), _dec9 = property(Button), _dec10 = property(Sprite), _dec11 = property(RichText), _dec12 = property({
        type: SpriteFrame
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Popup, _Component);

        function Popup() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "backContainer", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "winContainer", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "loseContainer", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "buttonContainer", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "rankContainer", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "buttonLeft", _descriptor6, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "buttonRight", _descriptor7, _assertThisInitialized(_this)); // @property(Button) private buttonShowRank: Button;


          _initializerDefineProperty(_this, "buttonReturn", _descriptor8, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "spriteRank", _descriptor9, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "rtRank", _descriptor10, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "rankSprites", _descriptor11, _assertThisInitialized(_this));

          _this.leftCb = void 0;
          _this.rightCb = void 0;
          _this.quizManager = void 0;
          return _this;
        }

        var _proto = Popup.prototype; //#region Default

        _proto.start = function start() {};

        _proto.onEnable = function onEnable() {
          var _this$buttonLeft, _this$buttonRight, _this$buttonReturn;

          (_this$buttonLeft = this.buttonLeft) == null ? void 0 : _this$buttonLeft.node.on(Button.EventType.CLICK, this.onButtonLeft, this);
          (_this$buttonRight = this.buttonRight) == null ? void 0 : _this$buttonRight.node.on(Button.EventType.CLICK, this.onButtonRight, this); // this.buttonShowRank?.node.on(Button.EventType.CLICK, this.showPopupRank, this);

          (_this$buttonReturn = this.buttonReturn) == null ? void 0 : _this$buttonReturn.node.on(Button.EventType.CLICK, this.returnToMap, this);
        };

        _proto.onDisable = function onDisable() {
          var _this$buttonLeft2, _this$buttonRight2, _this$buttonReturn2;

          (_this$buttonLeft2 = this.buttonLeft) == null ? void 0 : _this$buttonLeft2.node.off(Button.EventType.CLICK, this.onButtonLeft, this);
          (_this$buttonRight2 = this.buttonRight) == null ? void 0 : _this$buttonRight2.node.off(Button.EventType.CLICK, this.onButtonRight, this); // this.buttonShowRank?.node.off(Button.EventType.CLICK, this.showPopupRank, this);

          (_this$buttonReturn2 = this.buttonReturn) == null ? void 0 : _this$buttonReturn2.node.off(Button.EventType.CLICK, this.returnToMap, this);
        };

        _proto.update = function update(deltaTime) {} //#endregion
        //#region Utils
        // showPopupBack(txtContent: string, txtLeft: string, txtRight: string, lCb: () => void, rCb: () => void) {
        ;

        _proto.showPopupBack = function showPopupBack() {
          var _this2 = this; // this.labelContent.string = txtContent;


          this.buttonLeft.getComponentInChildren(Label).string = "Thoát";
          this.buttonRight.getComponentInChildren(Label).string = "Tiếp tục";
          this.leftCb = this.returnToMap;
          this.rightCb = this.hidePopup;
          this.node.active = true;
          this.node.children.forEach(function (c) {
            c.active = c.name == _this2.backContainer.name || c.name == _this2.buttonContainer.name || c == _this2.node.children[0];
          });
          AudioMgr.inst.playOneShot(AudioDefine.tapBack);
        };

        _proto.showPopupLose = function showPopupLose() {
          var _this3 = this;

          this.buttonLeft.getComponentInChildren(Label).string = "Thoát";
          this.buttonRight.getComponentInChildren(Label).string = "Thử lại";
          this.leftCb = this.showPopupRank;
          this.rightCb = this.restartGame;
          this.node.active = true;
          this.node.children.forEach(function (c) {
            c.active = c.name == _this3.loseContainer.name || c.name == _this3.buttonContainer.name || c == _this3.node.children[0];
          });
          AudioMgr.inst.stop();
          AudioMgr.inst.playOneShot(AudioDefine.losePopupSfx);
        };

        _proto.showPopupWin = function showPopupWin() {
          var _this4 = this;

          this.node.active = true;
          this.node.children.forEach(function (c) {
            c.active = c.name == _this4.winContainer.name || c == _this4.node.children[0];
          });
          AudioMgr.inst.stop();
          AudioMgr.inst.playOneShot(AudioDefine.winTheGame);
          setTimeout(function () {
            _this4.showPopupRank();
          }, 2000);
        };

        _proto.showPopupRank = function showPopupRank() {
          var _this5 = this;

          this.node.active = true;
          var isWin = this.winContainer.active;
          this.node.children.forEach(function (c) {
            c.active = c.name == _this5.rankContainer.name || c == _this5.node.children[0];
          });

          switch (userProfile.maxLevel) {
            case 0:
            case 1:
            case 2:
              this.spriteRank.spriteFrame = this.rankSprites[0];
              this.rtRank.string = rankTexts[0];
              break;

            case 3:
              if (!isWin) {
                this.spriteRank.spriteFrame = this.rankSprites[0];
                this.rtRank.string = rankTexts[0];
                break;
              }

            case 4:
              this.spriteRank.spriteFrame = this.rankSprites[1];
              this.rtRank.string = rankTexts[1];
              break;

            case 5:
              if (!isWin) {
                this.spriteRank.spriteFrame = this.rankSprites[1];
                this.rtRank.string = rankTexts[1];
                break;
              }

              this.spriteRank.spriteFrame = this.rankSprites[2];
              this.rtRank.string = rankTexts[2];
              break;
          }
        };

        _proto.hidePopup = function hidePopup() {
          this.node.active = false;
        };

        _proto.onButtonLeft = function onButtonLeft() {
          var _this$leftCb;

          AudioMgr.inst.playOneShot(AudioDefine.tapBack);
          (_this$leftCb = this.leftCb) == null ? void 0 : _this$leftCb.apply(this);
        };

        _proto.onButtonRight = function onButtonRight() {
          var _this$rightCb;

          AudioMgr.inst.playOneShot(AudioDefine.tapButton);
          (_this$rightCb = this.rightCb) == null ? void 0 : _this$rightCb.apply(this);
        };

        _proto.returnToMap = function returnToMap() {
          AudioMgr.inst.playOneShot(AudioDefine.tapButton);
          userProfile.storyCompleteStatus.scene4 = true;
          director.loadScene('home');
        };

        _proto.restartGame = function restartGame() {
          this.quizManager.restartGame();
          this.hidePopup();
        } //#endregion
        ;

        return Popup;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "backContainer", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "winContainer", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "loseContainer", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "buttonContainer", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "rankContainer", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "buttonLeft", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "buttonRight", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "buttonReturn", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "spriteRank", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "rtRank", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "rankSprites", [_dec12], {
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

System.register("chunks:///_virtual/QuizDefine.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "3892eJBEUxImI0Ib6oIXCbi", "QuizDefine", undefined); //Level infos


      var quizLvl = exports('quizLvl', [{
        mcName: "Hiệp Sĩ PoWa",
        hp: 10,
        atk: 2,
        // atk: 15,
        enemyName: "CaKi",
        enemyHp: 20,
        enemyAtk: 2
      }, {
        mcName: "Hiệp Sĩ PoWa",
        hp: 12,
        atk: 3,
        // atk: 15,
        enemyName: "ONi",
        enemyHp: 30,
        enemyAtk: 4
      }, {
        mcName: "Hiệp Sĩ PoWa",
        hp: 16,
        atk: 3,
        // atk: 15,
        enemyName: "GoBa",
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

System.register("chunks:///_virtual/QuizManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Character.ts', './MainCharacter.ts', './Popup.ts', './QuizDefine.ts', './ButtonAnswer.ts', './UserProfile.ts', './Story.ts', './QuizStory.ts', './AudioMgr.ts'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, _inheritsLoose, _assertThisInitialized, cclegacy, js, _decorator, CCString, CCInteger, Sprite, Label, Button, Node, resources, JsonAsset, randomRangeInt, director, SpriteFrame, KeyCode, sys, Component, Character, MainCharacter, Popup, shieldCost, skimCost, skipCost, quizLvl, shieldUses, skimUses, skipUses, questionTime, ButtonAnswer, userProfile, State, QuizStory, AudioMgr, AudioDefine;

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
      userProfile = module.userProfile;
    }, function (module) {
      State = module.State;
    }, function (module) {
      QuizStory = module.QuizStory;
    }, function (module) {
      AudioMgr = module.AudioMgr;
      AudioDefine = module.AudioDefine;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _class4, _class5, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20;

      cclegacy._RF.push({}, "805e23xK/5Fe5IFkpKG8r32", "QuizManager", undefined);

      var array = js.array;
      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var GameState = exports('GameState', /*#__PURE__*/function (GameState) {
        GameState[GameState["INIT"] = 0] = "INIT";
        GameState[GameState["RESET"] = 1] = "RESET";
        GameState[GameState["PLAYING"] = 2] = "PLAYING";
        GameState[GameState["END"] = 3] = "END";
        return GameState;
      }({}));
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
      var QuizManager = exports('QuizManager', (_dec3 = ccclass('QuizManager'), _dec4 = property(CCInteger), _dec5 = property(MainCharacter), _dec6 = property(Character), _dec7 = property(Sprite), _dec8 = property(Label), _dec9 = property(Button), _dec10 = property(Button), _dec11 = property(Button), _dec12 = property(Button), _dec13 = property(Label), _dec14 = property(Label), _dec15 = property([Node]), _dec16 = property([QuizItem]), _dec17 = property(QuizStory), _dec18 = property(Popup), _dec19 = property(Node), _dec3(_class4 = (_class5 = /*#__PURE__*/function (_Component) {
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

          _initializerDefineProperty(_this, "story", _descriptor18, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "popup", _descriptor19, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "overlay", _descriptor20, _assertThisInitialized(_this));

          _this.shuffledIndexes = void 0;
          _this.btnAnsCorrect = void 0;
          _this.dict = {
            0: "A. ",
            1: "B. ",
            2: "C. ",
            3: "D. "
          };
          _this.usedCount = 0;
          _this.timeLeft = 0;
          _this.currentDrops = 0;
          _this.skipsUsed = 0;
          _this.skimsUsed = 0;
          _this.shieldUsed = 0;
          return _this;
        }

        var _proto = QuizManager.prototype; //#region Default

        _proto.onLoad = function onLoad() {// input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
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
              AudioMgr.inst.playOneShot(AudioDefine.quizStart);
              this.showNextQuestion();
              setTimeout(function () {
                AudioMgr.inst.play(AudioDefine.quizBGM);
              }, 1000);
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
          this.story.quizManager = this;
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
          this.story.setStoryChars(mcName, enemyName, this.level);
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
          this.showStory(); // this.setCurState(GameState.PLAYING);
        };

        _proto.showNextQuestion = function showNextQuestion() {
          var _this3 = this;

          var quizItem = this.getRandomQuestion();
          quizItem.used = true;
          this.usedCount++;
          this.labelQuestion.string = quizItem.question;
          this.randomizeAnsOrder(quizItem.lastAnsIdx);
          var i = 0;
          this.buttonNodes.forEach(function (n) {
            var idx = _this3.shuffledIndexes[i];

            if (idx == 0) {
              _this3.btnAnsCorrect = n.getComponent(ButtonAnswer);
              _this3.story.ansButton.getComponentInChildren(Label).string = _this3.dict[i] + quizItem.answers[idx];
            }

            n.getComponent(ButtonAnswer).resetButton(_this3.dict[i] + quizItem.answers[idx]);
            n.on(Button.EventType.CLICK, function () {
              _this3.onAnswerSelected(idx, n.getComponent(ButtonAnswer));
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
          if (!userProfile.storyCompleteStatus.scene4 && this.level == 0) {
            return this.questions[0];
          }

          var idx = -1;

          do {
            idx = randomRangeInt(0, this.questions.length);
          } while (this.questions[idx].used == true && this.usedCount < this.questions.length);

          return this.questions[idx];
        };

        _proto.onAnswerSelected = function onAnswerSelected(idx, btn) {
          if (btn === void 0) {
            btn = this.btnAnsCorrect;
          }

          if (this.timeLeft <= 0) {
            console.log("xdd blocked");
            return;
          }

          this.overlay.active = true;
          this.unscheduleAllCallbacks();

          if (idx == 0) {
            AudioMgr.inst.playOneShot(AudioDefine.quizCorrectAns);
            btn.showCorrect();
            this.mainChar.animateAttack(this.enemy, this, this.checkEndGame);
          } else {
            AudioMgr.inst.playOneShot(AudioDefine.quizWrongAns);
            btn.showWrong();
            this.btnAnsCorrect.showCorrect();
            this.enemy.animateAttack(this.mainChar, this, this.checkEndGame);
          }
        };

        _proto.checkEndGame = function checkEndGame() {
          if (!userProfile.storyCompleteStatus.scene4 && this.level == 0) return;

          if (this.mainChar.hp <= 0 || this.enemy.hp <= 0) {
            this.unscheduleAllCallbacks();
            this.setCurState(GameState.END);
            return;
          }

          this.scheduleOnce(this.showNextQuestion, 1);
        };

        _proto.restartGame = function restartGame() {
          this.setCurState(GameState.RESET);
        };

        _proto.endGameWin = function endGameWin() {
          userProfile.waterDrops = this.currentDrops;
          userProfile.maxLevel = Math.max(userProfile.currentLevel + 1, userProfile.maxLevel); // sys.localStorage.setItem(dropsKey, this.currentDrops);

          this.showPopupWin();
        };

        _proto.backToMap = function backToMap() {
          director.loadScene('home');
        };

        _proto.loadBG = function loadBG() {
          var _this4 = this;

          var path = "sprites/quizGame/Background_" + this.level.toString() + "/spriteFrame";
          resources.load(path, SpriteFrame, function (err, spriteFrame) {
            _this4.spriteBG.spriteFrame = spriteFrame;
          });
        } //#endregion
        //#region Boosters
        ;

        _proto.activateShield = function activateShield() {
          AudioMgr.inst.playOneShot(AudioDefine.quizShield);
          if (this.currentDrops < shieldCost || this.shieldUsed >= shieldUses) return;
          this.shieldUsed++;
          this.currentDrops -= shieldCost;
          this.updateDropsDisplay();
          this.buttonShield.interactable = false;
          this.mainChar.toggleShield(true);
        };

        _proto.skimAnswers = function skimAnswers() {
          AudioMgr.inst.playOneShot(AudioDefine.quizSkim);
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
          AudioMgr.inst.playOneShot(AudioDefine.quizSkip);
          if (this.currentDrops < skipCost || this.skipsUsed >= skipUses) return;
          this.skipsUsed++;
          this.currentDrops -= skipCost;
          this.updateDropsDisplay();
          this.showNextQuestion();
        } //#endregion
        //#region Countdown
        ;

        _proto.startCountdown = function startCountdown() {
          this.timeLeft = questionTime;
          this.labelTime.string = this.timeLeft.toString();
          if (!userProfile.storyCompleteStatus.scene4) return;
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
          this.unscheduleAllCallbacks();
          this.popup.showPopupLose();
        };

        _proto.showPopupBack = function showPopupBack() {
          this.popup.showPopupBack();
        };

        _proto.showPopupWin = function showPopupWin() {
          this.unscheduleAllCallbacks();
          this.popup.showPopupWin();
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
        //#region Story
        ;

        _proto.showStory = function showStory() {
          this.story.node.active = true;

          switch (this.level) {
            case 0:
              if (!userProfile.storyCompleteStatus.scene4) this.story.showQuizStory(State.Scene_4_13A);else {
                this.story.setStateInactive();
                this.setCurState(GameState.PLAYING);
              }
              return;

            case 1:
              if (!userProfile.storyCompleteStatus.scene7) this.story.showQuizStory(State.Scene_7_16);else {
                this.story.setStateInactive();
                this.setCurState(GameState.PLAYING);
              }
              return;

            case 2:
              if (!userProfile.storyCompleteStatus.scene10) this.story.showQuizStory(State.Scene_10_19A);else {
                this.story.setStateInactive();
                this.setCurState(GameState.PLAYING);
              }
              return;
          }
        };

        _proto.getCorrectBtnNode = function getCorrectBtnNode() {
          return this.btnAnsCorrect.node;
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
      }), _descriptor18 = _applyDecoratedDescriptor(_class5.prototype, "story", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor19 = _applyDecoratedDescriptor(_class5.prototype, "popup", [_dec18], {
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

System.register("chunks:///_virtual/QuizStory.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Story.ts', './QuizManager.ts', './UserProfile.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, js, Node, Vec3, Button, resources, SpriteFrame, UITransform, Sprite, State, SpriteFrameId, Story, GameState, userProfile;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      js = module.js;
      Node = module.Node;
      Vec3 = module.Vec3;
      Button = module.Button;
      resources = module.resources;
      SpriteFrame = module.SpriteFrame;
      UITransform = module.UITransform;
      Sprite = module.Sprite;
    }, function (module) {
      State = module.State;
      SpriteFrameId = module.SpriteFrameId;
      Story = module.Story;
    }, function (module) {
      GameState = module.GameState;
    }, function (module) {
      userProfile = module.userProfile;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;

      cclegacy._RF.push({}, "b6d69ZQ/4xP+odHBdyVSgp2", "QuizStory", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var array = js.array;
      var contains = array.contains;
      var storyContent = [{
        content_3_13A: "Ngươi là tên nào? Sao lại có thể đến được khu vực này?",
        content_3_13AB: "Ta đến đây để đánh bại ngươi và giải cứu Trái Đất!",
        content_3_13D: "Để đánh bại CaKi, bạn cần trả lời đúng các câu hỏi mà hắn đưa ra.",
        content_3_13E: "Phía dưới là các câu trả lời khả dụng, hãy thử nào.",
        content_3_13F: "Với mỗi câu trả lời đúng, bạn sẽ có cơ hội tấn công kẻ địch." // content_3_13F: "<color=#ffffff>Sau khi hạ gục CaKi, bạn có thể thấy tình trạng cạn kiệt nước của Trái Đất đã được cải thiện rất nhiều. Tuy vậy, mục tiêu của chúng ta cần phải đánh đuổi GoBa và bè lũ tay sai quái ác. \nHãy tiếp tục hành trình thu thập kiến thức để tiêu diệt quái vật và giải cứu Trái Đất nha!</color>"

      }, {
        content_7_16: "Ngươi biết ta là ai không mà dám xâm nhập vào đây. Ta là ONi - quái vật của sự ô nhiễm nước, cánh tay phải của ngài GoBa và sẽ là kẻ đánh bại ngươi." // content_8_17B: "<color=#ffffff>Sau khi hạ gục ONi, bạn có thể thấy tình trạng ô nhiễm của Trái Đất đã được cải thiện rất nhiều. Khi này, GoBa đã mất cả hai tay sai đắc lực của mình, hắn quyết định tự ra mặt. Hãy tiếp tục hành trình thu thập kiến thức và sức mạnh vì GoBa là kẻ nguy hiếm nhất.</color>"

      }, {
        content_10_19A: "Đánh bại các thuộc hạ của ta thì ngươi quả thật không tầm thường.",
        content_10_19B: "Ta đến đây là để tiêu diệt ngươi GoBa!" // content_8_17B: "Bạn đã đánh bại GoBa cùng các thuộc hạ của hắn, Trái Đất đã trong xanh trở lại.",

      }];
      var QuizStory = exports('QuizStory', (_dec = ccclass('QuizStory'), _dec2 = property(Node), _dec3 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Story) {
        _inheritsLoose(QuizStory, _Story);

        function QuizStory() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Story.call.apply(_Story, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "uiContainer", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "ansButton", _descriptor2, _assertThisInitialized(_this));

          _this.quizManager = void 0;
          _this.mcName = void 0;
          _this.enemyName = void 0;
          _this.npcName = "Lan";
          return _this;
        }

        var _proto = QuizStory.prototype; //#region default

        _proto.start = function start() {
          this.background.node.active = false;
          this.earth.node.active = false;
        };

        _proto.update = function update(deltaTime) {} //#endregion
        //#region  Utils
        ;

        _proto.setState = function setState(value) {
          var _this2 = this;

          this.state = value;

          switch (value) {
            case State.Inactive:
              this.node.active = false;
              break;

            case State.Scene_4_13A:
              this.blockInput.enabled = true;
              this.uiContainer.active = false;
              this.MC.grayscale = true;
              this.MC.spriteFrame = this.spriteFrames[SpriteFrameId.McAngry];
              this.speechName.string = this.enemyName;
              this.setLabelAnimation(storyContent[0].content_3_13A, this.speechContentRichText);
              break;

            case State.Scene_4_13B:
              this.NPC.grayscale = true;
              this.showMCSpeech(SpriteFrameId.McAngryTalk, storyContent[0].content_3_13AB);
              break;

            case State.Scene_4_13C:
              this.MC.node.active = false;
              this.NPC.node.active = false;
              this.speechBubble.active = false;
              this.uiContainer.active = true;
              this.quizManager.setCurState(GameState.PLAYING);
              setTimeout(function () {
                _this2.setState(State.Scene_4_13D);
              }, 1500);
              break;

            case State.Scene_4_13D:
              this.setGrayScale(true, ["Sprite-QuestionBG"]);
              this.showNPCPortraitSpeech(storyContent[0].content_3_13D);
              this.speechBubble.position = new Vec3(50, 200, 0);
              break;

            case State.Scene_4_13E:
              this.setGrayScale(false);
              this.setLabelAnimation(storyContent[0].content_3_13E, this.speechContentRichText);
              this.background.node.active = true;
              this.ansButton.active = true;
              this.ansButton.on(Button.EventType.CLICK, this.finishTutorial, this);
              break;

            case State.Scene_4_13F:
              this.blockInput.enabled = false;
              this.background.node.active = false;
              this.ansButton.active = false;
              this.setGrayScale(true, ["Sprite-MC", "Sprite-Enemy"]);
              this.setLabelAnimation(storyContent[0].content_3_13F, this.speechContentRichText);
              this.speechBubble.position = new Vec3(0, -150, 0);
              break;

            case State.Scene_4_13G:
              setTimeout(function () {
                _this2.setGrayScale(false);

                userProfile.storyCompleteStatus.scene4 = true;

                _this2.hideStory();
              }, 3001);
              break;

            case State.Scene_7_16:
              this.blockInput.enabled = true;
              this.uiContainer.active = false;
              this.MC.grayscale = true;
              this.speechName.string = this.enemyName;
              this.setLabelAnimation(storyContent[1].content_7_16, this.speechContentRichText);
              break;

            case State.Scene_8_17A:
              userProfile.storyCompleteStatus.scene7 = true;
              this.hideStory();
              break;

            case State.Scene_10_19A:
              this.blockInput.enabled = true;
              this.uiContainer.active = false;
              this.MC.grayscale = true;
              this.speechName.string = this.enemyName;
              this.setLabelAnimation(storyContent[2].content_10_19A, this.speechContentRichText);
              break;

            case State.Scene_10_19B:
              this.MC.grayscale = false;
              this.NPC.grayscale = true;
              this.speechName.string = this.mcName;
              this.setLabelAnimation(storyContent[2].content_10_19B, this.speechContentRichText);
              break;

            case State.Scene_11_20A:
              userProfile.storyCompleteStatus.scene10 = true;
              this.hideStory();
              break;
          }
        };

        _proto.showQuizStory = function showQuizStory(value) {
          this.setState(value);
        };

        _proto.setStoryChars = function setStoryChars(mcName, enemyName, lvl) {
          var _this3 = this;

          this.mcName = mcName;
          this.enemyName = enemyName;
          var path = "sprites/home/Boss_Lv" + lvl.toString() + "/spriteFrame";
          resources.load(path, SpriteFrame, function (err, spriteFrame) {
            switch (lvl) {
              case 0:
                _this3.NPC.getComponent(UITransform).setContentSize(391 * 1.1, 500 * 1.1);

                break;

              case 1:
                _this3.NPC.getComponent(UITransform).setContentSize(1135 * 1.1, 500 * 1.1);

                break;

              case 2:
                _this3.NPC.getComponent(UITransform).setContentSize(507 * 1.1, 500 * 1.1);

                break;
            }

            _this3.NPC.node.setPosition(new Vec3(550, -100, 0));

            _this3.NPC.spriteFrame = spriteFrame;
          });
        };

        _proto.finishTutorial = function finishTutorial() {
          this.quizManager.onAnswerSelected(0);
          this.setState(State.Scene_4_13F);
        };

        _proto.hideStory = function hideStory() {
          this.quizManager.setCurState(GameState.PLAYING); // this.quizManager.showNextQuestion();

          this.speechBubble.active = false;
          this.MC.node.active = false;
          this.NPC.node.active = false;
          this.uiContainer.active = true;
          this.node.active = false;
        };

        _proto.setGrayScale = function setGrayScale(toTrue, exceptions) {
          if (exceptions === void 0) {
            exceptions = null;
          }

          this.uiContainer.getComponentsInChildren(Sprite).forEach(function (s) {
            if (!toTrue) {
              s.grayscale = false;
            } else if (contains(exceptions, s.node.name) || s.node.name == "Sprite-Hit") s.grayscale = false;else s.grayscale = true;
          });
        } //#endregion
        ;

        return QuizStory;
      }(Story), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "uiContainer", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "ansButton", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ShieldEffect.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Sprite, Color, tween, Component;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Sprite = module.Sprite;
      Color = module.Color;
      tween = module.tween;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "0b397JqdE1OZLWW8G2WdsyK", "ShieldEffect", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var ShieldEffect = exports('ShieldEffect', (_dec = ccclass('ShieldEffect'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ShieldEffect, _Component);

        function ShieldEffect() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.shieldSprite = void 0;
          _this.shieldTween = void 0;
          return _this;
        }

        var _proto = ShieldEffect.prototype;

        _proto.start = function start() {// this.shieldSprite = this.getComponent(Sprite);
        };

        _proto.onEnable = function onEnable() {
          if (!this.shieldSprite) this.shieldSprite = this.getComponent(Sprite);
          var sprite = this.shieldSprite;
          var col = new Color(255, 255, 255, 255);
          var colTween = tween(col).to(1.5, {
            r: 255,
            g: 255,
            b: 255,
            a: 50
          }, {
            onUpdate: function onUpdate(tar) {
              sprite.color = tar;
            }
          }).to(1.5, {
            r: 255,
            g: 255,
            b: 255,
            a: 230
          }, {
            onUpdate: function onUpdate(tar) {
              sprite.color = tar;
            }
          });
          this.shieldTween = tween(col).repeatForever(colTween).start();
        };

        _proto.onDisable = function onDisable() {
          this.shieldTween.stop();
        };

        _proto.update = function update(deltaTime) {};

        return ShieldEffect;
      }(Component)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/start.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AudioMgr.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, director, Component, AudioMgr, AudioDefine;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      director = module.director;
      Component = module.Component;
    }, function (module) {
      AudioMgr = module.AudioMgr;
      AudioDefine = module.AudioDefine;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "74dab9+9tBMCYHzimuwDzuH", "start", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var start = exports('start', (_dec = ccclass('start'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(start, _Component);

        function start() {
          return _Component.apply(this, arguments) || this;
        }

        var _proto = start.prototype;

        _proto.onLoad = function onLoad() {
          console.log('ver 0.0.6');
          director.preloadScene('home', function () {
            director.preloadScene('mazeGame');
            director.preloadScene('quizGame');
          });
        };

        _proto.start = function start() {};

        _proto.update = function update(deltaTime) {} //PUBLIC
        ;

        _proto.onClickStart = function onClickStart() {
          AudioMgr.inst.playOneShot(AudioDefine.tapButton);
          director.loadScene('home');
        };

        return start;
      }(Component)) || _class));

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

System.register("chunks:///_virtual/Story.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './UserProfile.ts', './EventManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, SpriteFrame, BlockInputEvents, Sprite, Node, Label, RichText, Camera, resources, Input, director, tween, Tween, Color, Component, userProfile, eventManager, EventName;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      SpriteFrame = module.SpriteFrame;
      BlockInputEvents = module.BlockInputEvents;
      Sprite = module.Sprite;
      Node = module.Node;
      Label = module.Label;
      RichText = module.RichText;
      Camera = module.Camera;
      resources = module.resources;
      Input = module.Input;
      director = module.director;
      tween = module.tween;
      Tween = module.Tween;
      Color = module.Color;
      Component = module.Component;
    }, function (module) {
      userProfile = module.userProfile;
    }, function (module) {
      eventManager = module.eventManager;
      EventName = module.EventName;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16;

      cclegacy._RF.push({}, "4960fuq1h9Pi7eErNV6jU3w", "Story", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var Define = {
        MCName: 'Hiệp Sĩ PoWa',
        NPCName: 'Nina',
        NPCEmotion: {
          Happy: 'Happy',
          Sad: 'Sad',
          Talk: 'Talk'
        },
        Scene_1_2_speechContent: 'Trái Đất đang dần bị ô nhiễm nặng? Có chuyện gì đang xảy ra?',
        Scene_1_3_speechContent: 'Trái Đất đang bị một binh đoàn quái vật xâm chiếm, chúng có âm mưu tiêu diệt mọi sự sống nơi đây.',
        Scene_1_4_speechContent: 'Cầm đầu binh đoàn quái vật là GoBa, hắn cùng các tên thuộc hạ đang \ndần <color=#ff0000>hủy hoại</color> nguồn nước sạch của Trái Đất.',
        Scene_1_5_speechContent: 'Xin hãy giúp đỡ chúng tôi! <color=#ff0000>Không có nguồn nước sạch, sự sống trên \nTrái Đất sẽ bị đe dọa!</color>',
        Scene_1_6_speechContent: 'Xin hãy nói tôi biết rằng làm sao để có thể đánh bại GoBa.',
        Scene_1_7_1_speechContent: 'Để tiêu diệt được GoBa và các thuộc hạ của hắn, bạn cần phải được trang bị những bảo vật và bí kíp nâng cấp sức mạnh bản thân.',
        Scene_1_7_2_speechContent: 'Những bí kíp này được giấu ở khắp nơi trên Trái Đất. Thu thập chúng giúp gia tăng sức mạnh và trí tuệ, mới có thể đánh đuổi quái vật.',
        Scene_1_8_1_speechContent: 'Bí kíp đầu tiên chính là Bí kíp Sử dụng nước hiệu quả - được giấu sâu trong Hang Động Suối Nguồn. Nơi đây từng là nguồn cung cấp nước của cả hành tinh, nhưng giờ đã bị xâm chiếm bởi thuộc hạ của GoBa."',
        Scene_1_8_3_speechContent: 'Thu được bí kíp này sẽ giúp Hiệp sĩ sử dụng nước tiết kiệm và hiệu quả, gia tăng sát thương và khả năng chiến đấu!',
        Scene_2_1_speechContent: 'Bạn cần thu thập đủ 3 mảnh của Bí kíp, chúng sẽ giúp nâng cấp sức mạnh và hỗ trợ bạn hạ gục GoBa và đám thuộc hạ!',
        Scene_2_2_speechContent: 'Lưu ý hãy né tránh bọn lâu la của GoBa và thu thập thật nhiều giọt nước để nhận được hỗ trợ từ nguồn nước.',
        Scene_3_1_speechContent: 'Chặng đường của chúng ta chỉ mới bắt đầu.Muốn đánh bại GoBa chúng ta phải vượt qua Sa Mạc Nóng Chảy trước mặt.Đây là nơi mà tướng CaKi đang nắm quyền kiểm soát.',
        Scene_3_2_speechContent: 'Hắn ta là 1 trong 2 tên tướng lĩnh ghê gớm của GoBa.CaKi có khả năng hút cạn nước ở bất cứ nơi đâu, làm suy kiệt nguồn nước trên Trái Đất, biến khắp mọi nơi thành Sa Mạc. Đánh bại hắn, con người mới có đầy đủ nước dùng!',
        Scene_3_3_speechContent: 'Xin Hiệp sĩ hãy cẩn thận với các lựa chọn của mình khi giao chiến với CaKi!',
        Scene_5_14B_content: "Sau khi hạ gục CaKi, bạn có thể thấy tình trạng cạn kiệt nước của Trái Đất đã được cải thiện rất nhiều. Tuy vậy, mục tiêu của chúng ta cần phải đánh đuổi GoBa và bè lũ tay sai quái ác. \n\nHãy tiếp tục hành trình thu thập kiến thức để tiêu diệt quái vật và giải cứu Trái Đất nha!",
        Scene_5_14C_content: "Chúc mừng Hiệp sĩ đã tiêu diệt được CaKi. Nguồn nước trên Trái Đất đang dần được hồi phục.",
        Scene_5_14D_content: "Có vẻ như việc đánh bại CaKi đã chọc tức GoBa, hắn ta đã ra lệnh cho tướng ONi tăng cường đầu độc tất cả nguồn nước trên Trái Đất cùng lúc khiến bất cứ ai sử dụng nước đều bị nhiễm bệnh và suy giảm sức khỏe.",
        Scene_5_14E_content: "Bây giờ chúng ta cần tìm kiếm Bảo vật Máy lọc nước để lọc sạch nước, đảm bảo chất lượng cho mọi người!",
        Scene_5_14F_content: "Bí Kíp Lọc Nước là cuốn bí kíp giúp có thể Lọc sạch chất bẩn của nước. Tuy nhiên bảo vật này đang bị phong ấn tại Lâu Đài Rác Thải và được canh phòng vô cùng nghiêm ngặt.",
        Scene_5_14G_content: "Hãy lẻn vào Lâu Đài và cùng đoạt lại cuốn bí kíp đó để chúng ta có thể lọc sạch nước!",
        Scene_6_15A_content: "Cảm ơn Hiệp sĩ! Mọi người đã có nước sạch để dùng, từ đó sức khỏe đã được cải thiện hơn!",
        Scene_6_15B_content: "Bí Kíp Lọc Nước chỉ có thể cầm cự tạm thời với sức mạnh của quái vật. Chúng sẽ lại tăng cường gây ô nhiễm! Muốn thực sự giải quyết được vấn đề nước sạch, chúng ta cần phải đánh bại tên quái vật của sự ô nhiễm - ONi.",
        Scene_8_17B_content: "Sau khi hạ gục ONi, bạn có thể thấy tình trạng ô nhiễm của Trái Đất đã được cải thiện rất nhiều. Khi này, GoBa đã mất cả hai tay sai đắc lực của mình, hắn quyết định tự ra mặt. Hãy tiếp tục hành trình thu thập kiến thức và sức mạnh vì GoBa là kẻ nguy hiểm nhất.",
        Scene_8_17C_content: "Hiệp sĩ ơi, GoBa đang trở nên điên cuồng. Hắn định quét sạch mọi thứ. Hắn hô mưa gọi gió, tăng nhiệt độ Trái Đất khiến băng 2 cực tan nhanh hơn, gia tăng thiên tai khiến con người không thể sinh sống.",
        Scene_8_17D_content: "Chúng ta phải lên đường tiêu diệt hắn thôi, nhưng chỉ với sức mạnh hiện tại thì chưa đủ. Chúng ta cần đến Bí Kíp e-Pro Water! Hiệp sĩ hãy lên đường tới .... để tìm và thu thập Bí Kíp e-Pro Water nhé!",
        Scene_9_18A_content: "Chúc mừng Hiệp sĩ, với Bí kíp này, giờ bạn đã trở thành Hiệp sĩ \ne-ProWater chân chính! Hãy đánh bại GoBa và giải cứu cho nguồn nước của toàn Trái Đất thôi nào!",
        Scene_11_20B_content: "Bạn đã đánh bại GoBa cùng các thuộc hạ của hắn, Trái Đất đã trong xanh trở lại."
      };
      var Layer = {
        mazeGameEnemy: 1 << 1,
        mazeGameStatsBoard: 1 << 2
      };
      var State = exports('State', /*#__PURE__*/function (State) {
        State[State["Inactive"] = 0] = "Inactive";
        State[State["Scene_1_1"] = 1] = "Scene_1_1";
        State[State["Scene_1_2"] = 2] = "Scene_1_2";
        State[State["Scene_1_3"] = 3] = "Scene_1_3";
        State[State["Scene_1_4"] = 4] = "Scene_1_4";
        State[State["Scene_1_5"] = 5] = "Scene_1_5";
        State[State["Scene_1_6"] = 6] = "Scene_1_6";
        State[State["Scene_1_7_1"] = 7] = "Scene_1_7_1";
        State[State["Scene_1_7_2"] = 8] = "Scene_1_7_2";
        State[State["Scene_1_8_1"] = 9] = "Scene_1_8_1";
        State[State["Scene_1_8_3"] = 10] = "Scene_1_8_3";
        State[State["Scene_2_1"] = 11] = "Scene_2_1";
        State[State["Scene_2_2"] = 12] = "Scene_2_2";
        State[State["Scene_2_3"] = 13] = "Scene_2_3";
        State[State["Scene_3_1"] = 14] = "Scene_3_1";
        State[State["Scene_3_2"] = 15] = "Scene_3_2";
        State[State["Scene_3_3"] = 16] = "Scene_3_3";
        State[State["Scene_3_4"] = 17] = "Scene_3_4";
        State[State["Scene_4_13A"] = 18] = "Scene_4_13A";
        State[State["Scene_4_13B"] = 19] = "Scene_4_13B";
        State[State["Scene_4_13C"] = 20] = "Scene_4_13C";
        State[State["Scene_4_13D"] = 21] = "Scene_4_13D";
        State[State["Scene_4_13E"] = 22] = "Scene_4_13E";
        State[State["Scene_4_13F"] = 23] = "Scene_4_13F";
        State[State["Scene_4_13G"] = 24] = "Scene_4_13G";
        State[State["Scene_5_14A"] = 25] = "Scene_5_14A";
        State[State["Scene_5_14B"] = 26] = "Scene_5_14B";
        State[State["Scene_5_14C"] = 27] = "Scene_5_14C";
        State[State["Scene_5_14D"] = 28] = "Scene_5_14D";
        State[State["Scene_5_14E"] = 29] = "Scene_5_14E";
        State[State["Scene_5_14F"] = 30] = "Scene_5_14F";
        State[State["Scene_5_14G"] = 31] = "Scene_5_14G";
        State[State["Scene_5_14H"] = 32] = "Scene_5_14H";
        State[State["Scene_6_15A"] = 33] = "Scene_6_15A";
        State[State["Scene_6_15B"] = 34] = "Scene_6_15B";
        State[State["Scene_6_15C"] = 35] = "Scene_6_15C";
        State[State["Scene_6_15D"] = 36] = "Scene_6_15D";
        State[State["Scene_7_16"] = 37] = "Scene_7_16";
        State[State["Scene_8_17A"] = 38] = "Scene_8_17A";
        State[State["Scene_8_17B"] = 39] = "Scene_8_17B";
        State[State["Scene_8_17C"] = 40] = "Scene_8_17C";
        State[State["Scene_8_17D"] = 41] = "Scene_8_17D";
        State[State["Scene_8_17E"] = 42] = "Scene_8_17E";
        State[State["Scene_8_17F"] = 43] = "Scene_8_17F";
        State[State["Scene_9_18A"] = 44] = "Scene_9_18A";
        State[State["Scene_9_18B"] = 45] = "Scene_9_18B";
        State[State["Scene_10_19A"] = 46] = "Scene_10_19A";
        State[State["Scene_10_19B"] = 47] = "Scene_10_19B";
        State[State["Scene_11_20A"] = 48] = "Scene_11_20A";
        State[State["Scene_11_20B"] = 49] = "Scene_11_20B";
        State[State["Scene_11_20C"] = 50] = "Scene_11_20C";
        State[State["Scene_11_20D"] = 51] = "Scene_11_20D";
        return State;
      }({}));
      var SpriteFrameId = exports('SpriteFrameId', /*#__PURE__*/function (SpriteFrameId) {
        SpriteFrameId[SpriteFrameId["Mc"] = 0] = "Mc";
        SpriteFrameId[SpriteFrameId["McAngry"] = 1] = "McAngry";
        SpriteFrameId[SpriteFrameId["McAngryTalk"] = 2] = "McAngryTalk";
        SpriteFrameId[SpriteFrameId["McSad"] = 3] = "McSad";
        SpriteFrameId[SpriteFrameId["NpcHappy"] = 4] = "NpcHappy";
        SpriteFrameId[SpriteFrameId["NpcSad"] = 5] = "NpcSad";
        SpriteFrameId[SpriteFrameId["NpcTalk"] = 6] = "NpcTalk";
        return SpriteFrameId;
      }({}));
      var Story = exports('Story', (_dec = ccclass('Story'), _dec2 = property({
        type: SpriteFrame
      }), _dec3 = property(BlockInputEvents), _dec4 = property(Sprite), _dec5 = property(Sprite), _dec6 = property(Sprite), _dec7 = property(Sprite), _dec8 = property(Sprite), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property(Label), _dec13 = property(Label), _dec14 = property(RichText), _dec15 = property(RichText), _dec16 = property(Camera), _dec17 = property(Camera), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Story, _Component);

        function Story() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "spriteFrames", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "blockInput", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "background", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "overlay", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "earth", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "MC", _descriptor6, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "NPC", _descriptor7, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "miniNPC", _descriptor8, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "NPCPortrait", _descriptor9, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "speechBubble", _descriptor10, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "speechName", _descriptor11, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "speechContent", _descriptor12, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "speechContentRichText", _descriptor13, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "narrationRichText", _descriptor14, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "mazeGameCameraGame", _descriptor15, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "mazeGameCameraUI", _descriptor16, _assertThisInitialized(_this));

          _this.state = 0;
          _this.labelTweenObject = {
            length: 0,
            isDone: false,
            label: null,
            text: '',
            texts: []
          };
          return _this;
        }

        var _proto = Story.prototype;

        _proto.onEnable = function onEnable() {
          this.onListenerTouchStart();
        };

        _proto.onDisable = function onDisable() {
          this.offListenerTouchStart();
        };

        _proto.start = function start() {
          // this.setState(State.Scene_1_1);
          resources.preload("sprites/story/NPC_Happy/spriteFrame");
          resources.preload("sprites/story/NPC_Sad/spriteFrame");
          resources.preload("sprites/story/NPC_Talk/spriteFrame");
        };

        _proto.update = function update(deltaTime) {};

        _proto.setState = function setState(value) {
          var _this2 = this; //start new state


          this.state = value;

          switch (this.state) {
            case State.Inactive:
              {
                this.node.active = false;
              }
              break;

            case State.Scene_1_1:
              {
                //1
                //Start scene này sau khi người chơi bấm vào nút Chơi (hoặc chơi mới)	
                //Người chơi bắt đầu với khung cảnh trái đất hoang tàn
                this.node.active = true;
                this.node.children.forEach(function (child) {
                  return child.active = false;
                }); //inactive all children when at first step of scene

                this.background.node.active = true;
                this.earth.node.active = true;
                setTimeout(function () {
                  _this2.setState(State.Scene_1_2);
                }, 2000);
              }
              break;

            case State.Scene_1_2:
              {
                //2
                // Sau 2s khi người chơi start phân cảnh 1	
                // "Hiển thị MC cùng đoạn hội thoại: ""Trái Đất đang dần bị ô nhiễm nặng? Có chuyện gì đang xảy ra?"""
                this.MC.node.active = true;
                this.MC.grayscale = false;
                this.MC.spriteFrame = this.spriteFrames[SpriteFrameId.McSad];
                this.speechBubble.active = true;
                this.speechName.string = Define.MCName;
                this.setLabelAnimation(Define.Scene_1_2_speechContent, this.speechContent);
              }
              break;

            case State.Scene_1_3:
              {
                // 3	
                // Sau khi người chơi click/bấm vào nút bất kỳ ở phân cảnh 2	
                // "NPC xuất hiện và hiển thị hội thoại 1:""Trái đất đang bị một binh đoàn quái vật xâm chiếm, chúng có âm mưu tiêu diệt mọi sự sống nơi đây."""
                this.MC.grayscale = true;
                this.NPC.node.active = true;
                this.NPC.grayscale = false;
                this.speechName.string = Define.NPCName;
                this.showNPCSpeech(SpriteFrameId.NpcSad, Define.Scene_1_3_speechContent, this.speechContent);
              }
              break;

            case State.Scene_1_4:
              {
                // 4
                // Sau khi người chơi click/bấm vào nút bất kỳ ở phân cảnh 3
                // "Hiển thị hội thoại 2 của NPC:""Cầm đầu binh đoàn quái vật là GOBA, hắn cùng các tên thuộc hạ đang dần hủy hoại nguồn nước sạch của Trái Đất"""
                this.speechContent.string = '';
                this.setLabelAnimation(Define.Scene_1_4_speechContent, this.speechContentRichText);
              }
              break;

            case State.Scene_1_5:
              {
                // 5	
                // Sau khi người chơi click/bấm vào nút bất kỳ ở phân cảnh 4	
                // "Hiển thị hội thoại 3 của NPC:""Xin hãy giúp đỡ chúng tôi! Không có nguồn nước sạch, sự sống trên Trái đất sẽ bị đe dọa!"""
                this.setLabelAnimation(Define.Scene_1_5_speechContent, this.speechContentRichText);
              }
              break;

            case State.Scene_1_6:
              {
                // 6	
                // Sau khi người chơi click/bấm vào nút bất kỳ ở phân cảnh 5	
                // "Hiển thị MC cùng hội thoại:""Xin hãy nói tôi biết rằng làm sao để có thể đánh bại GOBA"""
                this.MC.grayscale = false;
                this.MC.spriteFrame = this.spriteFrames[SpriteFrameId.McAngryTalk];
                this.NPC.grayscale = true;
                this.speechName.string = Define.MCName;
                this.speechContentRichText.string = '';
                this.setLabelAnimation(Define.Scene_1_6_speechContent, this.speechContent);
              }
              break;

            case State.Scene_1_7_1:
              {
                // 7	
                // Sau khi người chơi click/bấm vào nút bất kỳ ở phân cảnh 6	
                // "Hiển thị NPC cùng hội thoại:
                // [1] ""Để tiêu diệt được GOBA và các thuộc hạ của hắn, bạn cần phải được trang bị những bảo vật và bí kíp nâng cấp sức mạnh bản thân.""
                this.background.node.active = false;
                this.earth.node.active = false;
                this.MC.node.active = false;
                this.MC.grayscale = true;
                this.NPC.grayscale = false;
                this.speechName.string = Define.NPCName; // this.setLabelAnimation(Define.Scene_1_7_1_speechContent, this.speechContentRichText);

                this.showNPCSpeech(SpriteFrameId.NpcTalk, Define.Scene_1_7_1_speechContent, this.speechContent);
              }
              break;

            case State.Scene_1_7_2:
              {
                // [2]  ""Những bí kíp này được giấu ở khắp nơi trên TĐ. Thu thập chúng giúp gia tăng sức mạnh và trí tuệ, mới có thể đánh đuổi quái vật""
                // Đồng thời chuyển BG sang màn hình chọn map"
                this.setLabelAnimation(Define.Scene_1_7_2_speechContent, this.speechContent);
              }
              break;

            case State.Scene_1_8_1:
              {
                // 8	
                // Sau khi người chơi click/bấm vào nút bất kỳ ở phân cảnh 7	
                // "Hiển thị popup thoại của NPC (kèm avatar):
                // [1]  ""Bí kíp đầu tiên chính là Bí kíp Sử dụng nước hiệu quả - được giấu sâu trong Hang Động Suối Nguồn.""
                this.NPC.node.active = false;
                this.miniNPC.active = true;
                this.setLabelAnimation(Define.Scene_1_8_1_speechContent, this.speechContent);
              }
              break;

            case State.Scene_1_8_3:
              {
                // [3]  ""Thu được bí kíp này sẽ giúp Hiệp sĩ sử dụng nước tiết kiệm và hiệu quả, gia tăng sát thương và khả năng chiến đấu!""
                this.setLabelAnimation(Define.Scene_1_8_3_speechContent, this.speechContent); //wait user click to play level 1

                eventManager.emit(EventName.onShowHandOnLevel, function () {
                  //finish scene 1
                  userProfile.storyCompleteStatus.scene1 = true;
                }); //

                this.offListenerTouchStart();
              }
              break;

            case State.Scene_2_1:
              {
                // 9	
                // Sau khi người chơi click vào Map 1	
                // "Hiển thị map 1. 
                // Lưu ý: lúc này sẽ ẩn các quái vật và UI đi để dẫn chuyện
                // Hiển thị popup thoại của NPC (kèm avatar):
                // ""Bạn cần thu thập đủ 3 mảnh của Bí kíp, chúng sẽ giúp nâng cấp sức mạnh và hỗ trợ bạn hạ gục GoBa và đám thuộc hạ!""
                // Effect làm nổi bật 3 mảnh kiến thức"
                this.node.active = true;
                this.node.children.forEach(function (child) {
                  return child.active = false;
                }); //inactive all children when at first step of scene

                this.speechBubble.active = true;
                this.speechName.string = Define.NPCName;
                this.setLabelAnimation(Define.Scene_2_1_speechContent, this.speechContent);
                this.NPC.node.active = true;
                this.NPC.grayscale = false; //HIDE ENEMY

                if (this.mazeGameCameraGame) {
                  this.mazeGameCameraGame.visibility |= Layer.mazeGameEnemy;
                  this.mazeGameCameraGame.visibility ^= Layer.mazeGameEnemy;
                } //HIDE STATS BOARD


                if (this.mazeGameCameraUI) {
                  this.mazeGameCameraUI.visibility |= Layer.mazeGameStatsBoard;
                  this.mazeGameCameraUI.visibility ^= Layer.mazeGameStatsBoard;
                } //

              }
              break;

            case State.Scene_2_2:
              {
                // 11	
                // Sau khi người chơi click/bấm vào nút bất kỳ ở phân cảnh 9	
                // "Lúc này sẽ hiển thị các bọn quái vật trên map 1
                // Hiển thị popup thoại của NPC (kèm avatar):
                // ""Lưu ý hãy né tránh bọn lâu la của GoBa và thu thập thật nhiều giọt nước để nhận được hỗ trợ từ nguồn nước"""
                this.setLabelAnimation(Define.Scene_2_2_speechContent, this.speechContent); //SHOW ENEMY

                if (this.mazeGameCameraGame) {
                  this.mazeGameCameraGame.visibility |= Layer.mazeGameEnemy;
                }
              }
              break;

            case State.Scene_2_3:
              {
                //SHOW STATS BOARD
                if (this.mazeGameCameraUI) {
                  this.mazeGameCameraUI.visibility |= Layer.mazeGameStatsBoard;
                } //finish scene 2


                userProfile.storyCompleteStatus.scene2 = true;
                this.setStateInactive();
              }
              break;

            case State.Scene_3_1:
              {
                // 12	
                // "Người chơi đã vượt qua map 1 (Thu thập đủ 3 mảnh)
                // Quay trở về màn hình chọn map và unlock map 2"	
                // "NPC sẽ xuất hiện kèm hội thoại:
                // [1] ""Chặng đường của chúng ta chỉ mới bắt đầu. Muốn đánh bại GoBa chúng ta phải vượt qua Sa Mạc Nóng Chảy trước mặt. Đây là nơi mà tướng CaKi đang nắm quyền kiểm soát.""
                this.node.active = true;
                this.node.children.forEach(function (child) {
                  return child.active = false;
                }); //inactive all children when at first step of scene

                this.NPC.node.active = true;
                this.NPC.grayscale = false;
                this.speechBubble.active = true;
                this.speechName.string = Define.NPCName;
                this.setLabelAnimation(Define.Scene_3_1_speechContent, this.speechContent);
              }
              break;

            case State.Scene_3_2:
              {
                // [2] ""Hắn ta là 1 trong 2 tên tướng lĩnh ghê gớm của GoBa. CaKi có khả năng hút cạn nước ở bất cứ nơi đâu, làm suy kiệt nguồn nước trên Trái Đất, biến khắp mọi nơi thành Sa Mạc. Đánh bại hắn, con người mới có đầy đủ nước dùng!""
                this.setLabelAnimation(Define.Scene_3_2_speechContent, this.speechContent);
              }
              break;

            case State.Scene_3_3:
              {
                // [3] ""Xin Hiệp sĩ hãy cẩn thận với các lựa chọn của mình khi giao chiến với CaKi! ""
                this.setLabelAnimation(Define.Scene_3_3_speechContent, this.speechContent);
              }
              break;

            case State.Scene_3_4:
              {
                // Sau khi kết thúc 3 đoạn hội thoại sẽ hiển thị asset bàn tay chỉ vào map 2"
                eventManager.emit(EventName.onShowHandOnLevel);
                this.offListenerTouchStart(); //finish scene 3

                userProfile.storyCompleteStatus.scene3 = true;
              }
              break;

            case State.Scene_5_14A:
              {
                this.showNextEarthState();
              }
              break;

            case State.Scene_5_14B:
              {
                this.showNarration(Define.Scene_5_14B_content, 5);
              }
              break;

            case State.Scene_5_14C:
              {
                this.overlay.node.active = false;
                this.narrationRichText.node.active = false;
                this.showNPCSpeech(SpriteFrameId.NpcHappy, Define.Scene_5_14C_content, this.speechContent);
              }
              break;

            case State.Scene_5_14D:
              {
                this.showNPCSpeech(SpriteFrameId.NpcTalk, Define.Scene_5_14D_content, this.speechContent);
              }
              break;

            case State.Scene_5_14E:
              {
                this.setLabelAnimation(Define.Scene_5_14E_content, this.speechContent);
              }
              break;

            case State.Scene_5_14F:
              {
                this.setLabelAnimation(Define.Scene_5_14F_content, this.speechContent);
              }
              break;

            case State.Scene_5_14G:
              {
                this.setLabelAnimation(Define.Scene_5_14G_content, this.speechContent);
              }
              break;

            case State.Scene_5_14H:
              {
                eventManager.emit(EventName.onShowHandOnLevel);
                this.offListenerTouchStart();
                userProfile.storyCompleteStatus.scene5 = true;
              }
              break;

            case State.Scene_6_15A:
              {
                this.node.active = true;
                this.node.children.forEach(function (child) {
                  return child.active = false;
                });
                this.showNPCSpeech(SpriteFrameId.NpcTalk, Define.Scene_6_15A_content, this.speechContent);
              }
              break;

            case State.Scene_6_15B:
              {
                this.setLabelAnimation(Define.Scene_6_15B_content, this.speechContent);
              }
              break;

            case State.Scene_6_15C:
              {
                // this.firstLevelButton.active = true;
                // this.firstLevelButton.position = new Vec3(0, -35, 0);
                // this.firstLevelButton.once('click', this.onClickLevelButton, this);
                eventManager.emit(EventName.onShowHandOnLevel);
                this.offListenerTouchStart();
                userProfile.storyCompleteStatus.scene6 = true;
              }
              break;

            case State.Scene_8_17A:
              {
                this.showNextEarthState();
              }
              break;

            case State.Scene_8_17B:
              {
                this.showNarration(Define.Scene_8_17B_content, 5);
              }
              break;

            case State.Scene_8_17C:
              {
                this.overlay.node.active = false;
                this.narrationRichText.node.active = false;
                this.showNPCSpeech(SpriteFrameId.NpcSad, Define.Scene_8_17C_content, this.speechContent);
              }
              break;

            case State.Scene_8_17D:
              {
                this.showNPCSpeech(SpriteFrameId.NpcTalk, Define.Scene_8_17D_content, this.speechContent);
              }
              break;

            case State.Scene_8_17E:
              {
                eventManager.emit(EventName.onShowHandOnLevel);
                this.offListenerTouchStart();
                userProfile.storyCompleteStatus.scene8 = true;
              }
              break;

            case State.Scene_9_18A:
              {
                this.node.active = true;
                this.node.children.forEach(function (child) {
                  return child.active = false;
                });
                this.showNPCSpeech(SpriteFrameId.NpcTalk, Define.Scene_9_18A_content, this.speechContent);
              }
              break;

            case State.Scene_9_18B:
              {
                eventManager.emit(EventName.onShowHandOnLevel);
                this.offListenerTouchStart();
                userProfile.storyCompleteStatus.scene9 = true;
              }
              break;

            case State.Scene_11_20A:
              {
                this.showNextEarthState();
              }
              break;

            case State.Scene_11_20B:
              {
                this.showNarration(Define.Scene_11_20B_content, 5);
              }
              break;

            case State.Scene_11_20C:
              {
                this.setLabelAnimation("Game over", this.narrationRichText, 5);
              }
              break;
          }
        } //PUBLIC
        ;

        _proto.setStateInactive = function setStateInactive() {
          this.setState(State.Inactive);
        };

        _proto.startScene1 = function startScene1() {
          this.setState(State.Scene_1_1);
        };

        _proto.startScene2 = function startScene2() {
          this.setState(State.Scene_2_1);
        };

        _proto.startScene3 = function startScene3() {
          this.setState(State.Scene_3_1);
        };

        _proto.startScene = function startScene(val) {
          this.setState(val);
        } //PRIVATE
        ;

        _proto.onListenerTouchStart = function onListenerTouchStart() {
          this.node.on(Input.EventType.TOUCH_START, this.onTouchStart, this);
          this.blockInput.enabled = true;
        };

        _proto.offListenerTouchStart = function offListenerTouchStart() {
          this.node.off(Input.EventType.TOUCH_START, this.onTouchStart, this);
          this.blockInput.enabled = false;
        };

        _proto.onTouchStart = function onTouchStart() {
          switch (this.state) {
            case State.Scene_1_2:
            case State.Scene_1_3:
            case State.Scene_1_4:
            case State.Scene_1_5:
            case State.Scene_1_6:
            case State.Scene_1_7_1:
            case State.Scene_1_7_2:
            case State.Scene_1_8_1:
            case State.Scene_1_8_3:
            case State.Scene_4_13A:
            case State.Scene_4_13B:
            case State.Scene_4_13D:
            case State.Scene_4_13F:
            case State.Scene_5_14B:
            case State.Scene_5_14C:
            case State.Scene_5_14D:
            case State.Scene_5_14E:
            case State.Scene_5_14F:
            case State.Scene_5_14G:
            case State.Scene_6_15A:
            case State.Scene_6_15B:
            case State.Scene_7_16:
            case State.Scene_8_17B:
            case State.Scene_8_17C:
            case State.Scene_8_17D:
            case State.Scene_8_17E:
            case State.Scene_9_18A:
            case State.Scene_10_19A:
            case State.Scene_10_19B:
            case State.Scene_11_20B:
              this.checkLabelAnimationDoneToChangeState(this.state + 1);
              break;

            case State.Scene_2_1:
              this.checkLabelAnimationDoneToChangeState(State.Scene_2_2);
              break;

            case State.Scene_2_2:
              this.checkLabelAnimationDoneToChangeState(State.Scene_2_3);
              break;

            case State.Scene_3_1:
              this.checkLabelAnimationDoneToChangeState(State.Scene_3_2);
              break;

            case State.Scene_3_2:
              this.checkLabelAnimationDoneToChangeState(State.Scene_3_3);
              break;

            case State.Scene_3_3:
              this.checkLabelAnimationDoneToChangeState(State.Scene_3_4);
              break;

            case State.Scene_11_20C:
              // userProfile.maxLevel = 0;
              // userProfile.storyCompleteStatus.scene1 = false;
              // userProfile.storyCompleteStatus.scene2 = false;
              // userProfile.storyCompleteStatus.scene3 = false;
              // userProfile.storyCompleteStatus.scene4 = false;
              // userProfile.storyCompleteStatus.scene5 = false;
              // userProfile.storyCompleteStatus.scene6 = false;
              // userProfile.storyCompleteStatus.scene7 = false;
              // userProfile.storyCompleteStatus.scene8 = false;
              // userProfile.storyCompleteStatus.scene9 = false;
              // userProfile.storyCompleteStatus.scene10 = false;
              // userProfile.storyCompleteStatus.scene11 = false;
              // userProfile.waterDrops = 0;
              director.loadScene('start');
          }
        };

        _proto.setLabelAnimation = function setLabelAnimation(text, label, dur) {
          var _this3 = this;

          this.labelTweenObject.texts = text.split(' ');
          var lengthTarget = this.labelTweenObject.texts.length;
          this.labelTweenObject.length = 0;
          this.labelTweenObject.isDone = false;
          this.labelTweenObject.label = label;
          this.labelTweenObject.text = text;
          tween(this.labelTweenObject).to(lengthTarget / 20, {
            length: lengthTarget
          }, {
            onUpdate: function onUpdate(_ref) {
              var label = _ref.label,
                  length = _ref.length,
                  texts = _ref.texts;
              var content = texts.slice(0, Math.floor(length)).join(' '); //check to close tag

              var arr = [{
                check: /<color[^<>]+>[^<>]+$/,
                add: '</color>'
              }];
              arr.forEach(function (_ref2) {
                var check = _ref2.check,
                    add = _ref2.add;
                content = content.replace(check, function (substring) {
                  return "" + substring + add;
                });
              }); //set string

              label.string = content;
            },
            onComplete: function onComplete() {
              _this3.labelTweenObject.isDone = true;
            }
          }).start();
        };

        _proto.checkLabelAnimationDoneToChangeState = function checkLabelAnimationDoneToChangeState(targetState) {
          if (this.labelTweenObject.isDone) {
            this.setState(targetState);
          } else {
            Tween.stopAllByTarget(this.labelTweenObject);
            this.labelTweenObject.isDone = true;
            this.labelTweenObject.label.string = this.labelTweenObject.text;
          }
        };

        _proto.showNextEarthState = function showNextEarthState() {
          var _this4 = this;

          this.node.active = true;
          this.node.children.forEach(function (child) {
            return child.active = false;
          });
          this.background.node.active = true;
          this.earth.node.active = true;
          this.overlay.node.active = true;
          var idx = -1;

          switch (userProfile.maxLevel) {
            case 2:
              idx = 0;
              break;

            case 4:
              idx = 1;
              break;

            case 5:
              idx = 2;
              break;
          }

          var curPath = "sprites/start/1stScreen_Earth_" + idx + "/spriteFrame";
          var nextPath = "sprites/start/1stScreen_Earth_" + (idx + 1) + "/spriteFrame";
          resources.preload(nextPath);
          resources.load(curPath, SpriteFrame, function (err, spriteFrame) {
            _this4.earth.spriteFrame = spriteFrame;
            var overlay = _this4.overlay;
            var col = new Color(255, 255, 255, 0);
            overlay.color = col;
            tween(col).delay(0.5).to(1.5, {
              r: 255,
              g: 255,
              b: 255,
              a: 255
            }, {
              onUpdate: function onUpdate(tar) {
                overlay.color = tar;
              }
            }).call(function () {
              resources.load(nextPath, SpriteFrame, function (err2, spriteFrame2) {
                _this4.earth.spriteFrame = spriteFrame2;
              });
            }).to(1.5, {
              r: 255,
              g: 255,
              b: 255,
              a: 0
            }, {
              onUpdate: function onUpdate(tar) {
                overlay.color = tar;
              }
            }).delay(1).call(function () {
              _this4.setState(_this4.state + 1);
            }).start();
          });
        };

        _proto.showNarration = function showNarration(content, duration) {
          if (duration === void 0) {
            duration = -1;
          }

          this.earth.node.active = false;
          this.background.node.active = false;
          this.overlay.color = new Color(0, 0, 0, 255);
          this.narrationRichText.node.active = true;
          this.setLabelAnimation(content, this.narrationRichText, duration);
        };

        _proto.showNPCSpeech = function showNPCSpeech(spriteId, content, label) {
          if (label === void 0) {
            label = this.speechContentRichText;
          }

          this.speechBubble.active = true;
          this.speechName.string = Define.NPCName;
          this.NPC.node.active = true;
          this.NPC.grayscale = false;
          this.NPC.spriteFrame = this.spriteFrames[spriteId];
          this.setLabelAnimation(content, label);
        };

        _proto.showNPCPortraitSpeech = function showNPCPortraitSpeech(content, label) {
          if (label === void 0) {
            label = this.speechContentRichText;
          }

          this.speechBubble.active = true;
          this.speechName.string = Define.NPCName;
          this.MC.node.active = false;
          this.NPC.node.active = false;
          this.NPCPortrait.active = true;
          this.setLabelAnimation(content, label);
        };

        _proto.showMCSpeech = function showMCSpeech(spriteId, content, label) {
          if (label === void 0) {
            label = this.speechContentRichText;
          }

          this.speechBubble.active = true;
          this.speechName.string = Define.MCName;
          this.MC.node.active = true;
          this.MC.grayscale = false;
          this.MC.spriteFrame = this.spriteFrames[spriteId];
          this.setLabelAnimation(content, label);
        };

        return Story;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "spriteFrames", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "blockInput", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "background", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "overlay", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "earth", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "MC", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "NPC", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "miniNPC", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "NPCPortrait", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "speechBubble", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "speechName", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "speechContent", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "speechContentRichText", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "narrationRichText", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "mazeGameCameraGame", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "mazeGameCameraUI", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
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
          this.storyCompleteStatus = {
            scene1: false,
            scene2: false,
            scene3: false,
            scene4: false,
            scene5: false,
            scene6: false,
            scene7: false,
            scene8: false,
            scene9: false,
            scene10: false,
            scene11: false
          };
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