#include <array>
#include <iostream>
#include <cmath>
#include <vector>

using std::vector;
using std::pair;
using std::array;

const int N = 16;

void task1(vector<pair<int, int>> dotes){
    float distance = 0, tmp = 0;
    array<int, 2> result;

    for (size_t i = 0; i < N; i++) {
        for (size_t j = i; j < N; j++) {
            tmp = sqrt(pow(dotes[i].first-dotes[j].first,2) + pow(dotes[i].second-dotes[j].second,2));
            if (tmp > distance){
                distance = tmp;
                result[0] = i+1;
                result[1] = j+1;
            }
        }
    }

    printf("The biggest distance is between dotes №%i and №%i \n", result[0],result[1]);
}

void task2(vector<pair<int, int>> dotes){
    array<int, 3> result;

    printf("The biggest distance is between dotes №%i, №%i and №%i\n", result[0],result[1], result[2]);
}

int main(){
    const vector<pair<int, int>> dotes = {{3,4},{4,3},{8,9},{5,2},{-6,2},{9,4},{11,-6},{3,7},{-9,-9},{13,0},{-4,3},{1,-4},{3,3},{6,5},{-6,-5},{0,0}};
    task1(dotes);
    task2(dotes);

    return EXIT_SUCCESS;
}
