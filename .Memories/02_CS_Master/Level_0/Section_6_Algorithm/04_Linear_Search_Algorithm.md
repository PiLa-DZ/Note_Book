# ---------------------------------------------------------
# Searching Algorithms
## Linear Search
	// Pseudo Code
	for i = 0 to n
		if current element == target
			return index
	return -1
	
	// Analysis
	- Worst Case
		- Search for last element
		- O(n)
	- Best Case
		- Search for first element
		- O(1)
	
	// Implementation in C++
		#include <iostream>
		int Linear_Search_(int arr[], int target, int length) {
			for (int i = 0; i < length; i++)
				if (arr[i] == target) return i;
			return -1;
		}
		int main() {
			int arr[] = {20,3,4,14,5,6,7,21,34};
			int target = 14;
			int result = Linear_Search_(arr, target, sizeof(arr)/sizeof(int));
			std::cout << result << std::endl;
		}

