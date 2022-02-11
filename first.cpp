#include <cstdlib>
#include <iostream>
#include <cmath>

using std::cout; using std::endl;

int N = 2;

int* task1(int *src_arr){
    float distance = 0, tmp = 0;
    int result[2] = {0,1};

    for (size_t i = 2; i < N*2; i=i+2) {
        for (size_t j = 0; j < N*2; j=j+2) {
            tmp = sqrt(pow((src_arr[i]-src_arr[j]),2) + pow((src_arr[i+1]-src_arr[j+1]),2));
            if (tmp > distance) {
                distance = tmp;
                result[0] = i/2;
            }
        }
    }

    return result;
}

int* task2(){
    int result[3] = {0,1,2};
    return result;
}

int main(){
    int dotes[2][4] = {3,4,4,3};
    cout << task1(*dotes) << endl;

    return EXIT_SUCCESS;
}
