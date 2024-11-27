import requests
import time

# The URL of your Flask app
flask_url = "http://127.0.0.1:5000/"

# Function to check if Flask is running
def check_flask():
    try:
        response = requests.get(flask_url)
        if response.status_code == 200:
            print("Flask app is running.")
        else:
            print(f"Flask app returned status code: {response.status_code}")
    except requests.exceptions.RequestException as e:
        print(f"Error checking Flask: {e}")

# Run the check every 10 seconds
while True:
    check_flask()
    time.sleep(10)
