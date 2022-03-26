#include <iostream>
#include <cmath>
#include <vector>
#include <string>

using std::cin;
using std::cout;
using std::endl;

// get range from a user
int* get_coords(int *coords){
    int x1, x2;

    cout << "Range\nX1: ";
    cin >> x1;

    cout << "X2: ";
    cin >> x2;

    coords[0] = x1;
    coords[1] = x2;

    return coords;
}

void output(const int x1 = -5, const int x2 = 5, const int width = 80, const int height = 21){
    std::vector<std::string> chart(height, std::string(width, ' '));
    chart[height/2] = std::string(width, '-');

    for(int i = 0; i < width; ++i)
        chart[static_cast<int>(round(10 * sin(i / 4.5) + 10))][i] = 'x';

    for(auto &&s : chart)
        cout << s << '\n';
}

int main(int argc, char *argv[]){
    // Handle extra arguments
    if (argc != 1)
    {
        cout << "Excessive amount of arguments!\nSyntax (Linux):\n\tFor G++\n";
        cout << "\t  ./a.out\n\tFor GCC\n\t  ./sin.o\n";
        cout << "Syntax (Windows):\n\tFor G++\n";
        cout << "\t  ./a.exe\n\tFor GCC\n\t  ./sin.exe";
        cout << endl;
        exit(EXIT_FAILURE);
    }
    
    int range[2];
    get_coords(range);
    
    output(range[0], range[1]);
  
    return EXIT_SUCCESS;
}