import moment from 'moment'

export default {
    /**
     * getNowDateStr
     * @returns string
     * 
     * 現在日時をYYYY-MM-DD HH:mm:ss SSS ZZ形式の文字列で返却する
     */
    getNowDateStr(): string {
        return moment(new Date()).format("YYYY-MM-DD HH:mm:ss SSS ZZ");
    },

    /**
     * getAnyStr
     * @param joint 
     * @param values 
     * @returns string
     * 
     * anyの配列を文字列に変換する
     */
    getAnyStr(joint: string, values: any[]): string {
        let str = "";
        values.forEach((val) => {
            switch(typeof val) {
                case "string":
                    str = str + joint + val
                    break
                case "number":
                    str = str + joint + val.toString()
                    break
                case "object":
                    str = str + "\n" + joint + JSON.stringify(val)
                    break
                default:
                    str = str + joint + val.toString()
            }
        })
        return str;
    }
}