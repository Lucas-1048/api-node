import { Router } from 'express';
import { cidadesController } from './../controllers';
const router = Router();

router.get('/', (req, res) => {
  return res.send('Hello World!');
});

router.post('/cidades', cidadesController.createValidation, 
  cidadesController.create);

export { router };