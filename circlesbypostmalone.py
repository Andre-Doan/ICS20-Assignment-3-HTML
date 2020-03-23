#!/usr/bin/env python3

# Created by: Andre
# Created on: 2020-03-18
# This program calculates the area of a circle and the circumference

import math

def main():
    radius = int(input("Enter the diameter of the circle: ")) 
    area_circle = math.pi*radius*radius
    circumference = 2*math.pi*radius
    print("The area of the circle is : {0:2f}".format(area_circle))
    print("The circumference is : {0:2f}".format(circumference))

if __name__ == "__main__":
    main()
    