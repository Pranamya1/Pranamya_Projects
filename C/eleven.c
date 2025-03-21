//A product originally costs ₹2000. Apply a 50% discount using /=.

#include <stdio.h>

int main() {
    float c, d, dc;
    printf("Enter the cost of product and discount percentage: ");
    scanf("%f %f", &c, &d);
    dc = c * (1 - d / 100); 
    printf("Final cost of product is: ₹%.2f\n", dc);
}
