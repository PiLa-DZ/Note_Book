# Stack ######################################################
# Parentheses Balance ########################################
  - (((([] [ ]))) () (()))

  # Create Stack by Array
  ## Psuedo Code
    go throw parentheses
      if open
        push to stack
      if close
        if stack is empty or wrong close for top
          return not balance
        pop
    if stack not empty
      return not balance
    return balance

