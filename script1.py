import sys
#print("Welcome to ",str(sys.argv[1]))

from flask import Flask
app=Flask(__name__)
@app.route("/")
def dummy_api():
    return str(sys.argv[1])
if __name__ == "__main__":
    app.run()
app.run(port=5000)