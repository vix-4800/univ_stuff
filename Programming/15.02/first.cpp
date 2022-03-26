#include <iostream>
#include <cmath>

const size_t N = 10;

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

    printf("The biggest distance is between points #%i and #%i \n", result[0],result[1]);
}

void task2(int *src_arr){
    int result[3] = {0,1,2};
    printf("The largest triangle is formed by points #%i, #%i and #%i \n", result[0],result[1],result[2]);
}

void task3(int *src_arr){
    int result[4] = {0,1,2,4};
    printf("The largest square is formed by points #%i, #%i, #%i and #%i \n", result[0],result[1],result[2],result[3]);
}

int main(){
    int dotes[2][10] = {3,4,4,3,8,6,9,0,-3,-5,0,-2,7,-14,-15,9,3,2,6,18};
    task1(*dotes);
    task2(*dotes);
    task3(*dotes);

    return EXIT_SUCCESS;
}
