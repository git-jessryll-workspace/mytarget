

const dateFormat = (date) => {
    return new Date(date).toLocaleString('en-US', {
        'day': '2-digit',
        'month': 'short',
        'year': 'numeric'
    })
}

export {
    dateFormat
}