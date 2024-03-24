#for
#a
a = int(input())
b = int(input())

for i in range(a, b + 1):
    if i % 2 == 0:
        print(i, end=" ")

#b
a = int(input())
b = int(input())
c = int(input())
d = int(input())

for i in range(a, b + 1):
    if i % d == c:
        print(i, end=" ")


#c
a = int(input())
b = int(input())

for i in range(a, b + 1):
    if int(i ** 0.5) ** 2 == i:
        print(i, end=" ")


#d
x = int(input())
d = int(input())

x_str = str(x)
count = 0

for digit in x_str:
    if int(digit) == d:
        count += 1

print(count)


#e
x = int(input())
x_str = str(x)
sum_of_digits = 0

for digit in x_str:
    sum_of_digits += int(digit)

print(sum_of_digits)


#f
x = int(input())
reversed_x = int(str(x)[::-1])

print(reversed_x)


#g
x = int(input())
min_divisor = None

for i in range(2, x + 1):
    if x % i == 0:
        min_divisor = i
        break

print(min_divisor)

#h

x = int(input())
for i in range(1, x + 1):
    if x % i == 0:
        print(i, end=" ")

#i
        
x = int(input())
count = 0
for i in range(1, int(x ** 0.5) + 1):
    if x % i == 0:
        count += 1
        if i != x // i:
            count += 1
print(count)

#j
sum = 0
for _ in range(100):
    num = int(input())
    sum += num
print(sum)

#k
N = int(input())
total = 0
for _ in range(N):
    total += int(input())
print(total)

#l
binary = input()
decimal = int(binary, 2)
print(decimal)

#m
N = int(input())
count = 0
for _ in range(N):
    num = int(input())
    if num == 0:
        count += 1
print(count)


#while
#a
N = int(input())
for i in range(1, int(N ** 0.5) + 1):
    print(i ** 2)

#b
n = int(input())
divisor = 2
while n % divisor != 0:
    divisor += 1
print(divisor)

#c
N = int(input())
power_of_two = 1
while power_of_two <= N:
    print(power_of_two, end=" ")
    power_of_two *= 2

#d
N = int(input())
is_power_of_two = False
power_of_two = 1
while power_of_two <= N:
    if power_of_two == N:
        is_power_of_two = True
        break
    power_of_two *= 2
if is_power_of_two:
    print("YES")
else:
    print("NO")

#e
N = int(input())
k = 0
while 2 ** k < N:
    k += 1
print(k)
