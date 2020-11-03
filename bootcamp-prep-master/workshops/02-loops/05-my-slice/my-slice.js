function mySlice(str, start, end) {
    if (!end) {
        return str.substr(start);
    } else if (!start && !end) {
        return str;
    } else {
        return str.substr(start, (end - start));
    }
}
