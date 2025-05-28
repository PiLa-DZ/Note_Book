// Get Max Number

/* Pseudo Code 
--------------------------------------------------------------
Function get_Max_Number (int arr = "Array of integers") {
	Var big = arr[0]

	for (elm in arr)
		if (big < elm)
			big = elm
		
	return big
}
--------------------------------------------------------------
*/

#include <iostream>
using namespace std;

int Get_Max_Number(int arr[], int length) {
	int big = arr[0];
	
	for (int i = 0; i < length; i++) {
		if (big < arr[i]) {
			big = arr[i];
		}
	}

	return big;
}

int main() {
	int a[] = {18, 33, 11, 9};

	cout << Get_Max_Number(a, 4) << "\n";

}
