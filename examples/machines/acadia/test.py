import sys
from single_node import virtualMachine

stage = single_node.virtualMachine(persistenceFile = "io.vmp")
#stage.xNode.setVelocityRequest(10)	

while(1):

	s1 = sys.stdin.read(1)


	supercoords = [[s1]]

	for coords in supercoords:
		stage.move(coords, 0)
		status = stage.xAxisNode.spinStatusRequest()
		while status['stepsRemaining'] > 0:
			time.sleep(0.001)
			status = stage.xAxisNode.spinStatusRequest()
