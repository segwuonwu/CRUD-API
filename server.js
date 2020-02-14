const express = require('express');
const app = express();
const db = require('./models');

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send("HOME");
})

// Index - GET /employees
app.get('/employees', (req, res) => {
    db.employee.findAll().then(emp => {
        console.log(emp)
        res.json(emp);
    }).catch(err => {
        console.log(err);
        res.send("Error");
    })
})

// Create - POST /Employees (redirect to /employees/:id)
app.post('/employees', (req, res) => {
    db.employee.findOrCreate({
        where: {
            employee_email: req.body.employee_email
        },
        defaults: {
            employee_name: req.body.employee_name,
            employee_salary: req.body.employee_salary,
            employee_age: req.body.employee_age
        }
    }).then(([employee, created]) => {
        if (created) {
            console.log(`Created ${employee.employee_name} with salary of ${employee.employee_salary}`);
            // res.redirect(`/employees/${employee.id}`);
        } else {
            console.log(`Found ${employee.employee_name} with salary of ${employee.employee_salary}`);
        }
        res.send("Employee was created successfully!!");
    }).catch(err => {
        console.log(err);

    });

})

// Show - GET /employees/:id
app.get('/employees/:id', (req, res) => {
    db.employee.findOne({
        where: {
            id: req.params.id
        }
    }).then(emps => {
        console.log(`Found ${emps.employee_name}`);
        res.send(`Found ${emps.employee_name}`);
    }).catch(err => {
        console.log(err)
        res.send("ERROR NO ID FOUND");
    });
})

// Update - PUT /employees/:id (redirect to /employees/:id)
app.put('/employees/:id', (req, res) => {
    db.employee.update({
        employee_name: req.body.employee_name,
        employee_salary: req.body.employee_salary,
        employee_age: req.body.employee_age,
        employee_email: req.body.employee_email
    }, {
        where: {
            id: req.params.id
        }
    }).then(updated => {
        if (updated)
            console.log('Successfully Updated!');
        res.send("Successfully Updated!");
    }).catch(err => {
        console.log(err);
        res.send("Error");
    })
});

// Delect - DELETE /employees/:id 
app.delete('/employees/:id', (req, res) => {
    db.employee.destroy({
        where: {
            id: req.params.id
        }
    }).then(function(numDelected) {
        // do something when done deleting
        if (numDelected === id)
            console.log("DELETED EMPLOYEE AT ID " + req.params.id);
    }).catch(err => {
        console.log(err)
        res.send("ERROR")
    });

});

app.listen(3000, () => console.log(`🎧You're listening to the smooth sounds of port 3000🎧`));