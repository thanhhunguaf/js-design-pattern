// Object Literal
// Note: There should be no comma used after the final name/value pair in the object as this may result in errors.
let myObjectLiteral = {
    // variableKey: variableValue,
    page: 0,
    author: "Kun",
    bookName: "MyBook",

    getBookInfo: function () {
        // TODO
    }
};

let myBook = (function () {
    // Variable has been private
    let page = 0;
    let author = "Kun";
    let bookName = "MyBook";

    return {
        increaseNumberPage: function () {
            this.page++;
        },

        getBookAuthor: function () {
            return this.author;
        },

        getNumberOfPage: function () {
            return this.page;
        },

        getBookInfo: function () {
            console.log(`\`Book name: ${this.bookName}, Author: ${this.author}, Number of page: ${this.page}`)
        }
    };
})();

module.exports = myBook;