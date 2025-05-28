# Stack ######################################################
# Stack Implement ############################################

# Create Stack by Array ######################################
## Push element
- Psuedo Code
  push(v)
    if top = length
      stack is full
    arr[top] = v
    top++

## Pop element
- Psuedo Code
  pop()
    if top = 0
      stack is empty
    top--
    return arr[top]

# Create Stack by Linked List ################################
## Push element
- Psuedo Code
  push(v)
    list.addFirst(v)

## Pop element
- Psuedo Code
  pop()
    list.removeFirst()
