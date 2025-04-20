a = int(input("Enter your percentage: "))
if a > 95 and a <= 100:
    print("You are in 'A' Grade.")
elif a > 85 and a <= 95:
    print("You are in 'B' Grade.")
elif a > 70 and a <= 85:
    print("You are in 'C' Grade.")
elif a >= 50 and a <= 70:
    print("You are in 'D' Grade.")
else:
    print("You Fail.")
