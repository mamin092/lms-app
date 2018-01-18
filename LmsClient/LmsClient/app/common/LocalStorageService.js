var App;
(function (App) {
    var LocalStorageKeys;
    (function (LocalStorageKeys) {
        LocalStorageKeys[LocalStorageKeys["UserInfo"] = 0] = "UserInfo";
    })(LocalStorageKeys = App.LocalStorageKeys || (App.LocalStorageKeys = {}));
    var LocalStorageService = /** @class */ (function () {
        function LocalStorageService() {
            this.storage = localStorage;
        }
        LocalStorageService.prototype.save = function (key, value) {
            var storageKey = this.getStoragekey(key);
            var storageValue = JSON.stringify(value);
            this.storage.setItem(storageKey, storageValue);
        };
        LocalStorageService.prototype.get = function (key) {
            var storageKey = this.getStoragekey(key);
            var strItem = this.storage.getItem(storageKey);
            var item = JSON.parse(strItem);
            return item;
        };
        LocalStorageService.prototype.remove = function (key) {
            var storagekey = this.getStoragekey(key);
            this.storage.removeItem(storagekey);
        };
        LocalStorageService.prototype.getStoragekey = function (key) {
            var storagekey = LocalStorageKeys[key].toString();
            return storagekey;
        };
        return LocalStorageService;
    }());
    App.LocalStorageService = LocalStorageService;
    angular.module('app').service('LocalStorageService', LocalStorageService);
})(App || (App = {}));
//# sourceMappingURL=LocalStorageService.js.map