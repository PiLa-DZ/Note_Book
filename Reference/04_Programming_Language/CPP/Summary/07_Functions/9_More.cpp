#include <iostream> 
using namespace std;
int funInt(int a, int b) { 
	return a + b; 
}

float funFloat(float a,	float b) { 
	return a + b; 
}

string funString(string a, string b) { 
	return a + b; 
}

bool funBool(bool a, bool b) {
	return a && b;
}

void funVoid(string text, int a) {
	cout << text << a << endl;
}

int main() {
	cout << funInt(3, 7) << endl;			// 10
	cout << funFloat(2.7, 2.3) << endl;		// 5
	cout << funString("Hi ", "hi") << endl; // Hi hi
	cout << funBool(true, false) << endl;	// 0
	funVoid("Num --> ", 5);					// Num --> 5
}

// --------------------------------------------------------------------------
// Default Parameter
#include <iostream> 
using namespace std;
void print(string str = "Text Not Found!") {
	cout << str << endl; 
}
int main() {
	print("Hi there!"); // Hi there!
	print();			// Text Not Found!
}
// --------------------------------------------------------------------------
// Pass Argument By Reference
#include <iostream> 
using namespace std;
void swapNums(int &x, int &y) {
  int z = x;
  x = y;
  y = z;
}

int main() {
  int firstNum = 10;
  int secondNum = 20;

  cout << "Before swap: " << "\n";
  cout << firstNum << secondNum << "\n";

  // Call the function, which will change the values of firstNum and secondNum
  swapNums(firstNum, secondNum);

  cout << "After swap: " << "\n";
  cout << firstNum << secondNum << "\n";

  return 0;
}
// --------------------------------------------------------------------------
// Pass Array As an argument
void myFunction(int myNumbers[5]) {
  for (int i = 0; i < 5; i++) {
    cout << myNumbers[i] << "\n";
  }
}

int main() {
  int myNumbers[5] = {10, 20, 30, 40, 50};
  myFunction(myNumbers);
  return 0;
} 
// --------------------------------------------------------------------------
