import { Router } from 'express';

let router = Router();

router.get('/dashboard/:userId', (req, res, resp) => {
  let userId = req.params.userId;

  res.send('this should be the dashboard for user ' + userId);
});


export default router;