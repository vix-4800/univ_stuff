#include <cstdlib>
#include <iostream>

using std::cout;
using std::endl;

const int g_arr_1[] = {1,4,8,11};
const int g_arr_2[] = {-6,6,8,9};

int* unite(const int* arr_1,const int* arr_2, int* res, const int n){
    int tmp_1 = 0, tmp_2 = 0;

    for (size_t i = 0; i < n; i++) {
        if (arr_1[tmp_1] < arr_2[tmp_2])
            res[i] = arr_1[tmp_1++];
        else
            res[i] = arr_2[tmp_2++];
    }

    return res;
}

int main() {
    const int N = sizeof(g_arr_1)/sizeof(int) + sizeof(g_arr_2)/sizeof(int);
    int result[N];

    unite(g_arr_1, g_arr_2, result, N);

    for (const auto& digit: result)
        cout << digit << ' ';
    cout << endl;

    return EXIT_SUCCESS;
}
