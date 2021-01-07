export default class MySingleton {
    private static instance: MySingleton;
    /**
     * Prevent calls with the `new` operator, should be private
     */
    private constructor() {
    }

    /**
     * The static method controls the access
     * to make sure just one instance of each subclass
     */
    public static getInstance() {
        if(MySingleton.instance) {
            MySingleton.instance = new MySingleton();
        }
        return MySingleton.instance;
    }

    // Region logic ================================================
    public getBookInfo() {
        return MyBook.getBookInfo();
    }
    // =============================================================
}