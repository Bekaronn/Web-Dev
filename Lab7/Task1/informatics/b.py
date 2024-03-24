#a
a = int(input())
b = int(input())

if a > b:
    print(a)
else:
    print(b)


#b
year = int(input())

if (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0):
    print("YES")
else:
    print("NO")



#c
test_system_answer = int(input())
student_answer = int(input())

if (test_system_answer != student_answer) and (student_answer != 1):
    print("YES")
else:
    print("NO")



#d
x = int(input())

if x > 0:
    print(1)
elif x < 0:
    print(-1)
else:
    print(0)



#e
a = int(input())
b = int(input())

if a > b:
    print(1)
elif a < b:
    print(2)
else:
    print(0)
