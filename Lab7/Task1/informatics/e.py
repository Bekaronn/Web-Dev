#a
def min(a, b, c, d):
    return min(min(min(a, b), c), d)

a, b, c, d = map(int, input().split())
print(min(a, b, c, d))

#b
def power(a, n):
    return a ** n

a, n = map(float, input().split())
print(power(a, int(n)))

#c
def xor(x, y):
    return int(x != y)

x, y = map(int, input().split())
print(xor(x, y))

#d
def Election(x, y, z):
    if x + y + z > 1:
        return True
    else:
        return False

x, y, z = map(int, input().split())
print(int(Election(x, y, z)))

#e
def is_prime(n):
    if n <= 1:
        return False
    if n <= 3:
        return True
    if n % 2 == 0 or n % 3 == 0:
        return False
    i = 5
    while i * i <= n:
        if n % i == 0 or n % (i + 2) == 0:
            return False
        i += 6
    return True

n = int(input())
if is_prime(n):
    print("prime")
else:
    print("composite")

#f
def power(a, n):
    if n == 0:
        return 1
    elif n < 0:
        return 1 / power(a, -n)
    else:
        return a * power(a, n - 1)

a, n = map(float, input().split())
print(power(a, int(n)))

#g
def fast_power(a, n):
    if n == 0:
        return 1
    elif n % 2 == 0:
        return fast_power(a * a, n // 2)
    else:
        return a * fast_power(a, n - 1)

a, n = map(float, input().split())
print(fast_power(a, int(n)))
