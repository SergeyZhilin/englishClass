export const checkAnswerStatus = (answer, rightAnswer, userAnswer) => {
    let status;

    if ((Object.keys(answer).join('') === rightAnswer && userAnswer === rightAnswer)
        || (Object.keys(answer).join('') === rightAnswer)) {
        status = 'success'
    } else if (Object.keys(answer).join('') !== rightAnswer && userAnswer === Object.keys(answer).join('')) {
        status = 'danger'
    } else {
        status = ''
    }

    return status
}

export const personResult = (person) => {
    const answers = person && JSON.parse(person.answers)
    return `${(person && person.rightAnswerCount)
        ? person.rightAnswerCount
        : 0}/${answers && Object.keys(answers).length || 20}`
}

export const disabled = (a, b) => {
    return Object.keys(a).length !== b.length
}

export const isAdmin = (user) => {
    return (user?.role === 'admin') || (localStorage.getItem('role') === 'admin')
}

export const levelName = (lvl) => {
    return lvl[0].toUpperCase() + lvl.slice(1)
}