from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in chdnext/__init__.py
from chdnext import __version__ as version

setup(
	name="chdnext",
	version=version,
	description="ChD Computers ERPNext extensions and utilities",
	author="ChD Computers",
	author_email="chdcomputers@gmail.com",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
