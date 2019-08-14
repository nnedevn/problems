
# @type number: int
# @return: int
def reverse_integer(number):

  if number < -2**31 or number > 2**31 - 1:
    return 0

  negative_number = False
  reversed = 0
  if number < 0:
    negative_number = True
    number = number * -1
  
  while number:
    temp = number % 10
    reversed = reversed * 10 + temp
    number = int(number / 10)

  return (-reversed if negative_number else reversed)


print(reverse_integer(2**31))

print (2**31-1)