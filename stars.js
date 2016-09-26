
   const printStars = function(n) {
     if(n===0) {
	   return ' ';
	 }
     return '*' + printStars(n-1);
   };
   
    const space = function(n)  {
	  if(n===0)  {
	    return ' ';
	  }
	  return ' ' + space(n-1);
	};
	 
	const twoArgs = function(lines, MaxLines)  {
	  if (lines === 0) {
	    return ' ';
	  }
	   console.log(space(lines - 1) + printStars(2 * (MaxLines - lines + 1) - 1));
	   twoArgs(lines - 1, MaxLines);
	   return '*';
	};
	const triangleStars = function(n)  {
	  twoArgs(n,n);
	};
	triangleStars(5);


