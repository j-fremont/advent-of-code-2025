# -*- coding: utf-8 -*-

tot=0

with open('input.txt') as f:

	for line in f:

		max=0
		decimal=0

		for i in range(0, len(line)-2):

			if int(line[i]) > decimal:

				for j in range(i+1, len(line)-1):

					curr=int(line[i] + line[j])

					if (curr > max):
						max=curr
						decimal=int(line[i])

		tot=tot+max

	print(tot)
