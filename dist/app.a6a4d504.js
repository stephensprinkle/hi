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
})({"node_modules/svelte/shared.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.blankObject = blankObject;
exports.destroy = destroy;
exports.destroyDev = destroyDev;
exports._differs = _differs;
exports._differsImmutable = _differsImmutable;
exports.fire = fire;
exports.flush = flush;
exports.get = get;
exports.init = init;
exports.on = on;
exports.set = set;
exports._set = _set;
exports._stage = _stage;
exports.setDev = setDev;
exports.callAll = callAll;
exports._mount = _mount;
exports.removeFromStore = removeFromStore;
exports.wrapAnimation = wrapAnimation;
exports.fixPosition = fixPosition;
exports.handlePromise = handlePromise;
exports.append = append;
exports.insert = insert;
exports.detachNode = detachNode;
exports.detachBetween = detachBetween;
exports.detachBefore = detachBefore;
exports.detachAfter = detachAfter;
exports.reinsertBetween = reinsertBetween;
exports.reinsertChildren = reinsertChildren;
exports.reinsertAfter = reinsertAfter;
exports.reinsertBefore = reinsertBefore;
exports.destroyEach = destroyEach;
exports.createFragment = createFragment;
exports.createElement = createElement;
exports.createSvgElement = createSvgElement;
exports.createText = createText;
exports.createComment = createComment;
exports.addListener = addListener;
exports.removeListener = removeListener;
exports.setAttribute = setAttribute;
exports.setAttributes = setAttributes;
exports.setCustomElementData = setCustomElementData;
exports.setXlinkAttribute = setXlinkAttribute;
exports.getBindingGroupValue = getBindingGroupValue;
exports.toNumber = toNumber;
exports.timeRangesToArray = timeRangesToArray;
exports.children = children;
exports.claimElement = claimElement;
exports.claimText = claimText;
exports.setData = setData;
exports.setInputType = setInputType;
exports.setStyle = setStyle;
exports.selectOption = selectOption;
exports.selectOptions = selectOptions;
exports.selectValue = selectValue;
exports.selectMultipleValue = selectMultipleValue;
exports.addResizeListener = addResizeListener;
exports.toggleClass = toggleClass;
exports.destroyBlock = destroyBlock;
exports.outroAndDestroyBlock = outroAndDestroyBlock;
exports.fixAndOutroAndDestroyBlock = fixAndOutroAndDestroyBlock;
exports.updateKeyedEach = updateKeyedEach;
exports.measure = measure;
exports.animate = animate;
exports.getSpreadUpdate = getSpreadUpdate;
exports.spread = spread;
exports.escape = escape;
exports.each = each;
exports.validateSsrComponent = validateSsrComponent;
exports.debug = debug;
exports.linear = linear;
exports.generateRule = generateRule;
exports.hash = hash;
exports.wrapTransition = wrapTransition;
exports.groupOutros = groupOutros;
exports.noop = noop;
exports.assign = assign;
exports.assignTrue = assignTrue;
exports.isPromise = isPromise;
exports.callAfter = callAfter;
exports.addLoc = addLoc;
exports.exclude = exclude;
exports.run = run;
exports.transitionManager = exports.outros = exports.missingComponent = exports.escaped = exports.invalidAttributeNameCharacter = exports.protoDev = exports.proto = exports.FAILURE = exports.SUCCESS = exports.PENDING = void 0;

function noop() {}

function assign(tar, src) {
  for (var k in src) tar[k] = src[k];

  return tar;
}

function assignTrue(tar, src) {
  for (var k in src) tar[k] = 1;

  return tar;
}

function isPromise(value) {
  return value && typeof value.then === 'function';
}

function callAfter(fn, i) {
  if (i === 0) fn();
  return () => {
    if (! --i) fn();
  };
}

function addLoc(element, file, line, column, char) {
  element.__svelte_meta = {
    loc: {
      file,
      line,
      column,
      char
    }
  };
}

function exclude(src, prop) {
  const tar = {};

  for (const k in src) k === prop || (tar[k] = src[k]);

  return tar;
}

function run(fn) {
  fn();
}

function append(target, node) {
  target.appendChild(node);
}

function insert(target, node, anchor) {
  target.insertBefore(node, anchor);
}

function detachNode(node) {
  node.parentNode.removeChild(node);
}

function detachBetween(before, after) {
  while (before.nextSibling && before.nextSibling !== after) {
    before.parentNode.removeChild(before.nextSibling);
  }
}

function detachBefore(after) {
  while (after.previousSibling) {
    after.parentNode.removeChild(after.previousSibling);
  }
}

function detachAfter(before) {
  while (before.nextSibling) {
    before.parentNode.removeChild(before.nextSibling);
  }
}

function reinsertBetween(before, after, target) {
  while (before.nextSibling && before.nextSibling !== after) {
    target.appendChild(before.parentNode.removeChild(before.nextSibling));
  }
}

function reinsertChildren(parent, target) {
  while (parent.firstChild) target.appendChild(parent.firstChild);
}

function reinsertAfter(before, target) {
  while (before.nextSibling) target.appendChild(before.nextSibling);
}

function reinsertBefore(after, target) {
  var parent = after.parentNode;

  while (parent.firstChild !== after) target.appendChild(parent.firstChild);
}

function destroyEach(iterations, detach) {
  for (var i = 0; i < iterations.length; i += 1) {
    if (iterations[i]) iterations[i].d(detach);
  }
}

function createFragment() {
  return document.createDocumentFragment();
}

function createElement(name) {
  return document.createElement(name);
}

function createSvgElement(name) {
  return document.createElementNS('http://www.w3.org/2000/svg', name);
}

function createText(data) {
  return document.createTextNode(data);
}

function createComment() {
  return document.createComment('');
}

function addListener(node, event, handler, options) {
  node.addEventListener(event, handler, options);
}

function removeListener(node, event, handler, options) {
  node.removeEventListener(event, handler, options);
}

function setAttribute(node, attribute, value) {
  if (value == null) node.removeAttribute(attribute);else node.setAttribute(attribute, value);
}

function setAttributes(node, attributes) {
  for (var key in attributes) {
    if (key === 'style') {
      node.style.cssText = attributes[key];
    } else if (key in node) {
      node[key] = attributes[key];
    } else {
      setAttribute(node, key, attributes[key]);
    }
  }
}

function setCustomElementData(node, prop, value) {
  if (prop in node) {
    node[prop] = value;
  } else {
    setAttribute(node, prop, value);
  }
}

function setXlinkAttribute(node, attribute, value) {
  node.setAttributeNS('http://www.w3.org/1999/xlink', attribute, value);
}

function getBindingGroupValue(group) {
  var value = [];

  for (var i = 0; i < group.length; i += 1) {
    if (group[i].checked) value.push(group[i].__value);
  }

  return value;
}

function toNumber(value) {
  return value === '' ? undefined : +value;
}

function timeRangesToArray(ranges) {
  var array = [];

  for (var i = 0; i < ranges.length; i += 1) {
    array.push({
      start: ranges.start(i),
      end: ranges.end(i)
    });
  }

  return array;
}

function children(element) {
  return Array.from(element.childNodes);
}

function claimElement(nodes, name, attributes, svg) {
  for (var i = 0; i < nodes.length; i += 1) {
    var node = nodes[i];

    if (node.nodeName === name) {
      for (var j = 0; j < node.attributes.length; j += 1) {
        var attribute = node.attributes[j];
        if (!attributes[attribute.name]) node.removeAttribute(attribute.name);
      }

      return nodes.splice(i, 1)[0]; // TODO strip unwanted attributes
    }
  }

  return svg ? createSvgElement(name) : createElement(name);
}

function claimText(nodes, data) {
  for (var i = 0; i < nodes.length; i += 1) {
    var node = nodes[i];

    if (node.nodeType === 3) {
      node.data = data;
      return nodes.splice(i, 1)[0];
    }
  }

  return createText(data);
}

function setData(text, data) {
  text.data = '' + data;
}

function setInputType(input, type) {
  try {
    input.type = type;
  } catch (e) {}
}

function setStyle(node, key, value) {
  node.style.setProperty(key, value);
}

function selectOption(select, value) {
  for (var i = 0; i < select.options.length; i += 1) {
    var option = select.options[i];

    if (option.__value === value) {
      option.selected = true;
      return;
    }
  }
}

function selectOptions(select, value) {
  for (var i = 0; i < select.options.length; i += 1) {
    var option = select.options[i];
    option.selected = ~value.indexOf(option.__value);
  }
}

function selectValue(select) {
  var selectedOption = select.querySelector(':checked') || select.options[0];
  return selectedOption && selectedOption.__value;
}

function selectMultipleValue(select) {
  return [].map.call(select.querySelectorAll(':checked'), function (option) {
    return option.__value;
  });
}

function addResizeListener(element, fn) {
  if (getComputedStyle(element).position === 'static') {
    element.style.position = 'relative';
  }

  const object = document.createElement('object');
  object.setAttribute('style', 'display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; pointer-events: none; z-index: -1;');
  object.type = 'text/html';
  let win;

  object.onload = () => {
    win = object.contentDocument.defaultView;
    win.addEventListener('resize', fn);
  };

  if (/Trident/.test(navigator.userAgent)) {
    element.appendChild(object);
    object.data = 'about:blank';
  } else {
    object.data = 'about:blank';
    element.appendChild(object);
  }

  return {
    cancel: () => {
      win && win.removeEventListener && win.removeEventListener('resize', fn);
      element.removeChild(object);
    }
  };
}

function toggleClass(element, name, toggle) {
  element.classList[toggle ? 'add' : 'remove'](name);
}

function linear(t) {
  return t;
}

function generateRule({
  a,
  b,
  delta,
  duration
}, ease, fn) {
  const step = 16.666 / duration;
  let keyframes = '{\n';

  for (let p = 0; p <= 1; p += step) {
    const t = a + delta * ease(p);
    keyframes += p * 100 + `%{${fn(t, 1 - t)}}\n`;
  }

  return keyframes + `100% {${fn(b, 1 - b)}}\n}`;
} // https://github.com/darkskyapp/string-hash/blob/master/index.js


function hash(str) {
  let hash = 5381;
  let i = str.length;

  while (i--) hash = (hash << 5) - hash ^ str.charCodeAt(i);

  return hash >>> 0;
}

function wrapTransition(component, node, fn, params, intro) {
  let obj = fn.call(component, node, params);
  let duration;
  let ease;
  let cssText;
  let initialised = false;
  return {
    t: intro ? 0 : 1,
    running: false,
    program: null,
    pending: null,

    run(b, callback) {
      if (typeof obj === 'function') {
        transitionManager.wait().then(() => {
          obj = obj();

          this._run(b, callback);
        });
      } else {
        this._run(b, callback);
      }
    },

    _run(b, callback) {
      duration = obj.duration || 300;
      ease = obj.easing || linear;
      const program = {
        start: window.performance.now() + (obj.delay || 0),
        b,
        callback: callback || noop
      };

      if (intro && !initialised) {
        if (obj.css && obj.delay) {
          cssText = node.style.cssText;
          node.style.cssText += obj.css(0, 1);
        }

        if (obj.tick) obj.tick(0, 1);
        initialised = true;
      }

      if (!b) {
        program.group = outros.current;
        outros.current.remaining += 1;
      }

      if (obj.delay) {
        this.pending = program;
      } else {
        this.start(program);
      }

      if (!this.running) {
        this.running = true;
        transitionManager.add(this);
      }
    },

    start(program) {
      component.fire(`${program.b ? 'intro' : 'outro'}.start`, {
        node
      });
      program.a = this.t;
      program.delta = program.b - program.a;
      program.duration = duration * Math.abs(program.b - program.a);
      program.end = program.start + program.duration;

      if (obj.css) {
        if (obj.delay) node.style.cssText = cssText;
        const rule = generateRule(program, ease, obj.css);
        transitionManager.addRule(rule, program.name = '__svelte_' + hash(rule));
        node.style.animation = (node.style.animation || '').split(', ').filter(anim => anim && (program.delta < 0 || !/__svelte/.test(anim))).concat(`${program.name} ${program.duration}ms linear 1 forwards`).join(', ');
      }

      this.program = program;
      this.pending = null;
    },

    update(now) {
      const program = this.program;
      if (!program) return;
      const p = now - program.start;
      this.t = program.a + program.delta * ease(p / program.duration);
      if (obj.tick) obj.tick(this.t, 1 - this.t);
    },

    done() {
      const program = this.program;
      this.t = program.b;
      if (obj.tick) obj.tick(this.t, 1 - this.t);
      component.fire(`${program.b ? 'intro' : 'outro'}.end`, {
        node
      });

      if (!program.b && !program.invalidated) {
        program.group.callbacks.push(() => {
          program.callback();
          if (obj.css) transitionManager.deleteRule(node, program.name);
        });

        if (--program.group.remaining === 0) {
          program.group.callbacks.forEach(run);
        }
      } else {
        if (obj.css) transitionManager.deleteRule(node, program.name);
      }

      this.running = !!this.pending;
    },

    abort(reset) {
      if (this.program) {
        if (reset && obj.tick) obj.tick(1, 0);
        if (obj.css) transitionManager.deleteRule(node, this.program.name);
        this.program = this.pending = null;
        this.running = false;
      }
    },

    invalidate() {
      if (this.program) {
        this.program.invalidated = true;
      }
    }

  };
}

let outros = {};
exports.outros = outros;

function groupOutros() {
  outros.current = {
    remaining: 0,
    callbacks: []
  };
}

var transitionManager = {
  running: false,
  transitions: [],
  bound: null,
  stylesheet: null,
  activeRules: {},
  promise: null,

  add(transition) {
    this.transitions.push(transition);

    if (!this.running) {
      this.running = true;
      requestAnimationFrame(this.bound || (this.bound = this.next.bind(this)));
    }
  },

  addRule(rule, name) {
    if (!this.stylesheet) {
      const style = createElement('style');
      document.head.appendChild(style);
      transitionManager.stylesheet = style.sheet;
    }

    if (!this.activeRules[name]) {
      this.activeRules[name] = true;
      this.stylesheet.insertRule(`@keyframes ${name} ${rule}`, this.stylesheet.cssRules.length);
    }
  },

  next() {
    this.running = false;
    const now = window.performance.now();
    let i = this.transitions.length;

    while (i--) {
      const transition = this.transitions[i];

      if (transition.program && now >= transition.program.end) {
        transition.done();
      }

      if (transition.pending && now >= transition.pending.start) {
        transition.start(transition.pending);
      }

      if (transition.running) {
        transition.update(now);
        this.running = true;
      } else if (!transition.pending) {
        this.transitions.splice(i, 1);
      }
    }

    if (this.running) {
      requestAnimationFrame(this.bound);
    } else if (this.stylesheet) {
      let i = this.stylesheet.cssRules.length;

      while (i--) this.stylesheet.deleteRule(i);

      this.activeRules = {};
    }
  },

  deleteRule(node, name) {
    node.style.animation = node.style.animation.split(', ').filter(anim => anim && anim.indexOf(name) === -1).join(', ');
  },

  wait() {
    if (!transitionManager.promise) {
      transitionManager.promise = Promise.resolve();
      transitionManager.promise.then(() => {
        transitionManager.promise = null;
      });
    }

    return transitionManager.promise;
  }

};
exports.transitionManager = transitionManager;

function wrapAnimation(node, from, fn, params) {
  if (!from) return;
  const to = node.getBoundingClientRect();
  if (from.left === to.left && from.right === to.right && from.top === to.top && from.bottom === to.bottom) return;
  const info = fn(node, {
    from,
    to
  }, params);
  const duration = 'duration' in info ? info.duration : 300;
  const delay = 'delay' in info ? info.delay : 0;
  const ease = info.easing || linear;
  const start = window.performance.now() + delay;
  const end = start + duration;
  const program = {
    a: 0,
    t: 0,
    b: 1,
    delta: 1,
    duration,
    start,
    end
  };
  const cssText = node.style.cssText;
  const animation = {
    pending: delay ? program : null,
    program: delay ? null : program,
    running: true,

    start() {
      if (info.css) {
        if (delay) node.style.cssText = cssText;
        const rule = generateRule(program, ease, info.css);
        program.name = `__svelte_${hash(rule)}`;
        transitionManager.addRule(rule, program.name);
        node.style.animation = (node.style.animation || '').split(', ').filter(anim => anim && (program.delta < 0 || !/__svelte/.test(anim))).concat(`${program.name} ${program.duration}ms linear 1 forwards`).join(', ');
      }

      animation.program = program;
      animation.pending = null;
    },

    update: now => {
      const p = now - program.start;
      const t = program.a + program.delta * ease(p / program.duration);
      if (info.tick) info.tick(t, 1 - t);
    },

    done() {
      if (info.tick) info.tick(1, 0);
      animation.stop();
    },

    stop() {
      if (info.css) transitionManager.deleteRule(node, program.name);
      animation.running = false;
    }

  };
  transitionManager.add(animation);
  if (info.tick) info.tick(0, 1);

  if (delay) {
    if (info.css) node.style.cssText += info.css(0, 1);
  } else {
    animation.start();
  }

  return animation;
}

function fixPosition(node) {
  const style = getComputedStyle(node);

  if (style.position !== 'absolute' && style.position !== 'fixed') {
    const {
      width,
      height
    } = style;
    const a = node.getBoundingClientRect();
    node.style.position = 'absolute';
    node.style.width = width;
    node.style.height = height;
    const b = node.getBoundingClientRect();

    if (a.left !== b.left || a.top !== b.top) {
      const style = getComputedStyle(node);
      const transform = style.transform === 'none' ? '' : style.transform;
      node.style.transform = `${transform} translate(${a.left - b.left}px, ${a.top - b.top}px)`;
    }
  }
}

function handlePromise(promise, info) {
  var token = info.token = {};

  function update(type, index, key, value) {
    if (info.token !== token) return;
    info.resolved = key && {
      [key]: value
    };
    const child_ctx = assign(assign({}, info.ctx), info.resolved);
    const block = type && (info.current = type)(info.component, child_ctx);

    if (info.block) {
      if (info.blocks) {
        info.blocks.forEach((block, i) => {
          if (i !== index && block) {
            groupOutros();
            block.o(() => {
              block.d(1);
              info.blocks[i] = null;
            });
          }
        });
      } else {
        info.block.d(1);
      }

      block.c();
      block[block.i ? 'i' : 'm'](info.mount(), info.anchor);
      info.component.root.set({}); // flush any handlers that were created
    }

    info.block = block;
    if (info.blocks) info.blocks[index] = block;
  }

  if (isPromise(promise)) {
    promise.then(value => {
      update(info.then, 1, info.value, value);
    }, error => {
      update(info.catch, 2, info.error, error);
    }); // if we previously had a then/catch block, destroy it

    if (info.current !== info.pending) {
      update(info.pending, 0);
      return true;
    }
  } else {
    if (info.current !== info.then) {
      update(info.then, 1, info.value, promise);
      return true;
    }

    info.resolved = {
      [info.value]: promise
    };
  }
}

function destroyBlock(block, lookup) {
  block.d(1);
  lookup[block.key] = null;
}

function outroAndDestroyBlock(block, lookup) {
  block.o(function () {
    destroyBlock(block, lookup);
  });
}

function fixAndOutroAndDestroyBlock(block, lookup) {
  block.f();
  outroAndDestroyBlock(block, lookup);
}

function updateKeyedEach(old_blocks, component, changed, get_key, dynamic, ctx, list, lookup, node, destroy, create_each_block, intro_method, next, get_context) {
  var o = old_blocks.length;
  var n = list.length;
  var i = o;
  var old_indexes = {};

  while (i--) old_indexes[old_blocks[i].key] = i;

  var new_blocks = [];
  var new_lookup = {};
  var deltas = {};
  var i = n;

  while (i--) {
    var child_ctx = get_context(ctx, list, i);
    var key = get_key(child_ctx);
    var block = lookup[key];

    if (!block) {
      block = create_each_block(component, key, child_ctx);
      block.c();
    } else if (dynamic) {
      block.p(changed, child_ctx);
    }

    new_blocks[i] = new_lookup[key] = block;
    if (key in old_indexes) deltas[key] = Math.abs(i - old_indexes[key]);
  }

  var will_move = {};
  var did_move = {};

  function insert(block) {
    block[intro_method](node, next);
    lookup[block.key] = block;
    next = block.first;
    n--;
  }

  while (o && n) {
    var new_block = new_blocks[n - 1];
    var old_block = old_blocks[o - 1];
    var new_key = new_block.key;
    var old_key = old_block.key;

    if (new_block === old_block) {
      // do nothing
      next = new_block.first;
      o--;
      n--;
    } else if (!new_lookup[old_key]) {
      // remove old block
      destroy(old_block, lookup);
      o--;
    } else if (!lookup[new_key] || will_move[new_key]) {
      insert(new_block);
    } else if (did_move[old_key]) {
      o--;
    } else if (deltas[new_key] > deltas[old_key]) {
      did_move[new_key] = true;
      insert(new_block);
    } else {
      will_move[old_key] = true;
      o--;
    }
  }

  while (o--) {
    var old_block = old_blocks[o];
    if (!new_lookup[old_block.key]) destroy(old_block, lookup);
  }

  while (n) insert(new_blocks[n - 1]);

  return new_blocks;
}

function measure(blocks) {
  const rects = {};
  let i = blocks.length;

  while (i--) rects[blocks[i].key] = blocks[i].node.getBoundingClientRect();

  return rects;
}

function animate(blocks, rects, fn, params) {
  let i = blocks.length;

  while (i--) {
    const block = blocks[i];
    const from = rects[block.key];
    if (!from) continue;
    const to = block.node.getBoundingClientRect();
    if (from.left === to.left && from.right === to.right && from.top === to.top && from.bottom === to.bottom) continue;
  }
}

function getSpreadUpdate(levels, updates) {
  var update = {};
  var to_null_out = {};
  var accounted_for = {};
  var i = levels.length;

  while (i--) {
    var o = levels[i];
    var n = updates[i];

    if (n) {
      for (var key in o) {
        if (!(key in n)) to_null_out[key] = 1;
      }

      for (var key in n) {
        if (!accounted_for[key]) {
          update[key] = n[key];
          accounted_for[key] = 1;
        }
      }

      levels[i] = n;
    } else {
      for (var key in o) {
        accounted_for[key] = 1;
      }
    }
  }

  for (var key in to_null_out) {
    if (!(key in update)) update[key] = undefined;
  }

  return update;
} // https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
// https://infra.spec.whatwg.org/#noncharacter


const invalidAttributeNameCharacter = /[\s'">\/=\u{FDD0}-\u{FDEF}\u{FFFE}\u{FFFF}\u{1FFFE}\u{1FFFF}\u{2FFFE}\u{2FFFF}\u{3FFFE}\u{3FFFF}\u{4FFFE}\u{4FFFF}\u{5FFFE}\u{5FFFF}\u{6FFFE}\u{6FFFF}\u{7FFFE}\u{7FFFF}\u{8FFFE}\u{8FFFF}\u{9FFFE}\u{9FFFF}\u{AFFFE}\u{AFFFF}\u{BFFFE}\u{BFFFF}\u{CFFFE}\u{CFFFF}\u{DFFFE}\u{DFFFF}\u{EFFFE}\u{EFFFF}\u{FFFFE}\u{FFFFF}\u{10FFFE}\u{10FFFF}]/u;
exports.invalidAttributeNameCharacter = invalidAttributeNameCharacter;

function spread(args) {
  const attributes = Object.assign({}, ...args);
  let str = '';
  Object.keys(attributes).forEach(name => {
    if (invalidAttributeNameCharacter.test(name)) return;
    const value = attributes[name];
    if (value === undefined) return;
    if (value === true) str += " " + name;
    const escaped = String(value).replace(/"/g, '&#34;').replace(/'/g, '&#39;');
    str += " " + name + "=" + JSON.stringify(escaped);
  });
  return str;
}

const escaped = {
  '"': '&quot;',
  "'": '&#39;',
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;'
};
exports.escaped = escaped;

function escape(html) {
  return String(html).replace(/["'&<>]/g, match => escaped[match]);
}

function each(items, assign, fn) {
  let str = '';

  for (let i = 0; i < items.length; i += 1) {
    str += fn(assign(items[i], i));
  }

  return str;
}

const missingComponent = {
  _render: () => ''
};
exports.missingComponent = missingComponent;

function validateSsrComponent(component, name) {
  if (!component || !component._render) {
    if (name === 'svelte:component') name += ' this={...}';
    throw new Error(`<${name}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules`);
  }

  return component;
}

function debug(file, line, column, values) {
  console.log(`{@debug} ${file ? file + ' ' : ''}(${line}:${column})`);
  console.log(values);
  return '';
}

function blankObject() {
  return Object.create(null);
}

function destroy(detach) {
  this.destroy = noop;
  this.fire('destroy');
  this.set = noop;

  this._fragment.d(detach !== false);

  this._fragment = null;
  this._state = {};
}

function destroyDev(detach) {
  destroy.call(this, detach);

  this.destroy = function () {
    console.warn('Component was already destroyed');
  };
}

function _differs(a, b) {
  return a != a ? b == b : a !== b || a && typeof a === 'object' || typeof a === 'function';
}

function _differsImmutable(a, b) {
  return a != a ? b == b : a !== b;
}

function fire(eventName, data) {
  var handlers = eventName in this._handlers && this._handlers[eventName].slice();

  if (!handlers) return;

  for (var i = 0; i < handlers.length; i += 1) {
    var handler = handlers[i];

    if (!handler.__calling) {
      try {
        handler.__calling = true;
        handler.call(this, data);
      } finally {
        handler.__calling = false;
      }
    }
  }
}

function flush(component) {
  component._lock = true;
  callAll(component._beforecreate);
  callAll(component._oncreate);
  callAll(component._aftercreate);
  component._lock = false;
}

function get() {
  return this._state;
}

function init(component, options) {
  component._handlers = blankObject();
  component._slots = blankObject();
  component._bind = options._bind;
  component._staged = {};
  component.options = options;
  component.root = options.root || component;
  component.store = options.store || component.root.store;

  if (!options.root) {
    component._beforecreate = [];
    component._oncreate = [];
    component._aftercreate = [];
  }
}

function on(eventName, handler) {
  var handlers = this._handlers[eventName] || (this._handlers[eventName] = []);
  handlers.push(handler);
  return {
    cancel: function () {
      var index = handlers.indexOf(handler);
      if (~index) handlers.splice(index, 1);
    }
  };
}

function set(newState) {
  this._set(assign({}, newState));

  if (this.root._lock) return;
  flush(this.root);
}

function _set(newState) {
  var oldState = this._state,
      changed = {},
      dirty = false;
  newState = assign(this._staged, newState);
  this._staged = {};

  for (var key in newState) {
    if (this._differs(newState[key], oldState[key])) changed[key] = dirty = true;
  }

  if (!dirty) return;
  this._state = assign(assign({}, oldState), newState);

  this._recompute(changed, this._state);

  if (this._bind) this._bind(changed, this._state);

  if (this._fragment) {
    this.fire("state", {
      changed: changed,
      current: this._state,
      previous: oldState
    });

    this._fragment.p(changed, this._state);

    this.fire("update", {
      changed: changed,
      current: this._state,
      previous: oldState
    });
  }
}

function _stage(newState) {
  assign(this._staged, newState);
}

function setDev(newState) {
  if (typeof newState !== 'object') {
    throw new Error(this._debugName + '.set was called without an object of data key-values to update.');
  }

  this._checkReadOnly(newState);

  set.call(this, newState);
}

function callAll(fns) {
  while (fns && fns.length) fns.shift()();
}

function _mount(target, anchor) {
  this._fragment[this._fragment.i ? 'i' : 'm'](target, anchor || null);
}

var PENDING = {};
exports.PENDING = PENDING;
var SUCCESS = {};
exports.SUCCESS = SUCCESS;
var FAILURE = {};
exports.FAILURE = FAILURE;

function removeFromStore() {
  this.store._remove(this);
}

var proto = {
  destroy,
  get,
  fire,
  on,
  set,
  _recompute: noop,
  _set,
  _stage,
  _mount,
  _differs
};
exports.proto = proto;
var protoDev = {
  destroy: destroyDev,
  get,
  fire,
  on,
  set: setDev,
  _recompute: noop,
  _set,
  _stage,
  _mount,
  _differs
};
exports.protoDev = protoDev;
},{}],"node_modules/svelte-dev-helper/lib/registry.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class registry {
  constructor() {
    this._items = {};
  }

  set(k, v) {
    this._items[k] = Object.assign({
      rollback: null,
      component: null,
      instances: []
    }, v);
  }

  get(k) {
    return k ? this._items[k] || undefined : this._items;
  }

  registerInstance(instance) {
    const id = instance.id;
    this._items[id] && this._items[id].instances.push(instance);
  }

  deRegisterInstance(instance) {
    const id = instance.id;
    this._items[id] && this._items[id].instances.forEach(function (comp, idx, instances) {
      if (comp == instance) {
        instances.splice(idx, 1);
      }
    });
  }

} // eslint-disable-next-line no-undef


const componentRegistry = window.__SVELTE_REGISTRY__ = new registry();
var _default = componentRegistry;
exports.default = _default;
},{}],"node_modules/svelte-dev-helper/lib/proxy.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.configure = configure;
exports.getConfig = getConfig;
exports.createProxy = createProxy;
Object.defineProperty(exports, "Registry", {
  enumerable: true,
  get: function () {
    return _registry.default;
  }
});

var _registry = _interopRequireDefault(require("./registry"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let proxyOptions = {
  noPreserveState: false
};

function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}

function getDebugName(id) {
  const posixID = id.replace(/[/\\]/g, '/');
  const name = posixID.split('/').pop().split('.').shift();
  return `<${capitalize(name)}>`;
}

function groupStart(msg) {
  console.group && console.group(msg);
}

function groupEnd() {
  console.groupEnd && console.groupEnd();
}

function configure(_options) {
  proxyOptions = Object.assign(proxyOptions, _options);
}

function getConfig() {
  return proxyOptions;
}
/*
creates a proxy object that
decorates the original component with trackers
and ensures resolution to the
latest version of the component
*/


function createProxy(id) {
  const handledMethods = '_mount,_unmount,destroy'.split(',');
  const forwardedMethods = 'get,fire,observe,on,set,teardown,_recompute,_set,_bind'.split(',');

  class proxyComponent {
    constructor(options) {
      this.id = id;
      this.__mountpoint = null;
      this.__anchor = null;
      this.__insertionPoint = null;
      this.__mounted = false;

      this._register(options);

      this._debugName = this.proxyTarget._debugName || getDebugName(this.id); // ---- forwarded methods ----

      const self = this;
      forwardedMethods.forEach(function (method) {
        self[method] = function () {
          return self.proxyTarget[method].apply(self.proxyTarget, arguments);
        };
      }); // ---- END forwarded methods ----
    } // ---- augmented methods ----


    _mount(target, anchor, insertionPoint) {
      this.__mountpoint = target;
      this.__anchor = anchor;

      if (insertionPoint) {
        this.__insertionPoint = insertionPoint;
      } else {
        // eslint-disable-next-line no-undef
        this.__insertionPoint = document.createComment(this._debugName);
        target.insertBefore(this.__insertionPoint, anchor);
      }

      this.__insertionPoint.__component__ = this;
      anchor = this.__insertionPoint.nextSibling;

      if (target.nodeName == '#document-fragment' && insertionPoint) {
        //handles #4 by forcing a target
        //if original target was a document fragment
        target = this.__insertionPoint.parentNode;
      }

      this.__mounted = true;
      return this.proxyTarget._mount(target, anchor);
    }

    destroy(detach, keepInsertionPoint) {
      _registry.default.deRegisterInstance(this);

      if (!keepInsertionPoint && this.__insertionPoint) {
        //deref for GC before removal of node
        this.__insertionPoint.__component__ = null;
        const ip = this.__insertionPoint;
        ip && ip.parentNode && ip.parentNode.removeChild(ip);
      }

      return this.proxyTarget.destroy(detach);
    }

    _unmount() {
      this.__mounted = false;
      return this.proxyTarget._unmount.apply(this.proxyTarget, arguments);
    } // ---- END augmented methods ----
    // ---- extra methods ----


    _register(options) {
      const record = _registry.default.get(this.id);

      try {
        //resolve to latest version of component
        this.proxyTarget = new record.component(options);
      } catch (e) {
        const rb = record.rollback;

        if (!rb) {
          console.error(e);
          console.warn('Full reload required. Please fix component errors and reload the whole page');
          return;
        }

        groupStart(this._debugName + ' Errors');
        console.warn(e);
        console.warn(this._debugName + ' could not be hot-loaded because it has an error'); //resolve to previous working version of component

        this.proxyTarget = new rb(options);
        console.info('%c' + this._debugName + ' rolled back to previous working version', 'color:green'); //set latest version as the rolled-back version

        record.component = rb;
        groupEnd();
      }

      _registry.default.set(this.id, record); //register current instance, so that
      //we can re-render it when required


      _registry.default.registerInstance(this); //proxy custom methods


      const self = this;
      let methods = Object.getOwnPropertyNames(Object.getPrototypeOf(self.proxyTarget));
      methods.forEach(function (method) {
        if (!handledMethods.includes(method) && !forwardedMethods.includes(method)) {
          self[method] = function () {
            return self.proxyTarget[method].apply(self.proxyTarget, arguments);
          };
        }
      }); //(re)expose properties that might be used from outside

      this.refs = this.proxyTarget.refs || {};
      this._fragment = this.proxyTarget._fragment;
      this._slotted = this.proxyTarget._slotted;
      this.root = this.proxyTarget.root;
      this.store = this.proxyTarget.store || null;
    }

    _rerender() {
      const mountpoint = this.__mountpoint || null,
            anchor = this.__anchor || null,
            options = this.proxyTarget.options,
            oldstate = this.get(),
            isMounted = this.__mounted,
            insertionPoint = this.__insertionPoint,
            handlers = this.proxyTarget._handlers;
      this.destroy(true, true);

      this._register(options); //re-attach event handlers


      const self = this;

      for (const ev in handlers) {
        const _handlers = handlers[ev];

        _handlers.forEach(function (item) {
          if (item.toString().includes('component.fire(')) {
            self.proxyTarget.on(ev, item);
          }
        });
      }

      if (mountpoint && isMounted) {
        this.proxyTarget._fragment.c();

        this._mount(mountpoint, anchor, insertionPoint); //work around _checkReadOnly in svelte (for computed properties)


        this.proxyTarget._updatingReadonlyProperty = true; //preserve local state (unless noPreserveState is true)

        if (!this.proxyTarget.constructor.noPreserveState && !proxyOptions.noPreserveState) {
          //manually flush computations and re-render changes
          let changed = {};

          for (let k in oldstate) {
            changed[k] = true;
          }

          this.proxyTarget._recompute(changed, oldstate);

          this.proxyTarget._fragment && this.proxyTarget._fragment.p(changed, oldstate); //set old state back

          this.set(oldstate);
        } else {
          //we have to call .set() here
          //otherwise oncreate is not fired
          this.set(this.get());
        }

        this.proxyTarget._updatingReadonlyProperty = false;
      }
    } // ---- END extra methods ----


  } //forward static properties and methods


  const originalComponent = _registry.default.get(id).component;

  for (let key in originalComponent) {
    proxyComponent[key] = originalComponent[key];
  }

  return proxyComponent;
}
},{"./registry":"node_modules/svelte-dev-helper/lib/registry.js"}],"node_modules/svelte-dev-helper/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _proxy = require("./lib/proxy");

Object.keys(_proxy).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _proxy[key];
    }
  });
});
},{"./lib/proxy":"node_modules/svelte-dev-helper/lib/proxy.js"}],"node_modules/parcel-plugin-svelte/src/hot-api.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.configure = configure;
exports.register = register;
exports.reload = reload;

var _svelteDevHelper = require("svelte-dev-helper");

let hotOptions = {
  noPreserveState: false
};

function configure(options) {
  hotOptions = Object.assign(hotOptions, options);
  (0, _svelteDevHelper.configure)(hotOptions);
}

function register(id, component) {
  // Store original component in registry
  _svelteDevHelper.Registry.set(id, {
    rollback: null,
    component,
    instances: []
  }); // Create the proxy itself


  const proxy = (0, _svelteDevHelper.createProxy)(id); // Patch the registry record with proxy constructor

  const record = _svelteDevHelper.Registry.get(id);

  record.proxy = proxy;

  _svelteDevHelper.Registry.set(id, record);

  return proxy;
}

function reload(id, component) {
  const record = _svelteDevHelper.Registry.get(id); // Keep reference to previous version to enable rollback


  record.rollback = record.component; // Replace component in registry with newly loaded component

  record.component = component;

  _svelteDevHelper.Registry.set(id, record); // Re-render the proxy instances


  record.instances.slice().forEach(instance => instance && instance._rerender()); // Return the original proxy constructor that was `register()`-ed

  return record.proxy;
}
},{"svelte-dev-helper":"node_modules/svelte-dev-helper/index.js"}],"node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"src/components/Comm/Comm.svelte":[function(require,module,exports) {
"use strict";

var _shared = require("svelte/shared.js");

/* src/components/Comm/Comm.svelte generated by Svelte v2.16.1 */
function add_css() {
  var style = (0, _shared.createElement)("style");
  style.id = 'svelte-qxw1x7-style';
  style.textContent = ".comm.svelte-qxw1x7{margin:0.8em}.comm.svelte-qxw1x7 a.svelte-qxw1x7{text-decoration:none}.comm.svelte-qxw1x7 a i.svelte-qxw1x7{color:#898989;transition:color 0.2s ease-in-out}.comm.svelte-qxw1x7 a:hover i.fa-twitter.svelte-qxw1x7{color:#00aced}.comm.svelte-qxw1x7 a:hover i.fa-linkedin-in.svelte-qxw1x7{color:#0077B5}.comm.svelte-qxw1x7 a:hover i.fa-github.svelte-qxw1x7{color:#333}.comm.svelte-qxw1x7 a:hover i.fa-envelope.svelte-qxw1x7{color:#4285F4}.comm.svelte-qxw1x7 i.svelte-qxw1x7{font-size:2.8em;margin:0 0.2em}";
  (0, _shared.append)(document.head, style);
}

function create_main_fragment(component, ctx) {
  var div;
  return {
    c: function c() {
      div = (0, _shared.createElement)("div");
      div.innerHTML = "<a href=\"https://twitter.com/stephensprinkle\" class=\"svelte-qxw1x7\"><i class=\"fab fa-twitter svelte-qxw1x7\"></i></a>\n\t\t\t  <a href=\"https://www.linkedin.com/in/stephensprinkle\" class=\"svelte-qxw1x7\"><i class=\"fab fa-linkedin-in svelte-qxw1x7\"></i></a>\n\t\t\t  <a href=\"https://github.com/stephensprinkle\" class=\"svelte-qxw1x7\"><i class=\"fab fa-github svelte-qxw1x7\"></i></a>\n\t\t\t  <a href=\"mailto:hi@sprinkle.io\" class=\"svelte-qxw1x7\"><i class=\"far fa-envelope svelte-qxw1x7\"></i></a>";
      div.className = "comm svelte-qxw1x7";
    },
    m: function m(target, anchor) {
      (0, _shared.insert)(target, div, anchor);
    },
    p: _shared.noop,
    d: function d(detach) {
      if (detach) {
        (0, _shared.detachNode)(div);
      }
    }
  };
}

function Comm(options) {
  (0, _shared.init)(this, options);
  this._state = (0, _shared.assign)({}, options.data);
  this._intro = true;
  if (!document.getElementById("svelte-qxw1x7-style")) add_css();
  this._fragment = create_main_fragment(this, this._state);

  if (options.target) {
    this._fragment.c();

    this._mount(options.target, options.anchor);
  }
}

(0, _shared.assign)(Comm.prototype, _shared.proto);

if (module.hot) {
  var _require = require('../../../node_modules/parcel-plugin-svelte/src/hot-api.js'),
      configure = _require.configure,
      register = _require.register,
      reload = _require.reload;

  module.hot.accept();

  if (!module.hot.data) {
    // initial load
    configure({});
    Comm = register('src/components/Comm/Comm.svelte', Comm);
  } else {
    // hot update
    Comm = reload('src/components/Comm/Comm.svelte', Comm);
  }
}

module.exports = Comm;
},{"svelte/shared.js":"node_modules/svelte/shared.js","../../../node_modules/parcel-plugin-svelte/src/hot-api.js":"node_modules/parcel-plugin-svelte/src/hot-api.js","_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/components/Footer/Footer.svelte":[function(require,module,exports) {
"use strict";

var _shared = require("svelte/shared.js");

/* src/components/Footer/Footer.svelte generated by Svelte v2.16.1 */
function add_css() {
  var style = (0, _shared.createElement)("style");
  style.id = 'svelte-1u4187i-style';
  style.textContent = "footer.svelte-1u4187i{font-family:'lato-thin' 'Helvetica Neue' sans-serif;opacity:0.7;text-align:center}i.svelte-1u4187i{color:red;font-size:0.8em}";
  (0, _shared.append)(document.head, style);
}

function create_main_fragment(component, ctx) {
  var footer;
  return {
    c: function c() {
      footer = (0, _shared.createElement)("footer");
      footer.innerHTML = "<p>made with <i class=\"fas fa-heart svelte-1u4187i\"></i> | \xA9 Stephen Sprinkle | All Rights Reserved</p>";
      footer.className = "svelte-1u4187i";
    },
    m: function m(target, anchor) {
      (0, _shared.insert)(target, footer, anchor);
    },
    p: _shared.noop,
    d: function d(detach) {
      if (detach) {
        (0, _shared.detachNode)(footer);
      }
    }
  };
}

function Footer(options) {
  (0, _shared.init)(this, options);
  this._state = (0, _shared.assign)({}, options.data);
  this._intro = true;
  if (!document.getElementById("svelte-1u4187i-style")) add_css();
  this._fragment = create_main_fragment(this, this._state);

  if (options.target) {
    this._fragment.c();

    this._mount(options.target, options.anchor);
  }
}

(0, _shared.assign)(Footer.prototype, _shared.proto);

if (module.hot) {
  var _require = require('../../../node_modules/parcel-plugin-svelte/src/hot-api.js'),
      configure = _require.configure,
      register = _require.register,
      reload = _require.reload;

  module.hot.accept();

  if (!module.hot.data) {
    // initial load
    configure({});
    Footer = register('src/components/Footer/Footer.svelte', Footer);
  } else {
    // hot update
    Footer = reload('src/components/Footer/Footer.svelte', Footer);
  }
}

module.exports = Footer;
},{"svelte/shared.js":"node_modules/svelte/shared.js","../../../node_modules/parcel-plugin-svelte/src/hot-api.js":"node_modules/parcel-plugin-svelte/src/hot-api.js","_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/components/Main/Main.svelte":[function(require,module,exports) {
"use strict";

var _shared = require("svelte/shared.js");

var _Comm = _interopRequireDefault(require("../Comm/Comm.svelte"));

var _Footer = _interopRequireDefault(require("../Footer/Footer.svelte"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* src/components/Main/Main.svelte generated by Svelte v2.16.1 */
function add_css() {
  var style = (0, _shared.createElement)("style");
  style.id = 'svelte-1s8l11l-style';
  style.textContent = "main.svelte-1s8l11l{display:flex;flex:1;flex-direction:column;width:100%;height:100%}section.svelte-1s8l11l{flex:1;display:flex;flex-direction:column;justify-content:center;align-items:center}.nucleus.svelte-1s8l11l{border:1px solid black;display:flex;justify-content:center;align-items:center;width:4em;height:4em}.nucleus.svelte-1s8l11l span.svelte-1s8l11l{display:block;font-size:2.6em}";
  (0, _shared.append)(document.head, style);
}

function create_main_fragment(component, ctx) {
  var main, section, div, text1, text2;
  var comm = new _Comm.default({
    root: component.root,
    store: component.store
  });
  var footer = new _Footer.default({
    root: component.root,
    store: component.store
  });
  return {
    c: function c() {
      main = (0, _shared.createElement)("main");
      section = (0, _shared.createElement)("section");
      div = (0, _shared.createElement)("div");
      div.innerHTML = "<span class=\"svelte-1s8l11l\">SS</span>";
      text1 = (0, _shared.createText)("\n    ");

      comm._fragment.c();

      text2 = (0, _shared.createText)("\n  ");

      footer._fragment.c();

      div.className = "nucleus svelte-1s8l11l";
      section.className = "svelte-1s8l11l";
      main.className = "svelte-1s8l11l";
    },
    m: function m(target, anchor) {
      (0, _shared.insert)(target, main, anchor);
      (0, _shared.append)(main, section);
      (0, _shared.append)(section, div);
      (0, _shared.append)(section, text1);

      comm._mount(section, null);

      (0, _shared.append)(main, text2);

      footer._mount(main, null);
    },
    p: _shared.noop,
    d: function d(detach) {
      if (detach) {
        (0, _shared.detachNode)(main);
      }

      comm.destroy();
      footer.destroy();
    }
  };
}

function Main(options) {
  (0, _shared.init)(this, options);
  this._state = (0, _shared.assign)({}, options.data);
  this._intro = true;
  if (!document.getElementById("svelte-1s8l11l-style")) add_css();
  this._fragment = create_main_fragment(this, this._state);

  if (options.target) {
    this._fragment.c();

    this._mount(options.target, options.anchor);

    (0, _shared.flush)(this);
  }
}

(0, _shared.assign)(Main.prototype, _shared.proto);

if (module.hot) {
  var _require = require('../../../node_modules/parcel-plugin-svelte/src/hot-api.js'),
      configure = _require.configure,
      register = _require.register,
      reload = _require.reload;

  module.hot.accept();

  if (!module.hot.data) {
    // initial load
    configure({});
    Main = register('src/components/Main/Main.svelte', Main);
  } else {
    // hot update
    Main = reload('src/components/Main/Main.svelte', Main);
  }
}

module.exports = Main;
},{"svelte/shared.js":"node_modules/svelte/shared.js","../Comm/Comm.svelte":"src/components/Comm/Comm.svelte","../Footer/Footer.svelte":"src/components/Footer/Footer.svelte","../../../node_modules/parcel-plugin-svelte/src/hot-api.js":"node_modules/parcel-plugin-svelte/src/hot-api.js","_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/app.js":[function(require,module,exports) {
"use strict";

var _Main = _interopRequireDefault(require("./components/Main/Main.svelte"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = new _Main.default({
  target: document.body
});
},{"./components/Main/Main.svelte":"src/components/Main/Main.svelte"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "63424" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/app.js"], null)
//# sourceMappingURL=/app.a6a4d504.js.map