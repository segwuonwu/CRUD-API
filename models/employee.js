'use strict';
module.exports = (sequelize, DataTypes) => {
    const employee = sequelize.define('employee', {
        employee_name: DataTypes.STRING,
        employee_salary: DataTypes.INTEGER,
        employee_age: DataTypes.INTEGER,
        employee_email: DataTypes.STRING
    }, {});
    employee.associate = function(models) {
        // associations can be defined here
    };
    return employee;
};