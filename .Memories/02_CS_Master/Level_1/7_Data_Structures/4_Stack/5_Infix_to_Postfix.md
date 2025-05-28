# Stack ######################################################
# Convert Infix to Postfix ###################################
## Psuedo Code
scan infix expression from left
if current is operand
  output it
else if current is operator
  if stack is empty || current is '(' || top is '(' prec(current) > prec(top)
    push(current)
  else if current is ')'
    pop until '('
  else 
    pop while prec(top) >= prec(current)
    push current


