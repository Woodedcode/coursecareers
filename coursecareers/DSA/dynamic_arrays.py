#STATIC AND DYNAMIC ARRAYS

# Data the contains multiple type of data typpe -> num>str>boolean
# array is a collection and has alot of built in capabilities
#could be considered as data type or data structure


# contiguous memory is vitally important for an array
#  Dynmic array is an array that can grow

# data = ["data", 5, True, [5,3,1]]
# print(data)

#layer of indirection
#behind the scenes - Array will store pointer to the data
#the pointers are contiguous
# supports random access


# random access - in constant time -> So you might see 0(1)
# contiguous
# consistently sized


# print(data[2])
# startign memory location + (size of each element * index being used)

# 100
# 4
# [2]
# 100 + 8 = 108
# if its a pointer, just go to wherever the pointer points


# data = [1,2,3,4,5]

# # data.extend([6,7,8,9,10]) #in-place - adjust algorithm -> operation or extending an array -> adding to the original memory -> modify iriginal variable

# data + [6,7,8,9,10]



# print(data)


# data1 = [54,23,656,12,87]
# data2 = sorted(data1)
# print(data1,data2)


# data = [54,23,656,12,87]
# data.sort()

# [print(data)]

# COPYING
# data1 = [1,2,3]
# data2 = data1[:] # : -> slice /// .copy()
# data2[0] = 100
# print(data1)


# data1 = [0,1,2,3,4,5,6,7,8]
# # data2 = data1[3:5]
# # [inclusive:exclusive]
# # data2 = data1[::-1]
# data1.reverse()
# # print(data2)
# print(data1)

# LOOPING WITH ARRAYS
# data = [0,1,2,3,4,5,6,7,8]
# data = ["hello", "my", "name", "is", "Ryan"]

# for i in range(len(data)):
#     print(i)
# #prints value

# for d in data:
#     print(d)
# # prints data

# for i in range(len(data)):
#     print(i, data[i])
# # prints value and data

# for i in range(len(data) -1, -1, -1):
#     print(i,data[i])

# LIST COMPREHENSION
# data = ["hello", "my", "name", "is", "Ryan"]
# final = [str.upper(word) for word in reversed(data)]

# print(final,data)







