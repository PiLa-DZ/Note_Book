// Chack if string is Palindrome String
/* Pseudo Code

// Examples
	// level || ava 
	// avva  || noon

// ---------------------------------------------------------------------------

word = // Enter any word
Is_Palindrome = Ture

for i = 0; i < word.length / 2; i++ :
	if word[i] != word[ word.length - 1 - i] // if fist char equal last char 
		Is_Palindrome = False

if Is_Palindrome == True
	Print This word is palindrome

// ---------------------------------------------------------------------------
*/

#include <iostream>
using namespace std;

int main() {
	string word;
	bool Is_Palindrome = true;

	getline(cin, word);

	for (int i = 0; i < word.length() / 2; i++)
		if (word[i] != word[word.length()-1-i]) Is_Palindrome = false;

	if (Is_Palindrome) cout << "This word is Palindrome" << endl;
	else			   cout << "This word is not Palindrome" << endl;

}
