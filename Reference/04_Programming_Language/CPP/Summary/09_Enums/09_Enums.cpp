// ----------------------------------------------------------------
// Example 1

enum levels {
	Easy,		// Return 0
	Hard,		// Return 1
	Very_Hard	// Return 1
};

enum levels Player_1 = Easy;
enum levels Player_2 = Hard;
enum levels Player_3 = Very_Hard;

cout << Player_1 << endl;
cout << Player_2 << endl;
cout << Player_3 << endl;

Player_1 == 0 ? cout << "True_\n" : cout << "False";
Player_1 == Easy ? cout << "True_\n" : cout << "False";
	
// ----------------------------------------------------------------
// Example 2

enum levels {
	Easy		= 25,	// Return 25
	Hard		= 50,	// Return 50
	Very_Hard	= 75	// Return 75
};

	
// ----------------------------------------------------------------
// Example 3

enum levels {
	Easy = 25,	// Return 25
	Hard,		// Return 26
	Very_Hard	// Return 27
};

