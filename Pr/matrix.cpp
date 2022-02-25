#include <iostream>
#include <vector>
#include <math.h>

/////////////////////////////////////////////// 
//               дана матрица                //
//   найти определитель с помощью рекурсии   //
///////////////////////////////////////////////

using std::vector;
using std::cout;
using std::endl;

int fint_determinant(vector<int> matrix){
    // проверки на то, квадратная матрица или нет, нет, также не проверяется размерность (больше единицы она или нет)
    // подразумевается, что на вход дана подходящая матрица

    int determinant = 0; // будет хранить значение определителя
    int size = matrix.size();
    
    if (sqrt(size) == 2) // если матрица размерности 2х2, то решается без рекурсии
        determinant = matrix.at(0) * matrix.at(3) - matrix.at(1) * matrix.at(2);
    else {
        vector<int> tmp_dets; // вектор будет хранить определители миноров (просто для удобства)

        int new_size = pow(sqrt(size) - 1, 2); // размер миноров
        vector<int> new_matrix; // в этот вектор будут записываться миноры
        for (size_t i = 0; i < new_size; i++)
            new_matrix.push_back(0); // заполнение этого вектора нулями, чтобы была возможность обращаться к его элементам по индексу и перезаписывать их после

        // индекс и его 'помощник'
        int c = 0; // будет определять индекс элемента в миноре, который записывается в данный момент
        int cmp;  // служит для сравнения с ним индекса; если они равны, данный элемент записываться в минор не будет (подробнее в комментарии ниже)

        /* само решение
        например, есть матрица 4 3 9
                               1 0 7
                               7 3 9
        поскольку я решаю её с помощью векторов, то можно представить матрицу как просто последовательность чисел: 4 3 9 1 0 7 7 3 9, и тогда
        индекс числа считается в зависимости от его (числа) положения, а не [строка][столбец], то есть элемент '0' будет иметь индекс 4 и т.д.
        для нахождения определителя я буду брать последнюю строку (последние 3 числа в последовательности), таким образом формула:
                              |4 3|       |4 9|       |3 9|
                    det = 9 * |1 0| - 3 * |1 7| + 7 * |0 7|
        то есть нужно получить три минора
        1) чтобы получить первый из трёх миноров надо записать все числа из исходной матрицы по порядку с начала, но пропустить число '9'
        индекс этой 'девятки' - 2, он и будет находится в переменной 'cmp' 
                                                                                          _____________ 2      
        чтобы построить минор программа просто создает новый вектор размера new_size =  \/  (size - 1)   , где size - кол-во элементов матрицы,
        и записывает в него элементы исходной матрицы, а если встречает индекс = cmp, пропускает его

        2) чтобы получить второй минор, нужно пропустить числа '3' и '0', то есть индексы 1 и 4
        нужно получить всего три минора -> используется цикл for; индекс, который нужно пропустить сейчас, на 1 меньше предыдущего (для предыдущего минора),
        то есть можно просто в цикле с каждой итерацией вычитать из переменной 'cmp=sqrt(9)-1' счётчик цикла,
        в моём случае i (для первого минора i=0, так что там ничего не изменится)
        также для этого минора нужно пропустить индекс 4, то есть на 3 больше предыдущего значения
        тогда в самом цикле for после равенства 'cmp' и 'c' cmp увеличивается на корень квадратный из size, то есть кол-во элементов в одной строке, в моём случае - 3
        таким образом получаю формулу cmp = (sqrt(size)-1)-i; то есть для второго минора
            cmp = sqrt(9)-1-1 = 1 для первого индекса
            и
            cmp = sqrt(9)-1-1 + sqrt(9) = 4 для второго

        3) третий минор составится по аналогии с первыми двумя: пропустится нулевой индекс (cmp = sqrt(9)-1-2), потом запишутся числа 3 и 9, 
        пропустится третий индекс (cmp = sqrt(9)-1-2 + sqrt(9)), запишутся числа 0, 7
        */ 
        for (size_t i = 0; i < sqrt(size); i++) {
            cmp = sqrt(size)-1-i; // индекс первого элемента, который пропустится при составлении минора

            // заполнение текущего минора
            for (size_t k = 0; k < new_size; k++){
                if (c == cmp) { 
                    c++; 
                    cmp += sqrt(size); 
                }
                new_matrix.at(k) = matrix.at(c);
                c++;
            }

            c = 0; // обнуление 'переменной индекса элементов минора' для перезаписи последующих миноров

            tmp_dets.push_back(fint_determinant(new_matrix)); // нахождение определителя текущего минора и добавление значения в tmp_dets
        }        

        /* вычисление определителя, зная определители миноров
        формула для моего примера:
                  |4 3|       |4 9|       |3 9|
        det = 9 * |1 0| - 3 * |1 7| + 7 * |0 7|
        поскольку при вычислении определителя знаки чередуются, то есть на определители миноров умножаются 9 (знак не меняется), затем -3 (знак изменился, в матрице +3),
        затем 7 (знак не меняется), используется if для чередования вычитания и сложения
        */
        for (size_t i = 0; i < sqrt(size); i++) {
            if (i % 2 == 0) // последние элементы умножаются на определители миноров, взятые из tmp_dets, и складываются/вычитаются с/из переменной determinant
                determinant += matrix.at(matrix.size()-(i+1)) * tmp_dets.at(i); 
            else
                determinant -= matrix.at(matrix.size()-(i+1)) * tmp_dets.at(i);
        }
    }

    return determinant;
}

int main(){
    vector<int> second = {
                            9,4,
                            5,7
                         }; // answer - 43
    
    vector<int> third = {   
                            3,-1,2,
                            4,-3,3,
                            1,3,0
                        }; // answer - 0
    
    vector<int> fourth = {
                            5,2,7,5,
                            3,5,8,2,
                            4,0,1,7,
                            9,4,0,3
                         }; // answer - 973

    cout << "The determinant is " << fint_determinant(second) << endl;
    cout << "The determinant is " << fint_determinant(third) << endl;
    cout << "The determinant is " << fint_determinant(fourth) << endl;

    return EXIT_SUCCESS;
}