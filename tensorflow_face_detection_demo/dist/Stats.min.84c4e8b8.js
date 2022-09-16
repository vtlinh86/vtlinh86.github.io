// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/Stats.min.js":[function(require,module,exports) {
var Stats = function () {
  function e(e) {
    return n.appendChild(e.dom), e;
  }

  function t(e) {
    for (var t = 0; t < n.children.length; t++) n.children[t].style.display = t === e ? "block" : "none";

    l = e;
  }

  var l = 0,
      n = document.createElement("div");
  n.style.cssText = "cursor:pointer;opacity:0.9", n.addEventListener("click", function (e) {
    e.preventDefault(), t(++l % n.children.length);
  }, !1);
  var a = (performance || Date).now(),
      i = a,
      o = 0,
      r = e(new Stats.Panel("FPS", "#0ff", "#002")),
      f = e(new Stats.Panel("MS", "#0f0", "#020"));
  if (self.performance && self.performance.memory) var c = e(new Stats.Panel("MB", "#f08", "#201"));
  return t(0), {
    REVISION: 16,
    domElement: n,
    addPanel: e,
    showPanel: t,
    setMode: t,
    begin: function () {
      a = (performance || Date).now();
    },
    end: function () {
      o++;
      var e = (performance || Date).now();

      if (f.update(e - a, 200), e > i + 1e3 && (r.update(1e3 * o / (e - i), 100), i = e, o = 0, c)) {
        var t = performance.memory;
        c.update(t.usedJSHeapSize / 1048576, t.jsHeapSizeLimit / 1048576);
      }

      return e;
    },
    update: function () {
      a = this.end();
    }
  };
};

Stats.Panel = function (e, t, l) {
  var n = 1 / 0,
      a = 0,
      i = Math.round,
      o = i(window.devicePixelRatio || 1),
      r = 80 * o,
      f = 48 * o,
      c = 3 * o,
      d = 2 * o,
      s = 3 * o,
      p = 15 * o,
      u = 74 * o,
      m = 30 * o,
      h = document.createElement("canvas");
  h.width = r, h.height = f, h.style.cssText = "width:80px;height:48px";
  var S = h.getContext("2d");
  return S.font = "bold " + 9 * o + "px Helvetica,Arial,sans-serif", S.textBaseline = "top", S.fillStyle = l, S.fillRect(0, 0, r, f), S.fillStyle = t, S.fillText(e, c, d), S.fillRect(s, p, u, m), S.fillStyle = l, S.globalAlpha = .9, S.fillRect(s, p, u, m), {
    dom: h,
    update: function (f, v) {
      n = Math.min(n, f), a = Math.max(a, f), S.fillStyle = l, S.globalAlpha = 1, S.fillRect(0, 0, r, p), S.fillStyle = t, S.fillText(i(f) + " " + e + " (" + i(n) + "-" + i(a) + ")", c, d), S.drawImage(h, s + o, p, u - o, m, s, p, u - o, m), S.fillRect(s + u - o, p, o, m), S.fillStyle = l, S.globalAlpha = .9, S.fillRect(s + u - o, p, o, i((1 - f / v) * m));
    }
  };
}, "object" == typeof module && (module.exports = Stats);
},{}]},{},["src/Stats.min.js"], null)
//# sourceMappingURL=/Stats.min.84c4e8b8.js.map