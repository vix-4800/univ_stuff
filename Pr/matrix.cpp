#include <iostream>
#include <vector>
#include <math.h>

/////////////////////////////////////////////// 
//               дана матрица                //
//    найти определить с помощью рекурсии    //
///////////////////////////////////////////////

using std::vector;
using std::cout;
using std::endl;

int fint_determinant(vector<int> matrix){
    int determinant;
    int size = matrix.size();
    
    if (sqrt(size) == 2)
        determinant = matrix.at(0) * matrix.at(3) - matrix.at(1) * matrix.at(2);
    else {
        determinant = 0;
        vector<int> tmp_dets;
        int c = 0, cmp;
        int new_size = pow(sqrt(size) - 1, 2);

        vector<int> new_matrix;
        for (size_t i = 0; i < new_size; i++)
            new_matrix.push_back(0);
        
        for (size_t i = 0; i < sqrt(size); i++) {
            cmp = sqrt(size)-1-i;

            for (size_t k = 0; k < new_size; k++){
                if (c == cmp){ c++; cmp += sqrt(size); }
                new_matrix.at(k) = matrix.at(c);
                c++;
            }

            c = 0;

            tmp_dets.push_back(fint_determinant(new_matrix));
        }        

        for (size_t i = 0; i < sqrt(size); i++) {
            if (i % 2 == 0)
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
                         }; // answer is 43
    
    vector<int> third = {   
                            3,-1,2,
                            4,-3,3,
                            1,3,0
                        }; // answer is 0
    
    vector<int> fourth = {
                            5,2,7,5,
                            3,5,8,2,
                            4,0,1,7,
                            9,4,0,3
                        }; // answer is 973

    cout << "The determinant equals: " << fint_determinant(second) << endl;
    cout << "The determinant equals: " << fint_determinant(third) << endl;
    cout << "The determinant equals: " << fint_determinant(fourth) << endl;

    return EXIT_SUCCESS;
}