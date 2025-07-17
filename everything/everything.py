from flask import Flask

app = Flask(__name__)

@app.route("/harvests")
def get_harvests():
    return [
        {
            "item": "corn",
            "weight": "10",
        },
        {
            "item": "cabbage",
            "quantity": "10",
        },
    ]

if __name__ == "__main__":
    app.run(port=5001)
