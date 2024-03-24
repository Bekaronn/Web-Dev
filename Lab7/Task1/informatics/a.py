import math

#a
a = int(input())
b = int(input())
c = math.sqrt(a ** 2 + b ** 2)

print(c)


#b
number = int(input())
print("The next number for the number", number, "is", number + 1, end=".\n")
print("The previous number for the number", number, "is", number - 1, end=".\n")


#c
N = int(input())
K = int(input())

apples_per_student = K // N
print(apples_per_student)


#d
N = int(input())
K = int(input())

remainder = K % N
print(remainder)

#e
v = int(input())
t = int(input())

s = v * t
marker = s % 109
print(marker)
