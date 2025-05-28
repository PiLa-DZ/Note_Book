// --------------------------------------------------------------
// Basic
int a  = 5;
int &b = a;

cout << b  << endl; // Output 5
cout << &a << endl; // Output Memory Address 0x7ffed

// --------------------------------------------------------------
int  a = 5;
int* b = &a;		// A pointer variable // Output Memory Address 0x7ffed

// This is Wrong!!!
	int		a = 5;
	string* b = &a;

// --------------------------------------------------------------
// There are three ways to declare pointer variables, but the first way is preferred
int   a = 5;
int*  b = &a;		// Preferred
int * c = &a;
int  *d = &a;

// --------------------------------------------------------------
int  a = 5;
int* b = &a;

cout <<  a << endl; // 5
cout <<  b << endl; // Output Memory Address of a	--> 0x7ffed
cout << *b << endl; // Output Value of a			--> 5

*b = 6;

cout <<  a << endl; // 6
cout <<  b << endl; // Output Memory Address of a	--> 0x7ffed
cout << *b << endl; // Output Value of a			--> 6

// =======================================================================
// Example 1
int  a = 5;
int  b = a;
cout << &a;		// Output Address of a
cout << &b;		// Output Address of b

// -----------------------------------------------
// Example 2
int  a = 5;
int &b = a;
cout <<  b;		// Output 5
cout << &a;		// Output Address of a
cout << &b;		// Output Address of a

// -----------------------------------------------
// Example 3
int  a =  5;
int* p = &a;

cout <<  p;		// Output Address of a
cout << *p;		// Output 5

*b = 6;
cout << *p;		// Output 6

// -----------------------------------------------
// Example 4

int arr[] = {11,22,33,44,55};
cout << &arr[0] << endl; // Output Address of arr[0]
cout << arr		<< endl; // Output Address of arr[0]

// -----------------------------------------------
// Example 5
int arr[] = {11,22,33,44,55};
cout << &arr[1]		<< endl;	// Output Address of arr[1]
cout << &arr[0] + 1 << endl;	// Output Address of arr[1]
cout <<	arr	+ 1		<< endl;	// Output Address of arr[1]

// -----------------------------------------------
// Example 6
int arr[] = {11,22,33,44,55};
cout <<	*arr	   << endl; // Output Value of arr[0]
cout << *(arr + 1) << endl; // Output Value of arr[1]
cout << *(arr + 2) << endl; // Output Value of arr[2]
cout << *(arr + 3) << endl; // Output Value of arr[3]
cout << *(arr + 4) << endl; // Output Value of arr[4]

// -----------------------------------------------
// Example 7
int arr[] = {11,22,33,44,55};
int* p = arr;

cout << *p			<< endl; // Output Value of arr[0]
cout << *(p + 1)	<< endl; // Output Value of arr[1]
cout << *(p + 2)	<< endl; // Output Value of arr[2]
cout << *(p + 3)	<< endl; // Output Value of arr[3]
cout << *(p + 4)	<< endl; // Output Value of arr[4]

// -----------------------------------------------
// Example 8
int arr[] = {11,22,33,44,55};
int* p = arr;

cout << *p << endl; // Output Value of arr[0]
p++;
cout << *p << endl; // Output Value of arr[1]
p++;
cout << *p << endl; // Output Value of arr[2]
p++;
cout << *p << endl; // Output Value of arr[3]
p++;
cout << *p << endl; // Output Value of arr[4]
p--;
cout << *p << endl; // Output Value of arr[3]

// -----------------------------------------------
// Example 9
int a = 1025; // 00000000 00000000 00000100 00000001
int* b = &a;
char* p = (char*)b; // Typecasting
cout << *p << endl; // 00000001
cout << *(p + 1) << endl; // 00000100

// -----------------------------------------------
// Example 10
int a = 5;
void* p = &a;

cout << &a	<< endl; // Output Address of a
cout << p	<< endl; // Output Address of a

// -----------------------------------------------
// Example 11
int		a =  5;	// int
int*	b = &a;	// int point
int**	c = &b;	// int point point
int***	d = &c;	// int point point point

cout << "-----------------------------------------------------" << endl;

cout << "  a --> Value of a                   --> "; cout <<  a << endl;
cout << " &a --> Address of a                 --> "; cout << &a << endl;
cout << " *b --> Value of a                   --> "; cout << *b << endl;
cout << "  b --> Value of b   = Address of a  --> "; cout <<  b << endl;

cout << "-----------------------------------------------------" << endl;

cout << "  b --> Value of b   = Address of a  --> "; cout <<  b << endl;
cout << " &b --> Address of b                 --> "; cout << &b << endl;
cout << " *c --> Value of b   = Address of a  --> "; cout << *c << endl;
cout << "  c --> Value of c   = Address of b  --> "; cout <<  c << endl;

cout << "-----------------------------------------------------" << endl;

cout << "  c --> Value of c   = Address of b  --> "; cout <<  c << endl;
cout << " &c --> Address of c                 --> "; cout << &c << endl;
cout << " *d --> Velue of c   = Address of b  --> "; cout << *d << endl;
cout << "  d --> Value of d   = Address of c  --> "; cout <<  d << endl;

cout << "-----------------------------------------------------" << endl;
// Output
// -----------------------------------------------------
//   a --> Value of a                   --> 5
//  &a --> Address of a                 --> 0x7ffde68339cc
//  *b --> Value of a                   --> 5
//   b --> Value of b   = Address of a  --> 0x7ffde68339cc
// -----------------------------------------------------
//   b --> Value of b   = Address of a  --> 0x7ffde68339cc
//  &b --> Address of b                 --> 0x7ffde68339d0
//  *c --> Value of b   = Address of a  --> 0x7ffde68339cc
//   c --> Value of c   = Address of b  --> 0x7ffde68339d0
// -----------------------------------------------------
//   c --> Value of c   = Address of b  --> 0x7ffde68339d0
//  &c --> Address of c                 --> 0x7ffde68339d8
//  *d --> Velue of c   = Address of b  --> 0x7ffde68339d0
//   d --> Value of d   = Address of c  --> 0x7ffde68339d8
// -----------------------------------------------------

// -----------------------------------------------
// Example 12
int		a =  5;	// Value of a
int*	b = &a;	// Address of a
int**	c = &b;	// Address of b
int***	d = &c;	// Address of c

cout << "-----------------------------------------------------" << endl;
cout << "Value of a " << endl;
cout << a << endl;
cout << *b << endl;
cout << **c << endl;
cout << ***d << endl;

cout << "-----------------------------------------------------" << endl;
cout << "Address of a = Value of b" << endl;
cout << &a << endl;
cout << b << endl;
cout << *c << endl;
cout << **d << endl;

cout << "-----------------------------------------------------" << endl;
cout << "Address of b = Value of c" << endl;
cout << &b << endl;
cout << c << endl;
cout << *d << endl;

cout << "-----------------------------------------------------" << endl;
cout << "Address of c = Value of d" << endl;
cout << &c << endl;
cout << d << endl;

cout << "-----------------------------------------------------" << endl;
cout << "Address of d" << endl;
cout << &d << endl;

cout << "-----------------------------------------------------" << endl;
// -----------------------------------------------
// Example 13
#include <iostream>
using namespace std;

void increment(int* b) {
	*b = (*b) + 1;
}

int main() {
	int a = 1;
	cout << "Before increment --> " << a << endl; // Output 1
	increment(&a);
	cout << "After  increment --> " << a << endl; // Output 2
}
// -----------------------------------------------
// Whit is wrong!!!
#include <iostream>
using namespace std;

void increment(int b) {
	b = b + 1;
}

int main() {
	int a = 1;
	cout << "Before increment --> " << a << endl; // Output 1
	increment(a);
	cout << "After  increment --> " << a << endl; // Output 1
}
// -----------------------------------------------
// Example 14
// Pass the array to parameter in c++
#include <iostream>
using namespace std;

int all(int Arr[], int Arr_length) {
	int sum;
	for (int i = 0; i < Arr_length; i++) {
		sum = sum + Arr[i];
	}
	return sum;
}

int main() {

	int arr[] = {1,2,3,4,5,6}; // = 21

	int arr_length = sizeof(arr) / sizeof(int);

	int sum = all(arr, arr_length);

	cout << sum << endl;

}
// -----------------------------------------------
// Example 15
// Pass the array to parameter in c++
#include <iostream>
using namespace std;

int all(int* Arr, int Arr_length) {
	int sum;
	for (int i = 0; i < Arr_length; i++) {
		sum = sum + Arr[i];
	}
	return sum;
}

int main() {
	int arr[] = {1,2,3,4,5,6}; // = 21
	int arr_length = sizeof(arr) / sizeof(int);
	int sum = all(arr, arr_length); // ==> int sum = all(&arr[0], arr_length);
	cout << sum << endl;
}
// -----------------------------------------------
// Example 16
// Pass the array to parameter in c++
// This Will change the original Array
// Remember Incrument
#include <iostream>
using namespace std;

void Double(int Arr[], int Arr_length) {
	for (int i = 0; i < Arr_length; i++) {
		Arr[i] = 2 * Arr[i];
	}
}
int main() {
	int arr[] = {1,2,3,4,5,6}; // = 21
	int arr_length = sizeof(arr) / sizeof(int);

	Double(arr, arr_length);

	for (int i = 0; i < arr_length; i++) {
		cout << arr[i] << endl;
	}
}
// -----------------------------------------------
// Example 17
// Null trmination in c++
#include <iostream>
using namespace std;

int main() {

	char c[6];
	c[0] = 'N';
	c[1] = 'a';
	c[2] = 'b';
	c[3] = 'i';
	c[4] = 'l';
	c[5] = '\0';

	cout << c << endl;			// Output Nabil
	cout << sizeof(c) << endl;  // Output 6

}
// -----------------------------------------------
// Example 18
// Null trmination in c++
// This is true
#include <iostream>
using namespace std;
int main() {
	char c[6] = "Nabil";
	cout << c << endl;			// Output Nabil
	cout << sizeof(c) << endl;  // Output 6

}
// -----------------------------------------------
// Example 19
// Null trmination in c++
// This is wrong???
#include <iostream>
using namespace std;
int main() {
	char c[5] = "Nabil";
	cout << c << endl;			// Output Nabil
	cout << sizeof(c) << endl;  // Output 6
}
// -----------------------------------------------
// Example 20
// Two dimensional array pointer
// 2D Array
// This is wrong???
#include <iostream> 
using namespace std;
int main() {
	int arr[2][3] = {{1,2,3},{4,5,6}};
	int* ptr = &arr; // This is wrong???
	int* ptr = arr[0]; // This is right
	cout << arr << endl;
	cout << &arr[0][0] << endl;
}
// -----------------------------------------------
// Example 21
// Stack Example 1
#include <iostream> 
using namespace std;
int *add(int* A, int* B){
	int Sum = (*A) + (*B);
	int* p = &Sum;
	return p;
}
int main() {
	int a = 2;
	int b = 4;
	int* sum = add(&a, &b);
	cout << *sum << endl;
}
// Output
// 6

// -----------------------------------------------
// Example 22
// Stack Example 2
#include <iostream> 
using namespace std;
void print() {
	cout << "Hi there!" << endl;
}
int *add(int* A, int* B){
	int Sum = (*A) + (*B);
	int* p = &Sum;
	return p;
}
int main() {
	int a = 2;
	int b = 4;
	int* sum = add(&a, &b);
	print();
	cout << *sum << endl;
}
// Output
// Hi there!
// 0

