export const convertDateToHRFormat = (date) => {

    console.log("date :" + date);
    const strArr = date.split("/");
    
    const day = strArr[0];
    const month = strArr[1].substring(0,3);
    const year = strArr[2].substring(0,4);

    return day + " " + month + " " + year;

}