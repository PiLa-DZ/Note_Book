#include <iostream>

int main(){
  auto result = (10 <=> 20) > 0;
  std::cout << result << std::endl;
}

// Note:
// To compile c++20 you have to add -std=c++20
// Example:
// $ c++ -o app app.cpp -std=c++20
