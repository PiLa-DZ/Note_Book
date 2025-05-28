// JavaScript Bitwise Operators:
// Bit operators work on 32 bits numbers. Any numeric operand in the operation is converted into a 32 bit number. The result is converted back to a JavaScript number.

// Oper Name 	       Example 	    Same as 	    Result 	Decimal 	Try it
// & 	AND        	   x = 5 & 1 	0101 & 0001 	0001 	1 	
// | 	OR 	           x = 5 | 1 	0101 | 0001 	0101 	5 	
// ~ 	NOT 	       x = ~ 5 	    ~0101 	        1010 	10 	
// ^ 	XOR 	       x = 5 ^ 1 	0101 ^ 0001 	0100 	4 	
// << 	Left shift 	   x = 5 << 1 	0101 << 1 	    1010 	10 	
// >> 	Right shift    x = 5 >> 1 	0101 >> 1 	    0010 	2 	
// >>> 	Unsigned right x = 5 >>> 1 	0101 >>> 1 	    0010 	2 	

/* Note: ------------------------------------------

	The table above uses 4 bits unsigned number. 
	Since JavaScript uses 32-bit signed numbers, 
	~ 5 will not return 10. It will return -6.

	~00000000000000000000000000000101 (~5)
	will return
	11111111111111111111111111111010 (-6)

------------------------------------------------ */
