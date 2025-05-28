#include <iostream>
using namespace std;

void myFunction(string country = "Norway") {
  cout << country << endl;
}

int main() {
  myFunction("Sweden"); // Sweden
  myFunction(); // Norway
}

