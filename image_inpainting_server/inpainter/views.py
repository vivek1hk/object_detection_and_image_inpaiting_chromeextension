from django.shortcuts import render
from django.http import HttpResponse
import base64
from resizeimage import resizeimage
from PIL import Image
import os 
import time



import requests
from io import BytesIO


import os



# Create your views here.
def home_page_view(request):
    return render(request,'inpainter/index.html',{})

def index_views(request):
    img = request.GET["img"]
    response = requests.get(img)
    image = Image.open(BytesIO(response.content))


    # cover = resizeimage.resize_cover(image, [64, 64])
    module_dir = os.path.dirname(__file__) 
    file_path = os.path.join(module_dir, 'images\\not_cropped\\image-cover.jpeg')

    image.save(file_path, image.format)


    

    file_path = os.path.join(module_dir, 'align-dlib.py')
    image_path = os.path.join(module_dir, 'images\\not_cropped\\')
    output_path = os.path.join(module_dir, 'images\\cropped\\')
    print (output_path,image_path,file_path)
    if os.path.isfile(output_path+"image-cover.png"):
        os.remove(output_path+"image-cover.png")
    

    os.system('python '+file_path+' '+image_path+' align innerEyesAndBottomLip '+output_path+' --size 64')

    time.sleep(10)

    file_path = os.path.join(module_dir, 'complete.py')
    image_path = os.path.join(module_dir, 'images\\cropped\\image-cover.png')
    output_path = os.path.join(module_dir, 'images\\')
    check_point = os.path.join(module_dir, 'putoncheckpoint\\')
    print (module_dir,file_path,image_path,output_path)
    print (check_point)

    os.system('python '+file_path+' --checkpointDir '+check_point+' --outDir '+output_path+' --nIter 1 '+image_path)

 

    # time.sleep(10)
     # get current directory
    output_path = os.path.join(module_dir, 'images\\')
    # return render(request,'inpainter/0000.png',{})
    file_path = os.path.join(module_dir, output_path+'completed\\0000.png')
    image_data = open(file_path, "rb").read()
    encoded_string = base64.b64encode(image_data)
    
    return HttpResponse(encoded_string, content_type="image/png")
    #return HttpResponse("<h1> Hello </h1>")    
    #return render(request,'inpainter/index.html',{})

# Create your views here.
