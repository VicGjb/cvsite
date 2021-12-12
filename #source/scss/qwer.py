# def rgb(r, g, b):
    
#     def hex(number):
#         result = ''
#         rem = number % 16
#         while rem>0:
#             if rem < 16:
#                 namber = 0
#                 temp = rem
#                 rem = 0 
#                 if temp ==  10:
#                     result += 'A'
#                 elif temp == 11:
#                     result += 'B'
#                 elif temp == 12:
#                     result += 'C'
#                 elif temp == 13:
#                     result += 'D'
#                 elif temp == 14:
#                     result +='E'
#                 elif temp == 15:
#                     result += 'F'
#                 else:
#                     result += str(temp)
#             else:
#                 result += str(number//16)
#                 number = number//16
#                 rem = number%16

#         return result
        
#     result = hex(r)+hex(r) +hex(g)+ hex(g) +hex(b)+ hex(b)
#     return result

# print (rgb(255, 255,255))



def rgb(r, g, b):
    
    def check(number):
        if number<0:
            return 0
        elif number>255:
            return 255
        return number
    r=check(r)
    g=check(g)
    b=check(b)

    print((r, g, b))
    
    result="%02x%02x%02x"%(r,g,b)
    return result.upper()

print(rgb(9,0,0))