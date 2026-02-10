function capitalizeWords(sentence: string) {
    // Your implementation
    // let arr = sentence.trim().split(" ")//trim trailing spaces then split on spaces
    // arr = arr.filter(word => {//removing empty strings caused from extra spaces inbetween
    //     if (word.length !== 0) { return word }
    // })

    // const newStr = arr
    //     .map(
    //         word => word
    //             .charAt(0) //Capitalize first character of each word 
    //             .toLocaleUpperCase() +
    //             word //Lowercase all characters following first char
    //                 .substring(1)
    //                 .toLowerCase()
    //     )
    //     .join(" ")

    return sentence.trim().split(" ").filter(word => word.length > 0).map(word => word.charAt(0).toLocaleUpperCase() + word.substring(1).toLocaleLowerCase()).join(" ")
}

//For the purpose of user debugging.
// console.log(capitalizeWords("hello    worEDd"));


