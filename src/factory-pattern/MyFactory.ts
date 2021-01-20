interface IBook {
    typeOfBook(): String;
}

abstract class MyFactory {
    public abstract createBook(): IBook
}

class Book1 extends MyFactory {
    createBook(): IBook {
        return new HistoryBook();
    }
}

class Book2 extends MyFactory {
    createBook(): IBook {
        return new EconomyBook();
    }
}

class HistoryBook implements IBook {
    typeOfBook(): String {
        return "History Book";
    }
}

class EconomyBook implements IBook {
    typeOfBook(): String {
        return "Economy Book";
    }
}