'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('employees', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            employee_name: {
                type: Sequelize.STRING
            },
            employee_salary: {
                type: Sequelize.INTEGER
            },
            employee_age: {
                type: Sequelize.INTEGER
            },
            employee_email: {
                type: Sequelize.STRING,
                allowNull: false
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('employees');
    }
};