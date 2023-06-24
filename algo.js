// var searchInsert = function (nums, target) {
//     let index = 0
//     for (let i = 0; i < nums.length; i++) {

//         if (nums[i + 1] != target && nums[i] < target) {
//             index = i + 1
//         }
//         if (nums[i] == target) {
//             index = i

//         }





//     }
//     return index

// };

// console.log(searchInsert([1, 2, 3, 4, 6, 9], 5))



// var isIsomorphic = function (s, t) {

//     if (s.length !== t.length) return false
//     let mapa = new Map()
//     let mapb = new Map()

//     for (let i = 0; i < s.length; i++) {

//         if (mapa.has(s[i])) {
//             if (mapa.get(s[i]) !== t[i]) {
//                 return false
//             }

//         } else {
//             mapa.set(s[i], t[i])

//         }

//         if (mapb.has(t[i])) {

//             if (mapb.get(t[i]) !== s[i]) {

//                 return false
//             }

//         } else {
//             mapb.set(t[i], s[i])

//         }
//     }

//     console.log(mapa)
//     console.log(mapb)
//     return true
// };

// console.log(isIsomorphic("foo", "bar"))


// function sumOverAmount(arr, n) {
//     let sum = 0
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i]

//     }

//     console.log(sum)
//     if (n > sum) {
//         return true
//     }
//     return false

// }

// console.log(sumOverAmount([3, 4], 6))


// var removeElement = function (nums, val) {
//     // const result = nums.map((x) => {
//     //     if (x == val) {

//     //         // a.splice(i, 1)
//     //         x = "_"
//     //         return x
//     //     }
//     //     return x

//     // })

//     // console.log(result)




//     // for (let i = result.length; i >= 0; i--) {
//     //     if (result[i] == '_') {

//     //         result.splice(i, 1)
//     //     }

//     // }
//     // console.log(result)
//     // return result.length

//     let j = 0;
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] !== val) {
//             nums[j++] = nums[i];
//         }
//     }

//     //nums.length = j; // Chop the surplus values - not needed for LC submission
//     return j;

// };

// console.log(removeElement([3, 2, 2, 3], 3))


// var removeDuplicates = function (nums) {
//     const set = new Set(nums)
//     const r = [...set]
//     return r.length
// };

// console.log(removeDuplicates([1, 1, 2]))


// var majorityElement = function (nums) {
//     // let map = new Map()
//     // for (let i = 0; i < nums.length; i++) {

//     //     if (map.has(nums[i])) {
//     //         let num = map.get(nums[i]) + 1
//     //         map.set(nums[i], map.get(nums[i]) + 1)

//     //     }

//     //     if (map.has(nums[i]) !== nums[i]) {
//     //         map.set(nums[i], 0)
//     //     }


//     // }
//     // console.log(map)


//     nums.sort((a, b) => a - b);

//     const l = nums.length;
//     console.log(nums)
//     if (l % 2 === 0) {
//         return nums[l / 2]
//     } else {
//         return nums[(l - 1) / 2]
//     }




// };

// console.log(majorityElement([3, 2, 3, 2, 3]))


// var rotate = function (nums, k) {

//     while (k > 0) {
//         let end = nums.pop()
//         nums.unshift(end)
//         k--
//     }
//     return nums


// };

// console.log(rotate([1, 2, 3, 4, 5, 5, 6, 7], 3))



// var maxProfit = function (prices) {
//     let newAA = [...prices];
//     newAA.sort()
//     let low = newAA[0]
//     let high = newAA[newAA.length - 1]
//     let check = newAA[newAA.length - 1]

//     let count = 0;


//     for (let i = 0; i < newAA.length; i++) {
//         if (newAA[i] === high) {
//             continue
//         }

//         if (low === newAA[i]) {

//             for (let j = 0; j < prices.length; j++) {

//                 if (prices[j] >= low) {
//                     count = prices[j]

//                 }


//             }

//             low = newAA[i + 1]
//         }

//     }

//     for (let i = 0; i < prices.length; i++) {


//     }

//     return count


// };
// console.log(maxProfit([7, 2, 5, 3, 6, 4, 1]))


// var canJump = function (nums) {

//     let lastNumber = nums[nums.length - 1]

//     let term = nums.length

//     let check = 0

//     let validation = 0


// while (lastNumber !== term) {

//     if (lastNumber === check) {
//         return true
//     }
//     check += nums[check]

//     if (validation >= nums.length) {
//         return false
//     }
//     validation++


// }

//     let max = 0;
//     for (let i = 0; i < nums.length; i++) {
//         console.log(i)
//         console.log(max)
//         if (i > max) return false;
//         max = Math.max(max, i + nums[i]);

//     }
//     return true;


// };

// console.log(canJump([2, 3, 1, 1, 4]))


// var hIndex = function (citations) {

//     let count = 0
//     for (let i = 0; i < citations.length; i++) {

//         if (citations[i] >= 3) {
//             count++
//         }

//     } return count
// };

// console.log(hIndex([3, 0, 6, 1, 5]))


// var canCompleteCircuit = function (gas, cost) {
//     let begin = 0;
//     let end = 0;


//     for (let i = 0; i < gas.length; i++) {
//         if (gas[i] - cost[i] > 0) {

//             begin = gas[i]

//             break
//         }
//         end++
//         gas.push(gas.shift())
//         cost.push(cost.shift())
//         i--
//     }
//     let done = begin

//     for (let i = 0; i < gas.length; i++) {
//         begin = begin - cost[i] + gas[i + 1]
//         if (begin > done && i - 1 == gas.length - 3) {
//             return end
//         }
//     }

//     return -1

// };

// console.log(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]))


// var groupAnagrams = function (strs) {

//     const map = new Map()



//     for (let i = 0; i < strs.length; i++) {


//         let word = strs[i].split("").sort().join("")
//         if (!map.has(word)) {
//             map.set(word, [strs[i]])
//         } else {
//             let CurrentArray = map.get(word)
//             CurrentArray.push(strs[i])

//             map.set(word, CurrentArray)
//         }

//         // for (let j = 0; j < strs.length; j++) {
//         //     let testWord = strs[j].split("").sort().join("")

//         //     if (testWord === word) {
//         //         console.log(word + " " + testWord)

//         //         arrGroup.push(strs.splice(j, 1)[0])
//         //         console.log(arrGroup)
//         //         j--
//         //     }
//         // }
//         // result.push(arrGroup)
//         // i--
//     }

//     const result = Array.from(map.values())



//     // result.sort((a, b) => {
//     //     return a.length - b.length
//     // })
//     return result



// };


// console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))




// using map to stor the variables, traverse through the array and store the values as keys and the number of times it apprears as an element.
// map --  map.get()+1 if exist else  let newvar = 0  
// var topKFrequent = function (nums, k) {

//     let map = new Map()



//     for (let i = 0; i < nums.length; i++) {
//         if (map.has(nums[i])) {
//             let currentVal = map.get(nums[i])
//             currentVal += 1
//             map.set(nums[i], currentVal)

//         } else {
//             map.set(nums[i], 1)
//         }

//     }
//     let m2 = new Map([...map.entries()].sort((a, b) => b[1] - a[1]))
//     let result = Array.from(m2.keys())
//     result = result.splice(0, k)


//     return result




// };

// console.log(topKFrequent([3, 0, 1, 0], 1))

// create a loop, that goes through and splices out the current index, and then reduce it with the total, them replace it

// var productExceptSelf = function (nums) {
//     // let answer = []
//     // for (let i = 0; i < nums.length; i++) {
//     //     let currentVal = nums[i]
//     //     nums.splice(i, 1)
//     //     answer.push(nums.reduce((a, b) => a * b))
//     //     nums.splice(i, 0, currentVal)
//     // }

//     // return answer

//     const left = [1]
//     const right = []
//     right[nums.length - 1] = 1
//     for (let i = 1; i < nums.length; i++) {
//         left[i] = nums[i - 1] * left[i - 1]
//     }

//     for (let i = right.length - 2; i >= 0; i--) {
//         right[i] = nums[i + 1] * right[i + 1]
//     }
//     for (let i = 0; i < nums.length; i++) {
//         nums[i] = left[i] * right[i]
//     }
//     return nums



// };
// console.log(productExceptSelf([1, 2, 3, 4]))


// const sudokuBoard = [["5", "3", ".", ".", "7", ".", ".", ".", "."]
//     , ["6", ".", ".", "1", "9", "5", ".", ".", "."]
//     , [".", "9", "8", ".", ".", ".", ".", "6", "."]
//     , ["8", ".", ".", ".", "6", ".", ".", ".", "3"]
//     , ["4", ".", ".", "8", ".", "3", ".", ".", "1"]
//     , ["7", ".", ".", ".", "2", ".", ".", ".", "6"]
//     , [".", "6", ".", ".", ".", ".", "2", "8", "."]
//     , [".", ".", ".", "4", "1", "9", ".", ".", "5"]
//     , [".", ".", ".", ".", "8", ".", ".", "7", "9"]]


// var isValidSudoku = function (board) {



//     for (let i = 0; i < board.length; i++) {
//         let rowSet = new Set(board[i])
//         let rowCount = 0

//         let arrCol = []


//         for (let j = 0; j < board[i].length; j++) {
//             if (board[i][j] != ".") {
//                 rowCount++
//             }

//             arrCol.push(board[j][i])

//         }
//         if (rowSet.size - 1 != rowCount) {
//             return false
//         }

//         let columSet = new Set(arrCol)
//         let columnCount = 0

//         for (let j = 0; j < board[i].length; j++) {
//             if (board[j][i] != ".") {
//                 columnCount++
//             }

//         }
//         if (columSet.size - 1 != columnCount) {
//             return false
//         }


//         for (let i = 0; i < 3; i++) {
//             for (let j = 0; j < 3; j++) {

//                 const set = new Set();
//                 for (let k = 0; k < 3; k++) {
//                     for (let l = 0; l < 3; l++) {
//                         const cell = board[3 * i + k][3 * j + l]
//                         if (cell === '.') continue;
//                         if (set.has(cell)) return false;
//                         set.add(cell);
//                     }
//                 }

//             }
//         }

//         return true






//     }


//     return
// };

// console.log(isValidSudoku(sudokuBoard))


// var longestConsecutive = function (nums) {
//     // let set = new Set(nums.sort((a, b) => a - b))
//     // nums = [...set]
//     // console.log(nums)
//     // let longestcount = 0
//     // let count = 0
//     // let increment = nums[0]
//     // for (let i = 0; i < nums.length; i++) {
//     //     console.log(nums[i] + " " + increment)
//     //     if (increment != nums[i]) {
//     //         increment = nums[i + 1]
//     //         count = 1
//     //         continue
//     //     }


//     //     count++
//     //     increment++

//     //     if (longestcount < count) {
//     //         longestcount = count
//     //     }

//     // }

//     // return longestcount

//     let set = new Set(nums)
//     let longest = 0
//     for (let i = 0; i < nums.length; i++) {
//         if (!set.has(nums[i] - 1)) {
//             let length = 0
//             while (set.has(nums[i] + length)) {
//                 length++
//             }
//             longest = Math.max(length, longest)
//         }

//     }
//     return longest

// };

// console.log(longestConsecutive([-8, -4, 9, 9, 4, 6, 1, -4, -1, 6, 8]))


// var twoSum = function (numbers, target) {
//     // let result = []
//     // for (let i = 0; i < numbers.length; i++) {
//     //     for (let j = 0; j < numbers.length; j++) {
//     //         if (numbers[i] + numbers[j] === target && i != j) {
//     //             result = [j + 1, i + 1]
//     //         }

//     //     }
//     // }
//     // return result

//     let set = new Set(numbers)
//     for (let i = 0; i < numbers.length; i++) {
//         let curVal = set.has(target - numbers[i])
//         if (curVal) {
//             let sumVal = numbers.indexOf(target - numbers[i], i + 1)
//             return [i + 1, sumVal + 1]

//         }

//     }

// };

// console.log(twoSum([0, 0, 3, 4], 0))


// var threeSum = function (nums) {
//     const res = [];
//     nums.sort((a, b) => a - b)

//     for (let i = 0; i < nums.length; i++) {
//         const a = nums[i];
//         if (a > 0) break;
//         if (i > 0 && a === nums[i - 1]) continue;

//         let l = i + 1;
//         let r = nums.length - 1;
//         while (l < r) {
//             const threeSum = a + nums[l] + nums[r];
//             if (threeSum > 0) {
//                 r--;
//             } else if (threeSum < 0) {
//                 l++;
//             } else {
//                 res.push([a, nums[l], nums[r]]);
//                 l++;
//                 r--;
//                 while (nums[l] === nums[l - 1] && l < r) {
//                     l++;
//                 }
//             }
//         }
//     }
//     return res;
// }

// console.log(threeSum([-1, 0, 1, 2, -1, -4]))


// easy solution, sort it,  set to remove duplicates,  take las two,   index of method for both to find the index subtract the difference, then ill  do math to find the area with a formula


// var maxArea = function (height) {
//     // let area = 0

//     // for (let i = 0; i < height.length; i++) {
//     //     for (let j = 0; j < height.length; j++) {
//     //         let minheight = Math.min(height[i], height[j])
//     //         let length = i - j
//     //         let currentArea = length * minheight
//     //         if (currentArea > area) {
//     //             area = currentArea
//     //         }



//     //     }

//     // }
//     // return area

//     let left = 0
//     let right = height.length - 1
//     let area = 0

//     while (left < right) {
//         let minheight = Math.min(height[left], height[right])
//         let length = right - left
//         let currentArea = length * minheight
//         if (currentArea > area) {
//             area = currentArea
//         }

//         if (minheight === height[left]) {
//             left++
//         }

//         if (minheight === height[right]) {
//             right--
//         }

//     }
//     return area

// };

// console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))



// var trap = function (height) {


//     let left = 0
//     let right = height.length - 1

//     let maxLeft = height[0]
//     let maxRight = height[height.length - 1]

//     let result = 0

//     while (left < right) {

//         if (maxRight > maxLeft || maxLeft == maxRight) {

//             let currentLeft = maxLeft - height[left]
//             if (currentLeft > 0) {
//                 result = currentLeft + result
//             }
//             left++
//         } else if (maxRight < maxLeft) {

//             let currentRight = maxRight - height[right]
//             if (currentRight > 0) {
//                 result = currentRight + result
//             }
//             right--

//         }

//         if (maxLeft < height[left]) {
//             maxLeft = height[left]
//         }

//         if (maxRight < height[right]) {
//             maxRight = height[right]
//         }

//     }
//     return result

// };

// console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))

//worst solution: 0(n2), compare each of it by the one in front of it return the biggest
//better solution: 



// var maxProfit = function (prices) {
//     // let left = 0
//     // let right = prices.length - 1
//     // let result = 0

//     // for (let i = 0; i < prices.length; i++) {
//     //     let ifValid = prices[right]
//     //     let iffe = prices[left]

//     //     if (iffe < ifValid) {
//     //         let checkProfit = prices[right] - prices[left]
//     //         if (checkProfit > result) {
//     //             result = checkProfit
//     //         }

//     //         let checkNext = prices[left + 1]
//     //         if (checkNext < iffe) {
//     //             left++
//     //         } else {

//     //             right--
//     //         }

//     //     } else {
//     //         left++
//     //     }


//     // }
//     // return result


//     // let result = 0

//     // while (prices.length) {
//     //     let currentVal = prices.splice(0, 1)

//     //     for (let i = 0; i < prices.length; i++) {
//     //         let checkProfit = prices[i] - currentVal
//     //         if (checkProfit > result) {
//     //             result = checkProfit
//     //         }
//     //     }
//     // }
//     // return result

//     let [left, right, max] = [0, 1, 0];

//     while (right < prices.length) {
//         if (prices[right] <= prices[left]) left = right;

//         const window = prices[right] - prices[left];

//         max = Math.max(max, window);
//         right++;
//     }

//     return max;

// };

// console.log(maxProfit([7, 1, 5, 3, 6, 4]))


// var lengthOfLongestSubstring = function (s) {
//     let arr = s.split("")
//     let compareArr = []
//     let count = 0
//     let max = 0


//     for (let i = 0; i < arr.length; i++) {

//         while (compareArr.includes(arr[i])) {
//             compareArr.shift()
//             count--
//         }
//         compareArr.push(arr[i])
//         count++

//         if (count > max) {
//             max = count
//         }

//     }
//     return max

// };

// console.log(lengthOfLongestSubstring("pwwkew"))

// var characterReplacement = function (s, k) {
//     let arr = s.split("")
//     let map = new Map()
//     let windowArr = []
//     let max = 0
//     let count = 0

//     for (let i = 0; i < arr.length; i++) {
//         if (!map.has(arr[i])) {
//             map.set(arr[i], 1)
//         } else {
//             let incrementValue = map.get(arr[i])
//             incrementValue += 1
//             map.set(arr[i], incrementValue)
//         }

//         windowArr.push(arr[i])
//         let maxChar = Math.max(...map.values())

//         if (windowArr.length - maxChar <= k) {
//             count++



//         } else {
//             let removed = windowArr.shift()
//             let decrementValue = map.get(removed)
//             decrementValue--
//             map.set(removed, decrementValue)

//         }

//         if (count > max) {
//             max = count
//         }

//     }

//     return count

// };

// console.log(characterReplacement("ABAB", 2))



// var minWindow = function (s, t) {
//     if (t === "") {
//         return ""
//     }

//     let sArr = s.split("")
//     let tArr = t.split("")
//     let tValid = [...tArr]
//     let window = []
//     let l = 0

//     let result = ""
//     let count = sArr.length
//     let max = sArr.length




//     for (let i = 0; i < sArr.length; i++) {
//         let ifValidChar = tArr.includes(sArr[i])
//         window.push(sArr[i])
//         if (!ifValidChar) {
//             continue
//         } else {
//             let index = tValid.indexOf(sArr[i])
//             tValid.splice(index, 1)


//             if (!tValid[0]) {
//                 count = window.length

//                 if (count < max) {
//                     count = window.length
//                     result = s.slice(l, i)
//                 }

//                 while (!tValid[0]) {
//                     let curVal = window.shift()
//                     l++


//                     let ifValidChar = tArr.includes(curVal)
//                     if (ifValidChar) {
//                         if (count < max) {
//                             result = s.slice(l - 1, i + 1)
//                             tValid.push(curVal)
//                             count = window.length
//                             if (count < max) {
//                                 max = count
//                             }


//                         }

//                     }
//                 }

//             }


//         }


//     }
//     return result
// };

// console.log(minWindow("cabwefgewcwaefgcf", "cae"))


// var isValid = function (s) {
//     let stack = []
//     let arr = s.split("")
//     for (let i = 0; i < arr.length; i++) {
//         let parenthesis = arr[i] === "("
//         if (parenthesis) {
//             stack.push(")")
//         }
//         let ifCurly = arr[i] === "{"
//         if (ifCurly) {
//             stack.push("}")
//         }

//         let ifsquare = arr[i] === "["
//         if (ifsquare) {
//             stack.push("]")
//         }
//         if (parenthesis || ifCurly || ifsquare) continue

//         let ifEmpty = !stack.length
//         let ifEnd = stack.pop() !== arr[i]


//         if (ifEmpty || ifEnd) return false


//     }



//     return true


// };

// console.log(isValid("{[]}"))



// var MinStack = function (str) {
//     this.stack = []

// };

// /** 
//  * @param {number} val
//  * @return {void}
//  */
// MinStack.prototype.push = function (val) {
//     this.stack.push(val)

// };

// /**
//  * @return {void}
//  */
// MinStack.prototype.pop = function () {
//     return this.stack.pop()

// };

// /**
//  * @return {number}
//  */
// MinStack.prototype.top = function () {
//     return this.stack[this.stack.length - 1]
// };

// /**
//  * @return {number}
//  */
// MinStack.prototype.getMin = function () {
//     this.stack.sort((a, b) => a - b)


//     return this.stack[0]

// };
// let arr = new MinStack()
// arr.push("lol")
// console.log(arr)


// let agg = [[], [-2], [0], [-3], [], [], [], []]

// agg.sort((a, b) => a - b)
// console.log(agg)


// var evalRPN = function (tokens) {
//     const stack = []
//     for (let i = 0; i < tokens.length; i++) {
//         if (tokens[i] === "+") {
//             const a = stack.pop(), b = stack.pop()
//             stack.push(a + b)

//         } else if (tokens[i] === "-") {
//             const a = stack.pop(), b = stack.pop()
//             stack.push(b - a)
//         } else if (tokens[i] === "*") {
//             const a = stack.pop(), b = stack.pop()
//             stack.push(a * b)
//         } else if (tokens[i] === "/") {
//             const a = stack.pop(), b = stack.pop()
//             stack.push(Math.trunc(b / a))
//         } else {
//             stack.push(parseInt(tokens[i]))
//         }
//         console.log(stack)
//     }
//     return stack[0]

// };


// console.log(evalRPN(["4", "13", "5", "/", "+"]))


// var findMin = function (nums) {
//     // nums.sort((a,b)=>a-b)
//     // return nums[0]
//     let min = nums[nums.length - 1]

//     let right = nums.length - 1

//     while (nums[right] > nums[right - 1]) {
//         min = nums[right - 1]
//         right--
//     }
//     return min
// };

// console.log(findMin([4, 5, 6, 7, 0, 1, 2]))


// implement a binary search tree 

// class Node {
//     constructor(data) {
//         this.data = data
//         this.left = null
//         this.right = null

//     }
// }

// class BinarySearchTree {
//     Constructor() {
//         this.root = null
//     }

//     insert(data) {
//         const newNode = new Node(data)
//         if (!this.root) {
//             this.root = newNode
//         } else {
//             this.insertNode(this.root, newNode)
//         }
//     }

//     insertNode(node, newNode) {
//         if (newNode.data < node.data) {
//             if (node.left === null) {
//                 node.left = newNode
//             } else {
//                 this.insertNode(node.left, newNode);
//             }
//         } else {
//             if (node.right === null) {
//                 node.right = newNode
//             } else {
//                 this.insertNode(node.right, newNode);
//             }
//         }
//     }

// }








class Node {
    constructor(data) {
        this.data = data
        this.next = null

    }
}

class LinkedList {
    constructor() {
        this.head = null
    }

    insert(data) {
        const newNode = new Node(data)
        if (this.head === null) {
            this.head = newNode
        } else {
            this.insertNode(this.head, newNode)
        }

    }

    insertNode(node, newNode) {

        if (node.next === null) {
            node.next = newNode
        } else {
            this.insertNode(node.next, newNode)
        }

    }

}

// var mergeTwoLists = function (list1, list2) {
//     const l1 = new LinkedList()
//     const l2 = new LinkedList()
//     for (let i = 0; i < list1.length; i++) {
//         l1.insert(list1[i])
//         l2.insert(list2[i])

//     }

//     let resultNode = new LinkedList()
//     let checkfirst = l1.head.next
//     let checksecond = l2.head.next

//     if (l1 >= l2) {
//         resultNode.insert(l2.head.data)
//         resultNode.insert(l1.head.data)
//     } else {
//         resultNode.insert(l1.head.data)
//         resultNode.insert(l2.head.data)
//     }


//     while (checkfirst !== null || checksecond !== null) {
//         if (l1 >= l2) {
//             resultNode.insert(checkfirst.data)
//             resultNode.insert(checksecond.data)
//         } else {
//             resultNode.insert(checkfirst.data)
//             resultNode.insert(checksecond.data)
//         }
//         checkfirst = checkfirst.next
//         checksecond = checksecond.next



//     }



//     return resultNode.head.next.next.next

// };

// console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]))




// var twoSum = function (nums, target) {
//     let i = 0
//     let j = 0
//     let targetFound = nums[i] + nums[j]
//     console.log(j)
//     if (j === nums.length - 1) {
//         j = 0
//         i += 1
//     }
//     if (i === nums.length - 1) {
//         return
//     }

//     if (targetFound === target) {
//         return [nums[i], nums[j]]
//     } else {
//         j = j + 1
//         twoSum(nums, target)
//         return j
//     }


// };

// console.log(twoSum([2, 7, 11, 15], 9))



// const recursive = function (num) {
//     console.log(num)
//     let countdown = num -= 1
//     if (num === 0) {
//         return "done"
//     } else {
//         return recursive(countdown)
//     }

// }

// console.log(recursive(3))


// var reorderList = function (head) {
//     let li = new LinkedList()
//     for (let i = 0; i < head.length; i++) {
//         li.insert(head[i])
//     }




//     if (li.next === null) {
//         let heads = li.head
//         let next = heads.next
//         li.head = next
//         li.head.next = heads
//     }
//     let l = li.head
//     let r = li.head

//     while (l.next.next != null) {
//         if (r.next != null) {
//             if (r.next.next === null) {
//                 let next = l.next
//                 l.next = r.next
//                 l.next.next = next
//                 r.next = null
//                 l = l.next.next
//                 r = l.next
//             } else {
//                 r = r.next
//             }
//         } else {
//         }
//         if (l.next === null) {
//             break
//         }
//     }
//     return li.head.next.next.next





// };

// console.log(reorderList([1, 2, 3, 4, 5, 6]))

// var removeNthFromEnd = function (head, n) {
//     let li = new LinkedList()
//     for (let i = 0; i < head.length; i++) {
//         li.insert(head[i])
//     }

//     // if (head.next == null) {
//     //     head = null
//     // }

//     // let remove = li.head
//     // let count = 0
//     // while (count !== n) {
//     //     count++
//     //     remove = remove.next

//     //     if (count == n) {
//     //         if (remove.next) {
//     //             if (remove.next.next) {
//     //                 const next = remove.next.next
//     //                 remove.next = next
//     //             } else {
//     //                 remove.next = null
//     //             }
//     //         } else {
//     //         }
//     //     }
//     // }
//     // return li

//     let remove = li.head
//     let end = li.head
//     if (remove.next == null & n == 1) {
//         li = null
//         return li
//     }
//     if (remove.next.next == null && n == 2) {
//         li.head = li.head.next
//         return li
//     }

//     if (remove.next.next == null) {
//         remove.next = null
//         return li
//     }

//     let removeNode = n
//     for (let i = 0; i < removeNode; i++) {
//         end = end.next
//     }

//     if (end == null) {
//         li.head = li.head.next
//         return li
//     }
//     while (end !== null) {
//         end = end.next
//         if (end === null) {
//             console.log(remove);
//             remove.next = remove.next.next
//         }
//         remove = remove.next
//     }
//     return li.head



// };
// console.log(removeNthFromEnd([1, 2, 3], 3))





// var hasCycle = function (head) {
//         let li = new LinkedList()
//         for (let i = 0; i < head.length; i++) {
//             li.insert(head[i])
//         }

//         let set = new Set()
//         set.

// };


// var mergeKLists = function (lists) {
//     let arr = []

//     for (let i = 0; i < lists.length; i++) {
//         let li = new LinkedList()
//         for (let j = 0; j < lists[i].length; j++) {
//             li.insert(lists[i][j])
//         }
//         arr.push(li)

//     }


//     for (let i = 1; i < lists.length; i++) {
//         let root = arr[0].head
//         let current = arr[i].head

//         while (current !== null) {
//             if (root.data < current.data) {
//                 let nextcurrent = current.next
//                 let thisRoot = root
//                 root = current
//                 root.next = thisRoot
//                 root = root.next.next
//                 current = nextcurrent

//             } else {
//                 let nextcurr = current.next
//                 let nextroot = root.next
//                 root.next = current
//                 root.next.next = nextroot

//                 current = nextcurr
//                 root = root.next.next
//             }
//         }



//     }
//     return arr[0].head.next

// };

// console.log(mergeKLists([[1, 4, 5], [1, 3, 4], [2, 6]]));


class BinaryTree {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    insert(val) {
        let newNode = new BinaryTree(val)

        if (this.root === null) {
            this.root = newNode
        } else {
            this.insertNode(this.root, newNode)
        }
    }

    insertNode(node, newNode) {

        if (newNode.val < node.val) {
            if (node.left === null) {
                node.left = newNode

            } else {
                this.insertNode(node.left, newNode)
            }

        } else {

            if (node.right === null) {
                node.right = newNode

            } else {
                this.insertNode(node.right, newNode)
            }

        }
    }



}

var invertTree = function (root) {
    let bt = new BinarySearchTree()
    for (let i = 0; i < root.length; i++) {
        bt.insert(root[i])
    }
    return bt.root

};

let data = invertTree([3, 9, 20, null, null, 15, 7]);

// const searchAlog = (root) => {
//     if (root == null) {
//         return root
//     }
//     return bst(root)



// }


// const bst = (root) => {
//     const left = searchAlog(root.left)
//     const right = searchAlog(root.right)

//     root.left = right
//     root.right = left

//     return root

// }


// console.log(searchAlog(data));

// var maxDepth = function (root) {

//     if (root === null) {
//         return 0
//     }
//     return mbts(root)


// };

// var mbts = function (root) {

//     const right = maxDepth(root.right)


//     const left = maxDepth(root.left)
//     const height = Math.max(left, right);

//     return height + 1
// };

// console.log(maxDepth(data));



// let a = new BinaryTree("a")
// let b = new BinaryTree("b")
// let c = new BinaryTree("c")
// let d = new BinaryTree("d")
// let e = new BinaryTree("e")
// let f = new BinaryTree("f")


// a.left = b
// a.right = c
// b.left = d
// b.right = e
// c.right = f
// console.log(a)
// //iterative

// const deptFirstSearch = (root) => {
//     let result = []
//     let stack = [root]
//     while (stack.length > 0) {
//         let curr = stack.pop()
//         result.push(curr.val)
//         if (curr.right !== null) stack.push(curr.right)
//         if (curr.left !== null) stack.push(curr.left)

//     }
//     return result


// }

// console.log(deptFirstSearch(a))




// let aa = new BinaryTree(3)
// let bb = new BinaryTree(4)
// let cc = new BinaryTree(5)
// let dd = new BinaryTree(1)
// let ee = new BinaryTree(2)
// let ff = new BinaryTree(4)
// let gg = new BinaryTree(1)
// let hh = new BinaryTree(2)

// aa.left = bb
// aa.right = cc
// bb.left = dd
// bb.right = ee

// ff.left = gg
// ff.right = hh




// var isSubtree = function (root, subRoot) {


// };

// console.log(isSubtree(aa, ff))


class TriNode {
    constructor(val) {
        this.children = {}
        this.isWord = false
    }
}

class Trie {
    constructor() {
        this.root = new TriNode();
    }


    insert(word, node = this.root) {
        for (const char of word) {

            const child = node.children[char] || new TriNode();

            node.children[char] = child;

            node = child;
        }

        node.isWord = true;
    }

    search(word, node = this.root) {

        for (const char of word) {
            const child = node.children[char] || null

            if (!child) return false

            node = child

        }
        return node.isWord

    }

    startsWith(prefix, node = this.root) {
        for (const char of prefix) {
            const child = node.children[char] || null

            if (!child) return false
            node = child
        }
        return true

    }


    searchWord(word, node = this.root) {
        let arr = []
        for (let i = 0; i < word.length; i++) {
            for (const char of word[i]) {
                const child = node.children[char] || null
                console.log(child)
                if (!child) {
                    break
                }
                node = child

            }
            if (node.isWord) {
                arr.push(word[i])
            }
        }

        return arr
    }


}




// class WordDictionary {
//     constructor() {
//         this.root = new TriNode()
//     }

//     addWord(word, node = this.root) {



//         for (const char of word) {
//             const child = node.children[char] || new TriNode()

//             node.children[char] = child

//             node = child
//         }
//         return node.isWord = true
//     }
// }


// let test = new Trie()
// console.log(test.insert("pea"))
// console.log(test.searchWord(["pea", "word"]))


// var MedianFinder = function () {

//     this.array = []


// };

// /** 
//  * @param {number} num
//  * @return {void}
//  */
// MedianFinder.prototype.addNum = function (num) {
//     if (this.array[0] == undefined) {
//         this.array.push(num)
//         return
//     }


//     if (num < this.array[0]) {

//         this.array.unshift(num)
//         return
//     }
//     if (num > this.array[this.array.length - 1]) {

//         this.array.push(num)
//         return
//     }
//     let count = 0
//     let insert = false
//     while (insert !== true) {
//         // console.log(this.array[count])
//         if (num < this.array[count]) {
//             this.array.splice(count, 0, num)
//             insert = true
//         }
//         count++
//     }

// };

// /**
//  * @return {number}
//  */
// MedianFinder.prototype.findMedian = function () {
//     // let median = (this.array.length) / 2
//     // if (this.array.length % 3 == 0) {

//     //     median = median - 0.5
//     // } else {
//     //     median = median + 0.5
//     // }
//     // let result = this.array[median]
//     // if (!result) {
//     //     return median
//     // }
//     // return result





// };

// let me = new MedianFinder()

// me.addNum(1)
// me.addNum(2)
// me.addNum(3)

// console.log(me.findMedian()
// )








// console.log(me)






// var combinationSum = function (candidates, target) {
//     let result = []

//     function dfs(index, current, arr) {

//         if (current < 0) return
//         if (current === 0) {
//             result.push([...arr])
//         }

//         for (let i = index; i < candidates.length; i++) {
//             arr.push(candidates[i])
//             dfs(i, current - candidates[i], arr)
//             arr.pop()
//         }
//     }

//     dfs(0, target, [])

//     return result
// };

// console.log(combinationSum([2, 3, 6, 7], 7))


// class Graph {
//     constructor(char, left, right) {
//         this.char = char
//         this.left = left
//         this.right = right
//     }
// }

// class Container {
//     constructor() {
//         this.arr = []
//     }
//     insert(char, left, right) {
//         this.arr.push(new Graph(char, left, right))
//     }

//     remove(char) {
//         this.arr.shift()
//     }
// }

// let c1 = new Container()
// c1.insert("A", 0, 0)
// c1.insert("B", 1, 0)




// var exist = function (board, word) {
//     let words = word.split("")
//     let startLetter = words[0]
//     let startP = new Container()

//     let position = board[0][0]
//     for (let i = 0; i < board.length; i++) {
//         let curr = board[i].indexOf(startLetter)
//         if (curr !== -1) {
//             startP.insert(startLetter, i, curr)
//         }
//     }

//     if (!startP.arr[0]) {
//         return false
//     }

//     let checked = []
//     let trail = []
//     let path = new Graph(startP.arr[0].char, startP.arr[0].left, startP.arr[0].right)
//     trail.push(path)

//     // while (startP.arr[0]) {
//     let left = startP.arr[0].left
//     let right = startP.arr[0].right
//     let curr = board[left][right]
//     console.log(trail)
//     let LeftpathCheck = board[left][right - 1]
//     let RightPathCheck = board[left][right + 1]

//     let TopPathCheck = board[left - 1][right]
//     if (board[left - 1]) {

//     }


//     let BottomPathCheck = board[left + 1][right]





//     // }



// };

// console.log(exist([["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], "ABCCED"))

const airpot = 'phx atx dtx lax den aug sjc sfo'.split(" ")
const routes = [['phx', 'atx'], ['dtx', 'sfo'], ['lax', 'sfo'], ['den', 'sjc'], ['sfo', 'aug'], ['sjc', 'aug']]

const adjacncylist = new Map()


const addNode = (airpot) => {

    adjacncylist.set(airpot, [])

}

const addEdge = (origin, destination) => {
    adjacncylist.get(origin).push(destination)
    adjacncylist.get(destination).push(origin)
}

airpot.forEach(addNode)
routes.forEach(routes => addEdge(...routes))

console.log(adjacncylist)



const bsf = (data){

    const queue = [data]

}


console.log(bsf(adjacncylist))
