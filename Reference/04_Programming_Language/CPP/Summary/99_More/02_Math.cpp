|---------------------------------------------------------------------------|
| max(3, 21);                         |                                     |
| min(3, 21);                         |                                     |
| sqrt(64);                           |                                     |
| round(2.6);                         |                                     |
| log(2);                             |                                     |
|_____________________________________|_____________________________________|

// ------------------------------------------------------------
// Get random number every Nano-Seconds
#include <iostream>
#include <cstdlib>
#include <time.h>
using namespace std;

int random_(int min, int max) {
    struct timespec ts;
    clock_gettime(CLOCK_MONOTONIC, &ts);
    srand((time_t)ts.tv_nsec);

	return (rand() % (max - min + 1)) + min;
}

int main() {
	cout << random_(0,10) << "\n"; 
	cout << random_(0,10) << "\n"; 
	cout << random_(0,10) << "\n"; 
}
// ------------------------------------------------------------


