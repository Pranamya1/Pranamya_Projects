#include <stdio.h>
#include <stdlib.h>

int main() {
    int p;
    system("clear");
    printf("Enter your Persentage: ");
    scanf("%d",&p);
    (p >= 50 && p <= 75) ? printf("Your gread is 'D'.") : (p >= 76 && p <= 85) ? ("Your gread is 'C'.") : (p >= 86 && p <= 95) ? printf("Your gread is 'B'.") : (p >= 96 && p <= 100) ? printf("Your gread is 'A'.") : printf("Fail");

}