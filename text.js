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


function sumOverAmount(arr, n) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]

    }

    console.log(sum)
    if (n > sum) {
        return true
    }
    return false

}

console.log(sumOverAmount([3, 4], 6))

