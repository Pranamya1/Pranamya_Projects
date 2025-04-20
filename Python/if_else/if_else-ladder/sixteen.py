#Assign grade to student according to their percentage.

a = int(input("Enter your percentage: "))
if a > 90 and a <= 100:
    print("A")
elif a > 80 and a <= 90:
    print("B")
elif a > 60 and a <= 80:
    print("C")
elif a >= 35 and a <= 60:
    print("D")
else:
    print("Fail")
