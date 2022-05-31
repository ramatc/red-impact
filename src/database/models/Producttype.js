module.exports = (sequelize, DataTypes) => {
    let alias = 'Productype';
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(100)
        }
    };
    let options = {
        tableName: 'productType',
        timestamps: false
    }
    const Productype = sequelize.define(alias,cols,options);

    Productype.associate = function(models){
        Productype.hasMany(models.Product,{
            as:"products",
            foreignKey:"productType_id"
        });
    }

    return Productype;
}