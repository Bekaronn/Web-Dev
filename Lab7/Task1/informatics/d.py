#a
N = int(input())
array = list(map(int, input().split()))
result = [str(array[i]) for i in range(N) if i % 2 == 0]
print(" ".join(result))

#b
N = int(input())
array = list(map(int, input().split()))
result = [str(num) for num in array if num % 2 == 0]
print(" ".join(result))

#c
N = int(input())
array = list(map(int, input().split()))
count = 0
for num in array:
    if num > 0:
        count += 1
print(count)

#d
N = int(input())
array = list(map(int, input().split()))
count = 0
for i in range(1, N):
    if array[i] > array[i - 1]:
        count += 1
print(count)

#e
N = int(input())
array = list(map(int, input().split()))
for i in range(1, N):
    if array[i] * array[i-1] > 0:
        print("YES")
        break
else:
    print("NO")

#f
N = int(input())
array = list(map(int, input().split()))
count = 0
for i in range(1, N-1):
    if array[i] > array[i-1] and array[i] > array[i+1]:
        count += 1
print(count)

#g
N = int(input())
array = list(map(int, input().split()))
for i in range(N // 2):
    array[i], array[N - i - 1] = array[N - i - 1], array[i]
print(*array)
