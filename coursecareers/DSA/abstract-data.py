# stack, queue, deque, tree, graph

# interface - set of rules that must be met or implemented


# STACK
# two different operations - push and pop
# last in, first out
# stack = []

# stack.append(5)
# print(stack)
# stack.append(10)
# print(stack)
# stack.append(15)
# print(stack)
# stack.pop()
# print(stack)
# print(stack.pop())

# QUEUE
# first in first out



# DEQUE



# PRIORITY QUEUE




# SET




# TREE



# GRAPH





##############################    4/23/26
# Stack, Queues, Deque, Tree, Graph - ADT's

# interface - set of rules that must be met or implemented


# STACK
# two different operations - push and pop
# last in, first out
# stack = []

#PUSH. - ADDS ELEMENT TO COLLECTION
#POP - REMOVES THE MOST RECENTLY ADDED ELEMENT
# ^ LAST IN FIRST OUT


# stack = []

# stack.append(5) #adds to end of list
# print(stack)
#stack.pop() #take off the end or if what you specify
# stack.append(10) 
# print(stack)
# stack.append(15) 
# print(stack)
# stack.append(20) 
# print(stack)
# stack.append(25) 
# print(stack)
# print("peek", stack[-1])
# print(stack.pop(), "pop")
# print(stack.pop(), "pop")
# print(stack.pop(), "pop")
# print(stack.pop(), "pop")
# print(stack.pop(), "pop")
# print(stack)

#invoking functions


#QUEUE - first in first out
# q = []
# q.insert(0,5)
# print(q)
# q.insert(0,10)
# print(q)
# q.insert(0,15)
# print(q)
# print(q.pop(), "pop")
# print(q)
# print(q.pop(), "pop")
# print(q)
# print(q.pop(), "pop")
# print(q)


#SET - HASHING
#DEQUE
from collections import deque
import time

data = deque([])


start = time.time()
for i in range(200000):
    data.insert(0,i)

while data:
    print(data.pop())

end = time.time()

print(f"{end - start:.6f} seconds")







#PRIORITY QUEUE
#ASSOCIATIVE ARRAY
#TREE
#GRAPH




























