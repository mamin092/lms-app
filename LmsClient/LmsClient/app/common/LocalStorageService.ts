module App {
    export enum LocalStorageKeys {
        UserInfo
    }

    export 
        class LocalStorageService {
        storage: Storage;
        constructor() {
            this.storage = localStorage;
        }

        save(key: LocalStorageKeys, value: any): void {
            let storageKey = this.getStoragekey(key);

            let storageValue = JSON.stringify(value);
            this.storage.setItem(storageKey, storageValue);

        }

        get(key: LocalStorageKeys): any {
            let storageKey = this.getStoragekey(key);
            let strItem = this.storage.getItem(storageKey);
            let item = JSON.parse(strItem);
            return item;
        }
        remove(key: LocalStorageKeys): void {
            let storagekey = this.getStoragekey(key);
            this.storage.removeItem(storagekey);
        }

        private getStoragekey(key: LocalStorageKeys): string {
            let storagekey = LocalStorageKeys[key].toString();
            return storagekey;
        }
    }
    angular.module('app').service('LocalStorageService', LocalStorageService);
} 