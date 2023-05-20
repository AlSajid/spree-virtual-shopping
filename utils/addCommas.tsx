export default function addCommas(num: number): string {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    // if (typeof (number) !== "number") return number;

    // const num = number.toString();
    // let output = "";

    // for (let i = num.length - 1; i >= 0; i--) {
    //     if (i === num.length - 4 || i === num.length - 6 || i === num.length - 8) {
    //         output = "," + output;
    //     }
    //     output = num[i] + output;
    // }

    // return output;

}