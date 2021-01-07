const myBook = require("../module-pattern/MyModuleWithJS");

let MySingleton = (function () {
    let instance;

    function init() {
        // private variables and methods here
        return {
            // public private variables and methods
            getBookInfo: myBook.getBookInfo()
        }
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = init();
            }
            return instance;
        }
    }

})();