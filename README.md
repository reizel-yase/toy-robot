# Toy Robot

The application is a simulation of a toy robot moving on a square table top, of dimensions 5 units x 5 units. There are no other obstructions on the table surface. The robot is free to roam around the surface of the table, but must be prevented from falling to destruction. Any movement that would result in the robot falling from the table must be prevented, however further valid movement commands must still be allowed.

This is a console application that will be running in the terminal/console. Command inputs will be read by typing in the terminal/console.

## Commands
```
PLACE X,Y,F
MOVE
LEFT
RIGHT
REPORT
```
PLACE will put the toy robot on the table in position X,Y and facing NORTH, SOUTH, EAST or WEST. The origin (0,0) can be considered to be the SOUTH WEST most corner. It is required that the first command to the robot is a PLACE command, after that, any sequence of commands may be issued, in any order, including another PLACE command. The application will discard all commands in the sequence until a valid PLACE command has been executed.

MOVE will move the toy robot one unit forward in the direction it is currently facing.

LEFT will rotate the robot 90 degrees to the LEFT without changing the position of the robot.

RIGHT will rotate the robot 90 degrees to the RIGHT without changing the position of the robot.

REPORT will output the X,Y and F of the robot.

A robot that is not on the table can choose to ignore the MOVE, LEFT, RIGHT and REPORT commands.  

Any move that would cause the robot to fall will be ignored. 

Any invalid command will be ignored. 

## Get Started
Start console application by running
 `npm start`

Once app is started, you may start typing in the commands in the console 

Press `ENTER` key to execute typed command.

Command inputs are case-sensitive so be sure to follow the formats listed above. 

## Sample Input and Output
```
MOVE
REPORT
PLACE 0,0,NORTH
LEFT
REPORT
Output: 0,0,WEST
MOVE
REPORT
Output: 0,0,WEST
```
```
PLACE 0,0,NORTH
MOVE
REPORT 
Output: 0,1,NORTH
```
```
PLACE 0,0,NORTH
LEFT
REPORT 
Output: 0,0,WEST
```
```
PLACE 1,2,EAST
MOVE
MOVE 
LEFT
MOVE
REPORT
Output: 3,3,NORTH
```
```
PLACE -1,-1,NORTH
REPORT
Output: 3,3,NORTH
```
```
PLACE 0,4,NORTH
MOVE
REPORT
Output: 0,4,NORTH
```
```
place 0,1,north
report
PLACE 0, 2,NORTH
REPORT
PLACE 0,0,NORTH
REPORT
Output: 0,0,NORTH
```

## Exit app
To exit application, simply hit `Ctrl` key + `c`