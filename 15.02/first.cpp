#include <cstdio>
#include <cstdlib>
#include <iostream>
#include <cmath>

int N = 2;

void task1(int *src_arr){
    float distance = 0, tmp = 0;
    int result[2] = {1,2};

    for (size_t i = 2; i < N*2; i=i+2) {
        for (size_t j = 0; j < N*2; j=j+2) {
            tmp = sqrt(pow((src_arr[i]-src_arr[j]),2) + pow((src_arr[i+1]-src_arr[j+1]),2));
            if (tmp > distance) {
                distance = tmp;
                result[0] = i/2+1;
                result[1] = j/2+1;
            }
        }
    }

    printf("The biggest distance is between dotes №%i and №%i \n", result[0],result[1]);
}

void task2(){
    int result[3] = {0,1,2};
}

int main(){
    int dotes[2][4] = {3,4,4,3};
    task1(*dotes);

    return EXIT_SUCCESS;
}
