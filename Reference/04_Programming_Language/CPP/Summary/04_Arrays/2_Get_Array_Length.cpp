#include <iostream>
using namespace std;

int main() {
	int arr[]  = {1, 2, 3};

	int size = sizeof(arr); // How many byets of array

	int length = sizeof(arr) / sizeof(int); // Get array length

	cout << size << endl;	// 12
	cout << length << endl;	// 3
}
