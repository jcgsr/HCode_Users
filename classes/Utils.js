class Utils {
    /*
    static dateFormat(date) {
        return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' ' + date.getHours() + ':' + date.getMinutes()
    }
    */

    static dateFormat(date) {

        let dateStorage = new Date();
        let yda = dateStorage.toLocaleDateString();
        let hmsTime = dateStorage.toLocaleTimeString();

        return date = yda + ' ' + hmsTime;
    }
}