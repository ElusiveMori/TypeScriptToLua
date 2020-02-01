declare namespace _G {
    let TS__CLASS__REGISTRY: { [id: string]: LuaClass };
}

_G.TS__CLASS__REGISTRY = _G.TS__CLASS__REGISTRY || {};

function __TS__Class(this: void, id: string): LuaClass {
    if (id !== undefined && _G.TS__CLASS__REGISTRY[id]) {
        return _G.TS__CLASS__REGISTRY[id];
    } else {
        const c = {} as LuaClass;
        c.__index = c;
        c.prototype = {};
        c.prototype.__index = c.prototype;
        c.prototype.constructor = c;
        if (id !== undefined) {
            _G.TS__CLASS__REGISTRY[id] = c;
        }
        return c;
    }
}
