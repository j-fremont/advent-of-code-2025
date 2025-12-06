# -*- coding: utf-8 -*-

tot=0

rs=[]

read_range=True

with open('input.txt') as f:

	for line in f:

		if line=='\n':

			read_range=False

		else:

			if read_range==True:

				l = list(map(int, line.rstrip().split('-')))

				if len(rs)==0:

					rs.append(l)

					print(rs)

				else:

					print(l)

					i=0

					for r in rs:

						#print(str(i) + " : " + str(r))

						i=i+1



						if l[1] < r[0] or l[0] > r[1]:
							rs.append(r)

						elif not (l[0] >= r[0] and l[1] <= r[1]):

							if l[0] < r[0] and l[1] > r[0]:
								rs[i][0]=l[0]

							if l[0] < r[1] and l[1] > r[1]:
								rs[i][1]=l[1]

	print(rs)
