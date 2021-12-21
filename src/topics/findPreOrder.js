function Node(e, left = null, right = null) {
  this.e = e
  this.left = left
  this.right = right
}

function findPreOrder(inData, postData) {
  const rootE = postData[postData.length - 1]
  if (!rootE) {
    return null
  }

  const root = new Node(rootE)
  const newInDataLeft = 
    inData.slice(0, inData.indexOf(rootE))
  const newInDataRight = 
    inData.slice(inData.indexOf(rootE) + 1, inData.length)
  const newPostDataLeft = 
    postData.slice(0, newInDataLeft.length)
  const newPostDataRight = 
    postData.slice(newInDataLeft.length, postData.length - 1)

  root.left = findPreOrder(newInDataLeft, newPostDataLeft)
  root.right = findPreOrder(newInDataRight, newPostDataRight)

  return root
}

module.exports = {
  findPreOrder
}

function inOrder(node) {
  if (!node) {
    return
  }

  inOrder(node.left)
  console.log(node.e)
  inOrder(node.right)
}

function postOrder(node) {
  if (!node) {
    return
  }

  inOrder(node.left)
  inOrder(node.right)
  console.log(node.e)
}

module.exports = {
  Node,
  findPreOrder,
  inOrder,
  postOrder
}