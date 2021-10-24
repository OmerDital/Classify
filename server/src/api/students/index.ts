import {Router} from 'express';

const router = Router();

const students = [
  {name: "omer", city: "tel aviv"},
  {name: "ofek", city: "kidron"}
];

router.get('/', ((req, res) => res.send(students)));

export default router;