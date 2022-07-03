        // 2. Повторить с switch, при условии 
        // num = 5 - "Tiny"
        // num = 10 - "Small"
        // num = 15 - "Medium"
        // num = 20 - "Large"
        // num = 25 - "Huge"

var num = prompt('please enter a number');
var result;

switch (num) {
    case "5":
    result = "Tiny"
    break;
    case "10":
        result = "Small"
        break;
    case "15":
        result = "Medium"
        break;
    case "20":
        result = "Large"
        break;
    case "25":
        result = "Huge"
        break;
    default:
        result = 'you have entered invalid data'
        break;

}

console.log(result);