#!/usr/bin/env python

from distutils.core import setup

setup(name='pygestalt',
      version='0.7',
      description='pygestalt Machine Control Framework',
      author='Ilan and Nadya',
      author_email='imoyer@mit.edu, peek@mit.edu',
      url='https://github.com/imoyer/gestalt',
      packages=['pygestalt', 'pygestalt.publish'],
      package_dir={'pygestalt':'.'}
     )
