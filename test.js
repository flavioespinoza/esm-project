let err_obj = {
    message: `
            AssertionError [ERR_ASSERTION]: Input A expected to strictly deep-equal input B:
            + expected - actual
            - 'Hello'
            + 'Milton'
        `,
    generatedMessage: true,
    name: 'AssertionError [ERR_ASSERTION]',
    code: 'ERR_ASSERTION',
    actual: 'Hello',
    expected: 'Milton',
    operator: 'deepStrictEqual'
}

const deepStrictEqualError = err => {
    return {
        generatedMessage: err.generatedMessage,
        name: err.name,
        code: err.code,
        actual: err.actual,
        expected: err.expected,
        operator: err.operator
    }
}

const err_obj = {
    success: false,

    info: {
        generatedMessage: true,
        name: 'AssertionError [ERR_ASSERTION]',
        code: 'ERR_ASSERTION',
        actual: 'Hello',
        expected: 'Vincent',
        operator: 'deepStrictEqual'
    }
}
