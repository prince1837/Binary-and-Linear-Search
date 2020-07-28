

def binarySearch(alist, item):
    first = 0
    last = len(alist)-1
    found = False
    while first<last:
        midpoint = (first + last)//2
        if alist[midpoint] == item:
            found = True
            return found
        else:
            if item < alist[midpoint]:
                last = midpoint-1
            else:
                first = midpoint+1
    return found
testlist = [7, 8, 10, 13, 17, 19, 32, 42, 56]
print (testlist)
user=int(input("which num... are you want to check its a binary search of place or not?     \n"))
print(binarySearch(testlist, user))