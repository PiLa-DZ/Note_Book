# ---------------------------------------------------------
# Searching Algorithms
## Binary Search
	// Psuedo Code
		got to middle
			if middle == target
				return index
			if middle > target
				search in left
			if middle < target
				search in right
	// Analysis
		Worst Case
			- Search for first or last element
				- O(lg(n))
		Best Case
			- Search for the middle element 
				- O(1)
	// Implementation in C++
		#include <iostream>
		using namespace std;

		int binary_search(int arr[], int n, int len) {
			int start = 0;
			int end   = len - 1;
			int middle;

			while (end >= start) {
				middle = start + (end - start) / 2;

				if (arr[middle] == n) return middle;
				else if (arr[middle] > n) end = middle - 1;
				else start = middle + 1;
			}
			return -1;
		}

		int main() {
			// index	 0  1  2   3   4   5   6   7   8   9  10
			int arr[] = {1, 2, 8, 11, 17, 20, 23, 30, 31, 34, 40};
			int n = 21;
			int result = binary_search(arr, n, sizeof(arr)/sizeof(int));

			cout << "Result : " << result << endl << endl;
		}


