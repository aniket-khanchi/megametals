from rembg import remove
from PIL import Image


import os

directory = '/workspaces/megametals/assets/img/Water'
count = 1
for filename in os.listdir(directory):
    if filename.endswith('.jpg'):
        filepath = os.path.join(directory, filename)
        # print(filepath)
            # do something with the content of the file here

# input_path = '/workspaces/megametals/assets/img/Agriculture/IMG_9484.jpg'
        output_path = '/workspaces/megametals/Products/Water/' + str(count) + '.png'
        input = Image.open(filepath)
        output = remove(input)
        output.save (output_path)
        count +=1
