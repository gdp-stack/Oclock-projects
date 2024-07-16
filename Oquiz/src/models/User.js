const { DataTypes, Model } = require ('sequelize');
const sequelize = require ('./sequelize');

class User extends Model {

  get fullname(){
    return `${this.firstname} ${this.lastname}`
  }

}

User.init(
  {
    email: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      }
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    firstname: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    lastname: {
      type: DataTypes.TEXT,
      allowNull: false,
    }
  },
  {
    sequelize,
    tableName: 'user',
  },
);

module.exports = User;