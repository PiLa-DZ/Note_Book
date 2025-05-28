# Data Structures ############################################
# Operations on Linked List ##################################
#### Get & Set & Add & Delete
## Get Element
- Psuedo Code 
  get(i)
    current = head
    for i = 0 to i
      current = current.next
    return current.value
## Set Element
- Psuedo Code 
  set(i, v)
    current = head
    for i = 0 to i
      current = current.next
    current.value = v

## Add Element (Empty List)
## Add Element (Start)
- Psuedo Code 
  addFirst(v)
    newNode = new Node(v)
    if list is empty
      head = tail = newNode
    else 
      newNode.next = head
      head = newNode
    n++
## Add Element (End)
- Psuedo Code 
  addLast(v)
    newNode = new Node(v)
    if list is empty
      head = tail = newNode
    else
      tail.next = newNode
      tail = newNode
    n++
## Add Element (Middle)
- Psuedo Code 
insert(i, v)
  newNode = new Node(v)
  if list is empty
    head = tail = newNode
  else
    current = head
    for i = 0 to i-1
      current = current.next
    newNode.next = current.next
    current.next = newNode 
  n++

## Delete Element (First)
- Psuedo Code 
  deleteFirst()
    head = head.next
    n--
## Delete Element (Last)
- Psuedo Code 
  deleteLast()
    current = head
    for i = 0 to n-1
      current = current.next
    tail = current
    tail.next = null
    n--
## Delete Element (Middle)
- Psuedo Code 
  deleteMiddle(i)
    current = head
    for i = 0 to i-1
      current = current.next
    current.next = current.next.next
    n--
