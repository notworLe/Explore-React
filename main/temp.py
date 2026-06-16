
# # CRUD

# def create():
#     apple = 0
#     return apple


# def read(apple):
#     print(f"Có {apple} apples")


# def delete(apple): 
#     return apple - 1

# def update(apple, so_luong):
#     apple = so_luong
#     return apple


# if __name__ == "__main__":

# Database hệ thống
user_db = ['boss', 'not', 'huy', 'quyen']    
pass_db = ['123',  '123456', '098', '672']

def check_username(user_db, username):
    for user in user_db:
        if user == username:
            return True
    return False

def check_password(pass_db, password):
    for pas in pass_db:
        if pas == password:
            return True
    return False

# Input Giao diện FB 
username = str(input("Username: "))
password = str(input("Password: "))

if check_username(user_db, username):
    if check_password(pass_db, password):
        print("Login thành công")
    else:
        print("mật khẩu của mày đã sai")
        raise
else:
    print('tạo khoản đi nhóc')
    raise
    

