import sqlite3
import json

def write_to_db(key,value):
    db_connection = sqlite3.connect('tax.db')
    db_cursor = db_connection.cursor()
    db_cursor.execute(f"SELECT ID FROM input_fields WHERE Input='{key}';")
    ID = db_cursor.fetchone()
    ID = int(ID[0])
    db_cursor.execute(f"UPDATE user_values SET (user_1) = '{value}' WHERE Input_ID = {ID};")
    db_connection.commit()
    db_cursor.close()

#experimental form set up (currently not in use)
def set_up():
    total_inputs = []
    db_connection = sqlite3.connect('tax.db')
    db_cursor = db_connection.cursor()
    db_cursor.execute(f"SELECT * FROM input_fields") 
    db_inputs = db_cursor.fetchall()
    db_cursor.execute(f"SELECT * FROM form_pages") 
    form_pages = db_cursor.fetchall()
    for page in form_pages:
        form_page = {"title": page[1], "header":page[2], "inputFields":[]}
        total_inputs.append(form_page)
    for i in db_inputs:
        if i[4] != None:
            if i[9] == 1:
                if i[8] != None:
                    if i[6] != None:
                        input_field = {"name":i[1],"placeholder":i[7],"tooltip":i[5],"defaultValue":i[6], "type":i[8], "index":i[10], "autoFocus":1, "size":i[11], "margin":i[12]}
                    else:
                        input_field = {"name":i[1],"placeholder":i[7],"tooltip":i[5],"defaultValue":i[6], "type":i[8], "index":i[10],"autoFocus":1, "size":i[11], "margin":i[12]}

                else:
                    input_field = {"name":i[1],"placeholder":i[7],"tooltip":i[5],"defaultValue":i[6], "index":i[10],"autoFocus":1, "size":i[11], "margin":i[12]}
            if i[8] != None:
                if i[6] != None:
                    input_field = {"name":i[1],"placeholder":i[7],"tooltip":i[5],"defaultValue":i[6], "type":i[8], "index":i[10],"autoFocus":1, "size":i[11], "margin":i[12]}
                else:
                    input_field = {"name":i[1],"placeholder":i[7],"tooltip":i[5],"defaultValue":i[6], "type":i[8], "index":i[10], "size":i[11], "margin":i[12]}
            else:
                input_field = {"name":i[1],"placeholder":i[7],"tooltip":i[5],"defaultValue":i[6], "index":i[10], "size":i[11], "margin":i[12]}
            #print(total_inputs[i[4]]["inputFields"])
            total_inputs[i[4]]["inputFields"].append(input_field)
    return total_inputs
    
def load_from_db(input_key):
    db_connection = sqlite3.connect('tax.db')
    db_cursor = db_connection.cursor()
    db_cursor.execute(f"SELECT X_Location_ID FROM input_fields WHERE Input='{input_key}';")
    x_id = db_cursor.fetchone()
    db_cursor.execute(f"SELECT X_Location FROM X_Locations WHERE ID='{x_id[0]}';")
    x_location = db_cursor.fetchone() 
    db_cursor.execute(f"SELECT Y_Location_ID FROM input_fields WHERE Input='{input_key}';")
    y_id = db_cursor.fetchone()
    db_cursor.execute(f"SELECT Y_Location FROM Y_Locations WHERE ID='{y_id[0]}';")
    y_location = db_cursor.fetchone() 
    db_cursor.execute(f"SELECT ID FROM input_fields WHERE Input='{input_key}';")
    ID = db_cursor.fetchone() 
    db_cursor.close()
    return x_location, y_location, ID


def retrieve_location(json_object):
    print("retrieve data from db")
    page1 = {}
    page2 = {}
    page3 = {}
    page4 = {}
    page5 = {}
    page6 = {}
    page7 = {}
    for key in json_object.keys():
        print(key, json_object[key])
        temp_locations = load_from_db(key)
        if temp_locations[0] != None or temp_locations[1] != None:
            location = f"{temp_locations[0][0]},{temp_locations[1][0]}"
            ID = temp_locations[2][0]
            if ID < 101:  # CHANGE ID to respective form_page!!!
                page1[location] = json_object[key]
            elif ID < 201:
                page2[location] = json_object[key]
            elif ID < 301:
                page3[location] = json_object[key]
            elif ID < 401:
                page4[location] = json_object[key]
            elif ID < 501:
                page5[location] = json_object[key]
            elif ID < 601:
                page6[location] = json_object[key]
            elif ID >= 601:
                page7[location] = json_object[key]
    return page1,page2,page3,page4,page5,page6,page7
