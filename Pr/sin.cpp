#include <cctype>
#include <cstdlib>
#include <iostream>
#include <cmath>
#include <ostream>
#include "vector"

using std::cin;
using std::endl;
using std::cout;

int find_sin(){
    return 0;
}

void output(int width = 80, int height = 20){
    cout << width << ' ' <<  height << endl;
    cout << endl;

    for (size_t i = 0; i < height; i++) {
        if (i == height/2)
        {
            for (size_t k = 0; k < width/2; k++)
                cout << '-';
                
            cout << '|';

            for (size_t k = width/2; k < width; k++)
                cout << '-';
            
            cout << endl;
        }
        else
        {
            for (size_t k = 0; k < width/2; k++)
                cout << ' ';

            cout << '|';

            for (size_t k = width/2; k < width; k++)
                cout << ' ';

            cout << endl;
        }
    }

    cout << endl;
}

int main(int argc, char *argv[]){
    if (argc == 1)
        output();
    else if (argc == 2 && std::isdigit(*argv[1])){
        cout << *argv[1] << endl;
        output(*argv[1]);
    }
        
    else if (argc == 3 && std::isdigit(*argv[1]) && std::isdigit(*argv[2])){
        cout << *argv[1] << ' ' <<  *argv[2] << endl;
        output(*argv[1], *argv[2]);
    }
        
    else {
        cout << "Excessive amount of arguments or invalid value(s) was(were) specified\n";
        cout << "Syntax:\n\t./sin.cpp [width] [height]\n";
        cout << "Examples:\n\t./sin.cpp\n\t./sin.cpp 75\n\t./sin.cpp 60 15" << endl;
        exit(1);
    }
    
    cout << endl;
    return EXIT_SUCCESS;
}