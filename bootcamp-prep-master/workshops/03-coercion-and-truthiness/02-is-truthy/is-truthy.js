
/*function isTruthy(arg) {
    if (typeof arg == 'boolean' && arg === true) return true;
    if (typeof arg == 'number' && arg !== 0) return true;
    if (typeof arg == 'string' && arg !== '') return true;
    
    if (typeof arg == 'boolean' && arg === false) return 'The boolean value false is falsey';
    if (typeof arg == 'object' && arg === null) return 'The null value is falsey';
    if (typeof arg == 'undefined') return 'undefined is falsey';
    if (typeof arg == 'number' && arg === 0) return 'The number 0 is falsey (the only falsey number)';
    if (typeof arg == 'string' && arg === '') return 'The empty string is falsey (the only falsey string)';
    
}*/

function isTruthy(arg) {
    if (arg) {
        return true; 
    } if (arg === false) {
    return 'The boolean value false is falsey';
    } if (arg === null) {
    return 'The null value is falsey';
    } if (arg === undefined) {
    return 'undefined is falsey';
    } if (arg === 0) {
    return 'The number 0 is falsey (the only falsey number)';
    } if (arg === '') {
    return 'The empty string is falsey (the only falsey string)';
    }
}