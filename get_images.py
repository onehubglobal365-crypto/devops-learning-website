import os
import json

path = r'c:\devops-learning-website-main\public\website-pics'
images = [f'/website-pics/{f}' for f in os.listdir(path) if f.endswith('.jpg') and 'trashed' not in f.lower()]
with open('images_list.json', 'w', encoding='utf-8') as f:
    json.dump(images, f)
print("Done")
