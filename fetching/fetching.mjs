"use strict";
// FETCHING DE DATOS EN TYPESCRIPT
Object.defineProperty(exports, "__esModule", { value: true });
exports.Visibility = exports.Type = exports.Language = exports.DefaultBranch = void 0;
var DefaultBranch;
(function (DefaultBranch) {
    DefaultBranch["Dev"] = "dev";
    DefaultBranch["Main"] = "main";
    DefaultBranch["Master"] = "master";
})(DefaultBranch || (exports.DefaultBranch = DefaultBranch = {}));
var Language;
(function (Language) {
    Language["HTML"] = "HTML";
    Language["JavaScript"] = "JavaScript";
    Language["ObjectiveC"] = "Objective-C";
    Language["TypeScript"] = "TypeScript";
})(Language || (exports.Language = Language = {}));
var Type;
(function (Type) {
    Type["Organization"] = "Organization";
    Type["User"] = "User";
})(Type || (exports.Type = Type = {}));
var Visibility;
(function (Visibility) {
    Visibility["Public"] = "public";
})(Visibility || (exports.Visibility = Visibility = {}));
var API_URL = "https://api.github.com/search/repositories?q=javascript";
var response = await fetch(API_URL);
if (!response.ok)
    throw new Error("Request failed");
var data = (await response.json());
data.items.map(function (repo) {
    return {
        name: repo.name,
        id: repo.id,
        url: repo.html_url,
    };
});
