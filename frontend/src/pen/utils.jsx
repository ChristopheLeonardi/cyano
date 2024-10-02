const baseFrontUrl = 'https://planetearthnow.org'
const baseBackUrl = 'https://admin.planetearthnow.org'

const setUrl = (path) => { return baseBackUrl + path }

const seFrontUrl = (path) => { return baseFrontUrl + path }

const getUrlParams = (params) => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    var paramsValues = {}
    params.map(param => {
        paramsValues[param] = urlParams.get(param)
    })
    return paramsValues
}

const searchIdLang = (data, lang) => {
    if (data.locale === lang) { return data }

    data.localizations.data.filter((data) => {
        return data.attributes.locale === lang
    })[0].id

}

export default {
    setUrl,
    seFrontUrl,
    getUrlParams,
    searchIdLang
}