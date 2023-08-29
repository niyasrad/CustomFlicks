from flask import Flask, request, jsonify
import pandas as pd

app = Flask(__name__)

# DataFrame loading
def load_user_data():
    df = pd.read_csv("Netflix_Userbase.csv")
    return df

# Loading the data 
user_data = load_user_data()

# Endpoint for user id
@app.route('/get_user/<int:user_id>', methods=['GET'])
def get_user(user_id):
    user = user_data.loc[user_id].to_dict()
    if user:
        return jsonify(user), 200
    else:
        return jsonify({'error': 'User not found'}), 404

if __name__ == '__main__':
    app.run(debug=True)