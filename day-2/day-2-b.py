# -*- coding: utf-8 -*-

import re
import numpy as np

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

				mid=int(length/2)

				for j in range(mid, 1):

					if length%j==0:

						print(np.array_split(str(i), j))


	print(tot)
