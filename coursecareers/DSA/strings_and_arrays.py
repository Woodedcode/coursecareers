# # # 'a' === "a"

# # print(type('a'))
# # print(type("a"))

# # # strings in python are immutable

# # # name = 'Ryan'
# # # last = 'Woods'

# # # print(id(name))

# # # name +=  " " + last

# # # print(id(name))
# # # print(name)



# # # words = ["hello", "my", "name", "is", "Ryan"]
# # # final = words[0]

# # # for word in words[1:]:
# # #     final += " "
# # #     final += word

# # # print(final)

# # # string input
# # # convert to an array
# # # convert back to a string

# # # words1 = ["hello", "my", "name", "is", "Ryan"]

# # # # final1 = " ".join(words1)
# # # # print(final1)


# # # message = "Hello my name is Ryan"

# # # words2 = message.split()
# # # # do anything with the array

# # # final2 = " ".join(words2)
# # # print(final2)


# # import time
# # words = ["pneumonoultramicroscopicsilicovolcanoconiosis"] * 100000
# # print(words)

# # start = time.time()

# # # Does the work
# # for word in words:
# #     final += word

# # # final = " ".join(words)

# # end = time.time()

# # print(f"{end - start:.6f}")


################################################## # 4/13/26
# print(type('a'))

# # strings are immutable


# name = "Ryan"
# last = 'Woods'

# print(id(name))
# name += " " +  last
# print(id(name))
# print(name)




# # words = ["hello", "my", "name", "is", "Ryan"]

# # # final = words[0]

# # # for word in words[1:]:
# # #     final += " "
# # #     final += word

# # # print(final)

# # final = " ".join(words)
# # print(final)


# # #string input
# # #convert to an array
# # #convert back to a string
# # message = "Howdy my name is Ryan"

# # words = message.split()
# # #do anything with the array
# # print(words)

# # final = " ".join(words)
# # [print(final)]

# import time 

# words = ['pneumonoultramicroscopicsilicovolcanoconiosis'] * 100000

# print(words)

# start = time.time()

# # final = ""

# # for word in words:
# #     final += word


# final = " ".join(words)

# end = time.time()

# print(f"{end-start:.6f}")



################################################## # 4/14/26
# print(type('a'))
# #strings in python are immutable
# name = "Ryan"
# last = "Woods"
# print(id(name))
# name += " " + last
# print(id(name))
# print(name)


# words = ['hello', 'my', 'name', 'is', 'Ryan']

# ###################### LONG WAY
# # final = words[0]

# # for word in words[1:]:
# #     final += " "
# #     final += word


# ###################### SHORT WAY
# final = " ".join(words)

# print(final)



# #string input
# #convert to an array
# #convert back to a string
# message = "Hewllo my name is Ryan"

# words = message.split()
# #do anything with the array

# final = " ".join(words)
# print(final)


# ###################### TIMING
# import time


# words = "pneumonoultramicroscopicsilicovolcanoconiosis" * 100000


# start = time.time()

# final = ""

# # for word in words:
# #     final += word

# final = "".join(words)

# end = time.time()

# print(f"{end - start:.6f}")



# import time 

# words = ['pneumonoultramicroscopicsilicovolcanoconiosis'] * 100000

# print(words)

# start = time.time()

# final = ""

# for word in words:
#     final += word


# # final = " ".join(words)

# end = time.time()

# print(f"{end-start:.6f}")





################################################## # 4/14/26
# 'a' "a" - Python accepts both
# print(type('a'))

# def main(name):
#     print(f"Hello {name}")

# main('Ryan')

# string in python are immutable


# name = "Ryan"
# last = 'Woods'

# print(id(name))


# name += " " + last

# print(id(name))

# print(name)


# words = ['hello', 'my', 'name', 'is', 'Ryan']

# final = words[0]
# print(final)

# # for word in words[1:]:
# #     final += " "
# #     final += word

# final = " ".join(words)


# print(final)

#string input
#convert to array
#convert back to a string

# message = "Hello my name is Ryan"
# print(message)
# words = message.split()
# #splits into an array
# print(words)
# #converts back to a sentence
# final = " ".join(words)
# print(final)


# TIMING
import time

# words = ['pneumonoultramicroscopicsilicovolcanoconiosis'] 
# print(words)
words = ['pneumonoultramicroscopicsilicovolcanoconiosis'] * 100000
print(words)

start = time.time()

#do the work
# final = ""

# for word in words:
#     final += word

final = " ".join(words)

end = time.time()

print(f"{end - start:.6f}")
