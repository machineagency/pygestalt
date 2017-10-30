import io

sticksize = 36.0
bins = {}

class Part(object):
        def __init__(self, unit_num, unit_part, length, cut_station):
                self.unit_num = unit_num
                self.unit_part = unit_part # string A, B, C, or D
                self.length = length
                self.cut_station = cut_station

f = open('SAMPLE_Linear.csv','r')

parts = []

for line in f.readlines():
        try:
                line = line.rstrip()
                split = line.split(',')
                un, up, length, cut_station = split[1:]
                length=float(length)
                part = Part(un,up,length,cut_station)
                parts.append(part)
        except:
                pass

# sorts the list of parts, so you'll have to go back and re-match them later!
# take a list of parts, and return a part=>stick mapping.
def firstFitDecreasing(parts):
        # sort parts by length, decreasing
        sorted_parts = sorted(parts, key=lambda part: part.length)[::-1]
        bin_count = 0
        length_remains = sticksize # start with a whole stick
        bin_to_order = dict(zip(range(len(parts)), [[] for i in range(len(parts))]))
        for i, part in enumerate(sorted_parts):
                print 'length: {} remains: {}'.format(part.length, length_remains)
                if length_remains >= part.length:
                        print 'put part with length {} in bin {}'.format(part.length, bin_count)
                        length_remains -= part.length
                else: # need to use a new stick
                        print 'remainder not big enough'
                        length_remains = sticksize
                        bin_count += 1
                bin_to_order[bin_count].append(part)
        return bin_to_order

firstFitDecreasing(parts)

"""
def fitsinbin(binnr,part):
	currsize = 0
	for item in bins[binnr]:
		currsize += item
	if part + currsize > sticksize:
		return false
	else
		return true
	
"""
