module.exports = (sequelize, { DataTypes }) => (sequelize.define('tb_books', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING(30),
    allowNull: false,
    validate: {
      notNull: {
        msg: 'Cannot be null.'
      },
      notEmpty: {
        msg: 'Cannot be empty.'
      }
    }
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true
  }
}));