/**
 * 

错排递推公式：F(n)=(n-1)(F(n-1)+F(n-2));

假设前三封信为a,b,c......；信封为A,B,C,.......;

则a不能放进A，b不能放进B。

若a放进B。b放进的情况分为两种：b放进A；b不放进A；

若为第一种情况，则方案数为F(n-2)，因为a放进B，b放进A满足条件，只需要考虑剩下的n-2个的情况

若为第二种情况，则方案数为F(n-1)，因为a放进B满足条件，而“b不能放进A”也就相当于原先的“b不能放进B”，需要考虑剩下的n-1个情况

综上所述，信a可以与除自身之外的所有信组成上述情况，故有(n-1)(F(n-1)+F(n-2))中放法

 * @param {*} n 
 * @returns 
 */
function mailAndEnvelop(n) {
  if (n === 1) {
    return 0
  }

  if (n === 2) {
    return 1
  }

  return (n - 1) * (mailAndEnvelop(n - 1) + mailAndEnvelop(n - 2))
}

module.exports = {
  mailAndEnvelop
}