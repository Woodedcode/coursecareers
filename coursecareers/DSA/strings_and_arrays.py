# 'a' === "a"

print(type('a'))
print(type("a"))

# strings in python are immutable

# name = 'Ryan'
# last = 'Woods'

# print(id(name))

# name +=  " " + last

# print(id(name))
# print(name)



# words = ["hello", "my", "name", "is", "Ryan"]
# final = words[0]

# for word in words[1:]:
#     final += " "
#     final += word

# print(final)

# string input
# convert to an array
# convert back to a string

# words1 = ["hello", "my", "name", "is", "Ryan"]

# # final1 = " ".join(words1)
# # print(final1)


# message = "Hello my name is Ryan"

# words2 = message.split()
# # do anything with the array

# final2 = " ".join(words2)
# print(final2)


import time
words = ["pneumonoultramicroscopicsilicovolcanoconiosis"] * 100000
print(words)

start = time.time()

# Does the work
for word in words:
    final += word

# final = " ".join(words)

end = time.time()

print(f"{end - start:.6f}")

