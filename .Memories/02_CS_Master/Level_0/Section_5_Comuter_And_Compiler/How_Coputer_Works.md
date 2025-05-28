# Electronics and Electical Components
    Computer Organization
		Compilers
			Developer
		Operating Systems
			User

# Intro to Digital Design
## What is Electricity
	- Atom contains electrons
	- Electricity is the motion of electrons from one place to another
		Source	--> Switch
		Switch  --> Lamp
		Lamp	--> Source
## Transistor
	- Electrice Switch
## Logic Gates
	- The main building block fr any digital circuit
	- Main Gates		(AND, OR, NOT)
	- Combined Gates	(NAND, NOR, XOR, XNOR)
	- Truth Table (AND) Gate
		x y out
		0 0 0
		0 1 0
		1 0 0
		1 1 1
	- Truth Table (OR) Gate
		x y out
		0 0 0
		0 1 1
		1 0 1
		1 1 1
	- Truth Table (NOT) Gate
		x out
		0 1
		1 0
	- Truth Table (NAND) Gate --> (AND & NOT)
		x y out
		0 0 1
		0 1 1
		1 0 1
		1 1 0
	- Truth Table (NOR) Gate --> (OR & NOT)
		x y out
		0 0 1
		0 1 0
		1 0 0
		1 1 0
	- Truth Table (XOR) Gate
		x y out
		0 0 0
		0 1 1
		1 0 1
		1 1 0
	- Truth Table (XNOR) Gate
		x y out
		0 0 1
		0 1 0
		1 0 0
		1 1 1
# Binary Addition
	Half Adder
		x + y  c s
		0   0  0 0
		0   1  0 1
		1   0  1 0
		1   1  1 0
	Full Adder
		Ci + x + y   C S
		0    0   0   0 0	
		0    0   1   0 1	
		0    1   0   0 1	
		0    1   1   1 0	
		1    0   0   0 1	
		1    0   1   1 0	
		1    1   0   1 0	
		1    1   1   1 1	

# Von Neumann Architecture
## Main Memory
## CPU
## I/O
----------      -----------      ---------
|        |      |         |      |       |
|        |      | Contorl |      |       |
|        | <--- |  Unit   | <--- |       |
|        |      |         |      |       |
|  Main  |      |- - - - -|      |       |
| Memory |      |   CPU   |      |  I/O  |
|        |      |- - - - -|      |       |
|        |      |         |      |       |
|        | ---> |   ALU   | ---> |       |
|        |      |         |      |       |
----------      -----------      ---------

# Memory
## Data in
## Data out
## Address
## Read & Write

# Memory Tyes
## RAM		--> Random Access Memory
	- Volatile
	- DRAM  --> Dynamic RAM //? Normal RAM
		- Capacitors
		- Refresh Circuit
		- Cheap
	- SRAM  --> Static RAM  //? Cach RAM
		- Transistors
		- No Refreshment need
		- Expensive
## ROM		 --> Read Only Memory
	- ROM    --> Read Only Memory
	- PROM   --> Programmable ROM
	- EPROM  --> Erasable PROM
	- EEPROM --> Electrically Erasable PROM //? Using now
## Memory Hierarchy
	- Registers		//? in CPU
	- Cashe			//? Neer CPU
	- Main Memory	//? RAM

# --------------------------------------------------
# Instructions
	Op Code		Operands
	+			33 11
	*			34 10

## Instruction Cycle
	Start --> Fetch next   --> Execut
	  ^       Instruction      Instruction
	  |                        /
	   \______________________/

## Types of instructions - Function
	- Arithmetic
	- Comparison
	- Logical
	- Jump or Branch
## Types of instructions - Number of Operands
	- Three-Operand
		ADD X, Y, Z --> Z = X + Y
	- Two-Operand
		ADD X, Y    --> X = X + Y
	- One-Operand
		ADD X       --> AC = AC + X
	- Zero-Operand
		ADD         --> T = T + (T-1)
