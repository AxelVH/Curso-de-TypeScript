"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
//Atributos y metodos estaticos / static
var Curso = /** @class */ (function () {
    function Curso(_id, _nombre) {
        this._id = _id;
        this._nombre = _nombre;
    }
    Object.defineProperty(Curso.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Curso.prototype, "nombre", {
        get: function () {
            return this._nombre;
        },
        enumerable: true,
        configurable: true
    });
    Curso.getInfo = function (curso) {
        return JSON.stringify(curso);
    };
    Curso.Cursos = "Typescript, Angular";
    return Curso;
}());
var Escuela = /** @class */ (function () {
    function Escuela(_id, _nombre) {
        this._id = _id;
        this._nombre = _nombre;
        this.cursos = [];
    }
    Escuela.prototype.agregarCurso = function (curso) {
        this.cursos.push(curso);
    };
    Object.defineProperty(Escuela.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (id) {
            this._id = id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Escuela.prototype, "nombre", {
        get: function () {
            return this._nombre;
        },
        set: function (nombre) {
            this._nombre = nombre;
        },
        enumerable: true,
        configurable: true
    });
    return Escuela;
}());
var EscuelaDigital = /** @class */ (function (_super) {
    __extends(EscuelaDigital, _super);
    function EscuelaDigital(id, nombre, _paginaWeb) {
        var _this = _super.call(this, id, nombre) || this;
        _this._paginaWeb = _paginaWeb;
        return _this;
    }
    Object.defineProperty(EscuelaDigital.prototype, "paginaWeb", {
        get: function () {
            return this._paginaWeb;
        },
        set: function (paginaWeb) {
            this._paginaWeb = paginaWeb;
        },
        enumerable: true,
        configurable: true
    });
    return EscuelaDigital;
}(Escuela));
//let new_escuela = new Escuela(1,"EDAxel"); //es una clase abstract y por lo tanto no se puede crear un objeto de esta clase
var new_ed = new EscuelaDigital(1, "EDteam", "wwww.EDteam.com");
var curso_ts = new Curso(1, "Typescript");
var curso_js = new Curso(2, "Javascript");
new_ed.agregarCurso(curso_ts);
new_ed.agregarCurso(curso_js);
console.log(new_ed);
console.log(Curso.Cursos);
console.log(Curso.getInfo(curso_js));
