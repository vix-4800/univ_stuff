#include <iostream>

using std::cout; using std::endl;

int* combine_bun(int *ar_1, int *ar_2, int t, int N){
    int res_arr[N];
    for (size_t i = 0; i < t; i++) {
        res_arr[i] = ar_1[i];
    }
    t = 0;
    for (size_t i = t; i < N; i++) {
        res_arr[i] = ar_1[t++];
    }

    return res_arr;
}

int* sort_fun(int* a, int n) {
   int i, j, min, temp;
   for (i = 0; i < n - 1; i++) {
      min = i;
      for (j = i + 1; j < n; j++)
      if (a[j] < a[min])
      min = j;
      temp = a[i];
      a[i] = a[min];
      a[min] = temp;
   }
}

int main(){
    int array_1[] = {1,4,8,11};
    int array_2[] = {-6,6,8,9};

    int N_1 = sizeof(array_1)/sizeof(int);
    int N_2 = sizeof(array_2)/sizeof(int);
    int N = N_1 + N_2;

    int* res;
    res = combine_bun(array_1, array_2, N_1 ,N);
    cout << sort_fun(res, N) << endl;

    return EXIT_SUCCESS;
}