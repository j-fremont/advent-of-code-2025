# -*- coding: utf-8 -*-

tot=0

ranges=[]

read_range=True

with open('input.txt') as f:

	for line in f:

		if line=='\n':

			read_range=False

		else:

			if read_range==True:

				ranges.append(list(map(int, line.rstrip().split('-'))))

			else:

				n=int(line.rstrip())

				for r in ranges:

					if n >= r[0] and n <= r[1]:
						tot=tot+1
						break

	print(tot)
