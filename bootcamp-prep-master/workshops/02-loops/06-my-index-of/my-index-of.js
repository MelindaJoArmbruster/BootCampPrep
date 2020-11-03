function myIndexOf(source, searchValue, startIdx) {
    if (source.includes(searchValue) === false) {
        return -1;
    } else {
        if (startIdx > 0) {
            const partSource = source.slice(startIdx);
            if (partSource.search(searchValue) >= 0) {
                return (startIdx + (partSource.search(searchValue)));
            } else {
                return -1;
            }
        }
        
        return source.search(searchValue);
    }
}
