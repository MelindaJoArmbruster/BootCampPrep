let string = '';
let size = 8;
for (let lines=1; lines <= size; lines++) {
	for (let n=1; n <= size; n++) {
  	if ((lines + n) %2 !==0) string += " ";
    else string += "#";
  	}
	string += "\n";
} 
console.log(string)  
  