#Say "Hello, World!" With Python
if __name__ == '__main__':
    print("Hello, World!")

#Python If-Else
n = int(input().strip())

if n % 2 != 0:
    print("Weird")
elif n % 2 == 0 and 2 <= n <= 5:
    print("Not Weird")
elif n % 2 == 0 and 6 <= n <= 20:
    print("Weird")
elif n % 2 == 0 and n > 20:
    print("Not Weird")

#Arithmetic Operators
a = int(input())
b = int(input())

print(a + b)
print(a - b)
print(a * b)

    
#Python: Division
a = int(input())
b = int(input())

print(a // b)
print(a / b)

#Loops
n = int(input())

for i in range(n):
    print(i * i)

#Write a function
def is_leap(year):
    if year % 4 == 0:
        if year % 100 == 0:
            if year % 400 == 0:
                return True
            else:
                return False
        else:
            return True
    else:
        return False

year = int(input())
print(is_leap(year))

#Print Function
if __name__ == '__main__':
    n = int(input())
    print(*range(1, n+1), sep='')

#List Comprehensions
x = int(input())
y = int(input())
z = int(input())
n = int(input())

coordinates = [[i, j, k] for i in range(x+1) for j in range(y+1) for k in range(z+1) if i + j + k != n]

print(coordinates)

#Find the Runner-Up Score!
n = int(input())
scores = map(int, input().split())

scores_list = list(set(scores))
scores_list.sort(reverse=True)

print(scores_list[1])


#Nested Lists
n = int(input())
students = []
for _ in range(n):
    name = input()
    score = float(input())
    students.append([name, score])
students.sort(key=lambda x: x[1])
second_lowest_grade = sorted(set(score for name, score in students))[1]
for name, score in students:
    if score == second_lowest_grade:
        print(name)
