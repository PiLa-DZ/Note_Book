function factorial(n, x) {
	if (n == 1) return 1;
	return n * factorial(n-1);
}

console.log(factorial(5));
