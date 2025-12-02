# -*- coding: utf-8 -*-

import re

tot=0

with open('input.txt') as f:

	for line in f:

		ranges=line.split(',')

		for r in ranges:

			rng=r.split('-')

			start=int(rng[0])
			end=int(rng[1].rstrip())+1

			for i in range(start, end):

				length=len(str(i))

				if length%2==0:

					mid=int(length/2)

					first=str(i)[0:mid]
					second=str(i)[mid:length]

					if int(first)==int(second):
						tot=tot+int(i)

	print(tot)
