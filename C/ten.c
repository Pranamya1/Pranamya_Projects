//A company is deducting ₹500 from an employee's salary of ₹ 5000. Use -= to updated salary.

#include <stdio.h>

int main() {
    int d = 500,s,fs;
    printf("Enter your salary: ");
    scanf("%d",&s);
    fs = s;
    fs -= d;
    printf("Your updated salaty is %d",fs);
}