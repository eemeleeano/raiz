from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def index():
    '''
    Render the landing page.
    '''
    return render_template("index.html")

@app.route("/register")
def new():
    '''
    Render a page for registering new users and gardens.
    '''
    return render_template("register.html")

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=9000)
