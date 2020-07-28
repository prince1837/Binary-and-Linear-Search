def linearSearch(arry,target):
	for i in range(len(arry)):
		if arry[i]==target:
			return i
	else:
		return False

arry=[12,23,45,21,32,22,21,76,54,87,98]
values=int(input('Which number you have to Search?\n'))
print(linearSearch(arry,values))