# print("Hello DSA")

# print(45 / 6)
# # // give you int when dividing


# # getting max value
# data = [5,30,23,43,546,23,54]

# print(max(data))
# # manually
# # starting
# # comparisons

# highest_seen = data[0]

# for d in data:
#     if d > highest_seen:
#         highest_seen = d

# print(highest_seen)
# # want to avoid runtime errors
# # cautious with floating point numbers - wont give exact precision

# from decimal import Decimal

# a = Decimal('.1') + Decimal('.2')
# print(a == Decimal('.3'))

# # bankers rounding - more accurate number round a higher number
# print(round(2.5))





# 4/12/26

print("Hello DSA")

# int types and floating types
print(45 / 6)
print(45 // 6)

print(999999999999999999 * 999999999999999)


data = [5,30,23,43,546,23,54]
# automatic
print(max(data))
# manually
# starting value -> where do we get this starting value?
# comparisons against all other values

highest_seen = data[0]

for d in data:
    if d > highest_seen:
        highest_seen = d

print(highest_seen)

# floating point numbers

# a = .1 + .2
# print(a == .3)
#  -> false


from decimal import Decimal

a = Decimal('.1') + Decimal('.2')
print(a == Decimal('.3'))


# bankers rounding
print(round(2.5))
# will go to the 'even' nearest number







