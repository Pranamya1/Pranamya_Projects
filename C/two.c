//Get three numbers and do all mathematical operations (+, -, *, /, %).

#include <stdio.h>

int main() {
    int a,b,c,d;
    a = 10;
    b = 20;
    c = 30;
    d = a % b;
    printf("%d + %d = %d",a,b,a+b);
    printf("\n%d - %d = %d",a,b,a-b);
    printf("\n%d * %d = %d",a,b,a*b);
    printf("\n%d / %d = %d",a,b,a/b);
    printf("\nModilus %d",d);
}