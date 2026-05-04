########################### 5/3/26
# GROUPING DATA TOGETHER

# person_name = "Ryan"
# person_age = 36


# person = {
#     "name": "Ryan",
#     "age": 36
# }

# print(person["name"])

# # TUPLE - keep tuples light

# person2 = ("Ryan", 36)
# print(person2[0])

#  creating classes
from enum import Enum

class Person:
    def __init__(self, name, age, person_type):
        self.name = name
        self.age = age
        self.person_type = person_type


    def greet(self):
        print(f"Hello, my name is {self.name} and my age is {self.age}. {self.person_type.name.lower()}")


    class PersonType(Enum):
        USER = 0
        ADMIN = 1
        SUPER_USER = 2

person = Person("Ryan", 36, Person.PersonType.SUPER_USER)
print(person.name, person.age)
person.greet()


















