
import urllib.request
import os
import ssl

# Create unverified context to avoid SSL errors with some old Python versions/environments
ssl._create_default_https_context = ssl._create_unverified_context

def download_file(url, filename):
    print(f"Attempting to download {filename} from {url}...")
    try:
        req = urllib.request.Request(
            url, 
            data=None, 
            headers={
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
            }
        )
        with urllib.request.urlopen(req, timeout=10) as response, open(filename, 'wb') as out_file:
            data = response.read()
            out_file.write(data)
            print(f"Success! Downloaded {filename} ({len(data)} bytes)")
    except Exception as e:
        print(f"Failed to download {filename}: {e}")

os.makedirs('public/images', exist_ok=True)

# Angry (Keep existing working one)
# download_file('https://media.giphy.com/media/11tTNkNy1SdXGg/giphy.gif', 'public/images/angry.gif')

# Pout (Replacement)
# This is a direct link to a tenor gif that usually works.
# Or better, let's use a very reliable static Giphy media link from a different source
# This one is a classic anime pout (K-On!)
download_file('https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3Z5amx6aHB5aHB5aHB5aHB5aHB5aHB5aHB5aHB5aHB5aHB5aHB5aHB5aHB5aHB5aHB5eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/MDJ9IbxxvDUQM/giphy.gif', 'public/images/pout.gif')

# Celebration (Keep existing working one)
# download_file('https://media.giphy.com/media/nNxT5qXR02FOM/giphy.gif', 'public/images/celebration.gif')
