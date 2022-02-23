#include <string>
#include <iostream>

/////////////////////////////////////////////////////////////////
//        Проверить правильность скобочной структуры           //
//                произвольной строки вида:                    //
//                  (abc[de]e(f{gh})il)                        //
/////////////////////////////////////////////////////////////////

class MyString {
    private:
        // переменные для вывода результата в будущем, значение им присваивается в конструкторе
        bool count; // переменная для хранения результата проверки на кол-во скобок
        bool placement; // переменная для хранения результата проверки на расположение скобок
        bool overall; // итог (учитывая переменные count и placement)

        // метод проверки на кол-во скобок в строке (если кол-во открывающих и закрывыющих скобок не совпадает, возвращается false, иначе true)
        bool par_count_check(std::string source_string) {
            int check_arr[8]; // массив с кол-вом всех видов скобок в данной методу строке
            const char curr_par[8] = {'(',')','{','}','[',']','<','>'}; // массив всех возможных скобок для удобства подсчета
            
            int par_count; // текущее кол-во данного вида скобок
            // подсчёт каждого вида скобок из массива curr_par и заполение массива check_arr
            for (size_t i = 0; i < 8; i++) {
                par_count = 0;

                // проход по строке и подсчёт текущего вида скобок
                for (const auto &k : source_string) {
                    if (k == curr_par[i])
                        par_count++;
                }

                check_arr[i] = par_count; // занесение результата в check_arr
            }

            /* сравнение кол-ва открывающих и закрывающих скобок в массиве check_arr (если будет несовпадение, возвращается false)
            массив check_arr заполнился 8-мью числами для каждого вида скобок из curr_par, т.е. check_arr[0] для '(', check_arr[1] для ')' и т.д.
            соответсвенно надо лишь сравнить соседние элементы массива для проверки на правильность структуры */
            for (size_t i = 0; i < 8; i++){
                if (check_arr[i] != check_arr[++i])
                    return false;
            }

            return true;
        }

        // метод проверки на расположение скобок в строке
        bool par_plc_check(std::string str){
            char curr_par[8] = {'(',')','{','}','[',']','<','>'}; // массив всех возможных скобок для удобства сравнения
            bool temp = false; // будет хранить результат поиска соответсвующей скобки
            int LEN = str.length()-1; // длина данной строки

            // проверка первого и последнего символов строки
            // т.е. если строка начинается с закрывающей скобки или заканчивается открывающей, то её структура, очевидно, сразу неверная, последующая проверка не требуется)
            if ((str.at(0) == curr_par[1])||
                (str.at(LEN) == curr_par[3])||
                (str.at(LEN) == curr_par[5])||
                (str.at(LEN) == curr_par[7]))
                return false;

            if ((str.at(LEN) == curr_par[0])||
                (str.at(LEN) == curr_par[2])||
                (str.at(LEN) == curr_par[4])||
                (str.at(LEN) == curr_par[6]))
                return false;

            /* прохожусь по строке четыре раза с конца до начала, предварительно выбрав одну из закрывающих скобок для проверки из массива curr_par
            то есть выбрав, например, скобку ')', прохожусь по строке от этой скобки в обратном направлении, пока не встечу соответсвующую ей открывающую скобку
            найденную закрывающую скобку переписал в '.'; если нашлась соответсвующая ей открывающая скобка, её также переписываю в точку, 
                                                                                               просто чтобы не посчитать одну и ту же скобку несколько раз
            если соответсвующая скобка была найдена, переменная temp меняется с false на true, последующая проверка проходит успешно и 
                                                                                                процесс повторяется для следующей скобки (если таковая будет найдена) */
            for(size_t i = 1; i < 8; i += 2){ // выбор скобки для сравнения
                for(size_t j = LEN; j > LEN; j--){ // итерация по строку с конца в начало
                    if (str.at(j) == curr_par[i]){ // проверка каждого символа на то, является ли он скобкой и стоит ли искать ей пару
                        str.at(j) = '.'; // удаление найденной закрывающей скобки
                        temp = false; // установление изначального значения перед поиском

                        // начало поиска соответсвующей открывающей скобки
                        for(size_t k = j; temp == false; k--){
                            if (k > LEN) break; /* если переменная k вышла за пределы длины строки (а это произойдёт, если из k, равной 0, вычесть 0 
                                    (так как у k тип size_t, она не может быть отрицательной)), то считаю поиск неудачным и выхожу из цикла, не изменив temp*/
                            if (str.at(k) == curr_par[i-1]){
                                temp = true;
                                str.at(k) = '.';
                            }
                        }

                        if (temp == false) // если temp не был изменён (false), то соответсвующей пары найдено не было, метод возвращает false
                            return false;
                    }
                }
            }

            return true;
        }
        
    public:
        std::string str;
        MyString(std::string s) {
            str = s;
            count = par_count_check(str); // вызов метода для проверки на кол-во скобок в строке
            placement = par_plc_check(str); // вызов метода для проверки на расположение скобок в строке
            overall = (count == 1 && placement == 1); // итог (учитывая переменные count и placement)
        };

        // метод вывода результата проверок (учитывая переменные count, placement и overall)
        void print_result(){
            if (!count && placement) // неверное кол-во скобок
                std::cout << "Something wrong with the amount of parentheses / brackets";
            if (!placement && count) // неверное расположение скобок
                std::cout << "Something wrong with the placement of parentheses / brackets";
            if (!placement && !count) // всё неверное
                std::cout << "Something wrong with the placement and the amount of parentheses / brackets";
            if (overall) // всё отлично
                std::cout << "The string looks good";
            std::cout << std::endl;
        }
};

int main(){
    MyString example_1("(abc[de]e(f{gh})il)"); // Строка #1 на проверку
    std::cout << example_1.str << "\t--\t";
    example_1.print_result();

    MyString example_2(")abc[de]e(f{gh})il("); // Строка #3 на проверку (неверное расположение)
    std::cout << example_2.str << "\t--\t";
    example_2.print_result();

    MyString example_3("(abcde]e(f{gh})il)"); // Строка #3 на проверку (одна лишняя скобка ']')
    std::cout << example_3.str << "\t--\t";
    example_3.print_result();

    MyString example_4(")abc[de]ef{gh})il("); // Строка #4 на проверку (неверное расположение + лишняя скобка ')')
    std::cout << example_4.str << "\t--\t";
    example_4.print_result();

    return EXIT_SUCCESS;
}