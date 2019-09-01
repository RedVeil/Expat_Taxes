from PIL import Image, ImageFont, ImageDraw
from fpdf import FPDF
from pathlib import Path
from db_connection import retrieve_location
import os
#pdf = FPDF()


def make_pdf(image_list):
    print("create_pdf")
    pdf1_filename = "Steuerliche Erfassung.pdf"
    img1 = Image.open("testimg1.jpg")
    img1.save(pdf1_filename, "PDF" ,resolution=100.0, save_all=True, append_images=image_list[1:])
    for i in range(len(image_list)):
        os.remove(f"testimg{i+1}.jpg")
    


def __init__(json_object):
    print("__init__")
    pages = retrieve_location(json_object)
    im_list = []
    for i in range(len(pages)):
        im = Image.open(f"Steuerliche Erfassung-{i+1}.jpg")
        roboto = ImageFont.truetype("Roboto-Regular.ttf", size=35)
        d = ImageDraw.Draw(im)  
        text_color= (0,0,0)
        for key, value in pages[i].items():
            locationX ,locationY = key.split(",")
            location = [int(locationX),int(locationY)]
            text = str(value)
            d.text(location, text, font=roboto, fill=text_color)
        im.save(f"testimg{i+1}.jpg", quality=50)
        im_list.append(im)
        if json_object["SEPA"] == "yes":
            # attach Sepa Mandat jpgx
            pass
    make_pdf(im_list)

    