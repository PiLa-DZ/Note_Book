// Get one word from user --------------------
#include <iostream> 
using namespace std;

int main() {
	string str;
	cout << "Enter your name: ";
	cin >> str;	// User input is --> Nabil Dahman
	cout << "Your name is: " << str << endl; // Output is --> Nabil
}

// Get two word from user --------------------
#include <iostream> 
using namespace std;

int main() {
	string str;
	cout << "Enter your name: ";
	getline (cin, str); // User input is --> Nabil Dahman
	cout << "Your name is: " << str << endl; // Output is --> Nabil Dahman
}

