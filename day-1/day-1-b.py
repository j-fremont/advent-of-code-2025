# -*- coding: utf-8 -*-

import re

dial=list(range(100))

pointing=50

pointing_at_zero=0

passing_by_zero=False

with open('input.txt') as f:

	for line in f:

		res=re.findall("([RL])(\d+)", line)

		direction=res[0][0]
		clicks=int(res[0][1])

		if (clicks > 100):
			new_clicks=re.findall("([\d]*)(\d\d)", str(clicks))[0]
			pointing_at_zero=pointing_at_zero+int(new_clicks[0])
			clicks=int(new_clicks[1])

		if (direction=='L'):

			if (pointing-clicks < 0):
				if (pointing!=0):
					passing_by_zero=True
				pointing=100-abs(pointing-clicks)

			else:
				pointing=pointing-clicks

		else:

			if (pointing+clicks >= 100):
				pointing=pointing+clicks-100
				passing_by_zero=True
			else:
				pointing=pointing+clicks

		if (pointing==0 or passing_by_zero):
			pointing_at_zero=pointing_at_zero+1

		passing_by_zero=False

	print(pointing_at_zero)
