/* I added this part because I wanted to add details
  to incoming request objects. 
  typescript was not so cool about it.
*/
declare namespace Express {
  interface Request {
    user?: any;
  }
}
