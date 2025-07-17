from flask import Flask
from flask import request

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

@app.post("/register")
def register():
    role = request.form["role"]
    if role == "garden":
        # Register as garden
        pass
    elif role == "person":
        # Register as person
        pass
    else:
        return {
            "status": "failed",
            "reason": f"unknown role {role}",
        }


if __name__ == "__main__":
    app.run(port=5001)
