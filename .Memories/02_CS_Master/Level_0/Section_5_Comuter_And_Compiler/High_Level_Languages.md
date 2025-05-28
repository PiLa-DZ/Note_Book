# Compiler
## Source Code --> Compiler --> Target Code
    // Frontend --------------------------->
     1 Source Code ------------------------->
	  2 Leical Analyzer --------------------->
	   3 Tokens ------------------------------>
	    4 Syntax Analyzer --------------------->
	     5 Syntax Tree ------------------------->
		  6 Semantic Analyzer ------------------->
		   7 Syntax Tree ------------------------->
		    9 Intermediate Code Generator --------->
		 	10 Intermediate Code ------------------->
			 11 Machine-Independent Code Optimizer -->
			  // Backend ----------------------------->
			   12 Intermediat Code -------------------->
			    13 Code Generator ---------------------->
			     14 Target Code ------------------------->
			  	  15 Machine-Dependent Code Optimizer ---->
			       16 Target Code ------------------------->

## Compilers vs Interpreters
	Copiler
		Source Code			--> Compiler		--> Target Program
		Input				--> Target Program	--> Output
	Interpreter
		Source Code + Input --> Interpreter		--> Output

### Compiled Languages
### Interpreted Languages or Scripting Languages
