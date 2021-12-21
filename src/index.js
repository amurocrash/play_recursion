const { gcd } = require('./topics/gcd')
const { permutation } = require('./topics/permutation')
const { calSeries } = require('./topics/series')
const { reverseOutput } = require('./topics/reverseOutput')
const { countChar } = require('./topics/countChar')
const { sumDigit } = require('./topics/sumDigit')
const { number2String } = require('./topics/number2String')
const { vat } = require('./topics/valleyAngleTheorem')
const { climb } = require('./topics/climb')
const { mailAndEnvelop } = require('./topics/mailAndEnvelop')
const { inOrder, postOrder, Node, findPreOrder } = require('./topics/findPreOrder')
const { arrAndSum } = require('./topics/arrAndSum')

function testPermutation() {
  const arr =['1', '2', '3', '4']
  const r = permutation(arr)
  console.log(r)
}

function testGcd() {
  console.log(gcd(124, 24))
}

function testSeries() {
  console.log(calSeries(2, () => 1, i => i))
  console.log(calSeries(2, i => i, i => 2 * i + 1))
}

function testReverse() {
  const str = '12345'
  console.log(reverseOutput(str))

  const arr = ['1', '2', '3', '4', '5']
  console.log(reverseOutput(arr))

  const num = 12345
  console.log(reverseOutput(num))
}

function testCountChar() {
  console.log(countChar('hello ll lalala', 'l'))
}

function testSumDigit() {
  console.log(sumDigit(5222))
}

function testNum2String() {
  console.log(number2String(123456789))
}

function testVat() {
  console.log(vat(22))
}

function testClimb() {
  console.log(climb(4))
}

function testMailAndEnvelop() {
  console.log(mailAndEnvelop(4))
}

function testFindPreOrder() {
  /**
   * 后序遍历的最后一个元素A是根节点，在中序遍历中以根节点A作为分界将元素分为左子树（CBD）和右子树（EF），再观察后序遍历中左子树的顺序是CDB

，可以判断出B是左子树的根节点（因为后序遍历是：左->右->根），再观察中序遍历，B元素左边是C右边是D，说明B节点既有左子树又有右子树，左右子树只有一个元素就可以直接确定了，不用再返回去观察后序遍历，左子树重建完成，

现在来看右子树，右子树有两个元素EF，观察后序遍历E在F的后面，所以E是右子树的根节点，然后看中序遍历中E只有右边一个F元素了，即F是E的右子树，此时整个二叉树重构完成
   */
  const root = findPreOrder([...'CBDAEF'], [...'CDBFEA'])
  inOrder(root)
  console.log('----')
  postOrder(root)
}

function testArrAndSum() {
  const arr = [4, 1, 3, 2, 5, 6, 8]
  console.log(arrAndSum(arr, 7))
}

// testPermutation()
// testGcd()
// testSeries()
// testReverse()
// testCountChar()
// testSumDigit()
// testNum2String()
// testVat()
// testClimb()
// testMailAndEnvelop()
// testFindPreOrder()
testArrAndSum()