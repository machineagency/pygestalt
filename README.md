# gestalt

Python library for controling [Gestalt Nodes with 086-005](https://github.com/imoyer/086-005) firmware. A control system framework for personal fabrication.

## Introduction

Pygestalt is a Python library with examples that enables the use of high-level language (Python) to control low-level things. So far G-code was used to describe what a CNC machine should do, which motor to spin, set the target temperature of an extruder etc. Pygestalt enables you to create your own language for the machine you are building.

## Usage

**First** make sure that your Gestalt Node is there with the [086-005 firmware](https://github.com/imoyer/086-005) installed.

**Second** make sure that you have Python installed. You can check that by opening **Terminal** and using the following command.

```
python --version
```

It should output a line similar to the one below.

```
Python 2.7.12
```

If that is not the case, consult the [Python Beginners Guide](https://wiki.python.org/moin/BeginnersGuide/Download) or ask your favorite search engine!

**Third** make sure that you have the Python package manager or `pip` installed. Follow the [pip installation guide](https://pip.pypa.io/en/stable/installing/) or, again, ask your favorite search engine.

**Fourth** install Python serial library or `pyserial`. Open Terminal and use the command below.

```
pip install pyserial
```

**Fifth** (finally )download `pygestalt`. To do that open Terminal, navigate to your secret machine project directory and use the following command (oh yes, you should have [Git](https://git-scm.com/)). You can also click on the green button above and download a .zip archive.

```
git clone https://github.com/nadya/pygestalt.git
```

Then you have to change directory to `pygestalt` by using the `cd` command.

```
cd pygestalt
```

Make sure that you are there by using the `pwd` (Print Working Directory) command. It should output a path with `/pygestalt` at the end.

**Sixth** install `pygestalt`. Run the following command to do that.

```
sudo python setup.py install
```

You can check if it is there with `pip`.

```
pip show pyserial
```

It should print some basic information about the `pyserial` library and its authors.

**Seventh** try it out! The best way is to pick the [examples/machines/htmaa](examples/machines/htmaa) example, modify the `single_node.py` and run it. Below is the line you should edit, look for the follwing part.

```
portName = '/dev/ttyUSB0'
```

Use `ls /dev/cu*` (on a Mac OS system) to find out your serial port. It should look similar to the one below.

```
/dev/cu.usbserial-FTXW4I60
```

Replace `/dev/ttyUSB0` with the one you got, save and run the `single_node.py` program.

```
python single_node.py
```

It will ask you to identify the X axis by pressing a button on the Gestalt Node board. If your motor is connected, it should move there and back.

**Congratulations** if you managed to get it working. For any comments feel free to add an issue or you see things missing, submit a pull request. Many people will be and remain thankful.

## References
* [pygestalt website](http://pygestalt.org/)
* [A Gestalt Framework for Virtual Machine Control of Automated Tools](http://pygestalt.org/VMC_IEM.pdf) - Master Thesis by Ilan Ellison Moyer (2013)
* [Making machines that make](http://media.ccc.de/browse/congress/2013/30C3_-_5587_-_en_-_saal_1_-_201312291130_-_making_machines_that_make_-_nadya_peek.html#video) - talk given by Nadya Peek touching on "pygestalt" given at 30C3 (2013)
