function theTruthCounts(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    if (Array.isArray(element)) {
      count += theTruthCounts(element);
    } else {
      if (element) {
        count++;
      }
    }
  }
  return count;
}
