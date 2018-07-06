const express = require('express');
const Joi = require('joi');
const app = express();

app.use(express.json());

const courses = [
    { id: 1, name: 'Course 1' },
    { id: 2, name: 'Course 2' },
    { id: 3, name: 'Course 3' }
];

function validateCourse(course) {

    const schema = { name: Joi.string().min(3).required() };

    return Joi.validate(course, schema);
}

app.get('/', (req, res) => {

    res.send('Hello world!');
});

app.get('/api/courses', (req, res) => {

    res.send(courses);
});

app.get('/api/courses/:id', (req, res) => {

    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('The course with the given ID has not been found');
});


app.post('/api/courses', (req, res) => {

    // Input Validation with joi
    const {error} = validateCourse(req.body);

    if (error) return res.status(400).send(error.details[0].message);

    const course = {
        id: courses.length + 1,
        name: req.body.name
    }

    courses.push(course);
    res.send(course);
});



app.put('/api/courses/:id', (req, res) => {

    // Find the proper element.
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('The course with the given ID has not been found');

    // Input Validation with joi
    const result = validateCourse(req.body);

    if (result.error) return res.status(400).send(result.error.details[0].message);

    // Update the element.
    course.name = req.body.name;

    // Return the updated element to the client.
    res.send(course);
});



app.get('/api/posts/:year/:month', (req, res) => {

    //res.send(req.params);
    res.send(req.query);
});



app.delete('/api/courses/:id', (req, res) => {

    // Find the proper element.
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('The course with the given ID has not been found');

    // Delete it.
    const index = courses.indexOf(course);
    courses.splice(index, 1);

    // Return the updated element to the client.
    res.send(course);
});



const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port ${port}...`));