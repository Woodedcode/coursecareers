# Associative array

# Asspcoative array, key-value store, map,symbol table, or dictionary

# stores a collection of key-value pairs, such that each possible key appears at most once in the collection.





########################## HASH TABLE
# from collections import defaultdict
poem = """
She was being readied by forces she did not
recognize. This is an age in which imagination
is no longer all-powerful. Where if you had
to write the whole thing down, you could.
(Imagine: to see the whole thing written down.)
Everything but memory abolished.
All the necessary explanations also provided.
A very round place: everyone is doing it.
“It: a very round and glad place.
Feeling life come from far away, like a motor approaching.
And in its approach: that moment when it is closest, so loud, as if
not only near you, but in you.
And that being the place where the sensation of real property
begins. Come. It is going to pass, even though right
                                         now
it’s very loud, here, alongside, life, life, so glad to be in it,
no?, unprotected, thank you, exactly the way I feel.
And you? Lord how close it comes. It has a
         seeming to it
so bright it is as if it had no core.
It all given over to the outline of seem:
still approaching, blind, open, its continuing elsewhere unthinkable as a
gear-shift
at this speed.
Approaching as if with a big question.
No other system but this one and it growing larger.
All at once, as if all the voices now are suddenly one voice.
Ah, it is here now, the here. [Love, where is love, can it too
be this thing that simply grows insistently louder]
[It seems impossible it could ever pass by][she thought]
the eruption of presentness right here: your veins
[Meanwhile a dream floats in an unvisited field]
[There by the edge of the barn, above the two green-lichened
stones, where for an instant a butterfly color of chicory
             flicks, dis-
appears] How old-fashioned: distance: squinting it
                                                into
view. Even further: rocks at year’s lowest tide.
The always-underneath excitedly exposed to heat, light, wind, the
being-seen. Who could have known a glance could be
so plastic. Rubbery and pushing down on all the tiny hissing overbright
                                                                           greens.
"""

# print(poem)


# conjunctions = {"for": 0, "and": 0, "nor": 0, "but": 0, "or": 0, "yet": 0, "so": 0}

# word_count = defaultdict(int)

# # words = poem.split()
# words = [word.strip(".,!\"'") for word in poem.split()]

# for word in words:
#     word_count[word] += 1

# print(word_count)

words_present = set()

words = [word.strip(".,?!\"'") for word in poem.split()]

for word in words:
    words_present.add(word)

print(list(words_present))

# for word in words:
#     lowered = str.lower(word)
#     if lowered in conjunctions:
#         conjunctions[lowered] += 1
# # very efficient in searching an array because of hashing


# print(conjunctions)

#lowered gets hashed
# checks the dictionary for that position
# constant time operation (performance is independent of the dictionary size)




