/* Psuedo Code
// Get First N Prime Numbers

N =					// How many first prime numbers you want
Current_Prime = 2	// Current prime start from 2
Arr_Prime[N]		// We will store all primes numbers in this array, N = Length of array
Find_Primes   = 0	// How many primes numbers we found

while N > 0 :
	Is_Prime = True
		
	for i = 2; i < Current_Prime; i++
		if (Current_Prime % i) == 0
			Current_Prime++
			Is_Prime = False
			break

	if (Is_Prime == True)
		Arr_Of_Prime[Find_Prime] = Current_Priem;
		Find_Primes++;
		Current_Prime++;
		N--;

// Print all Arr_Prime array
*/

#include <iostream>
using namespace std;

int main() {
	int N = 10;
	int Current_Prime = 2;
	int Arr_Prime[N];
	int Find_Primes = 0;

	while (N > 0) {
		bool Is_Prime = true;

		for (int i = 2; i < Current_Prime; i++) {
			if ((Current_Prime % i) == 0) {
				Current_Prime++;
				Is_Prime = false;
				break;
			}
		}
		if (Is_Prime == true) {
			Arr_Prime[Find_Primes] = Current_Prime;
			Find_Primes++;
			Current_Prime++;
			N--;
		}
	}

	for (int i : Arr_Prime) {
		cout << i << endl;
	}
}

