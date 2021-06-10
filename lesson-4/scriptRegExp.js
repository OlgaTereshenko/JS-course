const init = () => {
    //1. Дан большой текст, в котором для оформления прямой речи используются одинарные кавычки. Придумать шаблон, который заменяет одинарные кавычки на двойные.
    
    const str = "'D'artagnan and the 'Three' Musketeers'";
    const regexp = /'/g;
    const newStr = str.replace(regexp, '"');
    console.log(newStr);

    //2. Улучшить шаблон так, чтобы в конструкциях типа aren't одинарная кавычка не заменялась на двойную.

    const str = "'D'artagnan and the 'Three' Musketeers'";
    const regexp = /\B'|'\B/g;
    const newStr = str.replace(regexp, '"');
    console.log(newStr);



    // const option1 = new RegExp('pattern')
    // const option2 = /pattern/

    // const firstRegExp = /Geek/
    // const str = 'brains is the best Geek place'

    // const newstr = str.replace(firstRegExp, '+')

    // console.log(newstr)


    // const ourRegExp = /(g(e?|o?))/gi
    // const str = 'Geeee Go oG Geo'

    // console.log(str.match(ourRegExp))
    

    // const numberRegExp = /^[a-zA-Z]+$/
    // const str = 'ASDasdf'

    // console.log(numberRegExp.test(str))

    // const urlRegExp = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/
    // const emailRegExp = /^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/

    // const testStr = 'ovik.khachikyan@gmail.com'
    

    // console.log(emailRegExp.test(testStr))

}

window.onload = init;