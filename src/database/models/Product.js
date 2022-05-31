module.exports = (sequelize, DataTypes) => {
    let alias = 'Product';

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(100)
        },
        description: {
            type: DataTypes.TEXT
        },
        image: {
            type: DataTypes.STRING(100)
        },
        code: {
            type: DataTypes.STRING(100) 
        },
        category_id: {
            type: DataTypes.INTEGER  
        },
        productType_id: {
            type: DataTypes.INTEGER  
        }
    };

    let config = {
        tableName: 'products',
        timestamps: false
    };
    
    const Product = sequelize.define(alias, cols, config);

    Product.associate = function(models){
        Product.belongsTo(models.Category,{
            as:"categories",
            foreignKey:"category_id"
        });

        Product.belongsTo(models.Productype,{
            as:"productType",
            foreignKey:"productType_id"
        });
    }

    return Product
}