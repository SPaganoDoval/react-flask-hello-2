"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
import json

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }
    return jsonify(response_body), 200


@api.route('/register', methods=['POST'])
def create_user():    
    body = json.loads(request.data)    
    user = User(email = body["email"], password= body["password"], is_active = True)    
    db.session.add(user)    
    db.session.commit()

    response_body = {        "msg": " The new user has been created correctly "    }


    return jsonify(response_body), 200


@api.route('/login', methods=['POST'])
def login():
    email = request.json['email']
    password = request.json['password']

    user = User.query.filter_by(email=email).first()

    if not user or user.password != password:
        return jsonify({'message': 'Invalid email or password'}), 401

    return jsonify({'message': 'Logged in successfully'}), 200

    