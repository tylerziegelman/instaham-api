'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Like extends Model {
    user(){
       return this.belongsTo('App/Models/User')
    }
    post(){
        return this.belongsTo('App/Model/Post')
    }
}

module.exports = Like
