// We can use namespace instead of
// https://www.typescriptlang.org/docs/handbook/namespaces.html
namespace MyBook {
    let page: number = 0;
    let author: string = "Kun";
    export let bookName: string = "MyBook"; // public variable

    export function increaseNumberPage() {
        page++;
    }

    export function getBookAuthor() {
        return author;
    }

    export function getNumberOfPage() {
        return page;
    }

    export function getBookInfo() { // public method
        return `Book name: ${bookName}, Author: ${author}, Number of page: ${page}`
    }
}