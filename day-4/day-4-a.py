# -*- coding: utf-8 -*-

tot=0

arr=[]

points="." * 141

arr.append(points)

with open('input.txt') as f:

	for line in f:

		#print(len(line))

		l="." + line.rstrip() + "."

		#print (l)

		arr.append(l)

	arr.append(points)

	for i in range(1,140):

		for j in range(1, 140):

			print(arr[i][j])

			neighbors=arr[i-1][j-1] + arr[i-1][j] + arr[i-1][j+1] + arr[i][j-1] + arr[i][j+1] + arr[i+1][j-1] + arr[i+1][j] + arr[i+1][j+1]

			print(neighbors)

			c = neighbors.count('@')

			print(c)

			if c < 4:
				tot=tot+1

		print("new")

	print(tot)
