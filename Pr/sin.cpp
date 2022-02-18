#include <cctype>
#include <cstdlib>
#include <iostream>
#include <cmath>
#include <ostream>
#include <vector>

using std::cin; using std::cout; using std::endl;
using std::vector;
using std::pair;

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

// calculate all values within specified range
vector<pair<int,double>> calc_values(int x1 = -5, int x2 = 5){
    vector<pair<int,double>> res;
    for (int i = x1; i <= x2; i++)
        res.push_back(std::make_pair(i,sin(i)));        

    return res;
}

void output(const vector<pair<int,double>> values, const int x1 = -5, const int x2 = 5, const int width = 60, const float height = 1){
    for (float i = 0; i <= height+0.1; i+=0.05) {
        if (fabs(i - height/2) > 0.00001)
        {
            for (size_t k = 0; k < width/2; k++)
                cout << ' ';

            cout << '|';

            for (size_t k = width/2; k < width; k++)
                cout << ' ';

            cout << endl;
        }
        else {
            for (size_t k = 0; k < width/2; k++)
                cout << '-';

            cout << '*';

            for (size_t k = width/2; k < width; k++)
                cout << '-';

            cout << endl;
        }
    }

    cout << endl;
}

int main(int argc, char *argv[]){
    int range[2];
    get_coords(range);

    vector<pair<int,double>> points;
    points = calc_values();

    output(points);

    return EXIT_SUCCESS;
}