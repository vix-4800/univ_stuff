#include <iostream>

using std::cout;
using std::endl;

/*
3 задачи на рекурсию:
1) найти все множители числа
2) найти максимум в массиве
3) вывести числа фибоначчи
*/

// найти все множители числа
void divisors(int num, int i = 1) {
    // функция будет срабатывать, пока счётчик i не станет равен числу num, множители которого надо найти
    // при каждой итерации будет выполняться проверка на делимость числа на i
    if (i <= num) {
        if (num % i == 0)
            cout << i << " ";
        divisors(num, i + 1);
    }
}

// вывести числа фибоначчи
int fibonacci_seq(int n) {
    // функция будет рекурсивно срабатывать, пока не выполниться условие равенства 1 или 0
    // затем она вернёт 0 и 1, так как она последний её вызов будет следующим ->
    // fibonacci_seq(2-1) + fibonacci_seq(2-2)
    // вернув их, начнут выполняться предыдущие вызовы, то есть складываться последние числа
    // то есть вернув 0 и 1 вначале, они суммируются, значит вернуться значение 1 и 1 (первая с вызова fibonacci_seq(3-2) и вторая от 0+1)
    // затем суммируются полученные 1 и 1
    // и так далее
    if ((n == 1) || (n == 0))
        return n;
    else
        return fibonacci_seq(n - 1) + fibonacci_seq(n - 2);
}

// вспомогательная функция поиска максимального из двух int (просто чтобы не использовать std::max)
int find_max(int a, int b) {
    if (a > b)
        return a;
    else
        return b;
}

int rec_max(const int *arr, int arr_size) {
    if (arr_size == 1)
        return arr[0];
    return find_max(arr[arr_size - 1], rec_max(arr, arr_size - 1));
}

int main() {
    const int DIV_NUM = 25;
    cout << "##### FIND ALL DIVISORS OF " << DIV_NUM << " #####\n\t";
    divisors(DIV_NUM);

    cout << "\n"
         << endl;

    const int FIB_NUM = 15;
    cout << "##### PRINT FIRST " << FIB_NUM << " NUMBERS FROM FIBONACCI SEQUENCE #####\n\t";
    for (size_t i = 0; i < FIB_NUM; i++)
        cout << fibonacci_seq(i) << " ";

    cout << "\n"
         << endl;

    const int MAX_ARR[] = {7, 81, 34, 9, 6, 5, 34, 867, 23, 9};
    const int SIZE = sizeof(MAX_ARR) / sizeof(MAX_ARR[0]);
    cout << "##### FIND MAXIMUM VALUE IN ARRAY USING RECURSION #####\n\t\t\t";
    cout << rec_max(MAX_ARR, SIZE) << endl;
}